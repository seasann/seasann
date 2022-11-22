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
    await compile();
} else {
    help();
}
