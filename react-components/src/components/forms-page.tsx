import React from 'react';
import { connect } from 'react-redux';
import Forms from './forms/forms';
import Card from './card/card';
import { ICharacter, TActionReducer } from '../types';
import { creatCardForm } from '../redux/actions';

type FormsPageProp = {
  cardsForm: ICharacter[];
  creatCardForm: (cardForm: ICharacter) => TActionReducer;
};

const FormsPage = ({ cardsForm, creatCardForm }: FormsPageProp) => {
  return (
    <>
      <Forms callback={creatCardForm} />
      <div className="cards-contener">
        {cardsForm
          ? cardsForm.map((item: ICharacter, index: number) => (
              <Card character={item} key={`${item.name}-${index}`} onClick={() => {}} />
            ))
          : ''}
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    cardsForm: state.form.cardsForm,
  };
};

export default connect(mapStateToProps, {
  creatCardForm,
})(FormsPage);
