# Contributing Guidelines

- [Contributing Guidelines](#contributing-guidelines)
  - [Welcome](#welcome)
  - [Questions and bugs](#questions-and-bugs)
    - [I have a Question](#i-have-a-question)
    - [I found a bug](#i-found-a-bug)
    - [Fixing a bug](#fixing-a-bug)
  - [Contributing](#contributing)
    - [Setup your development environment](#setup-your-development-environment)
    - [Create a Pull Request](#create-a-pull-request)
      - [Create a title](#create-a-title)

**NOTE!** These guidelines are just a framework of rules. If we don't believe that a PR/Issue should exist, even if it follows the guidelines perfectly, we will not accept it. That said if your pr is rejected, don't be demoralized. Ask for some suggestions and apply those suggestions in the future.

## Welcome

Thank you so much for helping out! In this guide we will help you open your first question/bug report and make your first contribution!

## Questions and bugs

### I have a Question

The discussion tab is perfect for that! There you can ask questions, propose ideas, and just chat with us!

### I found a bug

First, check the [issues](https://github.com/micziz/seasann/issues) tab on [github](https://github.com/seasann/seasann). If you see the same or a similar problem to yours, look there. We will try to answer in a timely manner, but please be patient. If there are no other issues, you can open one yourself. Please make shore that there are no issues similar to yours otherwise your issue will be closed and marked as duplicate.

All bug tracking happens on the [issues](https://github.com/seasann/seasann/issues) tab on [github](https://github.com/seasann/seasann). We provide a template, but feel free to delete things that are not relevant. Please note that if you delete information that is critical (eg: How to reproduce it, Version) we will not be able to fix it. After filling the template, submit the issue. In about 24 hours somebody will responded. Please be patient.

### Fixing a bug

If you believe you have the technical skills to fix a bug please refer to the contributing section.

## Contributing

Thanks for contributing! There are some things you need to do before you contribute.

### Setup your development environment

First, clone the repository. The Version Control System that is preferred is [git](https://git-scm.com).

To clone the repo type this command:

```bash
git clone https://github.com/seasann/seasann.git
```

If you want to clone the template used for developing a static site, type in this command:

```bash
git clone https://github.com/seasann/seasann-template.git
```

(Note that there is a TypeScript Version available)

Once you've cloned the repo, cd into it:

```bash
cd seasann
```

Now we need to install dependencies. The preferred package manager is [npm](https://www.npmjs.com/), but you can still use [yarn](https://yarnpkg.com/) or [pnpm](https://pnpm.js.org/).

```bash
npm install
```

It will install all the required packages. If you have just installed pnp, some setup may be required.

Typescript is required! Install it using `npm i -g typescript` or `npm i typescript --save-dev` in the root of the project.

If you want to modify markdown code, install the markdown all in one extension.

One final thing. While you can use text editor/IDE of your choice, but we recommend the usage of [VS Code](https://code.visualstudio.com).

Your developer environment is setup! Now we can start developing!

### Create a Pull Request

After you have finished developing your code you can open a [pull request](https://github.com/seasann/seasann/pulls) on [github](https://github.com/seasann/seasann).

We offer a template, but feel free to delete options that are not relevant

#### Create a title

Pull requests require great titles. Here are some prefix for titles:

- **feat**: New feature

- **docs**: Modification to documents/documentations

- **fix**: Small bugfix

- **style**: Formatting changes witch does not impact code

- **refactor**: Refactored code

- **chore**: Updating configs, workflows etc. Does not impact code.

Make sure also that:

- You are merging your branch into the develop branch
- You link any issues that are resolved or fixed by your changes. (this is done by typing "Fixes #<issue number>") in your pull request
- Where possible, you have used git pull --rebase, to avoid creating unnecessary merge commits
