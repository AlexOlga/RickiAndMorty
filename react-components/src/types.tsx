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

/*nterface FormProps {
  callback: (a: ICharacter) => void;
}*/

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
  searchQuery?: string;
  searchResults?: Required<ICharacter>[];
  formFilds?: IFormFildsState;
  cardsForm?: ICharacter[];
  typeSorting?: string;
  page?: number;
  lastPage?: number;
  currentPosition?: number | null; //id open card
  out?: number;
  count?: number;
}
type TState = Required<IContext>;

interface IPayload {
  searchQuery?: string;
  searchResults?: Required<ICharacter>[];
  formFilds?: IFormFildsState;
  cardForm?: ICharacter;
  typeSorting?: string;
  currentPosition?: number | null;
  page?: number;
  lastPage?: number;
  out?: number;
  count?: number;
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
  IContext,
  TActionReducer,
  TGlobalContent,
  TState,
};
