import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Button from '../button/button';

const Word = props => {
  const { text, buttonText, category } = props;

  const [isLoading, setIsLoading] = useState(false);
  const [activeWord, setActiveWord] = useState(text);

  const getWord = async category => {
    setIsLoading(true);

    const response = await fetch(`/api/word?type=${category}`);

    const { payload, error } = await response.json();

    return payload;
  };

  const handleOnClick = () => {
    getWord(category).then(({ word }) => {
      setIsLoading(false);
      setActiveWord(word);
    });
  };

  return (
    <>
      <span className="word">
        <span className="word__content">
          <span className="word__text">{activeWord}</span>
          <span className="word__actions">
            {isLoading ? (
              <span className="word__loading">LOADING...</span>
            ) : (
              <Button
                text={buttonText}
                textIsHidden={true}
                iconName="icon-missing"
                disabled={isLoading}
                onClick={handleOnClick}
              />
            )}
          </span>
        </span>
      </span>
      <style jsx>
        {`
          .word {
            position: relative;
            display: inline-block;

            &__text {
              display: inline-block;
              padding-right: 2rem;
            }

            &__content {
              color: #da0050;
              display: inline-block;
            }

            &__loading {
              font-size: 0.5rem;
            }

            &__actions {
              display: inline-block;
              margin-left: 0.5rem;
              transform: translateY(-20%);
              position: absolute;
              right: 0;
            }
          }
        `}
      </style>
    </>
  );
};

Word.propTypes = {};

Word.defaultProps = {};

export default Word;
