import React from 'react';
import PropTypes from 'prop-types';

import List from '../list/list';
import Filter from './filter';

import './filters.scss';

const Filters = ({ filters, onClick }) => {
  return (
    <List theme={List.themes.grid}>
      {filters.map((filter, index) => (
        <Filter key={index} {...filter} onClick={onClick} />
      ))}
    </List>
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
