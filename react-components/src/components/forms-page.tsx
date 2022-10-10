import React, { Component } from 'react';
import { ICharacter } from '../types';
import Forms from './forms/forms';
import Card from './card/card';

class FormsPage extends Component<Record<string, never>> {
  arrayCard: ICharacter[];
  constructor(props: Record<string, never>) {
    super(props);
    this.getCardData = this.getCardData.bind(this);
    this.arrayCard = [];
  }

  getCardData(newCharacter: ICharacter) {
    this.setState({ card: newCharacter });
    this.arrayCard.push(newCharacter);
  }
  render() {
    return (
      <>
        <Forms colback={this.getCardData} />
        <div className="cards-contener">
          {this.arrayCard.map((item: ICharacter, index: number) => (
            <Card {...item} key={`${item.name}-${index}`} />
          ))}
        </div>
      </>
    );
  }
}

export default FormsPage;
