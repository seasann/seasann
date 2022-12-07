export function help() {
    const message = `
Usage: seasann <command> [options]
  Commands:
    create: Create a new seasann app
    compile: Compile markdown to html
    
  Options:
    --help: Print this message and exit
    --version: Print version and exit
    --dir [director]: Directory that holds markdown. If not passed will be posts
`;
    console.log(message);
}
