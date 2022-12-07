import { renameDir } from '../utils/rename.js';
import { download } from '../utils/download.js';

/**
 * @param  {string} name
 * Creates a new project
 */
export async function createNewProj(name: string) {
    await download(
        'Error downloading template.'
    );
    await renameDir(name);
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
