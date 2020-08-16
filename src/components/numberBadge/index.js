import React from 'react';

const NumberBadge = props => {
  return ( 
    <svg height="40" width="40" className={props.leftBadge ? 'leftBadge' : null}>
      <circle cx="20" cy="20" r="18" stroke="#fff" strokeWidth="3px" fill="#3B3B3B"></circle>
      <text x="50%" y="50%" textAnchor="middle" stroke="#fff" fontSize="8pt" dy=".3em">
        {props.label}
      </text>
    </svg>
  )
}

export default NumberBadge;