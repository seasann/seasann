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
node index.js
```

This will

1. Go through your pages directory and convert them to html.
2. Assig each page a rout in the express app that is in express.js

## Runing the site

Run:

```bash
node express.js
```

this will start an express app at localhost 3000. Remeber that every markdown file is a route. For example:

```
app
|
│ 
└─ posts   
   │   
   │
   └───main.md
```

will correspond to `http://localhost:3000/main`.

## Faq

### Who created the project

The project was created and is currently maintained by micziz.

### Can i contribute?

Shore. Please read contributing.md before contributing tough!

### How does the project work?

On the front end it's just html, generated using a markdown to html converter ([marked](https://marked.js.org)).

On the backend it uses express.js for a minimal yet reliable backend. It also syncs the frontend with the backend.

### Css?

It's a feateure that we are working on, but currently there is no way to add css using the cli. You can add it tough after the compilation!

### What is the license?

Apache-2.0