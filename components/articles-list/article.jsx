import React from 'react';
import PropTypes from 'prop-types';
import Route from 'next/link';
import cn from 'classnames';

import Image from '../image/image';

const Article = ({ title, lead, image, slug }) => (
  <div className="article">
    <Route href="/articles/[slug]" as={`/articles/${slug}`}>
      <a className="article__content">
        <div className="article__image">
          <Image {...image} />
        </div>
        <div className="article__text">
          <div className="article__title">{title}</div>
          <div className="article__lead">{lead}</div>
        </div>
      </a>
    </Route>
  </div>
);

Article.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  lead: PropTypes.string.isRequired,
  image: PropTypes.object
};

export default Article;
