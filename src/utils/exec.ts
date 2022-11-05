import exec from 'node-async-exec';

export async function execute(err: string, cmd: string) {
  try {
    await exec({
      cmd: cmd,
    });
  } catch {
    throw Error(err);
  }
}
