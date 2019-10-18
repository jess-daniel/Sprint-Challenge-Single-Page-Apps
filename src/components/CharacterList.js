import React from "react";
import {Link} from "react-router-dom";


export default function CharacterList(props) {
  // // TODO: Add useState to track data from useEffect

  // useEffect(() => {
  //   // TODO: Add API Request here - must run in `useEffect`
  //   //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  // }, []);

  return (
    <section className="character-list">
      {/* <h2>TODO: `array.map()` over your state here!</h2> */}
      <div>
        <h1>Character List</h1>
        {props.characters.map(character => (
          <div key={character.id}>
            <div>
              <Link to={`/character/${character.id}`}/>
              <h2>{character.name}</h2>
              <p>{character.status}</p>
              <p>{character.species}</p>
              <p>{character.gender}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
