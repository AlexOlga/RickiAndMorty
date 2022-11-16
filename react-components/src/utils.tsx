import { ICharacter } from './types';
const FROM_AZ = 'from A to Z';
const FROM_ZA = 'from Z to A';
const FIRST_ALIVE = 'first Alive';
const FIRST_DEAD = 'first Dead';

function sortAlphabet(a: ICharacter, b: ICharacter) {
  if (a.name && b.name) {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
  }
  return 0;
}
function firstAlive(a: ICharacter, b: ICharacter) {
  if (a.status && b.status) {
    if (a.status === 'Alive' && b.status !== 'Alive') return -1;
    if (b.status === 'Alive' && a.status !== 'Alive') return 1;
  }
  return 0;
}
function firstDead(a: ICharacter, b: ICharacter) {
  if (a.status && b.status) {
    if (a.status === 'Dead' && b.status !== 'Dead') return -1;
    if (b.status === 'Dead' && a.status !== 'Dead') return 1;
  }
  return 0;
}

const sortingData = (arr: Required<ICharacter>[], typeSorting: string) => {
  console.log('arr', arr);
  console.log('typeSorting', typeSorting);
  const arrData = arr;
  switch (typeSorting) {
    case FROM_AZ:
      return arrData.sort(sortAlphabet);

    case FROM_ZA:
      return arrData.sort(sortAlphabet).reverse();

      break;
    case FIRST_ALIVE:
      return arrData.sort(firstAlive);

      break;
    case FIRST_DEAD:
      return arrData.sort(firstDead);
    default:
      return arrData;
  }
};

export { sortAlphabet, firstAlive, firstDead, sortingData };
