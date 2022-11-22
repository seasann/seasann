import { rename } from 'fs/promises';

/**
 * @param  {string} dir
 * Renames downloaded directory to another one!
 */
export async function renameDir(dir: string) {
    try {
        await rename('./seasann-seasann-template', `./${dir}`);
    } catch {
        throw Error('Error renaming your project.');
    }
}
