import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Button from '../button/button';

const GimmeSuggestion = props => {
  const {
    endpoint = '/api/word',
    placeholderText = 'try me',
    title = 'Profession',
    buttonText = 'generate profession'
  } = props;

  const [activeWord, setActiveWord] = useState(placeholderText);
  const [isLoading, setIsLoading] = useState(false);

  const getWord = async type => {
    setIsLoading(true);

    const response = await fetch(`${endpoint}?type=${type}`);

    const { payload, error } = await response.json();

    return { word: payload };
  };

  const handleOnClick = type => {
    getWord(type).then(({ word }) => {
      setIsLoading(false);
      setActiveWord(word);
    });
  };

  return (
    <>
      <div className="gimme-suggestion">
        <div className="gimme-suggestion__heading">{title}</div>
        <div className="gimme-suggestion__canvas">
          <span className="gimme-suggestion__word">{activeWord}</span>
          {isLoading ? (
            <span className="gimme-suggestion__loading">LOADING...</span>
          ) : (
            <Button
              text={buttonText}
              textIsHidden={true}
              iconName="icon-missing"
              onClick={() => handleOnClick('professions')}
            />
          )}
        </div>
      </div>
      <style jsx>
        {`
          .gimme-suggestion {
            &__heading {
            }

            &__canvas {
              position: relative;
              border-left: 2px solid #da0050;
              padding: 1rem;
              margin-top: 1rem;
              text-align: center;
              color: #da0050;
              display: flex;
              align-items: center;
            }

            &__word {
              margin-right: 0.5rem;
            }

            &__actions {
              margin-top: 2rem;
              display: flex;
              justify-content: center;
            }
          }
        `}
      </style>
    </>
  );
};

GimmeSuggestion.propTypes = {
  endpoint: PropTypes.string.isRequired,
  title: PropTypes.string,
  buttonText: PropTypes.string,
  placeholderText: PropTypes.string
};

GimmeSuggestion.defaultProps = {};

export default GimmeSuggestion;
