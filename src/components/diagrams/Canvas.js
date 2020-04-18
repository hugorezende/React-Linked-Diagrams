import React, { useState, useEffect, useContext } from "react";

import styled from "styled-components";
import Node from "./Node";
import Link from "./Link";

export default function Canvas(props) {
  let width = props.size.width;
  let height = props.size.height;

  //const [links, setLinks] = useState([]);
  // const [nodes, setNodes] = useState([]);
  // const [testvar, setTestvar] = useState(null);

  //const testsss =  useContext(NodesContext);
  var linksVar= [ ...props.nodes ]; 

  // props.nodes.map((node, index) => {
  //   if (node.linkTo > 0) {
  //     var link = {
  //       id: node.id,
  //       positionInit: node.position,
  //       positionEnd: props.nodes.find(x => x.id === node.linkTo).position,
  //       linkTo: node.linkTo
  //     };
  //     linksVar.push(link);
  //   }
  // });
  console.log("ssss")
  
  var test = {...props.test};
  var testPos = [...props.testPos];


  console.log("before change")
  console.log(test.name)
  console.log(props.test.name)

  // change the variable
  


  //linksVar = linksVar[2]
  
  useEffect(() => {
      //console.log("-------}",linksVar);
    //console.log("sadsadsa",linksVar[0].id);
    //setLinks(linksVar)
    // setNodes([]);
    // console.log("INITIAL", props.nodes[2].position);
    // var t = [];
    // nodesSS.map((node, index) => {
    //   if (node.linkTo > 0) {
    //     var link = {
    //       id: node.id,
    //       positionInit: node.position,
    //       positionEnd: props.nodes.find(x => x.id === node.linkTo).position,
    //       linkTo: node.linkTo
    //     };
    //    t.push(link);
    //   }
    // });
    // setLinks(t);
    // console.log("Firts usefe",t);
  }, []);

  // useEffect(() => {
  //   console.log("LINKS", links);
  // }, [links,nodes]);



  function handleMoveNode(e) {

  const newPos = [...testPos];
  
  newPos[0] = newPos[0]+e.position[0];
  testPos = newPos;

  //console.log("before->",newPos)
  //console.log("before->",props.testPos)
  //console.log("after change")
  //console.log("local->",test)
   
    const newLinks = [...linksVar];
    newLinks[2].position[0] =  newLinks[2].position[0]+ e.position[0];
    linksVar = newLinks;
    console.log("new->",newLinks[2].position[0])
    console.log("Nodes->",props.nodes[2].position[0])
    
    //  newLinks = [...linksVar];
    // newLinks[2].position[0] =  newLinks[2].position[0]+ e.position[0];
    // linksVar = newLinks;
    // console.log("porps->", newLinks[2].position[0] );
    // console.log("original->", props.nodes[2].position[0] )
  

    // console.log("links",linksVar[2].position[0]);
    // console.log("newVar",newLinks[2].position[0]);
    
    //newVar[2].position[0] =newVar[2].position[0] + e.position[0];
    //newVar[2].position[0] = {...newVar};

    //linksVar = newVar;
    //linksVar[2].position[0] +=e.position[0];
    //linksVar[1].positionEnd[1] =e.position[1];
    //setLinks([...linksVar]);
    //console.log("LinksVar---->>",linksVar[2].position);
    //console.log("Node---->>",props.nodes[2].position);
    
    //console.log("-------",linksVar.position);
    // if (links.find(x => x.id === e.id)) {
    //   newLinks.find(x => x.id === e.id).positionInit[0] = newLinks.find(x => x.id === e.id).positionInit[0] + e.position[0];
    //   newLinks.find(x => x.id === e.id).positionInit[1] = newLinks.find(x => x.id === e.id).positionInit[1] + e.position[1];
    // } else {
    //   if (newLinks.find(x => x.linkTo === e.id)) {
    //     newLinks.find(x => x.linkTo === e.id).positionEnd[0] += e.position[0];
    //     newLinks.find(x => x.linkTo === e.id).positionEnd[1] += e.position[1];
    //   }
    // }

    // //console.log("b",newLinks);
    // let old = testvar;
    // setTestvar(old + e.position[0]);
    // console.log("INITIAL", props.nodes[2].position);

    // setLinks([
    //   { id: 123, positionInit: [10, testvar], positionEnd: [100, 100], linkTo: null },{ id: 124, positionInit: [55, testvar], positionEnd: [100, 100], linkTo: null }
    // ]);

    //setLinks([]);
    //console.log(newLinks);
  }

  function addLink() {
    // setLinks(old => [
    //   ...old,
    //   { id: 123, positionInit: [10, 20], positionEnd: [100, 100], linkTo: null }
    // ]);
  }

  function addNode() {
    //   let id =Math.floor(Math.random() * 100000);
    // setNodes(old => [
    //   ...old,
    //   {
    //     id: id,
    //     position: [500, 50],
    //     parameters: ["Parameter 08", "Parameter 09", "Parameter 10"],
    //     linkTo: null
    //   }
    // ]);
  }
  return (
    <>
      {/* {testvar}
      {links.map((link, index) => (
        <div className="classe">{link.positionInit}</div>
      ))} */}
      <CanvasNode size={{ width: width, height: height }}>
        <svg
          viewBox={`0 0 ${width} ${height}`}
          style={{ position: "absolute", zIndex: 0 }}
        >
          {/* { links>0 ? <Link
                key={links[0].id + "." + links[0].linkTo}
                position={links[0].positionEnd}

               /> : <Link
               key={linksVar[0].id}
               position={linksVar[0].positionEnd}

              /> } */}
          {/* {props.nodes.map(
            (link, index) =>
              // typeof link == "undefined" ? (
              //   <Link key={link.id + "." + link.linkTo} points={link} />
              // ) : (
              //   ""
              // )
              <Link
                key={link.id + "." + link.linkTo}
                position={link.position}

               />
            //  <div className="class000">{link.id}</div>
          )} */}
        </svg>

        {linksVar.map((node, index) => (
          <Node
            position={node.position}
            key={node.id}
            id={node.id}
            handleMove={handleMoveNode}
            parameters={node.parameters}
          >
            {" "}
            <button dsadsa>dsadsadsadas</button>
          </Node>
        ))}
      </CanvasNode>
      <button onClick={addNode}>Add sdsad</button>
    </>
  );
}

const CanvasNode = styled.div`
  position: relative;
  width: ${props => props.size.width}px;
  height: ${props => props.size.height}px;
  background-color: #4c4c4c;
  padding: 10px;
`;
