import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Word from '../word/word';

const GimmeSuggestion = props => {
  const { endpoint, placeholderText, title, buttonText } = props;

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
        <p className="gimme-suggestion__lead">
          You could also ask the peeps for a{' '}
          <Word
            text={activeWord}
            isLoading={isLoading}
            onClick={() => handleOnClick('professions')}
            buttonText={buttonText}
          />
          text continues here
        </p>
      </div>
      <style jsx>
        {`
          .gimme-suggestion {
            &__heading {
            }

            &__lead {
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
