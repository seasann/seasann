import { exec } from 'child_process';
import { detect } from 'detect-package-manager';
let args = process.argv;

export function createNewProj(name: any) {
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
  if (args[3] != '--silent') {
    console.log('Next steps:');
    console.log(`\n     cd ${name}`);
    detect()
      .then(pm => {
        if (pm == "npm"){
          console.log('     npm install');      
        } else if (pm == "yarn"){
          console.log('     yarn install')
        } else if (pm == "pnpm"){
          console.log('     pnpm install')
        }
    })
  }
  if (args[3] == '--verbose') {
    console.log('\nTo build the app');
    detect()
      .then(pm => {
        if (pm == "npm"){
          console.log('\n       npm run build');
        } else if (pm == "yarn"){
          console.log('\n       yarn build');
        } else if (pm == "pnpm"){
          console.log('\n       pnpm build');
        }
    })
    console.log('\nTo start a server');
    detect()
      .then(pm => {
        if (pm == "npm"){
          console.log('\n       npm run dev');
        } else if (pm == "yarn"){
          console.log('\n       yarn dev');
        } else if (pm == "pnpm"){
          console.log('\n       pnpm dev');
        }
    })
  }
}
