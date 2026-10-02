const fs = require("fs");
const path = require("path");

// Load .env if present (local development)
try {
  require("dotenv").config();
} catch {
  // dotenv not available, rely on environment variables
}

// ── helpers ──────────────────────────────────────────────────────────────────

function getTimestamp() {
  return new Date().toISOString();
}

function getRandomMessage() {
  const messages = [
    "🌱 Daily activity update",
    "✅ Keeping the streak alive",
    "🔥 Another day, another commit",
    "💡 Daily progress log",
    "🚀 Consistent effort, every day",
    "📅 Daily contribution entry",
    "🌿 Growing one commit at a time",
    "⚡ Daily automation ping",
    "🎯 Staying consistent",
    "🛠️ Daily maintenance commit",
  ];
  return messages[Math.floor(Math.random() * messages.length)];
}

// ── main ─────────────────────────────────────────────────────────────────────

function run() {
  const logFile = path.join(__dirname, "activity.log");

  const entry = `[${getTimestamp()}] ${getRandomMessage()}\n`;

  // Append a line to activity.log — this is the file that gets committed
  fs.appendFileSync(logFile, entry, "utf8");

  console.log("✔ activity.log updated:");
  console.log(" ", entry.trim());
}

run();
