// eslint-disable-next-line import/extensions
import data from './data/pokemon/pokemon.js';

export const pokemons = data.pokemon;

// Función de imprimir toda la data
// console.log(pokemons);
// eslint-disable-next-line array-callback-return

// Función de filtrado de data por tipo//
export const filterByType = (type) => { // type = 'poison'
  const pokemonsByType = pokemons.filter((pokemon) => pokemon.type.includes(type));

  return pokemonsByType;
};

// eslint-disable-next-line no-console
// console.log(filterByType('poison'));
// Función de ordenado alfabeticamente
export const changeOrder = (x, y) => {
  const myorderlist = pokemons.sort((a, b) => {
    if (a.name > b.name) {
      const primer = x;
      return primer;
    }
    if (a.name < b.name) {
      const second = y;
      return second;
    }
    return 0;
  }); return myorderlist;
};
// console.log(changeOrder(1, -1));

// Función de Ordenado 1-251
export const numberedList = (x, y) => {
  const numberedOrder = pokemons.sort((a, b) => {
    if (a.num > b.num) {
      const orderDefine = x;
      return orderDefine;
    }
    if (a.num < b.num) {
      const orderDefinetwo = y;
      return orderDefinetwo;
    }
    return 0;
  }); return numberedOrder;
};
// console.log(numberedList(1, -1));

export const filterByRarity = (pokemonrarity) => {
  // eslint-disable-next-line max-len
  const pokemonsRarity = pokemons.filter((pokemon) => pokemon.pokemon_rarity.includes(pokemonrarity));

  return pokemonsRarity;
};
// console.log(filterByRarity('legendary'));
