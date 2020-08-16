import React, { Fragment } from 'react';
import MatchupCategory from '../matchupCategory';
import Matchup from '../matchup';
import NoMatchup from '../noMatchup';
import useFetchCategory from '../../hooks/useFetchCategory';
import './category.css';

const Category = () => {
  const {isFetching, category} = useFetchCategory('technical'); // API sim hook

  return (
    <div className="l-app-opp-section">
      <header>Technical Skills</header>
      {isFetching && <div>Loading...</div>}
      {category &&
        category.map((skill, i) => (
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

