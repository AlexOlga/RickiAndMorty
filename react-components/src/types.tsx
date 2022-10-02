interface ICharacter {
  id?: number;
  name?: string;
  image?: string;
  status?: string;
  species?: string;
}

type CardsState = {
  data: ICharacter[];
};

export { ICharacter, CardsState };
