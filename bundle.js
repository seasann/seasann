import exec from 'node-async-exec';
import inquirer from 'inquirer';

function help() {
    console.log('Usage: node . command [options]');
    console.log('   --help, -h: Print this message and exit');
    console.log('   --version, -V: Print version and exit');
    console.log('   --ts: add typescript.');
}

let args = process.argv;
async function createNewProj(name) {
    if (args[2] == '--ts') {
        try {
            await exec({
                cmd: `curl -sL https://github.com/seasann/seasann-template-ts/archive/refs/heads/main.tar.gz -o main.tar.gz`,
            });
        }
        catch {
            throw Error('Curl is not installed, or you do not have an internet connection active.');
        }
        try {
            await exec({ cmd: `unzip main.zip` });
        }
        catch {
            throw Error('Unzip is not installed.');
        }
        try {
            await exec({ cmd: `mv seasann-template-ts-main ${name}` });
        }
        catch {
            throw Error('Error in renaming your project.');
        }
    }
    else {
        try {
            await exec({
                cmd: `curl -sL https://github.com/seasann/seasann-template/archive/refs/heads/main.tar.gz -o main.tar.gz`,
            });
        }
        catch {
            throw Error('Curl is not installed, or you do not have an internet connection active.');
        }
        try {
            await exec({ cmd: `unzip main.zip` });
        }
        catch {
            throw Error('Unzip is not installed.');
        }
        try {
            await exec({ cmd: `mv seasann-template-ts-main ${name}` });
        }
        catch {
            throw Error('Error in renaming your project.');
        }
    }
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

const argv = process.argv;
if (argv[2] == '--help') {
    help();
}
else if (argv[2] == '--version') {
    console.log('1.0.0-beta');
}
else {
    let name = await getProjName();
    await createNewProj(name);
}
