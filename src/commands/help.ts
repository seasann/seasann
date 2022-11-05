export function help() {
    const message = `
Usage: seasann command || Options
  Commands:
    create: Create a new seasann app
    compile: Compile markdown to html
    
  Options:
    --help: Print this message and exit
    --version: Print version and exit
`;
    console.log(message);
}
