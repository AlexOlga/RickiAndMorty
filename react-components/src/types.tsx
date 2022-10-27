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

interface FormProps {
  callback: (a: ICharacter) => void;
}

interface IFormFilds {
  name?: string;
  date?: string;
  status?: string;
  gender?: string;
  img?: FileList;
  switch?: boolean;
  check?: boolean;
}
interface IContext {
  search?: string;
  formFilds?: IFormFilds;
  cardsForm?: ICharacter[];
}
interface IPayload {
  search?: string;
  formFilds?: IFormFilds;
  cardForm?: ICharacter;
}
type TActionReducer = {
  type: string;
  payload: IPayload;
};

type TGlobalContent = {
  state: IContext;
  dispatch?: React.Dispatch<TActionReducer>;
};

export {
  ICharacter,
  CardsProps,
  TCallbackRenderCard,
  IFormFilds,
  FormProps,
  IContext,
  TActionReducer,
  TGlobalContent,
};
