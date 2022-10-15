interface ICharacter {
  id?: number;
  name?: string;
  image?: string;
  status?: string;
  species?: string;
  location?: TLocation;
  origin?: TLocation;
}
type TLocation = {
  name: string;
  url: string;
};
/*
Last known location: location.name

First seen in: origin.name
*/

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
