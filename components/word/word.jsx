import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Button from '../button/button';

const Word = props => {
  const { text, buttonText, category } = props;
  const [isLoading, setIsLoading] = useState(false);

  const getWord = async category => {
    setIsLoading(true);

    const response = await fetch(`api/word?type=${category}`);

    const { payload, error } = await response.json();

    return { word: payload };
  };

  const handleOnClick = () => {
    getWord(category).then(({ word }) => {
      setIsLoading(false);
      setActiveWord(word);
    });
  };

  return (
    <>
      <div className="word">
        <div className="word__content">
          <span className="word__text">{text}</span>
          <div className="word__actions">
            {isLoading ? (
              <span className="word__loading">LOADING...</span>
            ) : (
              <Button
                text={buttonText}
                textIsHidden={true}
                iconName="icon-missing"
                onClick={handleOnClick}
              />
            )}
          </div>
        </div>
      </div>
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

            &__actions {
              display: inline-block;
              margin-left: 0.5rem;
              transform: translateY(-15%);
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
