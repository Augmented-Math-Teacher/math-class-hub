# Math Class Hub — starter site

A ready-to-edit static site: a home page, one page per class (Algebra 2/Trig,
Geometry, AP Statistics), a Tools hub, and a Blog hub.

## Files

- `index.html` — home page, links to everything
- `algebra2-trig.html`, `geometry.html`, `ap-stats.html` — one page per class
- `tools.html` — every tool, grouped by class
- `blog.html` — links out to your real blog
- `styles.css` — shared design (all pages use this one file)
- `gate.js` — powers the passcode-gated "Answer keys" section on the
  Algebra 2/Trig page

Everything is placeholder content marked clearly (`Placeholder: ...`, `#`
links, `Launch →`). Replace the `href="#"` links with your real links, and
edit the text to match your actual units and tools.

## Getting this online with GitHub Pages (free)

1. Create a GitHub account if you don't have one, and create a new
   repository — name doesn't matter, e.g. `math-class-hub`.
2. Upload all the files in this folder to that repository (GitHub's web
   interface has an "Add file → Upload files" button — no command line
   needed).
3. In the repository, go to **Settings → Pages**.
4. Under "Build and deployment," set the source to **Deploy from a branch**,
   pick the `main` branch and the `/ (root)` folder, then save.
5. GitHub will give you a URL like
   `https://yourusername.github.io/math-class-hub/` within a minute or two.
   That's your live site — share that link with students.

Any time you want to update the site, upload new/changed files to the same
repository and the live site updates automatically within a minute.

## About the gated section

The "Answer keys" section on the Algebra 2/Trig page uses a simple passcode
gate (see `gate.js`): visitors type a passcode and the hidden content
appears. This is a convenience gate, not real security — the passcode is
visible to anyone who views the page's source code. It's fine for keeping
casual visitors from stumbling onto something like an answer key, but don't
use it for anything that actually needs to stay private (grades, personal
student information, etc.).

To add a gated section to another page, copy this pattern from
`algebra2-trig.html`:

```html
<div class="gate-box" data-gate="YOUR-PASSCODE-HERE">
  <p class="tag">Gated section</p>
  <p>Enter this class's passcode to view this content.</p>
  <div class="gate-form">
    <input type="password" placeholder="Passcode" aria-label="Passcode">
    <button class="btn primary" type="button">Unlock</button>
  </div>
  <p class="gate-error">That's not the right passcode. Try again.</p>
  <div class="gate-content" hidden>
    <!-- the actual gated content goes here -->
  </div>
</div>
```

...and add `<script src="gate.js"></script>` near the bottom of the page
(right before `</body>`), if it isn't already there.

If you ever want real login-based access control instead (e.g. for grades or
other sensitive material), look at **Cloudflare Access** or **Netlify
Identity** — both have free tiers and sit in front of specific pages,
requiring an actual login rather than a shared passcode. Ask me if you want
help setting either of those up once you're ready.

## The `tools/` folder

All interactive tools (the self-contained HTML ones — grading apps,
explorers, trackers, etc.) live in `tools/`, one file per tool:

```
math-class-hub/
├── index.html, algebra2-trig.html, geometry.html, ap-stats.html, ...
├── styles.css, gate.js
└── tools/
    ├── bathroom-tracker.html      ← classroom management, used year-round
    ├── unit-circle-explorer.html
    ├── a2t-course-map.html
    └── periodic-table.html
```

**To add a new tool once you've built it:**
1. Save it as a single self-contained `.html` file (this is how most of the
   tools you've built with me already work — everything in one file, no
   separate server needed).
2. Upload it into the `tools/` folder in the repo, using whatever filename
   you want (keep it lowercase with hyphens, e.g. `bathroom-tracker.html`).
3. Add one `<li>` entry linking to it — on `tools.html`, and on whichever
   class page(s) it's relevant to. Copy the pattern from an existing entry
   and just change the title, description, and the `href` in the `tools/`
   folder.

That's the whole workflow — no rebuild step, no redeploy. Upload the file,
add one link, done.

**Right now, `tools/bathroom-tracker.html` is a placeholder** — replace it
with your real bathroom tracker file (same filename) and the "Launch"
button on the Tools hub will point straight at the working app.

**The EPI grader has been removed** from the AP Stats page and Tools hub,
since AP Stats has moved to 10-point grading and that tool is now obsolete.
Once a replacement grading tool exists, drop it into `tools/` and add it the
same way.

## Adding new class pages or blog posts

- **New blog post**: add a `<li>` entry to `blog.html`, and to any class page
  where it's relevant.
- **New class**: copy `geometry.html` as a starting template, update the
  title/content, and add a nav link + card to `index.html`.
