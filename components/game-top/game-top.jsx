import React from 'react';
import PropTypes from 'prop-types';

import Heading from '../heading/heading';
import PageContent from '../page-content/page-content';
import Text from '../text/text';

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
    <style jsx>{`
      .game-top {
        $break-at-sm: 25rem; //400px
        $break-at-md: 50rem; //800px
        $break-at-lg: 64rem; //1024px

        &__lead {
          margin-top: 1rem;
        }

        &__meta {
          margin-top: 1rem;
          border-bottom: 1px solid black;
        }

        &__tag {
          color: grey;
          text-transform: uppercase;
          font-size: 0.6rem;
        }

        &__list {
          list-style: none;
          margin: 0;
          padding: 0;

          @media screen and (min-width: $break-at-sm) {
            display: flex;
            flex-wrap: wrap;
          }
        }

        &__item {
          flex: 0 1 auto;

          @media screen and (min-width: $break-at-sm) {
            margin-left: 1rem;

            &:first-child {
              margin-left: 0;
            }
          }
        }
      }
    `}</style>
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
