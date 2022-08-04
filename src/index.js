import { exec } from 'child_process';
import inquirer from 'inquirer';
const version = 'Seasann v0.4.3';

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
  console.log('Next steps:');
  console.log(`\n     cd ${name}`);
  console.log('     npm i');
  console.log('To run the builder');
  console.log('\n     node .');
  console.log('     node express.cjs\n');
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
  console.log(`Done! Project initialized at ${name}`);
  console.log('Next steps:');
  console.log('     npm i');
  console.log('To run the builder');
  console.log('\n     node .');
  console.log('     node express.cjs\n');
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
} else if (args[2] == '--version') {
  console.log(version);
}
