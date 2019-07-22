import React from 'react';
import PropTypes from 'prop-types';

import List from '../list/list';
import PageContent from '../page-content/page-content';

import './utilities-list.scss';

const UtilitiesList = ({ links }) => (
  <PageContent>
    <div className="utilities-list">
      <List theme={List.themes.grid}>
        {links.map((link, index) => (
          <div key={index} className="utilities-list">
            a link
          </div>
        ))}
      </List>
    </div>
  </PageContent>
);

UtilitiesList.propTypes = {
  links: PropTypes.array.isRequired
};

UtilitiesList.defaultProps = {
  links: []
};

export default UtilitiesList;
