import { parse } from 'path';

export async function getNameWithNoExt(name: string) {
    const parsedPath = parse(name);
    const nameWithNoExt = parsedPath.name;
    return nameWithNoExt;
}
