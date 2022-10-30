import { ICharacter } from './types';

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

export { sortAlphabet, firstAlive, firstDead };
