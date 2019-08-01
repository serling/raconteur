import React from 'react';
import PropTypes from 'prop-types';

import List from '../list/list';
import Link from '../link/link';
import PageContent from '../page-content/page-content';

const Downloads = ({ links }) => (
  <PageContent theme={PageContent.themes.narrow}>
    <div className="downloads">
      <List gridColumns={2} theme={List.themes.grid}>
        {links.map((link, index) => (
          <Link
            key={index}
            {...link}
            theme={Link.themes.download}
            iconName="download"
          />
        ))}
      </List>
    </div>
  </PageContent>
);

Downloads.propTypes = {
  links: PropTypes.array.isRequired
};

export default Downloads;
