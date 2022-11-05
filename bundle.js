import { rename, rm, readFile, writeFile, readdir } from 'fs/promises';
import exec from 'node-async-exec';
import inquirer from 'inquirer';
import { parse } from 'path';
import { micromark } from 'micromark';

function help() {
    console.log('Usage: node . command [options]');
    console.log('   --help, -h: Print this message and exit');
    console.log('   --version, -V: Print version and exit');
    console.log('   --ts: add typescript.');
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

async function execute(err, cmd) {
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
    let projectName = answer.projectName;
    return projectName;
}

async function handleFile(file) {
    try {
        let content = await readFile(`./posts/${file}`);
        let compiled = micromark(content);
        let fileWitOutExt = parse(file).name;
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
    let files = await readdir('./posts');
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
    let name = await getProjName();
    await createNewProj(name);
}
else if (argv[2] == 'compile') {
    await compile();
}
