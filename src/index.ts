import inquirer from 'inquirer';
import { initProj } from './projectCreation/initProj.js';
import { createNewProj } from './projectCreation/createNewProject.js';
import { help } from './functions/help.js';
const version = 'Seasann v0.5.1';
const args = process.argv;

if (args[2] == 'new') {
  async function question() {
    const answers = await inquirer.prompt({
      name: 'project_name',
      type: 'input',
      message: 'What is the name of the app?',
      default() {
        return 'seasann-app';
      },
    });
    return createNewProj(answers.project_name);
  }
  await question();
} else if (args[2] == 'init') {
  initProj();
} else if (args[2] == '--version' || args[2] == '-V') {
  console.log(version);
} else if (args[2] == '--help' || args[2] == '-H') {
  help();
} else {
  help();
}
