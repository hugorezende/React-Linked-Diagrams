import React, { useState } from "react";
import styled from "styled-components";
import Draggable from "react-draggable";

export default function Node(props) {
  const [links, setLinks] = useState([]);

  function drag(e, data) {

    //console.log(data);
    //console.log([data.deltaX, data.deltaY]);
    //props.handleMove({ id: props.id, position: [data.deltaX, data.deltaY] });
    //props.handleMove(data.deltaX);
  }

  function test() {
    setLinks();
  }
  const position = {...props.position};
  return (
    <Draggable bounds="parent" onDrag={drag}>
        
      <NodeElement >
      <div>{props.position[0]}</div>
        <Title>Agent</Title>

        <Parameters>
          {props.parameters.map((params, index) => (
            <div key={index}>{params}</div>
          ))}
        </Parameters>
        <button onClick={test}>Add Node</button>
      </NodeElement>
    </Draggable>
  );
}
const NodeElement = styled.div`
  cursor: move;
  position: absolute;
  width: 150px;
  background-color: rgba(200, 200, 200, 0.7);
  border-radius: 5px;
  padding: 5px 10px;
  color: #fff;
  top: ${props => props.yPos}px;
  left: ${props => props.xPos}px;
  border: solid 2px #fff;
`;

const Parameters = styled.div`
  color: #000;
  font-size: 12px;
  div {
    margin: 3px 0;
  }
`;

const Title = styled.div`
  color: #000;
  font-size: 14px;
  font-weight: 700;
  div {
    margin: 3px 0;
  }
`;
