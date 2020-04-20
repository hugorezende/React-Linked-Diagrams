import React from "react";
import styled from "styled-components";
import Draggable from "react-draggable";

export default function Node(props) {
  function drag(e, data) {
    props.handleMove({ id: props.id, position: [data.deltaX, data.deltaY] });
  }

  return (
    <Draggable bounds="parent" onDrag={drag}>
      <NodeElement width={props.width ? props.width : 180}
        style={{ left: props.node.position[0], top: props.node.position[1] }}
      >
        <Title>{props.node.title}</Title>
        <Parameters>
          {props.node.parameters.map((params, index) => (
            <div key={index}>{params}</div>
          ))}
        </Parameters>
      </NodeElement>
    </Draggable>
  );
}

const NodeElement = styled.div`
  cursor: move;
  position: absolute;
  width: ${props => props.width}px;
  box-sizing:border-box;
  background-color: rgba(200, 200, 200, 0.7);
  border-radius: 5px;
  padding: 15px;
  color: #fff;
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
