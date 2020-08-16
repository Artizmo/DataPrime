import React from 'react';
import useFetchArc from '../../hooks/useFetchArc';

const DialBadge = props => {
  const { maxDeg, arc } = useFetchArc(props.percent)

  return (
    <svg height="40" width="40" className={props.leftBadge ? 'leftBadge' : null}>
      {maxDeg && 
        <>
          <circle cx="20" cy="20" r="20" fill="#fff"></circle>
          <circle cx="20" cy="20" r="17" fill="#3B3B3B"></circle>
        </>
      }
      {!maxDeg && 
        <>
          <circle cx="20" cy="20" r="20" fill="#3B3B3B"></circle>
          <path 
            fill="none" 
            stroke="#fff" 
            strokeWidth="3px"
            d={`M ${arc.x1} ${arc.y1} A 18 18 0 ${arc.over180} 0 ${arc.x2} ${arc.y2}`}>
          </path>   
        </>
      }
      <text x="50%" y="50%" textAnchor="middle" stroke="#fff" fontSize="8pt" dy=".3em">
        {props.label}
      </text>
    </svg>
  )
}

export default DialBadge;