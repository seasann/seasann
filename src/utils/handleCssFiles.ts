import { parse } from 'path';
import { readFile, appendFile } from 'fs/promises';

/**
 * @param  {string} file
 * Handles every file in the posts directory
 */
export async function handleCssFile(file: string, dir: string) {
    try {
        const content = await readFile(`./${dir}/${file}`);
        const fileWitOutExt = parse(file).name;
        try {
            await appendFile(
                `./app/${fileWitOutExt}.html`,
                `
<style>
${content}
</style>
            `
            );
        } catch (err) {
            throw Error('Create a css directory!');
        }
    } catch (err) {
        console.error(err);
    }
}
