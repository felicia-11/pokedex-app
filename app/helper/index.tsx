export function capitalizeEachFirstLetter(words: string) {
    return words.replace(/(^\w|\s\w)/g, (m: string) => m.toUpperCase());
};
