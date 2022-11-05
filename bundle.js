import { rename, rm, readFile, writeFile, readdir } from 'fs/promises';
import exec from 'node-async-exec';
import inquirer from 'inquirer';
import { parse } from 'path';
import { micromark } from 'micromark';

function help() {
    const message = `
Usage: seasann command || Options
  Commands:
    create: Create a new seasann app
    compile: Compile markdown to html
    
  Options:
    --help: Print this message and exit
    --version: Print version and exit
`;
    console.log(message);
}

async function renameDir(name) {
    try {
        await rename('./seasann-template-main', `./${name}`);
    }
    catch {
        throw Error('Error renaming your project.');
    }
}
async function rmFile() {
    try {
        await rm('./main.tar.gz');
    }
    catch {
        throw Error('Error removing tar file');
    }
}

async function execute(cmd, err) {
    try {
        await exec({
            cmd: cmd,
        });
    }
    catch {
        throw Error(err);
    }
}

async function createNewProj(name) {
    await execute('curl -sL https://github.com/seasann/seasann-template/archive/refs/heads/main.tar.gz -o main.tar.gz', 'Error downloading template. You may not have curl installed');
    await execute('tar -xf main.tar.gz', 'Error unzipping the dowloaded template. You may not have tar installed');
    await renameDir(name);
    await rmFile();
    console.log(`Done! Project created at ${name}`);
    const userAgent = process.env.npm_config_user_agent;
    console.log('Next steps:');
    if (userAgent) {
        if (userAgent.startsWith('yarn')) {
            console.log(`
      cd ${name}
      yarn install
      `);
        }
        else if (userAgent.startsWith('pnpm')) {
            console.log(`
      cd ${name}
      pnpm install
      `);
        }
        else {
            console.log(`
      cd ${name}
      pnpm install
      `);
        }
    }
    else {
        // If no user agent is set, assume npm
        console.log(`
      cd ${name}
      npm install
    `);
    }
}

async function getProjName() {
    const answer = await inquirer.prompt({
        name: 'projectName',
        type: 'input',
        message: 'What is the name of your project',
        default() {
            return 'seassan-app';
        },
    });
    const projectName = answer.projectName;
    return projectName;
}

async function handleFile(file) {
    try {
        const content = await readFile(`./posts/${file}`);
        const compiled = micromark(content);
        const fileWitOutExt = parse(file).name;
        try {
            await writeFile(`./app/${fileWitOutExt}.html`, compiled);
        }
        catch (err) {
            throw Error('Create a app directory!');
        }
    }
    catch (err) {
        console.error(err);
    }
}

async function compile() {
    const files = await readdir('./posts');
    files.forEach(async (element) => {
        await handleFile(element);
    });
}

const argv = process.argv;
if (argv[2] == '--help') {
    help();
}
else if (argv[2] == '--version') {
    console.log('1.0.0-beta');
}
else if (argv[2] == 'create') {
    const name = await getProjName();
    await createNewProj(name);
}
else if (argv[2] == 'compile') {
    await compile();
}
