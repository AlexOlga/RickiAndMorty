import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
// import { useAppContext } from '../../reducer';
import { connect } from 'react-redux';
import CardContent from './card-content';
import { setCurrentPosition } from '../../redux/actions';
import { TActionReducer, ICharacter, TGlobalState } from '../../types';

type CardPageProps = {
  setCurrentPosition: (a: number | null) => TActionReducer;
  searchResults: Required<ICharacter>[];
};

const CardPage = (props: CardPageProps) => {
  //  const { state, dispatch } = useAppContext();
  const { cardId } = useParams();
  const navigate = useNavigate();
  const DefaulCharacter = {
    name: ' ',
    image: ' ',
    status: ' ',
    species: ' ',
    location: {
      name: ' ',
      url: ' ',
    },
    origin: {
      name: ' ',
      url: ' ',
    },
  };
  const [character, setCharacter] = useState(DefaulCharacter);
  useEffect(() => {
    if (!props.searchResults) {
      return navigate('/');
    } else {
      const item = props.searchResults.find((item) => item.id === Number(cardId));

      if (item) {
        //dispatch({ type: 'current-position', payload: { currentPosition: Number(cardId) } });
        props.setCurrentPosition(null);
        setCharacter(item);
      } else {
        return navigate('/');
      }
    }
  }, [cardId, props.searchResults, navigate]);

  useEffect(() => {
    return () => {
      // dispatch({ type: 'current-position', payload: { currentPosition: null } });
      props.setCurrentPosition(null);
    };
  }, []);

  const searchResult = character ? <CardContent character={character} /> : <p> </p>;

  return (
    <>
      {searchResult}
      <Link to="/" className="link-back">
        Back
      </Link>
    </>
  );
};
const mapStateToProps = (state: TGlobalState) => {
  // console.log('state', state);
  return {
    searchResults: state.search.searchResults,
    currentPosition: state.search.currentPosition,
  };
};

export default connect(mapStateToProps, { setCurrentPosition })(CardPage);
