import React from "react";

export default function Link(props) {
  return (
    <path
      d={`
            M ${props.position.positionInit[0]+150} ${props.position.positionInit[1]}
            Q ${props.position.positionInit[0]+180}, ${props.position.positionInit[1]}
            ${props.position.positionEnd}
          `}
    //   d={`
    //   M 0 0
    //   Q 0, 0
    //   ${props.position.positionEnd}
    // `}
      fill="none"
      stroke="hotpink"
      strokeWidth={1}
    />
  );
}
