import React from 'react';
import PropTypes from 'prop-types';

import Filter from './filter';

const Filters = ({ filters, onClick }) => {
  return (
    <>
      <div className="filters">
        <ul className="filters__list">
          {filters.map((filter, index) => (
            <li className="filters__item" key={index}>
              <Filter {...filter} onClick={onClick} />
            </li>
          ))}
        </ul>
      </div>
      <style jsx>{`
        .filters {
          &__list {
            list-style: none;
            display: flex;
            flex-wrap: wrap;
            padding: 0;

            margin: -0.5rem 0 0 -1rem;
          }

          &__item {
            margin-left: 0.5rem;
            margin-top: 0.5rem;
          }
        }
      `}</style>
    </>
  );
};

Filters.propTypes = {
  filters: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired
};

Filters.defaultProps = {
  filters: [],
  onClick: () => {}
};

export default Filters;
