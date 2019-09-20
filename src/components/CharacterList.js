import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row} from 'reactstrap';
import CharacterCard from "./CharacterCard";

export default function CharacterList(props) {
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
            <CharacterCard
            name = {person.name}
            status ={person.status}
            species = {person.species}
            gender = {person.gender} />
          )
        })}
    </Row>
  </Container> 
 );
}
