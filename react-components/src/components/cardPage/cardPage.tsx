import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import CardContent from './card-content';
import { setCurrentPosition } from '../../redux/searchSlice';

const CardPage = () => {
  const { cardId } = useParams();
  const navigate = useNavigate();
  const searchResults = useAppSelector((state) => state.search.searchResults);
  const dispatch = useAppDispatch();

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
    if (!searchResults) {
      return navigate('/');
    } else {
      const item = searchResults.find((item) => item.id === Number(cardId));

      if (item) {
        dispatch(setCurrentPosition(Number(cardId)));
        setCharacter(item);
      } else {
        return navigate('/');
      }
    }
  }, [cardId, navigate]);

  useEffect(() => {
    return () => {
      dispatch(setCurrentPosition(null));
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
