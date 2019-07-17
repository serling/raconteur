import React from 'react';
import PropTypes from 'prop-types';

import PageContent from '../page-content/page-content';
import Heading from '../heading/heading';
import Text from '../text/text';
import Image from '../image/image';

import './article-top.scss';

const ArticleTop = ({ title, lead, image }) => {
  return (
    <React.Fragment>
      <PageContent theme={PageContent.themes.wide}>
        <Image {...image} enforceAspectRatio={true} />
        <Heading level={1} text={title} theme={Heading.themes.headline} />
      </PageContent>
      <PageContent theme={PageContent.themes.narrow}>
        <Text text={lead} theme={Text.themes.lead} />
      </PageContent>
    </React.Fragment>
  );
};

ArticleTop.propTypes = {
  title: PropTypes.string.isRequired,
  lead: PropTypes.string,
  image: PropTypes.object.isRequired
};

export default ArticleTop;
