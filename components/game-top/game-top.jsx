import React from 'react';
import PropTypes from 'prop-types';

import Heading from '../heading/heading';
import PageContent from '../page-content/page-content';
import Text from '../text/text';
import List from '../list/list';

import './game-top.scss';

const GameTop = ({ title, subtitle, lead, categories }) => (
  <>
    <PageContent theme={PageContent.themes.narrow}>
      <div className="game-top">
        <div className="game-top__heading">
          <Heading text={title} level={1} />
          <Text text={subtitle} />
        </div>
        <div className="game-top__lead">
          <Text text={lead} theme={Text.themes.lead} />
        </div>
        <div className="game-top__meta">
          <ul className="game-top__list">
            {categories.map(category => (
              <li className="game-top__item">
                <span className="game-top__tag">{category}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </PageContent>
  </>
);

GameTop.propTypes = {
  /* --------------------- 📝 --------------------- */
};

GameTop.defaultProps = {
  categories: []
};

export default GameTop;
