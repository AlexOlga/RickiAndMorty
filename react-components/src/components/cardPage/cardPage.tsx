import React from 'react';
import { useParams } from 'react-router-dom';
import { useAppContext } from '../../reducer';

/* type CardProps = {
  character: ICharacter;
  onClick: () => void;
};  */
const CardPage = () => {
  const { state } = useAppContext();
  const character = {
    id: 101,
    name: 'Ivanov Ivan',
    image: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg',
    status: 'status test',
    species: 'species test',
  };
  const { params } = useParams();
  console.log('params', params);
  return (
    <div className="character_card">
      <h3 className="character_name">{character.name}</h3>
      <img className="character_img" src={character.image} alt="Character image" />
      <div className="text-contener">
        <p>
          <span className="character_category">Status: </span> {character.status}
        </p>
        <p>
          <span className="character_category">Species: </span>
          {character.species}
        </p>
      </div>
    </div>
  );
};

export default CardPage;
