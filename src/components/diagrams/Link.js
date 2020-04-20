import React from "react";

export default function Link(props) {
  const linkOffsetX = 10;
  const linkOffsetY = 10;
  return (
    <path
      d={`
            M ${props.position.positionInit[0]+150} ${props.position.positionInit[1]+linkOffsetX}
            C ${props.position.positionInit[0]+200},${props.position.positionInit[1]+linkOffsetX} ${props.position.positionEnd[0]-50},${props.position.positionEnd[1]+linkOffsetX}
            ${props.position.positionEnd[0]+10} ${props.position.positionEnd[1]+linkOffsetX}
          `}
      fill="none"
      stroke="hotpink"
      strokeWidth={1}
    />
  );
}
