import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Icon from '../icon/icon';

import './filter.scss';

const Filter = ({ id, text, isActive, onClick }) => {
  return (
    <div className={cn('filter', { 'filter--active': isActive })}>
      <button onClick={e => onClick(e, id)} className="filter__button">
        <div className="filter__frame">
          <Icon name="close" className="filter__icon" size={Icon.sizes.tiny} />
        </div>
        <div className="filter__text">{text}</div>
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
