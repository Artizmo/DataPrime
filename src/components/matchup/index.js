import React from 'react';
import Ability from '../ability';
import PercentBadge from '../percentBadge';

const Matchup = props => { 
  return (
    <div className="l-categories__category">
      <div className="l-candidate-column right-align">
        {props.match &&
          <Ability ability={props.match} />
        }
      </div>
      <PercentBadge percent={props.match.percentageMatch} />      
      <div className="l-business-column">
        <Ability ability={props.match} leftBadge />
      </div>
    </div>
  )
}

export default Matchup;