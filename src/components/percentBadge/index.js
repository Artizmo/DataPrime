import React from 'react'
import usePercentColors from '../../hooks/usePercentColors';

const PercentBadge = props => {
  const color = usePercentColors(props.percent);
  
  return (
    <div className="l-versus-column">
      <svg height="40" width="40">
        <circle cx="20" cy="20" r="18" fill={color}></circle>
        <text x="50%" y="50%" textAnchor="middle" fontSize="9pt" dy=".4em">{props.percent}</text>
      </svg>
    </div>
  )
}

export default PercentBadge;