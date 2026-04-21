# Coaches Schedule — CLAUDE.md
> Project memory for Claude Code. Read this before making any changes to the schedule.

---

## Project Overview
**Repo:** `skunovac10is-star/Coaches-Schedule-`
**Live site:** https://skunovac10is-star.github.io/Coaches-Schedule-/
**File to edit:** `index.html` (single file — all schedule, roster, and UI logic lives here)
**Owner:** Sanjin Kunovac / LEGACY YTE

---

## Weekly Update Workflow
1. User sends changes in plain English (one message, batched)
2. Fetch current `index.html` SHA via `mcp__github__get_file_contents`
3. Make all changes in one edit
4. Push via `mcp__github__create_or_update_file` with the current SHA
5. GitHub Pages auto-deploys — tell user to hard refresh if needed (`Cmd+Shift+R`)

---

## Coach Roster

### Pro Coaches (Full coverage)
| ID | Name | Abbr | Phone | Email |
|----|------|------|-------|-------|
| aleix | Aleix Calvo-Alvarez | Aleix C | 305-336-1088 | acalvo@legacyyte.org |
| jeremie | Jeremie Casabon | Jeremie C | 267-606-8262 | Jcasabon123@gmail.com |
| stevie | Stevie Dandridge | Stevie D | 267-975-1954 | sdandridge@legacyyte.org |
| nick | Nick Fulcher | Nick F | 210-925-2935 | nfulcher@legacyyte.org |
| gabe | Gabe Knowles | Gabe K | 610-417-0843 | gknowles@legacyyte.org |
| laurence | Laurence Primus | Laurence P | 646-852-2283 | lprimus@legacyyte.org |
| david | David Schoshinski | David S | 703-915-0201 | dschoshinski@legacyyte.org |
| andrew | Andrew Weiss | Andrew W | 856-558-8061 | aweiss@legacyyte.org |
| kein | Kein Wilson | Kein W | 215-936-7540 | kwilson@legacyyte.org |
| kris | Kris Wilson | Kris W | 297-310-9271 | kristianw@legacyyte.org |
| shevi | Shevi A | Shevi A | — | — |
| ben | Ben Biswas | Ben B | 339-223-5795 | — |

### Part-Time Coaches (Any clinic)
| ID | Name | Abbr | Phone | Email |
|----|------|------|-------|-------|
| anna | Anna Mamalat | Anna M | 215-900-9699 | amamalat@legacyyte.org |
| ahmed | Ahmed Aboseada | Ahmed A | 610-256-2650 | ahmedaboseada561@gmail.com |

### Junior Coaches
| ID | Name | Abbr | Phone | Level |
|----|------|------|-------|-------|
| bella | Bella Nichilo | Bella N | 610-291-4359 | L3 — all but TT1 |
| max | Max Olsen | Max O | 610-420-7972 | L3 — all but TT1 |
| jinay | Jinay Sheth | Jinay S | 215-410-4473 | L3 — all but TT1 |
| levi | Levi Santos | Levi S | 267-410-0665 | L3 — all but TT1 |
| nathan | Nathan Dolgushev | Nathan D | 267-300-5739 | L3 — all but TT1 |
| dean | Dean Smith | Dean S | 215-688-8141 | L2 — Munchkins, CC, Adults |
| amy | Amy Georgescu | Amy G | 484-999-1779 | L2 — Munchkins, CC, Adults |

---

## Session Types & Color Codes
| Type key | Label | Color |
|----------|-------|-------|
| `comp` | Competitive | Red `#cc2200` |
| `tt` | TT Programs | Blue `#378ADD` |
| `adult` | Adult Clinics | Green `#1D9E75` |
| `munch` | Munchkins | Gold `#BA7517` |
| `other` | Other | Gray `#888` |

---

## Current Weekly Schedule (Session 3 — update week number in header each week)

### Monday
- 9:30–11am · Adult 2.5-3.0 · adult · Laurence P, David S
- 12–1pm · Adult Beginner · adult · David S
- 4–5:30pm · TT Orange 2 Green · tt · Nick F
- 4–6pm · TT Comp · comp · Kris W, Gabe K, Aleix C, Kein W, Andrew W, Stevie D, Jeremie C
- 7–8:30pm · Comp Clinic · comp · Stevie D, Kris W, Shevi A, Gabe K, Kein W
- 7–8:30pm · Green 2 Orange · tt · Jeremie C, Nick F, Aleix C
- 8:30–10pm · Adult 2.5-3.0 · adult · Shevi A, Gabe K
- 8:30–10pm · Adult Adv Beginner · adult · Laurence P

### Tuesday
- 9:30–11am · Adult 2.5-3.0 · adult · Laurence P
- 5–7pm · TT1 · tt · Andrew W, Gabe K, Kris W, Jeremie C, Ben B, Stevie D, Aleix C
- 7–8:30pm · Comp Clinic · comp · Kein W, Kris W, Anna M, Gabe K, Stevie D
- 7–8:30pm · TT Orange 2 Green · tt · Nick F, Jeremie C, Aleix C
- 8:30–10pm · Adult 3.5+ · adult · Gabe K, Kris W

### Wednesday
- 12–1:30pm · Adult Adv Beginner · adult · Laurence P, David S
- 4–6pm · TT Comp · comp · Andrew W, Anna M, Stevie D, Jeremie C, Nick F, Laurence P, Aleix C, Gabe K
- 5–7pm · TT1 · tt · Andrew W, Gabe K, Ben B, Anna M
- 6–7pm · Munchkins · munch · Laurence P, Anna M
- 7–9pm · TT1 · tt · Andrew W, Gabe K, Stevie D, Shevi A
- 8:30–10pm · Adult 3.5+ · adult · Kein W, Laurence P

### Thursday
- 4–5pm · Munchkins · munch · Anna M, Kein W, Laurence P
- 5–7pm · TT1 · tt · Andrew W, Jeremie C, Kris W, Aleix C, Gabe K, Ben B
- 7–8:30pm · Comp Clinic · comp · Kein W, Kris W, Max O, Shevi A, Gabe K, David S
- 8:30–10pm · Adult 3.5+ · adult · Kein W, Laurence P

### Friday
- 4–5:30pm · Comp Clinic · comp · Andrew W, Aleix C, Max O, Stevie D, Kein W, Nick F, Bella N, Kris W
- 5:30–6:30pm · Munchkins · munch · Laurence P, Kein W
- 6:30–8:30pm · TT Comp · comp · Stevie D, Shevi A, Bella N, Aleix C, Kein W, Ahmed A, Kris W

### Saturday
- 7:30–9am · Team United Clinic · other · Ahmed A, Shevi A
- 8:30–10am · Adult 2.5-3.0 & 3.5+ · adult · Laurence P, Shevi A
- 10–11am · Munchkins · munch · Ahmed A, Gabe K, Nick F, Anna M
- 11am–12:30pm · Comp Clinic · comp · Kein W, Kris W, Shevi A, Nick F, Bella N, Anna M
- 1:30–3:30pm · TT Comp · comp · Stevie D, Andrew W, Shevi A, Kris W, Nick F
- 2:30–4pm · TT Green 2 Y · tt · Nick F

### Sunday
- 7:30–9am · Team United Clinic · other · Ahmed A, Shevi A
- 11am–12pm · Munchkins · munch · Laurence P, Kein W, Nick F
- 12–1:30pm · Comp Clinic · comp · Kein W, Nick F, Stevie D, Jinay S, Bella N, Anna M
- 2:30–4:30pm · TT1 · tt · Jeremie C, Shevi A, Stevie D, Gabe K, Aleix C
- 5:30–7pm · Adults · adult · Laurence P, Jinay S, Kein W, Gabe K

---

## How to Send Weekly Updates (for Sanjin)
Send one message with all changes batched together. Examples:

**Adding/removing coaches from sessions:**
> "Week 6: remove Ben from Thursday TT1, add Sofia to Friday Comp Clinic, Nick off all week"

**Updating contact info:**
> "Update Gabe's phone to 610-999-8888"

**Adding a new coach:**
> "Add Sofia Cruz — pro, phone 215-555-1234, email scruz@legacyyte.org"

**Changing session times:**
> "Move Tuesday TT1 to 5:30–7:30pm"

**Updating the week number:**
> "Change header to Week 6"

---

## Notes
- Always update `CLAUDE.md` roster when adding/removing coaches or changing contact info
- The `abbr` field in the coach object must match exactly what's used in the SCHEDULE coach arrays
- GitHub Pages may take 1–2 min to reflect changes — hard refresh with `Cmd+Shift+R`
- Kat Sorokko is the manager — form submissions notify her
