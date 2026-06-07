# LEGACY Coaches Schedule App — Backup & Restore Guide
_Last updated: June 6, 2026_

This is your safety-net document. If anything ever goes wrong, or you want to switch
the app between **School Year** and **Summer Camp**, everything you need is here.

---

## 1. The app at a glance

- **Live link:** https://skunovac10is-star.github.io/Coaches-Schedule-/
- **Password:** `Legacy2006`
- **Install guide for coaches:** https://skunovac10is-star.github.io/Coaches-Schedule-/install.html
- **Hosting:** GitHub Pages (free). Auto-updates ~1 minute after any change.
- **GitHub repo:** `skunovac10is-star/Coaches-Schedule-`
- ⚠️ **Never change the web link or rename the repo** — it would break every coach's saved icon.

---

## 2. Two schedules in one app (School Year + Summer Camp)

The app holds BOTH schedules at once and shows the right one based on the date:

| When | What shows |
|------|------------|
| Weeks **before Mon June 8, 2026** | **School Year** (TT Comp, TT1, Comp Clinic, Munchkins, Adult clinics) |
| Weeks **on/after Mon June 8, 2026** | **Summer Camp** (Munchkins all-day, LTC Indoor, LTC Elite Groups 1 & 2, Adult clinics, camper counts) |

- The **›** arrow (top of the schedule) previews next week.
- On **Monday June 8** the app automatically flips "this week" to Summer Camp. No action needed.
- Summer clinics are color-coded tennis balls: 🔴 Munchkins · 🟠 LTC Indoor · 🔵 Elite Group 1 · 🟢 Elite Group 2 · 🟣 Adult clinics.

---

## 3. Where the backups live

**On this computer:**
`LEGACY AI / 05_Programs-Operations / schedule-archive/`
- `school-year-app-FULL-2026.html` — complete working copy of the school-year app
- `school-year-schedule-DATA.js` — just the school-year schedule data
- `COACHES-APP-BACKUP-GUIDE.md` — this document
- `README.md` — short technical restore notes

**In the GitHub repo:**
- `archive/` folder — same files as above
- `index.BACKUP-school-year-20260606.html` — dated full backup taken before the summer switch
- Every change ever made is in the repo's history (can roll back to any point).

---

## 4. How to switch the app (just tell Claude)

You don't need to touch any code. Open a session with Claude and say one of these:

**To bring the school year back in the fall:**
- "Switch the app back to the school-year schedule"
- "Make the school year the default again"
- "Restore the school-year format from the archive"

**To switch to summer again next year:**
- "Switch the app to the summer camp schedule"

**For everyday changes (either season):**
- "Take [coach] off [day]'s [clinic]"
- "Add [coach] to [day] [clinic]"
- "Give me the schedule for [coach] to text them"

Claude will make the change, publish it, and confirm.

---

## 5. If you ever need to refresh your phone

After a change, on your iPhone:
1. Tap the **↻** button at the top of the app, OR
2. Force-quit the app (swipe up, swipe it away) and reopen, OR
3. Remove the icon and re-add from Safari (last resort).

---

## 6. Push notifications

- Sent through OneSignal (Claude can send them for you, or you can use the OneSignal dashboard).
- Coaches must: open the app from their Home Screen icon → News → 🔔 Push notifications → pick their name → Save & enable → Allow.
- Make sure Do Not Disturb / Focus is OFF or they won't see alerts.

---

## 7. Other services (good to know)

- **Time-off form:** Formspree (free tier = 50 submissions/month). If a coach says "I submitted but no one got it," check the Formspree dashboard first — may have hit the monthly cap.
- **Push:** OneSignal free tier, plenty of headroom for ~30 coaches.
- **Hosting:** GitHub Pages, free and unlimited for this size.

---

_Keep this file. Everything above can be rebuilt from it + the archive folder._
