import React from 'react';
import Chip from '@material-ui/core/Chip';
import DialBadge from '../dialBadge';
import NumberBadge from '../numberBadge';

const Ability = React.memo(props => {
  return (
    <div className={props.leftBadge ? 'ability-chip leftBadge' : 'ability-chip'}>
      {!props.leftBadge &&
        <>
          <Chip label={props.ability.name}></Chip>
          <NumberBadge label={props.ability.candidateScore} />
        </>
      }
      {props.leftBadge &&
        <>
          <DialBadge leftBadge percent={props.ability.percentageMatch} label={props.ability.businessScore} />
          <Chip label={props.ability.name}></Chip>
        </>
      }
    </div>
  )
})

export default Ability;