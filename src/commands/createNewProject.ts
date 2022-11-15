import { renameDir, rmFile } from '../utils/renamdAndRm.js';
import { execute } from '../utils/exec.js';
import { extract } from '../utils/extract.js';

/**
 * @param  {string} name
 * Creates a new project
 */
export async function createNewProj(name: string) {
    await execute(
        'curl -sL https://github.com/seasann/seasann-template/archive/refs/heads/main.tar.gz -o main.tar.gz',
        'Error downloading template. You may not have curl installed'
    );
    await extract(
        'main.tar.gz',
        'Error unzipping the dowloaded template. You may not have tar installed'
    );
    await renameDir(name);
    await rmFile();
    console.log(`Done! Project created at ${name}`);
    const userAgent = process.env.npm_config_user_agent;
    console.log('Next steps:');

    if (userAgent) {
        if (userAgent.startsWith('yarn')) {
            console.log(`
      cd ${name}
      yarn install
      `);
        } else if (userAgent.startsWith('pnpm')) {
            console.log(`
      cd ${name}
      pnpm install
      `);
        } else {
            console.log(`
      cd ${name}
      pnpm install
      `);
        }
    } else {
        // If no user agent is set, assume npm
        console.log(`
      cd ${name}
      npm install
    `);
    }
}
