import React from 'react'
import Canvas from '../components/diagrams/Canvas'

export default function Dashboard() {
  const nodes = [
    {
      id: 1,
      position: [10, 50],
      parameters: ["Parameter 01", "Parameter 01", "Parameter 01"],
      linkTo: 2
    },
  
    {
      id: 2,
      position: [250, 50],
      parameters: ["Parameter 05", "Parameter 06", "Parameter 07"],
      linkTo: 3
    },
    {
      id: 3,
      position: [500, 50],
      parameters: ["Parameter 08", "Parameter 09", "Parameter 10"],
      linkTo: null
    }
  ];
  const testVar ={name:"hugo"}
  return (
    <div>
      <Canvas size={{width:800, height:600}} nodes={nodes} test={testVar} testPos={[500, 50]}/>
    </div>
  )
}
