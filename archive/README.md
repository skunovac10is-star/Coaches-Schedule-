# Schedule Archive — how to switch the app between School Year and Summer

The app holds **two full schedules** and picks one by the week's date:
- **School Year** (`SCHOOL_SCHEDULE`) — Session 3 format: TT Comp, TT1, Comp Clinic, Munchkins, Adult clinics
- **Summer Camp** (`SUMMER_SCHEDULE`) — camp format: Munchkins all-day, LTC Indoor, LTC Elite Groups, Adult clinics, camper counts

Switch logic lives in `weekMeta()` in `index.html`:
- Weeks starting **on/after Mon June 8, 2026** → Summer Camp
- Weeks **before June 8** → School Year
- The `›` arrow previews next week; the app auto-rolls to summer on June 8.

## Files in this folder
- **`school-year-app-FULL-2026.html`** — a complete, working copy of the app as it was during the school year (Spring 2026, Session 3). Drop-in restorable.
- **`school-year-schedule-DATA.js`** — just the school-year SCHEDULE data block, for reference/editing.

## How to bring the school year back in the fall
Tell Claude any of these:
- **"Switch the app back to the school-year schedule"**
- **"Make the school year the default again"**
- **"Restore the school-year format from the archive"**

Claude will: set the school-year schedule as the active one (and set a fall start date so it auto-takes-over), using `school-year-schedule-DATA.js` as the starting point. You'll then update coaches/times for the new fall term.

## How to bring summer back next year
Same idea: "switch to the summer camp schedule" — the `SUMMER_SCHEDULE` block is preserved in `index.html`.
