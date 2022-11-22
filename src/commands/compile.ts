// Compile Command
import { readdir } from 'fs/promises';
import { handleCssFile } from '../utils/handleCssFiles';
import { getNameWithNoExt } from '../utils/getNameWithNoExt';
import { handleFile } from '../utils/handleFile';

export async function compile() {
    const files = await readdir('./posts');
    files.forEach(async (element) => {
        await handleFile(element);
        const nameWithNoExt = await getNameWithNoExt(element);
        const cssFiles = await readdir('./css');
        cssFiles.forEach(async (cssElement) => {
            const cssNameWithNoExt = await getNameWithNoExt(cssElement);
            if (cssNameWithNoExt == nameWithNoExt) {
                handleCssFile(cssElement);
            }
        });
    });
}
