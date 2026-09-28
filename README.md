# unlabiri.github.io

Personal site for Ada Aljabiri, live at https://unlabiri.github.io.

## What's here

| Path | What it is |
| --- | --- |
| `index.html` | The whole home page: intro, résumé preview, experience, projects, accomplishments, tools, contact |
| `style.css` | All styles (white background, rosy pink accents, gray lace); also used by write-up pages |
| `script.js` | Dark/light toggle, copy-email button, résumé preview |
| `assets/resume.pdf` | The résumé shown and downloaded on the site; replace this file to update it |
| `assets/lace-trim.png`, `assets/lace-damask.png` | Gray lace used at the top and above the footer |
| `assets/361.mp4` | PacVote demo video, linked from the PacVote project and its write-up. **Keep this file.** |
| `2024/12/12/voting-system.html` | PacVote write-up page (plays `assets/361.mp4`) |
| `_posts/`, `_layouts/` | Markdown source for the write-up and its page template |
| `resume.html` | Old résumé page; now redirects to the résumé section on the home page |
| `.github/workflows/static.yml` | Deploys the repo to GitHub Pages on every push to `main` |

## Updating

- **Résumé:** replace `assets/resume.pdf` (keep the same name) and update "updated …" in `index.html`.
- **Reading list:** add titles in the `#reading` section of `index.html`, then remove its `hidden` attribute.
- **Preview locally:** open `index.html` in a browser, or run `python -m http.server` in this folder and visit http://localhost:8000.
- **Publish:** commit and push to `main`; the site updates in about a minute.

`assets/icons/` holds icons from the previous version of the site; they're no longer used and can be removed.
