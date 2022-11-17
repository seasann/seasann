import { downloadTemplate } from 'giget';

/**
 * @param  {string} cmd
 * @param  {string} err
 * Executes a command and catches and error.
 */
export async function downloade(err: string) {
    try {
        await downloadTemplate('github:seasann/seasann-template');
    } catch {
        throw Error(err);
    }
}
