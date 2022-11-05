import { parse } from 'path';
import { readFile, writeFile } from 'fs/promises';
import { micromark } from 'micromark';

export async function handleFile(file: string) {
    try {
        const content = await readFile(`./posts/${file}`);
        const compiled = micromark(content);
        const fileWitOutExt = parse(file).name;
        try {
            await writeFile(`./app/${fileWitOutExt}.html`, compiled);
        } catch (err) {
            throw Error('Create a app directory!');
        }
    } catch (err) {
        console.error(err);
    }
}
