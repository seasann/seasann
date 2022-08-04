<div align="center">
    <h1>Seasann</h1>
    <p>Minimalist and un-opinionated static site generator</p>
</div>

## Create a new project 💾

The package manager of choice is [pnpm](https://pnpm.io). This should also work with regular npm, but we recommend you switch over to pnpm.

```bash
pnpx seasann new
```

If you are already in a directory, run:

```bash
pnpx seasann init
```

## Using seasann 👨‍💻

Once the project is generated, go ahead and write some markdown in the pages directory!

Then, once you have finished, run:

```bash
pnpm run build
```

This will

1. Go through your pages directory and convert them to html.
2. Assign each page a route in the express app that is in express.js

Note that if the markdown file is called index, than that will be asigend to the / route.

## Running the site ⚙️

Run:

```bash
pnpm run dev
```

This will build and start the express app at localhost 3000. Remeber that every markdown file is a route. For example:

```
posts
└───main.md
```

will correspond to `https://example.com/main`.

## Faq ❓

### Why?

1. Bulkiness: SSG are getting bulkier, and require thousands of dependencies

2. Transparency: You just write some markdown and it will be transformed by some complicated cli into strange html.

3. CSS. If you use an SSG today, you are pretty much giving away your control to some theme made by another guy.

Seasann is minimal, transparent and gives you full control over css.

### Who created the project

The project was created and is currently maintained by micziz.

### Can i contribute?

Sure. Please read [contributing.md](contributing.md) before contributing!

### How does the project work?

On the front end it's just html, generated using a markdown to html converter called [marked](https://marked.js.org).

On the backend it uses express.js for a minimal yet reliable backend. It also syncs the frontend pages with the backend routes.

### Css?

(Supported from 0.3.0) Create a file that is the same name from the markdown file you want to modify. It will be added.

### What is the license?

Apache-2.0
