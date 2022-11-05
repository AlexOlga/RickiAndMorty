import React from 'react';
import { connect } from 'react-redux';
import Forms from './forms/forms';
import Card from './card/card';
//import { useAppContext } from '../reducer';
import { ICharacter, TActionReducer } from '../types';
import { creatCardForm } from '../redux/actions';

type FormsPageProp = {
  cardsForm: ICharacter[];
  creatCardForm: (cardForm: ICharacter) => TActionReducer;
};

const FormsPage = ({ cardsForm, creatCardForm }: FormsPageProp) => {
  // const { state, dispatch } = useAppContext();
  /* const getCardData = (newCharacter: ICharacter) => {
    if (dispatch) dispatch({ type: 'form-cards', payload: { cardForm: newCharacter } });
  };*/
  console.log('cardsForm', cardsForm);
  return (
    <>
      <Forms callback={creatCardForm} />
      <div className="cards-contener">
        {cardsForm
          ? cardsForm.map((item: ICharacter, index: number) => (
              <Card character={item} key={`${item.name}-${index}`} onClick={() => {}} />
            ))
          : ''}

        {/* {state.cardsForm
          ? state.cardsForm.map((item: ICharacter, index: number) => (
              <Card character={item} key={`${item.name}-${index}`} onClick={() => {}} />
            ))
          : ''}*/}
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  console.log('state', state);
  return {
    cardsForm: state.cardsForm.cardsForm,
  };
};

export default connect(mapStateToProps, {
  creatCardForm,
})(FormsPage);
