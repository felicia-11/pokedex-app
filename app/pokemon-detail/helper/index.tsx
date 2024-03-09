import { capitalizeEachFirstLetter, replaceCharWithSpaces } from '@/app/helper';

export function formatDetailData(data: any) {
    const types = data.types.map((val: { type: { name: string; }; }) => (
      capitalizeEachFirstLetter(replaceCharWithSpaces(val.type.name, '-'))
    ));
    const stats = data.stats.map((val: { stat: { name: string; }; base_stat: number; }) => ({
      name: capitalizeEachFirstLetter(replaceCharWithSpaces(val.stat.name, '-')),
      value: val.base_stat,
    }));
    const abilities = data.abilities ? data.abilities.map((val: { ability: { name: string; }; }) => (
      capitalizeEachFirstLetter(replaceCharWithSpaces(val.ability.name, '-'))
    )) : null;
    const sprites: {name: string, value: unknown | string}[] = [];
    Object.entries(data.sprites).forEach(([key, value]) => {
      if (value && typeof value === 'string') {
        sprites.push({ name: capitalizeEachFirstLetter(replaceCharWithSpaces(key, '_')), value });
      }
    });
    const indices = data.game_indices.map((val: { version: { name: string; }; }) => (
      capitalizeEachFirstLetter(replaceCharWithSpaces(val.version.name, '-'))
    )).sort();
    const result = {
      name: replaceCharWithSpaces(data.name.toUpperCase(), '-'),
      image: data.sprites.front_default,
      weight: data.weight,
      height: data.height,
      types,
      baseExp: data.base_experience || 0,
      stats,
      abilities,
      sprites,
      indices,
    };

    return result;
};
