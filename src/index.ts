import { help } from './commands/help.js';
import { createNewProj } from './commands/createNewProject.js';
import { getProjName } from './utils/getProjName.js';
import { compile } from './commands/compile.js';
import { version } from './utils/version.js';

const argv = process.argv;

if (argv[2] == '--help') {
    help();
} else if (argv[2] == '--version') {
    console.log(version);
} else if (argv[2] == 'create') {
    const name = await getProjName();
    await createNewProj(name);
} else if (argv[2] == 'compile') {
    if (argv[3] == '--dir') {
        if ( argv[5] == '--cssDir'){
            await compile(argv[4], argv[6]);
        } else {
            await compile(argv[4], 'css');
        }
    } else if (argv[3] == '--cssDir'){
        if ( argv[5] == '--dir'){
            await compile(argv[4], argv[6]);
        } else {    
            await compile(argv[4], 'posts');
        }   
    } 
    else {
        await compile('posts', 'css');
    }
} else {
    help();
}