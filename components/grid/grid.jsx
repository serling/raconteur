import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const Grid = ({ children }) => {
  return (
      <>
    <div className="grid">
      {React.Children.map(children, (child, index) => {
        return (
            <div className={cn("grid-item", `grid__item--${index}`)} key={index}>
                {child}
            </div>
        );
      })}
    </div>
    <style jsx>
    {`
      .grid {

          &__item {
          background-color: red;
          }

          &__item--0 {
              background-color: blue;
          }

          &__item--1 {
              background-color: yellow;
          }
      }
    `}
    </style>
    </>
  );
};

Grid.propTypes = {
    components: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string
    })
  ).isRequired
};

Grid.defaultProps = {
    components: []
};

export default Grid;
