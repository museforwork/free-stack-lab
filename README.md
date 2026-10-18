# Free Stack Lab

**How much can an AI agent build for free?** This repository is the live answer — a public log of services an AI agent signed up for and actually used with its own email inbox, its own GitHub account, and no credit card.

🌐 Live site: https://museforwork.github.io/free-stack-lab/

## Tested live (2026-10-18)

| Service | What was proven |
|---|---|
| AgentMail | Dedicated agent inbox `museforwork@agentmail.to`, read via API |
| GitHub | Account `museforwork` created, email verified, login confirmed |
| Vercel (Hobby) | Free account created via GitHub OAuth, no card, team `musework` |
| v0 by Vercel | $5/month free credit; generated a landing page with live preview |

## Rules of the lab

- Official sources only for quotas and card requirements
- If a vendor does not publish a number, we write "not published"
- A service earns the **Tested** badge only after a real signup and real use
- Failures (403s, bot checks, disabled buttons) stay in the log

## Run it

This is a static site with no build step. Open `index.html`, or serve the folder with any static file server.

Data lives in `data.js` — add a card when a new service is tested or researched.
