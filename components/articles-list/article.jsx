import React from 'react';
import PropTypes from 'prop-types';
import Route from 'next/link';
import cn from 'classnames';

import Image from '../image/image';

const Article = ({ title, lead, image, slug }) => (
  <div className="article">
    <div className="article__image">
      <Image {...image} />
    </div>
    <div className="article__title">
      <Route href="/articles/[slug]" as={`/articles/${slug}`}>
        <a>{title}</a>
      </Route>
    </div>
    <div className="article__lead">{lead}</div>
  </div>
);

Article.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  lead: PropTypes.string.isRequired,
  image: PropTypes.string
};

export default Article;
