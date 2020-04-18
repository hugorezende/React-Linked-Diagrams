import React from "react";
import styled from "styled-components";
import Draggable from "react-draggable";

export default function NodeTest(props) {
  //console.log(props);
  function drag(e, data) {
    //console.log(data.deltaX);
    //props.handleMove(data.deltaX);
    //console.log([data.deltaX, data.deltaY]);
    props.handleMove({ id: props.id, position: [data.deltaX, data.deltaY] });
    //props.handleMove(data.deltaX);
  }

  return (
    <Draggable bounds="parent" onDrag={drag}>
      <NodeElement
        style={{ left: props.node.position[0],top: props.node.position[1], }}
      >
        <Title>Agent</Title>
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
