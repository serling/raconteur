import React from 'react';
import PropTypes from 'prop-types';

import Heading from '../heading/heading';
import PageContent from '../page-content/page-content';
import Text from '../text/text';

// https://css-tricks.com/snippets/css/complete-guide-grid/

const GameTop = ({ title, subtitle, lead, categories }) => (
  <>
    <PageContent theme={PageContent.themes.narrow} backgroundColor='black'>
      <div className="game-top">
        <div className="game-top__heading">
          game
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
        <div className="game-top__highlights">
            info that pops out
        </div>
      </div>
    </PageContent>
    <style jsx>{`
      .game-top {
        $break-at-sm: 25rem; //400px
        $break-at-md: 50rem; //800px
        $break-at-lg: 64rem; //1024px

        &__heading {
          color: white;
        }

        &__lead {
          margin-top: 1rem;
          color: white;
          margin-bottom: 2rem;
        }

        &__meta {
          margin-top: 1rem;
          color: white;
        }

        &__tag {
          text-transform: uppercase;
          font-size: 0.6rem;
          color: white;
        }

        &__highlights {
          box-shadow: 2px 2px 5px 0px black;
          background-color: white;
          padding: 1.5rem;
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
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  lead: PropTypes.string,
  categories: PropTypes.array
};

GameTop.defaultProps = {
  categories: []
};

export default GameTop;
