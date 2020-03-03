import React from 'react';

const CharacterDetail = (props) => {
  if(!props.character)return null;
  return(
  <article>
  <p>{props.character.name}</p>
  <p>{props.character.house}</p>
  <p><img src={props.character.image}/></p>

  </article>
 )
}
export default CharacterDetail;
