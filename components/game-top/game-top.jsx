import React from 'react';
import PropTypes from 'prop-types';

import Heading from '../heading/heading';
import PageContent from '../page-content/page-content';
import Text from '../text/text';

import './game-top.scss';

const GameTop = ({ title, subtitle, lead, categories }) => (
  <>
    <PageContent theme={PageContent.themes.narrow}>
      <div className="game-top">
        <div className="game-top__heading">
          <Heading text={title} level={1} />
          {subtitle && <Text text={subtitle} />}
        </div>
        <div className="game-top__meta">
          <ul className="game-top__list">
            {categories.map((category, index) => (
              <li className="game-top__item" key={index}>
                <span className="game-top__tag">{category}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="game-top__lead">
          <Text text={lead} theme={Text.themes.lead} />
        </div>
      </div>
    </PageContent>
  </>
);

GameTop.propTypes = {
  title: PropTypes.text,
  subtitle: PropTypes.text,
  lead: PropTypes.text,
  categories: PropTypes.array
};

GameTop.defaultProps = {
  categories: []
};

export default GameTop;
