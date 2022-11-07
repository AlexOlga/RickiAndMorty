import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Forms from './forms/forms';
import Card from './card/card';
import { ICharacter, TActionReducer, TGlobalState } from '../types';
import { creatCardForm } from '../redux/actions';

type FormsPageProp = {
  cardsForm: ICharacter[];
  creatCardForm: (cardForm: ICharacter) => TActionReducer;
};

const FormsPage = (props: FormsPageProp) => {
  console.log(props.cardsForm);
  return (
    <>
      <Forms callback={props.creatCardForm} />
      <div className="cards-contener">
        {props.cardsForm
          ? props.cardsForm.map((item: ICharacter, index: number) => (
              <Card character={item} key={`${item.name}-${index}`} onClick={() => {}} />
            ))
          : ''}
      </div>
    </>
  );
};
const mapStateToProps = (state: TGlobalState) => {
  return {
    cardsForm: state.form.cardsForm,
  };
};

export default connect(mapStateToProps, {
  creatCardForm,
})(FormsPage);
