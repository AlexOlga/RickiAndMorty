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

type CardsProps = {
  data: ICharacter[];
};

type TCallbackRenderCard = (a: ICharacter) => void;

interface IFormFilds {
  name?: string;
  date?: string;
  status?: string;
  img?: FileList;
  switch?: boolean;
  check?: boolean;
}

export { ICharacter, CardsProps, TCallbackRenderCard, IFormFilds };
