import React, { useState, useEffect, useRef } from "react";
import NodeTest from "./Node";
import Link from "./Link";
import Node from "./Node";

export default function Canvas(props) {
  const [canvasDivSize, setCanvasDivSize] = useState(0);
  const divCanvas = useRef(null);
  var initLink = [];

  props.nodes.map(node => {
    //Check exists link for other node
    if (node.linkTo) {
      //For each link create variable
      node.linkTo.forEach(element => {
        let copyValInit = [...node.position];
        let copyValEnd = [...props.nodes.find(x => x.id === element).position];
        initLink.push({
          id: node.id,
          positionInit: copyValInit,
          positionEnd: copyValEnd,
          linkTo: element
        });
      });
    }
  });

  const [linkpos, setLinkpos] = useState([]);

  useEffect(() => {
    setLinkpos([...initLink]);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setCanvasDivSize(divCanvas.current.offsetWidth);
      console.log(divCanvas.current.offsetWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [divCanvas]);

  function handleMoveNode(e) {
    let newLinks = [...linkpos];
    newLinks
      .filter(x => x.id === e.id)
      .map(node => {
        node.positionInit[0] += e.position[0];
        node.positionInit[1] += e.position[1];
      });

    newLinks
      .filter(x => x.linkTo === e.id)
      .map(node => {
        node.positionEnd[0] += e.position[0];
        node.positionEnd[1] += e.position[1];
      });

    setLinkpos(newLinks);
  }
  return (
    <div
      ref={divCanvas}
      style={{ width: canvasDivSize, height: 600, position: "relative" }}
    >
      <svg viewBox={`0 0 ${canvasDivSize} 600`} style={{ position: "absolute", zIndex: 0 }}>
        {linkpos.map((link, index) => (
          <Link
            key={link.id + "." + link.linkTo}
            position={{
              positionInit: link.positionInit,
              positionEnd: link.positionEnd
            }}
          />
        ))}
      </svg>
      {props.nodes.map(node => (
        <Node handleMove={handleMoveNode} node={node} id={node.id}></Node>
      ))}
    </div>
  );
}
