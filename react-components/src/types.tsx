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
  img?: FileList;
  switch?: boolean;
  check?: boolean;
}
interface IFormFildsState {
  name?: string;
  date?: string;
  status?: string;
  img?: FileList;
  switch?: boolean;
  check?: boolean;
}
interface IContext {
  searchResults?: Required<ICharacter>[];
  formFilds?: IFormFildsState;
  cardsForm?: ICharacter[];
  typeSorting?: string;
  page?: number;
  lastPage?: number;
  currentPosition?: number | null; //id open card
}

interface IPayload {
  searchResults?: Required<ICharacter>[];
  formFilds?: IFormFildsState;
  cardForm?: ICharacter;
  typeSorting?: string;
  currentPosition?: number | null;
  page?: number;
  lastPage?: number;
}
type TActionReducer = {
  type: string;
  payload: IPayload;
};

type TGlobalContent = {
  state: IContext;
  dispatch: React.Dispatch<TActionReducer>;
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
