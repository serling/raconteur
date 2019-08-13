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
        display: grid;
        grid-template-rows: auto;
        grid-column-gap: 0.5rem;
        grid-row-gap: 0.5rem;

        &--default {
          grid-template-columns: 1fr 1fr 1fr 1fr;
          grid-template-areas: 
            "first first first second"
            "third third fourth fourth"
            "fifth sixth seventh eighth";
        }

        &--uniform {
          
        }
        
        &__item {
          background-color: gray;
        }

        &__item--0 {
          grid-area: first;
          background-color: blue;
        }

        &__item--1 {
          grid-area: second;
          background-color: yellow;
        }

        &__item--2 {
          grid-area: third;
          background-color: cyan;
        }

        &__item--3 {
          grid-area: fourth;
          background-color: purple;
        }

        &__item--4 {
          grid-area: fifth;
          background-color: magenta;
        }

        &__item--5 {
          grid-area: sixth;
          background-color: black;
          color: white;
        }

        &__item--6 {
          grid-area: seventh;
          background-color: green;
        }

        &__item--7 {
          grid-area: eighth;
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
