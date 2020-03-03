import React from 'react';
import CharacterSelector from '../components/CharacterSelector';
import CharacterDetail from '../components/CharacterDetail';

class CharacterContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      characters: [],
      selectedCharacterName: ''
    }
    this.handleCharacterSelected = this.handleCharacterSelected.bind(this)
  }
  handleCharacterSelected(name){
    this.setState({ selectedCharacterName: name })
  }

  componentDidMount(){
    const url = 'http://hp-api.herokuapp.com/api/characters'

    fetch(url)
    .then(res => res.json())
    .then(characters => this.setState({characters: characters}))
    .catch(err => console.error);
  }

  getCharacterSelected(){
    const selectedCharacter = this.state.characters.find(character => {
      return character.name === this.state.selectedCharacterName
    })
    return selectedCharacter
  }
  render(){
    return (
      <article>
      <h1>Hooray for Hogwarts!!!</h1>
      <CharacterSelector characters={ this.state.characters } onCharacterSelected={this.handleCharacterSelected}/>
      <CharacterDetail character={ this.getCharacterSelected() }/>
      </article>
    );
  }
}

export default CharacterContainer;
