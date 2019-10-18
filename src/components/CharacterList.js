import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: lightgray;
  border: 1px solid black;
`


export default function CharacterList() {

  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);


  // make API call and set character state to data
  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character/")
      .then(res => {
        console.log(res.data.results);
        setCharacters(res.data.results);
        setSearchResults(res.data.results);
      })
  }, [])

  useEffect(() => {
    setSearchResults(characters.filter(character =>
      character.name.toLowerCase().includes(searchTerm.toLowerCase())
    ))
  }, [searchTerm])

  const handleChange = event => {
    setSearchTerm(event.target.value);
  }

 return (
    <section className="search-form">
      <div>
        <form>
            <input 
            id="name"
            type="text"
            name="textfield"
            placeholder="search"
            value={searchTerm}
            onChange={handleChange}
            />
            <ul>
              {searchResults.map(character => (
                <StyledDiv key={character.id}>
                    <div>
                      <h2>{character.name}</h2>
                      <p>{character.status}</p>
                      <p>{character.species}</p>
                      <p>{character.gender}</p>
                    </div>
                </StyledDiv>
              ))}
            </ul>
        </form>
     </div>
    </section>
  );
}

//   return (
//     <Route exact path="/" render={props => <CharacterList {...props} characters={characters}/>}/>
//   )
// }

//     <section className="character-list">
//       {/* <h2>TODO: `array.map()` over your state here!</h2> */}
//       <div>
//         <h1>Character List</h1>
//         {props.characters.map(character => (
//           <div key={character.id}>
//             <div>
//               <Link to={`/character/${character.id}`}/>
//               <h2>{character.name}</h2>
//               <p>{character.status}</p>
//               <p>{character.species}</p>
//               <p>{character.gender}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
