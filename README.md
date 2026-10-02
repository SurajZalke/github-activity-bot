# 🤖 GitHub Activity Bot

Keeps your GitHub contribution graph green by automatically making a small commit every day via GitHub Actions.

---

## How it works

1. A GitHub Actions workflow runs on a daily **cron schedule** (12:00 UTC by default).
2. It runs `bot.js`, which appends a timestamped entry to `activity.log`.
3. The workflow commits and pushes that change — counting as a contribution on your profile.

---

## Setup (5 minutes)

### 1. Fork or push this repo to GitHub

Make sure it's a **public** repo, or a private repo with GitHub Actions enabled.

### 2. Create a Personal Access Token (PAT)

1. Go to **GitHub → Settings → Developer settings → Personal access tokens → Fine-grained tokens** (or classic tokens).
2. Create a new token with **`repo`** scope (so it can push commits).
3. Copy the token value.

> ⚠️ Classic tokens: select the `repo` scope.  
> Fine-grained tokens: grant **Read and Write** access to **Contents**.

### 3. Add the PAT as a repository secret

1. Open your repo on GitHub.
2. Go to **Settings → Secrets and variables → Actions → New repository secret**.
3. Name: `GH_PAT`
4. Value: paste your token.
5. Click **Add secret**.

### 4. Enable GitHub Actions

Go to the **Actions** tab in your repo and click **"I understand my workflows, go ahead and enable them"** if prompted.

### 5. (Optional) Trigger a manual run to test

Go to **Actions → Daily Activity Commit → Run workflow** to verify everything works before waiting for the scheduled run.

---

## Customise the schedule

Edit `.github/workflows/daily-commit.yml` and change the cron expression:

```yaml
- cron: "0 12 * * *"   # Every day at 12:00 UTC
```

Use [crontab.guru](https://crontab.guru) to build your preferred schedule.

---

## Local usage

```bash
# Install dependencies
npm install

# Run the bot manually (appends one entry to activity.log)
npm start
```

---

## File structure

```
github-activity-bot/
├── .github/
│   └── workflows/
│       └── daily-commit.yml   # GitHub Actions workflow
├── bot.js                     # Bot script — updates activity.log
├── activity.log               # Log file committed daily
├── package.json
├── .env.example               # Template for local env vars
├── .gitignore
└── README.md
```

---

## Notes

- The commit is made under the `github-activity-bot` user name — it still counts as a contribution because it's pushed with **your PAT**.
- Only `activity.log` is committed each run; no other files are touched.
- The workflow skips the push step if there's nothing new to commit (idempotent).
