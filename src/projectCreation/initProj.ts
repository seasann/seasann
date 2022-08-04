import { exec } from 'child_process';
import { cwd } from 'process';
let args = process.argv;

export function initProj() {
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
  if (args[3] != '--silent') {
    console.log('Next steps:');
    console.log('     npm i');
  }
  if (args[3] == '--verbose') {
    console.log('To build the app');
    console.log('   npm run build');
    console.log('To start a server');
    console.log('     npm run dev\n');
  }
}
