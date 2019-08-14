import React from 'react';
import PropTypes from 'prop-types';

import Heading from '../heading/heading';
import PageContent from '../page-content/page-content';
import Text from '../text/text';
import Label from '../label/label';
import Frame from '../frame/frame';
import RichText from '../rich-text/rich-text';

// https://css-tricks.com/snippets/css/complete-guide-grid/

const GameTop = ({ label, title, subtitle, lead, highlightString, categories }) => (
  <>
      <div className="game-top">
    <PageContent theme={PageContent.themes.narrow} backgroundColor='black'>
        <div className="game-top__heading">
          {label && <Text text={label} />}
          <Heading text={title} level={1} />
          {subtitle && <Text text={subtitle} />}
        </div>
        <div className="game-top__meta">
          <ul className="game-top__list">
            {categories.map((category, index) => (
              <li className="game-top__item" key={index}>
                <Label text={category} />
              </li>
            ))}
          </ul>
        </div>
        <div className="game-top__lead">
          <Text text={lead} theme={Text.themes.lead} />
        </div>
        {highlightString && <div className="game-top__highlights">
          <Frame>
            <RichText string={highlightString} />
          </Frame>
        </div>}
    </PageContent>
      </div>
    <style jsx>{`
      .game-top {
        $break-at-sm: 25rem; //400px
        $break-at-md: 50rem; //800px
        $break-at-lg: 64rem; //1024px
        $underline-color: #da0050;

        border-bottom: 0.5rem solid $underline-color;
        margin-bottom: 2rem;
        
        @media screen and (min-width: $break-at-md) {
          margin-bottom: 4rem;
          border-bottom: 0.8rem solid $underline-color;
        }
        
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
          font-size: 0.7rem;
          color: white;
          letter-spacing: 1px;
        }

        &__highlights {
          width: 100%;

          @media screen and (min-width: $break-at-md) {
            position: absolute;
          }
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
  label: PropTypes.string,
  highlightString: PropTypes.string,
  categories: PropTypes.array
};

GameTop.defaultProps = {
  categories: []
};

export default GameTop;
