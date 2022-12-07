# Contributing Guidelines

Thank you for considering contributing to Seasann! We appreciate your time and effort in helping improve our project.

Remember that these are guidelines, not rules and if you wish to improve them, open a pull request.

# Contributing

## Before you contribute!

Befor you start developing a feature, follow these steps listed below

### 1: Check if there is an issue open

If you are planning on fixing a bug, than check if there are any issue about it. If yes, than, open a PR, and in the start of the text, write

```markdown
Closes #<the-pr-number>
```

If there are no issues

## Getting started

### Prerequisits

-   [Git](https://git-scm.com)
-   [A github account](https://github.com/signup)
-   [NodeJS](https://nodejs.org)
-   [Pnpm](https://pnpm.io)

### Forking and cloning the repo

To contribute to Seasann, first fork the repository and clone it to your local machine.

To do this, navigate to the [Seasann repository on GitHub](https://github.com/seasann/seasann) and click the "Fork" button in the top right corner. This will create a copy of the repository under your own GitHub account.

Next, use the following command to clone the repository to your local machine:

```
git clone https://github.com/<your-username>/seasann.git
```

Then, create a new branch to develop your code in:

```bash
git branch -m patch-1
```

(Change patch-1 to what is your preference.)

### Setting up the development environment

To start developing in dev mode, first make sure you have pnpm installed on your machine. Then, navigate to the cloned repository on your local machine and run the following command to install the project dependencies:

```
cd seasann
pnpm install
```

Befor you start making changes, start the dev server:

```
pnpm dev
```

This will start a local development server and enable hot reloading, allowing you to make changes to the code and see the results in real time.

### Code Linting and Formatting

Seasann uses the default ESLint and Typescript rules for code linting, and a pretty default prettier config. To ensure your code adheres to these standards, please run the linting and formatting scripts before submitting a pull request:

```
pnpm run lint
pnpm run format
```

### Submitting a pr

To submit a PR (or pull request), you will have to

1:

Run the `pnpm build` script

```bash
pnpm build
```

This will:

-   Remove the old bundle.js
-   Lint and format
-   Build typescript into a `build` directory
-   Build that `build` directory into `bundle.js` using rollup.
-   Remove the `build` directory.

This is a long process, so have patience.

2:

Commit your changes:

We strongly reccomend undercommiting, or commiting small bits at a time, but it's not a rule and if you prefer commiting all at once or in big pieces, the pr will be accepted.

After the build is done, run

```bash
git add .
git commit -m "<commit-title>"
git push origin <branch-name>
```

This will commit and push that commit to your branch in the remote repo.

3:

Open the pr

First, go on your fork of the repository. The link will be `https//github.com/<your-username>/seasann`. Then, go on branches, in the top left corner, and select the branch name you were working on.

Then, on the box above the code, click `contribute`. (Make sure that your fork is synchronized before opening.)

Then, fill out the template, and submit.

If you are not finished, open a draft pr.

### Now What?

The team will respond to you in a timley manner (about 24 hours or so). If it's taking a very long time (eg 2-3 days) than wirte a comment on YOUR pr and ask if this is getting merged. DO NOT SPAM, or MAKE COMMENTS ON OTHER PULL REQUESTS. Draft pr's will be ignored, and will not be commented on or reviewd, so check again if you have set the pr to Ready To Review.

## My pr got rejected

First of all, we don't reject pr's often. And when we do, we always do it in a calm way. If your PR was rejected, we will always give you a concise reason why, and some feedback to improve. If your pr gets rejected, don't be sad, but use the feedback we gave you and give it another shot. But, DO NOT SPAM PR'S. If you get rejected twice, and are not improving, please do not open ANY more issues. We will ignore them and close them, without needing to reason.

# Reporting Bugs

If you encounter a bug while using Seasann, please follow these short guidelines before opening an issue:

## Check if there is something similar

To avoid duplicates

# Asking Questions

If you have any questions about Seasann, please feel free to ask them in the Community tab.
