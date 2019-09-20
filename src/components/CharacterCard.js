import React from "react";
import styled from "styled-components";
import { Col } from 'reactstrap';


const Card = styled.div`
background-color: lightgrey;
color: black;
width: 350px;
max-height: 800px;
flex-direction: column;
justify-content: space-between;
align-items: center;
margin: 20px;
`;

export default function CharacterCard(props) {
  


  return (
    <Col xs="6" sm="4">
      
      <Card>
      <div key={props.id}>
              <h2>Name: {props.name}</h2>
            
              <p>Status: {props.status}</p>
            
              <p>Species: {props.species}</p>
            
              <p>Gender: {props.gender}</p>
            </div>
          
      </Card>
      
    </Col>
  );
};

