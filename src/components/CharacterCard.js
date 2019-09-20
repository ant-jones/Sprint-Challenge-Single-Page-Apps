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
    <Col xs="6" sm="4" key = {props.id}>
      
      <Card>
          
          <h2>My name is {props.name}</h2>
          
          <h5> {props.gender}, I was born in {props.birthday}, I have {props.eyes} eyes</h5>
           
      </Card>
      
    </Col>
  );
};

