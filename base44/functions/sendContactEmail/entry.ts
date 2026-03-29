import { createClientFromRequest } from 'npm:@base44/sdk@0.8.23';

Deno.serve(async (req) => {
  const base44 = createClientFromRequest(req);

  const { name, email, phone, country, query } = await req.json();

  if (!email || !query) {
    return Response.json({ error: 'Email and query are required.' }, { status: 400 });
  }

  const body = `
New Contact Us submission from KindLearn:

Name: ${name || 'Not provided'}
Email: ${email}
Phone: ${phone || 'Not provided'}
Country: ${country || 'Not provided'}

Message / Query:
${query}
  `.trim();

  await base44.asServiceRole.integrations.Core.SendEmail({
    to: 'contact@kindnesscommunityfoundation.com',
    subject: `KindLearn Help Request from ${name || email}`,
    body,
  });

  // Also send confirmation to user
  await base44.asServiceRole.integrations.Core.SendEmail({
    to: email,
    from_name: 'KindLearn Support',
    subject: 'We received your message — KindLearn Support',
    body: `Hi ${name || 'there'},\n\nThank you for reaching out! We've received your query and will get back to you as soon as possible.\n\nYour message:\n"${query}"\n\nWarm regards,\nThe KindLearn Team 🌟`,
  });

  return Response.json({ success: true });
});