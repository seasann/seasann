import { rename, rm } from 'fs/promises';

export async function renameDir(name: string) {
    try {
        await rename('./seasann-template-main', `./${name}`);
    } catch {
        throw Error('Error renaming your project.');
    }
}

export async function rmFile() {
    try {
        await rm('./main.tar.gz');
    } catch {
        throw Error('Error removing tar file');
    }
}
