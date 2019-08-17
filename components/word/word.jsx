import React from 'react';
import PropTypes from 'prop-types';

import Button from '../button/button';

const Word = props => {
  const { text, isLoading, onClick, buttonText } = props;

  return (
    <>
      <div className="word">
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
      <style jsx>
        {`
          .word {
            position: relative;
            border-left: 2px solid #da0050;
            padding: 0.5rem 1rem;
            margin-top: 1rem;
            text-align: center;
            color: #da0050;
            display: flex;
            align-items: center;

            &__actions {
              margin-left: 0.5rem;
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
