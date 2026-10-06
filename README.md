# Analog Clock (Canvas API)

An analog clock drawn on an HTML canvas with plain JavaScript, in two versions.

| Version | What it does |
|---|---|
| `minimal/` | Face and three hands. Starts at 10:10:00 and counts forward (it is not synced to the system clock). |
| `advanced/` | Shows the current system time with a full dial: 60 tick marks (thicker every 5), numerals 1–12, colored triangular hands, centre dot. Hour and minute hands move continuously; the second hand ticks once per second. |

## Origin and my contribution
**Starting point:** a basic JavaScript canvas clock exercise (the `minimal` version).
**What I added (`advanced`):**
- real system time via `Date` instead of a manual counter
- continuous hour/minute hand angles (e.g. `minutes / 30 + seconds / 1800`)
- dial rendering split into small drawing functions (marks, numbers, hands)
- larger canvas and centered layout with CSS

## Run
Open `minimal/minimal.html` or `advanced/index.html` in a browser. No build step.

## Tech
JavaScript, HTML5 Canvas (`requestAnimationFrame`, `save/translate/rotate/restore`), CSS.
