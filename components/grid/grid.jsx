import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const themes = {
  default: "default",
  uniform: "uniform"
};

const Grid = ({ children, theme }) => {
  return (
    <>
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
    <style jsx>
    {`
      .grid {
        $self: &;
        $break-at-sm: 25rem; //400px
        $break-at-md: 50rem; //800px
        $break-at-lg: 64rem; //1024px

        display: grid;
        grid-column-gap: 2rem;
        grid-row-gap: 2rem; 
        
        
        @media screen and (min-width: $break-at-md) {
          grid-template-rows: auto;
          grid-column-gap: 0.5rem;
          grid-row-gap: 0.5rem; 
        }

        &--default {
          @media screen and (min-width: $break-at-md) {
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
          }

          #{$self}__item--0 {
            @media screen and (min-width: $break-at-md) {
            grid-row: 1 / span 2;
            grid-column: 1 / span 6;
            position: relative;

              &::after {
                display: block;
                width: 0;
                height: 0;
                border: 0 solid transparent;
                border-right-color: #f9f8f3fc;
                border-width: 0 2rem 2rem 0;
                content: "";
                position: absolute;
                right: 0;
                top: 0;
                z-index: 5;
              }
            }
          }

          #{$self}__item--1 {
            @media screen and (min-width: $break-at-md) {
            grid-row: 1 / span 2;
            grid-column: 7 / span 3;
            padding-top: 2rem;
            }
          }

          #{$self}__item--2 {
            @media screen and (min-width: $break-at-md) {
            grid-column: 1 / span 3;
            }
          }

          #{$self}__item--3 {
            @media screen and (min-width: $break-at-md) {
            grid-column: 4 / span 3;
            }
          }

          #{$self}__item--4 {
            @media screen and (min-width: $break-at-md) {
            grid-column: 7 / span 3;
            }
          }
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
