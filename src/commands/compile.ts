import { readdir } from 'fs/promises';
import { handleFile } from '../utils/handleFile';

export async function compile() {
  let files = await readdir('./posts');
  files.forEach(async (element) => {
    await handleFile(element);
  });
}
