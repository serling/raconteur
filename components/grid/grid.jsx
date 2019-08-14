import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import PageContent from '../page-content/page-content';

const themes = {
  default: "default",
  uniform: "uniform"
};

const Grid = ({ children, theme }) => {
  return (
      <>
      <PageContent>
    <div className={cn("grid", {
      [`grid--${themes[theme]}`]: themes[theme]
    })}>
      {React.Children.map(children, (child, index) => {
        return (
            <div className={cn("grid-item", `grid__item--${index}`)} key={index}>
                {child}
            </div>
        );
      })}
    </div>
    </PageContent>
    <style jsx>
    {`
      .grid {
        $self: &;
        display: grid;
        grid-template-rows: auto;
        grid-column-gap: 0.5rem;
        grid-row-gap: 0.5rem;

        &--default {
          grid-template-columns: 1fr 1fr 1fr 1fr;

        #{$self}__item--0 {
          grid-row: 1 / span 2;
          grid-column: 1 / span 3;
        }

        #{$self}__item--1 {
          grid-row: 1 / span 1;
        }

        #{$self}__item--2 {
        }

        #{$self}__item--3 {
          grid-column: 1 / span 2;
        }

        #{$self}__item--4 {
          grid-column: 3 / span 2;
        }

        #{$self}__item--5 {
          
        }

        #{$self}__item--6 {
        }

        #{$self}__item--7 {
        }
          
        }

        &--uniform {
          
        }
        
        &__item {
          background-color: gray;
        }

        &__item--0 {
          grid-row: 1 / span 2;
          grid-column: 1 / span 3;
          background-color: blue;
        }

        &__item--1 {
          grid-row: 3 / span 1;
          background-color: yellow;
        }

        &__item--2 {
          background-color: cyan;
        }

        &__item--3 {
          background-color: purple;
        }

        &__item--4 {
          background-color: magenta;
        }

        &__item--5 {
          background-color: black;
          color: white;
        }

        &__item--6 {
          background-color: green;
        }

        &__item--7 {
          background-color: darkred;
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
  components: [],
  theme: themes.default
};

Grid.themes = themes;

export default Grid;
