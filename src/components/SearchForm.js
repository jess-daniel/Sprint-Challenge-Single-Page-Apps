import React, { useState, useEffect } from "react";

export default function SearchForm(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchresults] = useState([]);

  useEffect(() => {
    const results = props.characters.filter(character => {
      character.name.toLowerCase().includes(searchTerm.toLowerCase())
    })
    setSearchresults(results);
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
              {searchResults.map(result => (
                <li key={result}>{result}</li>
              ))}
            </ul>
        </form>
     </div>
    </section>
  );
}
