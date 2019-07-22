import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Article from './article';
import List from '../list/list';

import './articles-list.scss';
import PageContent from '../page-content/page-content';

const ArticlesList = ({ articles }) => (
  <PageContent>
    <div className="articles-list">
      <List>
        {articles.map((article, index) => (
          <Article key={index} {...article} />
        ))}
      </List>
    </div>
  </PageContent>
);

ArticlesList.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired
    })
  ).isRequired
};

ArticlesList.defaultProps = {
  articles: []
};

export default ArticlesList;
