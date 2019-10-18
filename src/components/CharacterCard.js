import React from "react";

export default function CharacterCard(props) {
  const character = props.characters.find(
    char => char.id === props.match.params.id
  );
  return ( 
    <div>
      <h1>{character.name}</h1>;
    </div>
  )
}
