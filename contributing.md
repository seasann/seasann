# Contributing Guidelines

- [Contributing Guidelines](#contributing-guidelines)
  - [Welcome](#welcome)
  - [Questions and bugs](#questions-and-bugs)
    - [Question](#question)
    - [Bug reporting](#bug-reporting)
  - [Contributing](#contributing)
    - [Setup your development environment](#setup-your-development-environment)
    - [Before submitting](#before-submitting)
    - [Create a Pull Request](#create-a-pull-request)
      - [Create a title](#create-a-title)

**NOTE!** These guidelines are just a framework of rules. If we don't believe that a PR/Issue should exist, even if it follows the guidelines perfectly, we will not accept it. That said if your pr is rejected, don't be demoralized. Ask for some suggestions and apply those suggestions in the future.

## Welcome

Thank you so much for helping out! In this guide we will help you open your first question/bug report and make your first contribution!

## Questions and bugs

### Question

The discussion tab is perfect for that! There you can ask questions, propose ideas, and just chat with us!

### Bug reporting

First, check the [issues](https://github.com/micziz/seasann/issues) tab on [github](https://github.com/seasann/seasann). If you see the same or a similar problem to yours, look there. If there are no other issues, you can open one yourself. Please make sure that there are no issues similar to yours otherwise your issue will be closed and marked as duplicate.

All bug tracking happens on the [issues](https://github.com/seasann/seasann/issues) tab on [github](https://github.com/seasann/seasann). Here are some reccomendations for creating a good github issues:

We will try to answer in a timely manner, but please be patient.

-   Use a clear and descriptive title for the issue to identify the problem.
-   Explain the behavior you expected to see instead and why.
-   Then explain what the actual behavior was.
-   Describe the exact steps to reproduce the problem in as many details as possible. For example, what command you used, if you changed something etc..
-   Provide specific examples to demonstrate the steps. If you're providing snippets in the issue, use Markdown code blocks.
-   Provide version info for seasann, node, npm etc... depending on what seems necessary.

## Contributing

Thanks for contributing! There are some things you need to do before you contribute.

### Setup your development environment

First, clone the repository.

```bash
git clone https://github.com/seasann/seasann.git
```

For modifying the template:

```bash
git clone https://github.com/seasann/seasann-template.git
```

Then cd into the directory and install dependencies:

```bash
cd seasann
```

One final thing. While you can use text editor/IDE of your choice, but we recommend the usage of [VS Code](https://code.visualstudio.com).

Your developer environment is setup! Now we can start developing!

### Before submitting

Before submitting a pull request please run `npm run build` to lint, check and build into a bundle.

### Create a Pull Request

After you have finished developing your code you can open a [pull request](https://github.com/seasann/seasann/pulls) on [github](https://github.com/seasann/seasann).

#### Create a title

Pull requests require great titles. Here are some prefix for titles:

-   **feat**: New feature

-   **docs**: Modification to documents/documentations

-   **fix**: Small bugfix

-   **style**: Formatting changes witch does not impact code

-   **refactor**: Refactored code

-   **chore**: Updating configs, workflows etc. Does not impact code.

So the title should be:

**type**: PR title

Make sure also that:

-   You are merging your branch into the develop branch
-   You link any issues that are resolved or fixed by your changes. (this is done by typing "Fixes #<issue number>") in your pull request
-   Where possible, you have used git pull --rebase, to avoid creating unnecessary merge commits
-   Use the present tense ("Add feature" not "Added feature")
-   Use the imperative mood ("Change function to..." not "Changes function to...")
