import React from 'react';

const NoMatchup = props => {
  return (
    <div className="l-categories__category">
      <div style={{'color': '#999'}} className="l-candidate-column right-align">
        {props.message}
      </div>
      <div className="l-versus-column">N/A</div>
      <div style={{'color': '#999'}} className="l-business-column">
        {props.message}
      </div>
    </div>
  )
}

export default NoMatchup;