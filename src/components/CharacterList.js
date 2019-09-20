import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row} from 'reactstrap';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [char, setChar] = useState([])
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get("https://rickandmortyapi.com/api/character/")
    .then(response => {
      console.log(response.data.results)
      const char = response.data.results;
      setChar(char);
    })
    .catch(error =>{
      console.log("Error no Data", error)
    })
  }, []);

  return (
    <Container className="character-list">
      <Row>
      {/* <h2>TODO: `char.map()` over your state here!</h2> */}
    
    {char.map(person => {

      return(
        <div key={person.id}>
          <h2>Name: {person.name}</h2>
        
          <p>Status: {person.status}</p>
        
          <p>Species: {person.species}</p>
        
          <p>Gender: {person.gender}</p>
        </div>
      )
    })}
    </Row>
  </Container> 
 );
}