import exec from 'node-async-exec';

/**
 * @param  {string} cmd
 * @param  {string} err
 * Executes a command and catches and error.
 */
export async function execute(cmd: string, err: string) {
    try {
        await exec({
            cmd: cmd,
        });
    } catch {
        throw Error(err);
    }
}
