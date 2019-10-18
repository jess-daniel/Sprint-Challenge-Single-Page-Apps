import React, {useState, useEffect} from "react";
import {Route} from "react-router-dom";

// import commponents
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import WelcomePage from "./components/WelcomePage";


export default function App() {
  // set character state to empty array
  // const [characters, setCharacters] = useState([]);

  // // make API call and set character state to data
  // useEffect(() => {
  //   axios.get("https://rickandmortyapi.com/api/character/")
  //     .then(res => {
  //       console.log(res.data.results);
  //       setCharacters(res.data.results);
  //     })
  // }, [])

  return (
    <main>
      <Header />
      <Route exact path="/" component={WelcomePage}/>
      <Route path="/" component={CharacterList}/>
    </main>
  );
}
