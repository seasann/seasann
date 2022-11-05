import inquirer from 'inquirer';

export async function getProjName() {
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
