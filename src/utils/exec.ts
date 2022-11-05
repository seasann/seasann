import exec from 'node-async-exec';

export async function execute(cmd: string, err: string) {
    try {
        await exec({
            cmd: cmd,
        });
    } catch {
        throw Error(err);
    }
}
