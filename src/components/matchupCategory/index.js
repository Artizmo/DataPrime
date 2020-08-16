import React from 'react';

const MatchupCategory = props => {
  return (
    <div className="l-categories__category">
      <div className="l-candidate-column">
        <div className="category-title">
          <span>{props.category}</span>
          <span style={{'color': '#999'}}>CANDIDATE</span>
        </div>
      </div>
      <div className="l-versus-column">VS</div>
      <div style={{'color': '#999'}} className="l-business-column">BUSINESS</div>
    </div>
  )
}

export default MatchupCategory;