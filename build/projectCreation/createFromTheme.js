import { exec } from 'child_process';
export function createNewProjFromTheme(name) {
    exec(`git clone https://github.com/${name}.git`, (error) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        return;
    });
}
