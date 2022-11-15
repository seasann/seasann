import { rename, rm, readFile, writeFile, readdir } from 'fs/promises';
import exec from 'node-async-exec';
import tar from 'tar';
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

/**
 * @param  {string} dir
 * Renames downloaded directory to another one!
 */
async function renameDir(dir) {
    try {
        await rename('./seasann-template-main', `./${dir}`);
    }
    catch {
        throw Error('Error renaming your project.');
    }
}
/**
 * Removes ./main.tar.gz
 */
async function rmFile() {
    try {
        await rm('./main.tar.gz');
    }
    catch {
        throw Error('Error removing tar file');
    }
}

/**
 * @param  {string} cmd
 * @param  {string} err
 * Executes a command and catches and error.
 */
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

async function extract(file, err) {
    try {
        await tar.x({
            file: file,
        });
    }
    catch {
        throw Error(err);
    }
}

/**
 * @param  {string} name
 * Creates a new project
 */
async function createNewProj(name) {
    await execute('curl -sL https://github.com/seasann/seasann-template/archive/refs/heads/main.tar.gz -o main.tar.gz', 'Error downloading template. You may not have curl installed');
    await extract('main.tar.gz', 'Error unzipping the dowloaded template. You may not have tar installed');
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

/**
 * Asks the user the name of the app
 */
async function getProjName() {
    // Prompt using inquirer
    const answer = await inquirer.prompt({
        // Get the name of the prompt
        name: 'projectName',
        // Type is input
        type: 'input',
        // Prompt message
        message: 'What is the name of your project',
        // If none then use default
        default() {
            return 'seassan-app';
        },
    });
    const projectName = answer.projectName;
    // Return projectName
    return projectName;
}

/**
 * @param  {string} file
 * Handles every file in the posts directory
 */
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

// Compile Command
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
