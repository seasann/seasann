import { rename, rm } from 'fs/promises';

/**
 * @param  {string} dir
 * Renames downloaded directory to another one!
 */
export async function renameDir(dir: string) {
    try {
        await rename('./seasann-template-main', `./${dir}`);
    } catch {
        throw Error('Error renaming your project.');
    }
}

/**
 * Removes ./main.tar.gz
 */
export async function rmFile() {
    try {
        await rm('./main.tar.gz');
    } catch {
        throw Error('Error removing tar file');
    }
}
