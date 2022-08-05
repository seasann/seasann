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

Yarn and Pnpm are also supported.

If you are already in a directory, run:

```bash
npx seasann init
```

If you want to use a pre-created template, run:

```bash
npx seasann new --them
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

- [x] Add themes
- [ ] Add global styling

## License

Apache 2.0