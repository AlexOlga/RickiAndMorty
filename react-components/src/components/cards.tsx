import React, { Component } from 'react';
interface ICharacter {
  id?: number;
  name?: string;
  image?: string;
}
// https://rickandmortyapi.com/api/character
type CardsState = {
  data: ICharacter[];
};

class Cards extends Component<ICharacter, CardsState> {
  state = {
    data: [],
  };

  componentDidMount() {
    fetch('https://rickandmortyapi.com/api/character')
      .then((res) => res.json())
      .then((data) => {
        console.log('data', data);
        console.log('data results', data.results);
        this.setState({ data: data.results });
      });
  }

  render() {
    const { data } = this.state;
    console.log('state', data);
    return (
      <div>
        <h1>Character:</h1>
        {/* <ul className="posts">
            {data.map(({ id, title }: IPost) =>
              <li key={id}><Link to={`/posts/${id}`}>{title}</Link></li>
            )}
          </ul>*/}
      </div>
    );
  }
}

export default Cards;
