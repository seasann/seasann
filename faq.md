# Faq

- [Faq](#faq)
  - [Why?](#why)
  - [Who is the project maintained.](#who-is-the-project-maintained)
  - [Can I contribute?](#can-i-contribute)
  - [How does the project work?](#how-does-the-project-work)
    - [Css?](#css)

## Why?

There are many reasons that i built seasann. 

1. Bulkiness: SSG are getting bulkier, and require hundred, even thousands of dependencies to be run. Seasann is minimal, only requiring the dependencies it needs.

2. Magic: In modern SSG the process of compiling is abstraced away. Seasann is explicit with it's cli, witch you can modify to your liking.

3. CSS. If you use an SSG today, you are pretty much giving away your control to some theme made by another guy. Seasann gives you full control over CSS.

## Who is the project maintained.

The project was created and is currently maintained by micziz and other contributors! Thanks

## Can I contribute?

Sure. Please read [contributing.md](contributing.md) before contributing!

## How does the project work?

On the front end it's just pure html, generated using a markdown to html parser called [marked](https://marked.js.org), witch focuses on speed.

On the backend it uses express.js for a minimal yet reliable backend. It also syncs the frontend pages with the backend routes.

### Css?

(Note that automatic CSS is supported from v0.3.0). 

Create a file with the same name of the markdown file you want to modify. It will be automatically added to the corresponding html. Styles are scoped to files.