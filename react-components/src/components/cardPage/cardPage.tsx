import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useAppContext } from '../../reducer';

import CardContent from './card-content';

const CardPage = () => {
  const { state } = useAppContext();
  const { cardId } = useParams();
  const navigate = useNavigate();
  //let character: ICharacter;
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
    if (state.searchResults) {
      if (state.searchResults?.length >= Number(cardId) - 1) {
        setCharacter(state.searchResults[Number(cardId) - 1]);
      } else {
        console.log('fetch');
        fetch(`https://rickandmortyapi.com/api/character/${cardId}`)
          .then((res) => res.json())
          .then((data) => {
            if (data.error) return navigate('/');
            setCharacter(data);
          });
      }
    }
  }, [cardId, state.searchResults, navigate]);

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
