import { help } from './commands/help.js';
import { createNewProj } from './commands/createNewProject.js';
import { getProjName } from './utils/getProjName.js';

const argv = process.argv;

if (argv[2] == '--help') {
  help();
} else if (argv[2] == '--version') {
  console.log('1.0.0-beta');
} else {
  let name = await getProjName();
  await createNewProj(name);
}
