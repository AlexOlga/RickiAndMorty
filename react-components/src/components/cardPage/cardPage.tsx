import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useAppContext } from '../../reducer';

import CardContent from './card-content';

const CardPage = () => {
  const { state, dispatch } = useAppContext();
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
    if (!state.searchResults) {
      return navigate('/');
    } else {
      const item = state.searchResults.find((item) => item.id === Number(cardId));

      if (item) {
        dispatch({ type: 'current-position', payload: { currentPosition: Number(cardId) } });
        setCharacter(item);
      } else {
        return navigate('/');
      }
    }
  }, [cardId, state.searchResults, navigate, dispatch]);

  useEffect(() => {
    return () => {
      dispatch({ type: 'current-position', payload: { currentPosition: null } });
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

export default CardPage;
