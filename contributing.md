# Contributing Guiedlines

**NOTE!** These guiedlines are just a framework of rules. If we don't belive that a PR/Issue shloud exist, even if it follows the guiedlines perfectly, we will not accept it and close it. That said if your pr is rejected, don't be demoralized. Ask for some suggestions and apply those suggestions in the future.

**WELCOME!** Thank you so much for helping out! In this guide we will help you open your first question/bug report and make your first contribution!

## I have a Question!

The comminity tab is perfect for that! There you can ask questions, propose ideas, and just chat with us!

## I found a bug!

First, check the [issues](https://github.com/micziz/seasann/issues) on the [github](https://github.com/micziz/seasann). If you see the same or a similar problem to yours, try commenting on that. We will try to answer in a timely manner, but please be patient. If there are no other issues, you can open one yourself. Please make shore that there are no issues similar to yours oterwise your issue will be closed and marked as duplicate.

All bugtracking happens on the [issues](https://github.com/micziz/seasann/issues) on the [github](https://github.com/micziz/seasann). We provide a template, but feel free to deleate things that are not releavant. Please note that if you deleate information that is critical (eg: How to reproduce it, Version) we will not be able to fix it. After filling the template, submit the issue. In about 24 hours sombady will responded. Please be patient.

## Fixing a bug:

If you belive you have the technical skills to fix a bug please refer to the contributing section.

## Contributing

Thanks for contributing! There are some things you need to do before you contribute.

### Setup your developement enviorment

First, clone the repository. The Version Control System that is prefferd is [git](https://git-scm.com).

To clone the repo type this command:

```bash
git clone https://github.com/micziz/seasann
```

If you want to clone the template used for developing a static site, type in this command:

```bash
git clone https://github.com /micziz/seasann-template
```

Once youve cloned the repo, cd into it:

```bash
cd seasann
```

Now we need to install dependencies. The prefferd packge manager is [pnpm](https://pnpm.io). On the CLI side of things, it's pretty minimal, only requiring [inquirer](https://www.npmjs.com/package/inquirer). The template has more depnpendencies. Anyway, install them by running:

```bash
pnpm i
```

It will install all the required packages. If you have just installed pnpm, some setup may be required.

One final thing. While you can use whatever text editor/ide, we reccomend the usage of [vscode](https://code.visualstudio.com)

Your developer enviorment is setup! Now we can start developing!

### Create a Pull Request.

After you have finished developing your code you can open a [pull request](https://github.com/micziz/seasann/pulls) on [github](https://github.com/micziz/seasann).

We offer a template, but feel free to deleate options that are not relevant

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
