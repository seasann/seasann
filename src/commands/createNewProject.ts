import exec from 'node-async-exec';
let args = process.argv;

export async function createNewProj(name: string) {
  if (args[2] == '--ts') {
    try {
      await exec({
        cmd: `curl -sL https://github.com/seasann/seasann-template-ts/archive/refs/heads/main.tar.gz -o main.tar.gz`,
      });
    } catch {
      throw Error(
        'Curl is not installed, or you do not have an internet connection active.'
      );
    }
    try {
      await exec({ cmd: `tar -xf main.tar.gz` });
    } catch {
      throw Error('Tar is not installed.');
    }
    try {
      await exec({ cmd: `mv seasann-template-ts-main ${name}` });
    } catch {
      throw Error('Error in renaming your project.');
    }
  } else {
    try {
      await exec({
        cmd: `curl -sL https://github.com/seasann/seasann-template/archive/refs/heads/main.tar.gz -o main.tar.gz`,
      });
    } catch {
      throw Error(
        'Curl is not installed, or you do not have an internet connection active.'
      );
    }
    try {
      await exec({ cmd: `tar -xf main.tar.gz` });
    } catch {
      throw Error('Tar is not installed.');
    }
    try {
      await exec({ cmd: `mv seasann-template-ts-main ${name}` });
    } catch {
      throw Error('Error in renaming your project.');
    }
  }
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
