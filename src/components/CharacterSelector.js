import React from 'react';

const CharacterSelector = (props) => {
  const options = props.characters.map(character => {
    return <option value={character.name} key={character.name}>{character.name}</option>
  })
  function handleChange(event){
    props.onCharacterSelected(event.target.value)
  }

return(
  <select id="character-selector"
  defaultValue="default" onChange={handleChange}>
  <option disabled value="default">Select a Character</option>
  { options }
  </select>
)

}

export default CharacterSelector
