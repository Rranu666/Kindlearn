# KindLearn — Setup Guide

## Architecture

- **Frontend**: React + Vite (this repo)
- **Backend**: Node.js + Express (`/server`)
- **Database**: MongoDB Atlas
- **Hosting**: Railway
- **Mobile**: Capacitor (iOS + Android)

---

## Local Development

### 1. MongoDB Atlas
Create a free cluster at https://cloud.mongodb.com and get your connection string.

### 2. Backend Setup

```bash
cd server
cp .env.example .env
# Fill in MONGODB_URI, JWT_SECRET, SMTP_*, etc.
npm install
npm run dev   # starts on port 3001
```

### 3. Frontend Setup

```bash
# In project root
cp .env.example .env
# Set VITE_API_URL if not using the proxy (for prod builds)
npm install
npm run dev   # starts on port 5173, proxies /api to :3001
```

---

## Deploy to Railway

1. Push this repo to GitHub
2. Create a new Railway project → "Deploy from GitHub repo"
3. Railway auto-detects `railway.toml` — it will:
   - Build the React app (`npm run build`)
   - Install server dependencies
   - Start `server/index.js`
4. Set these **environment variables** in Railway dashboard:
   ```
   MONGODB_URI=mongodb+srv://...
   JWT_SECRET=<random 64-char string>
   NODE_ENV=production
   API_URL=https://your-app.railway.app
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your@gmail.com
   SMTP_PASS=your-app-password
   ADMIN_EMAIL=admin@kindlearn.com
   ALLOWED_ORIGINS=https://your-app.railway.app
   ANTHROPIC_API_KEY=sk-ant-...  (optional, enables AI chat)
   ```

---

## Mobile App (iOS + Android)

### Prerequisites
- **iOS**: macOS + Xcode 15+
- **Android**: Android Studio

### Build & Deploy

```bash
# Install Capacitor CLI
npm install -g @capacitor/cli

# Build the web app
npm run build

# Add platforms (first time only)
npm run cap:add:ios      # adds /ios directory
npm run cap:add:android  # adds /android directory

# Sync web build to native projects
npm run cap:sync

# Open in Xcode (iOS)
npm run cap:open:ios

# Open in Android Studio
npm run cap:open:android
```

### Production API for Mobile

For the mobile app to talk to your backend, update `capacitor.config.ts`:
```ts
server: {
  androidScheme: 'https',
}
```

And set `VITE_API_URL=https://your-app.railway.app` before building:
```bash
VITE_API_URL=https://your-app.railway.app npm run build
npm run cap:sync
```

### iOS App Store
1. Open in Xcode → set Bundle ID to `com.kindlearn.app`
2. Configure signing with your Apple Developer account
3. Archive → distribute via App Store Connect

### Google Play Store
1. Open in Android Studio
2. Build → Generate Signed Bundle/APK
3. Upload to Google Play Console

---

## Optional: Enable AI Chat (KindBot)

Set `ANTHROPIC_API_KEY` in Railway environment variables. The chat endpoint at `/api/chat` will use Claude Haiku for responses. Without the key, it falls back to a built-in FAQ lookup.
