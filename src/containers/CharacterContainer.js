import React from 'react';

class CharacterContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      characters: [],
      selectedCharacterName: ''
    }
  }

  componentDidMount(){
    const url = 'http://hp-api.herokuapp.com/api/characters'

    fetch(url)
    .then(res => res.json())
    .then(characters => this.setState({characters: characters}))
    .catch(err => console.error);
  }
  render(){
    return (
      <article>
      <h1>Hooray for Hogwarts!!!</h1>
      </article>
    );
  }
}

export default CharacterContainer;
