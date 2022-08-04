import inquirer from 'inquirer';
import { createNewProj } from './projectCreation/createNewProject';
import { initProj } from './projectCreation/initProj';
import { help } from './functions/help';
const version = 'Seasann v0.5.0';
const args = process.argv;
if (args[2] == 'new') {
    async function askNameOfProject() {
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
    await askNameOfProject();
}
else if (args[2] == 'init') {
    async function askNameOfProject() {
        const answers = await inquirer.prompt({
            name: 'project_name',
            type: 'input',
            message: 'What is the name of the app?',
            default() {
                return 'seasann-app';
            },
        });
        return initProj();
    }
    await askNameOfProject();
}
else if (args[2] == '--version' || args[2] == '-V') {
    console.log(version);
}
else if (args[2] == '--help' || args[2] == '-H') {
    help();
}
else {
    help();
}
