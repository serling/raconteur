import React from 'react';
import PropTypes from 'prop-types';

import List from '../list/list';
import Filter from './filter';

import './filters.scss';

const Filters = ({ filters }) => {
  return (
    <List theme={List.themes.grid}>
      {filters.map((filter, index) => (
        <Filter key={index} {...filter} />
      ))}
    </List>
  );
};

Filters.propTypes = {
  filters: PropTypes.array.isRequired
};

Filters.defaultProps = {
  filters: []
};

export default Filters;
