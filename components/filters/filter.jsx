import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './filter.scss';

const Filter = ({ id, text, isActive, onClick }) => {
  return (
    <div className={cn('filter', { 'filter--active': isActive })}>
      <button onClick={e => onClick(e, id)} className="filter__button">
        {text}
      </button>
    </div>
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
