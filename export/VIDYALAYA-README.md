# Vidyalaya Loop case study: what's in this drop

Copy these into your repo's `export/` folder (the one GitHub Pages deploys):

- `vidyalaya.html`: the case study page. It is new, so no existing page is overwritten.
- `vidyalaya/`: 44 images (WebP, ~2.6 MB total), loaded lazily by the page.
- `index.html`: your homepage with one change. It adds a new Vidyalaya card at the top of "Selected Work" and flips the left/right `rev` class on the existing cards so the layout still alternates. Nothing else changes. If you don't want the card first, move its `<div class="proj-card">…</div>` block.

The live prototype (vidyalaya-circular-hub.vercel.app) is not modified. The page links to it, and when viewed on your site it can also run it inside the phone frame.

Page links: `index.html` (brand and "Back to all work"). The theme toggle shares your site's `kanishka-portfolio-theme` setting.
