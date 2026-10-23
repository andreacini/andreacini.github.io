# andreacini.github.io

Personal academic website, built with a small custom Jekyll theme.

- Home page text: `_pages/about.md`
- News items: one Markdown file per item in `_news/` (only `date` in the front matter)
- Publications: `_data/publications.yml` (newest first, grouped by year on the page; `A. Cini` is highlighted automatically; optional `pdf` and `code` links and `abstract`/`bibtex` drop-downs)
- Research projects: `_data/projects.yml`; open-source projects: `_data/software.yml` (logos in `assets/img/`)
- Name, tagline, links, nav and CV path: `_config.yml`
- Styles: `assets/css/main.scss`

Preview locally:

```bash
bundle exec jekyll serve --livereload
```

Deploy (builds `master` and pushes the result to `gh-pages`):

```bash
./bin/deploy
```
