import React from 'react';
import PropTypes from 'prop-types';
import Route from 'next/link';
import cn from 'classnames';

import './article.scss';

{
  /* TODO: switch from route to Link -- don't need front-end routing here */
}

const Article = ({ id, title, lead, href }) => (
  <div className={cn('article', `article--${id}`)}>
    <div className="article__title">
      <Route href="/articles/[id]" as={href}>
        <a>{title}</a>
      </Route>
    </div>
    <div className="article__lead">{lead}</div>
  </div>
);

Article.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  lead: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired
};

export default Article;
