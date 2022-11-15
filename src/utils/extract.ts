import tar from 'tar';

export async function extract(file: string, err: string) {
    try {
        await tar.x({
            file: file,
        });
    } catch {
        throw Error(err);
    }
}
