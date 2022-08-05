<div align="center">
    <h1>Seasann</h1>
    <p>Minimalist and un-opinionated static site generator</p>
</div>

## Introduction

Seasann is a minimalist static site generator that is designed to be as un-opinionated and minimal as possible.

Seasann is built with TypeScript.

## Prerequisites

You need to have the following packages installed:

- [Node.js](https://nodejs.org)
- [Git](https://git-scm.com)
- [NPM](https://www.npmjs.com)
- [NPX](https://docs.npmjs.com/cli/v7/commands/npx/)

## Create a new project 💾

Generate a new project using [npx](https://www.npmjs.com/package/npx). Npx comes bundled with npm version 5.2+. It's also a package for older version.

```bash
npx seasann new
```

Yarn and Pnpx are also supported.

If you are already in a directory, run:

```bash
npx seasann init
```

## Using seasann 👨‍💻

Once the project is generated, go ahead and write some markdown in the pages directory!

Then, once you have finished, run:

```bash
npm run build
```

This will

1. Go through your pages directory and convert them to html.
2. Assign each page a route in the express app that is in express.js

Note that if the markdown file is called index, than that will be asigend to the / route.

## Running the site ⚙️

Run:

```bash
npm run dev
```

This will build and start the express app at localhost 3000. Remember that every markdown file is a route. For example:

```
posts
└───main.md
```

will correspond to `https://example.com/main`.

## Todo:

- Add global styling
- Add themes


## Faq

### Why?

1. Bulkiness: SSG are getting bulkier, and require thousands of dependencies

2. Transparency: You just write some markdown and it will be transformed by some complicated cli into strange html.

3. CSS. If you use an SSG today, you are pretty much giving away your control to some theme made by another guy.

Seasann is minimal, transparent and gives you full control over css.

### Author

The project was created and is currently maintained by micziz.

### Can I contribute?

Sure. Please read [contributing.md](contributing.md) before contributing!

### How does the project work?

On the front end it's just html, generated using a markdown to html converter called [marked](https://marked.js.org).

On the backend it uses express.js for a minimal yet reliable backend. It also syncs the frontend pages with the backend routes.

### Css?

(Supported from 0.3.0) Create a file that is the same name from the markdown file you want to modify. It will be added.

The project is licensed under the [Apache 2.0 license](LICENSE).
