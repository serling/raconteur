import React from 'react';
import PropTypes from 'prop-types';

import List from '../list/list';
import Link from '../link/link';
import PageContent from '../page-content/page-content';

import './utilities-list.scss';

const UtilitiesList = ({ links }) => (
  <PageContent>
    <div className="utilities-list">
      <List theme={List.themes.grid} gridColumns={3}>
        {links.map((link, index) => (
          <Link key={index} {...link} />
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
