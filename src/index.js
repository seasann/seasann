import inquirer from 'inquirer';
import { exec } from "child_process";
import { writeFile } from "fs";

function reMakePkgJson(name){
  let content = `
{
  "name": "${name}",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "build": "node index.js"
    "dev": "node index.js && node express.cjs"
  },
  "keywords": [],
  "author": "",
  "license": "",
  "dependencies": {
    "express": "^4.18.1",
    "inquirer": "^9.0.2",
    "marked": "^4.0.18"
  }
}  
  `
  writeFile('./package.json', content, err => {
    if (err){
      console.log(err);
    }
  })
}

function createNewProj(name){
  exec(`git clone --branch develop https://github.com/micziz/seasann-template.git ${name}`, (error) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
  });
  reMakePkgJson(name)
  console.log(`Done! Project created at ${name}`);
  console.log("Next steps:")
  console.log(`\n     cd ${name}`)
  console.log("     npm i")
  console.log("To run the builder")
  console.log("\n     node .")
  console.log("     node express.cjs\n")

}

function initProj(name){
  exec(`git init`, (error) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
  });
  exec(`git pull https://github.com/micziz/seasann-template.git --allow-unrelated-histories`, (error) => {
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
  console.log("     node express.cjs\n")
}


var args = process.argv;
if (args[2] == "new"){
  async function askNameOfProject() {
    const answers = await inquirer.prompt({
      name: 'project_name',
      type: 'input',
      message: 'What is the name of the website?',
      default() {
        return 'seasann-app';
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
        return 'seasann-app';
      },
    });
  
    return initProj(answers.project_name)
  }
  await askNameOfProject()
}
