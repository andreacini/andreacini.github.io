README

To deploy on GitHub pages:

1.

Check offline the changes that you have made by running:
```bash
bundle exec jekyll serve
```

2.

Commit and push changes to master.

3.

From the root directory:

Run the deploy script from the root directory of your repository:

```bash
$ ./bin/deploy
```

uses the `master` branch for the source code and deploys the webpage to `gh-pages`.
