# Brian Ebiyau — academic site and CV

Source for [ebiyau.github.io](https://ebiyau.github.io): a single-page academic website built with
[Astro](https://astro.build), plus the LaTeX source of my CV.

```
.
├── site/                       Astro website
│   ├── src/consts.ts           links, publications, teaching, service
│   ├── src/pages/index.astro   about and research text
│   ├── src/assets/portrait.jpg profile photo
│   ├── src/styles/global.css   colors and fonts
│   └── public/                 static files served as-is (favicons, CV PDF)
├── cv/cv.tex                   CV source
└── .github/workflows/deploy.yml  builds and publishes the site on push to main
```

## Running the website locally

Requires **Node.js 22.12 or newer**.

```sh
cd site
npm ci              # install dependencies (first time, or after package-lock.json changes)
npm run dev         # dev server with live reload at http://localhost:4321
```

Other commands, also run from `site/`:

```sh
npm run build       # production build into site/dist/
npm run preview     # serve the production build locally
```

## Building the CV

Requires a LaTeX distribution with `pdflatex`. With [TinyTeX](https://yihui.org/tinytex/), install the
extra packages the CV uses once:

```sh
tlmgr install titlesec needspace enumitem microtype cm-super
```

Then build the PDF and copy it into the website, where the CV icon links to it:

```sh
cd cv
pdflatex -jobname=Brian_Ebiyau_CV cv.tex
cp Brian_Ebiyau_CV.pdf ../site/public/
```

## Deploying

Pushing to `main` deploys automatically: the GitHub Actions workflow in `.github/workflows/deploy.yml`
builds `site/` and publishes it to GitHub Pages. Progress is visible in the repository's **Actions** tab.
It can also be started by hand from that tab ("Run workflow").

## Editing

| What | Where |
|---|---|
| Links, publications, teaching, service | `site/src/consts.ts` |
| About and research text | `site/src/pages/index.astro` |
| Navigation menu | `site/src/components/Header.astro` |
| Portrait | replace `site/src/assets/portrait.jpg` |
| Colors and fonts | `site/src/styles/global.css` |
| CV | `cv/cv.tex`, then rebuild and copy the PDF as above |

Your name is bolded automatically in publication author lists when it matches `SITE.name` in
`consts.ts`.
