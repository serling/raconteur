import React from 'react';
import PropTypes from 'prop-types';

import Button from '../button/button';

const Word = props => {
  const { text, isLoading, onClick, buttonText } = props;

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
                onClick={onClick}
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
