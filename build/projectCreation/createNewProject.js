import { exec } from 'child_process';
let args = process.argv;
export function createNewProj(name) {
    exec(`git clone https://github.com/micziz/seasann-template.git ${name}`, (error) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
    });
    console.log(`Done! Project created at ${name}`);
    if (args[3] != '--silent') {
        console.log('Next steps:');
        console.log(`\n     cd ${name}`);
        console.log('     npm i');
    }
    if (args[3] == '--verbose') {
        console.log('\nTo build the app');
        console.log('\n       npm run build');
        console.log('\nTo start a server');
        console.log('\n       npm run dev\n');
    }
}
