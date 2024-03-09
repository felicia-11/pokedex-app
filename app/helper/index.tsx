export function capitalizeEachFirstLetter(words: string) {
    return words.replace(/(^\w|\s\w)/g, (m: string) => m.toUpperCase());
};

export function replaceCharWithSpaces(words: string, char: string) {
    return words.replaceAll(char, ' ');
};
