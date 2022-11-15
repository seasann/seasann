import inquirer from 'inquirer';

/**
 * Asks the user the name of the app
 */
export async function getProjName() {
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
