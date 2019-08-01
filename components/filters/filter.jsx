import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Icon from '../icon/icon';

const Filter = ({ id, text, isActive, onClick }) => {
  return (
    <>
      <div className={cn('filter', { 'filter--active': isActive })}>
        <button onClick={e => onClick(e, id)} className="filter__button">
          <div className="filter__frame">
            <div className="filter__icon">
              <Icon name="close" size={Icon.sizes.tiny} />
            </div>
          </div>
          <div className="filter__text">{text}</div>
        </button>
      </div>
      <style jsx>{`
        .filter {
          $self: &;

          #{$self}__icon {
            display: none;
          }

          &--active {
            #{$self}__icon {
              display: block;
            }
          }

          &__frame {
            width: 24px;
            height: 24px;
            border: 2px solid black;
            margin-right: 0.5rem;

            display: flex;
            align-items: center;
            justify-content: center;
          }

          &__button {
            background: 0;
            border: 0;
            padding: 0.5rem;
            cursor: pointer;

            display: flex;
            align-items: center;

            &:hover,
            &:focus {
              text-decoration: underline;
            }
          }

          &__text {
            font-size: 1rem;
          }
        }
      `}</style>
    </>
  );
};

Filter.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  onClick: PropTypes.func.isRequired
};

Filter.defaultProps = {
  onClick: () => {}
};

export default Filter;
