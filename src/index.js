import { exec } from 'child_process';
import inquirer from 'inquirer';
import { cwd } from 'process';
const version = 'Seasann v0.5.0';


function help(){
  console.log('Usage: node . command [options]')
  console.log('   --help, -h: Print this messeage and exit')
  console.log('   --version, -V: Print version and exit')
  console.log('   new: Create a new project')
  console.log('   init: Initialize new project in the current working directory')
}

function createNewProj(name) {
  exec(
    `git clone https://github.com/micziz/seasann-template.git ${name}`,
    (error) => {
      if (error) {
        console.log(`error: ${error.message}`);
        return;
      }
    }
  );
  console.log(`Done! Project created at ${name}`);
  if (args[3] != '--silent'){
    console.log('Next steps:');
    console.log(`\n     cd ${name}`);
    console.log('     npm i');
    console.log('To start a server');
    console.log('     npm run dev\n');
  }
}

function initProj(name) {
  exec(`git init`, (error) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
  });
  exec(
    `git pull https://github.com/micziz/seasann-template.git --allow-unrelated-histories`,
    (error) => {
      if (error) {
        console.log(`error: ${error.message}`);
        return;
      }
    }
  );
  console.log(`Done! Project initialized at ${cwd}`);
  if (args[3] != '--silent'){
    console.log('Next steps:');
    console.log('     npm i');
    console.log('To start a server');
    console.log('     npm run dev\n');
  }
}

let args = process.argv;
if (args[2] == 'new') {
  async function askNameOfProject() {
    const answers = await inquirer.prompt({
      name: 'project_name',
      type: 'input',
      message: 'What is the name of the website?',
      default() {
        return 'seasann-app';
      },
    });

    return createNewProj(answers.project_name);
  }

  await askNameOfProject();
} else if (args[2] == 'init') {
  async function askNameOfProject() {
    const answers = await inquirer.prompt({
      name: 'project_name',
      type: 'input',
      message: 'What is the name of the website?',
      default() {
        return 'seasann-app';
      },
    });

    return initProj(answers.project_name);
  }
  await askNameOfProject();
} else if (args[2] == '--version' || args[2] == "-V") { 
  console.log(version);
} else if (args[2] == '--help' || args[2] == '-H'){
  help()
} else {
  help()
}