interface ICharacter {
  id?: number;
  name?: string;
  image?: string;
  status?: string;
  species?: string;
}

type CardsProps = {
  data: ICharacter[];
};

type FormFilds = {
  name: HTMLInputElement;
  date: HTMLInputElement;
  gender: HTMLSelectElement;
  img: HTMLInputElement;
  switch: HTMLInputElement;
  check: HTMLInputElement;
};

export { ICharacter, CardsProps, FormFilds };
