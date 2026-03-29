import { createClientFromRequest } from 'npm:@base44/sdk@0.8.23';

Deno.serve(async (req) => {
  const base44 = createClientFromRequest(req);

  // This is a scheduled function — use service role
  const nowUTC = new Date();
  const currentHourUTC = nowUTC.getUTCHours();
  const currentMinUTC = nowUTC.getUTCMinutes();
  const today = nowUTC.toISOString().split('T')[0];

  // Fetch all progress records with reminders enabled
  const allProgress = await base44.asServiceRole.entities.UserProgress.filter({
    reminder_enabled: true,
    mode: 'adult',
  });

  let sent = 0;
  let skipped = 0;

  for (const p of allProgress) {
    // Skip users who already practiced today
    if (p.last_activity_date === today) {
      skipped++;
      continue;
    }

    const reminderEmail = p.reminder_email || p.created_by;
    if (!reminderEmail) { skipped++; continue; }

    // Parse the user's desired reminder time (HH:MM)
    const [rHour, rMin] = (p.reminder_time || '09:00').split(':').map(Number);

    // Convert user's local reminder time to UTC using their stored timezone offset
    // We approximate by checking if current UTC hour/min matches their reminder time
    // adjusted for their timezone. For simplicity we store UTC-equivalent in reminder_time.
    // The UI saves the time already converted to UTC.
    const withinWindow = currentHourUTC === rHour && Math.abs(currentMinUTC - rMin) <= 30;

    if (!withinWindow) { skipped++; continue; }

    const langEmoji = {
      spanish: '🇪🇸', french: '🇫🇷', german: '🇩🇪', japanese: '🇯🇵',
      korean: '🇰🇷', italian: '🇮🇹', portuguese: '🇵🇹', mandarin: '🇨🇳',
    }[p.language] || '🌍';

    const streak = p.streak_days || 0;
    const streakMsg = streak > 0
      ? `You're on a 🔥 <strong>${streak}-day streak</strong> — don't break it now!`
      : `Start your streak today and build a daily learning habit!`;

    const subject = streak > 0
      ? `🔥 Don't break your ${streak}-day streak! Practice ${p.language} today`
      : `📚 Your daily ${p.language} lesson is waiting for you`;

    const body = `
<!DOCTYPE html>
<html>
<body style="font-family: Inter, sans-serif; background: #f5f5f5; margin:0; padding:20px;">
  <div style="max-width:520px;margin:0 auto;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
    <div style="background:linear-gradient(135deg,#7c3aed,#06b6d4);padding:32px 28px;text-align:center;">
      <div style="font-size:48px;margin-bottom:8px;">${langEmoji}</div>
      <h1 style="color:#fff;margin:0;font-size:22px;font-weight:800;">Time to Practice!</h1>
      <p style="color:rgba(255,255,255,0.85);margin:8px 0 0;font-size:14px;">KindLearn Daily Reminder</p>
    </div>
    <div style="padding:28px;">
      <p style="font-size:15px;color:#374151;line-height:1.6;">${streakMsg}</p>
      <p style="font-size:14px;color:#6b7280;line-height:1.6;">
        You're on Day <strong>${p.current_day || 1}</strong> of your 30-day 
        <strong>${p.language.charAt(0).toUpperCase() + p.language.slice(1)}</strong> challenge.
        Just 10–15 minutes today keeps you on track!
      </p>
      <div style="text-align:center;margin:24px 0;">
        <a href="https://kindlearn.base44.app/dashboard?lang=${p.language}" 
           style="background:linear-gradient(135deg,#7c3aed,#06b6d4);color:#fff;text-decoration:none;padding:14px 32px;border-radius:12px;font-weight:700;font-size:15px;display:inline-block;">
          Start Today's Lesson →
        </a>
      </div>
      <p style="font-size:12px;color:#9ca3af;text-align:center;margin-top:20px;">
        You're receiving this because you enabled daily reminders on KindLearn.<br/>
        You can turn them off anytime from your Dashboard settings.
      </p>
    </div>
  </div>
</body>
</html>`;

    await base44.asServiceRole.integrations.Core.SendEmail({
      to: reminderEmail,
      subject,
      body,
    });

    sent++;
  }

  return Response.json({ sent, skipped, total: allProgress.length });
});