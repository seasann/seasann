import inquirer from 'inquirer';
import { exec } from "child_process";


function createNewProj(name){
  exec(`git clone https://github.com/micziz/seasann-template ${name}`, (error) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
  });
  console.log(`Done! Project created at ${name}`);
  console.log("Next steps:")
  console.log(`\n     cd ${name}`)
  console.log("     npm i")
  console.log("To run the builder")
  console.log("\n     node .")
  console.log("     node express.js\n")

}

function initProj(name){
  exec(`git init`, (error) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
  });
  exec(`git pull https://github.com/micziz/seasann-template --allow-unrelated-histories`, (error) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
  });
  console.log(`Done! Project initialized at ${name}`);
  console.log("Next steps:")
  console.log("     npm i")
  console.log("To run the builder")
  console.log("\n     node .")
  console.log("     node express.js\n")
}


var args = process.argv;
if (args[2] == "new"){
  async function askNameOfProject() {
    const answers = await inquirer.prompt({
      name: 'project_name',
      type: 'input',
      message: 'What is the name of the website?',
      default() {
        return 'Player';
      },
    });
  
    return createNewProj(answers.project_name)
  }

  await askNameOfProject()
} else if (args[2] == "init"){
  async function askNameOfProject() {
    const answers = await inquirer.prompt({
      name: 'project_name',
      type: 'input',
      message: 'What is the name of the website?',
      default() {
        return 'Player';
      },
    });
  
    return initProj(answers.project_name)
  }
  await askNameOfProject()
}
