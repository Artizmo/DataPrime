import React, { Fragment } from 'react';
import Chip from '@material-ui/core/Chip';
import './category.css';

let techSkills = [
  {
    title: 'Applications',
    tech: [
      {
        name: 'Machine Learning',
        candidateScore: 1,
        businessScore: 4,
        percentageMatch: 25
      }
    ]
  },
  {
    title: 'Career',
    tech: []
  },
  {
    title: 'Delivery',
    tech: [
      {
        name: 'AWS',
        candidateScore: 1,
        businessScore: 2,
        percentageMatch: 50
      },
      {
        name: 'MySQL',
        candidateScore: 1,
        businessScore: 3,
        percentageMatch: 33
      },
      {
        name: 'MongoDB',
        candidateScore: 1,
        businessScore: 1,
        percentageMatch: 100
      },
      {
        name: 'TensorFlow',
        candidateScore: 1,
        businessScore: 5,
        percentageMatch: 20
      }
    ]
  }
]

const usePercentColors = percent => {
  const [color, setColor] = React.useState('red');
    
  React.useEffect(() => {
    if (percent) {
      if (percent===100) {
        setColor('#48A6A6')
      } else if (percent >= 50 && percent < 100) {
        setColor('#D8B151')
      } else {
        setColor('#D85B76')
      }
    }
  }, [percent]);

  return color;
}

const useFetchArc = degrees => {
  const startRads = (degrees - 90) * Math.PI / 180;
  const endRads = (0 - 90) * Math.PI / 180;  
  const over180 = (degrees - 0 > 180) ? 1 : 0;

  return {
    x1: 20 + (18 * Math.cos(startRads)),
    y1: 20 + (18 * Math.sin(startRads)),
    x2: 20 + (18 * Math.cos(endRads)),
    y2: 20 + (18 * Math.sin(endRads)),
    over180
  }
}

const DialBadge = props => {
  const deg = props.percent/100*360;
  const maxDeg = deg === 360 ? true : false
  const arc = useFetchArc(deg);

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

const Category = () => {
  return (
    <div className="l-app-opp-section">
      <header>Technical Skills</header>
      {
        techSkills.map((skill, i) => (
          <Fragment key={i}>
            <MatchupCategory category={skill.title} />
            <div>
              {!skill.tech.length &&
                <NoMatchup message="No Skills Matched" />
              }
              {skill.tech.map((tech, i) => (
                <Matchup key={i} match={tech} />
              ))}
            </div>
          </Fragment>
        ))
      }
    </div>
  )
}

export default Category;

