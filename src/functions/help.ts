export function help() {
    console.log('Usage: node . command [options]');
    console.log('   --help, -h: Print this messeage and exit');
    console.log('   --version, -V: Print version and exit');
    console.log('   new: Create a new project');
    console.log(
      '   init: Initialize new project in the current working directory'
    );
}