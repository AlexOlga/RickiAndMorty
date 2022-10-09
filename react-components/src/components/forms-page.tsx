import React, { Component } from 'react';
import { ICharacter } from '../types';
import Forms from './forms/forms';
import Card from './card/card';

class FormsPage extends Component<Record<string, never>> {
  arrayCard: ICharacter[];
  constructor(props: Record<string, never>) {
    super(props);
    this.greet = this.greet.bind(this);
    this.arrayCard = [];
  }

  greet(newCharacter: ICharacter) {
    this.setState({ card: newCharacter });
    this.arrayCard.push(newCharacter);
  }
  render() {
    return (
      <>
        <Forms greet={this.greet} />
        <div>
          {this.arrayCard.map((item: ICharacter, index: number) => (
            <Card {...item} key={`${item.name}-${index}`} />
          ))}
        </div>
      </>
    );
  }
}

export default FormsPage;
