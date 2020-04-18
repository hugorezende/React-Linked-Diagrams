import React, { useState, useEffect } from "react";
import NodeTest from "./pages/NodeTest";
import Link from "./components/diagrams/Link";

export default function ComponentTest(props) {
  var initLink = [];

  props.nodes.map(node => {
    //Check exists link for other node
    if (node.linkTo) {
      //For each link create variable
      node.linkTo.forEach(element => {
        let copyValInit = [...node.position];
        let copyValEnd = [
          ...props.nodes.find(x => x.id === element).position
        ];
        initLink.push({
          id: node.id,
          positionInit: copyValInit,
          positionEnd: copyValEnd,
          linkTo: element
        });
      });

      //initLink.push({positionEnd:copyValEnd});
    }
  });

  const [linkpos, setLinkpos] = useState([]);

  //console.log("a", linkpos);
  useEffect(() => {
    setLinkpos([...initLink]);
  }, []);
  var linkPosition = props.nodes[2].position[0];
  function handle(e) {
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
    <div style={{ width: 800, height: 600 }}>
      <svg viewBox={`0 0 800 600`} style={{ position: "absolute", zIndex: 0 }}>
        {linkpos.map((link, index) => (
          <Link
            key={link.id}
            position={{
              positionInit: link.positionInit,
              positionEnd: link.positionEnd
            }}
          />
        ))}
      </svg>
      {props.nodes.map(node => (
        <NodeTest handleMove={handle} node={node} id={node.id}></NodeTest>
      ))}
      <div>
        {linkpos.length > 0
          ? linkpos[0].positionEnd
          : props.nodes[2].position[0]}
      </div>
    </div>
  );
}
