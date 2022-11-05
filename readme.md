<div align="center">
    <h1>Seasann</h1>
    <p>A minimalistic static site generator</p>
</div>

# NOTE

Seassan is under reconstruction, and will be unusable for the time being. Please sand by!

## Introduction

Seasann is a static site generator that is designed to be as un-opinionated and minimal as possible.

Seasann is built with TypeScript.

## Prerequisites

`seassan` requires:

-   [Node.js](https://nodejs.org) at least version 12 (due to top level await)
-   [Curl](https://curl.se)
-   [Tar](https://www.gnu.org/software/tar/)
-   [NPM](https://www.npmjs.com)
-   [NPX](https://docs.npmjs.com/cli/v7/commands/npx/)

## Create a new project 💾

First install the cli

```bash
npm i -g seasann
```

Then use `seasann create` to create an application

```bash
seasann create
```

## Usage

All markdown content is contained in the posts directory.

When you run `npm run dev` it will first run `seasann compile` to compile your markdwon, then it will serve your app, seasann uses vite, but is frontend toll agnostic.

```bash
npm run dev
```

## Build

If you want to build the app use `npm run build`

```bash
npm run build
```

## License

Apache 2.0
