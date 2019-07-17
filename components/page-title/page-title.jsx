import React from 'react';
import PropTypes from 'prop-types';

import PageContent from '../page-content/page-content';
import Heading from '../heading/heading';

const PageTitle = ({ text }) => {
  return (
    <PageContent theme={PageContent.themes.wide}>
      <Heading level={1} text={text} theme={Heading.themes.headline} />
    </PageContent>
  );
};

PageTitle.propTypes = {
  text: PropTypes.string.isRequired
};

export default PageTitle;
