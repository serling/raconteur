import React from 'react';
import PropTypes from 'prop-types';

import Filter from './filter';

import './filters.scss';

const Filters = ({ filters, onClick }) => {
  return (
    <div className="filters">
      <ul className="filters__list">
        {filters.map((filter, index) => (
          <li className="filters__item" key={index}>
            <Filter {...filter} onClick={onClick} />
          </li>
        ))}
      </ul>
    </div>
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
