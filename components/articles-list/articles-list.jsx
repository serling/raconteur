import React from 'react';
import PropTypes from 'prop-types';

import Article from '../article/article';
import List from '../list/list';
import Frame from '../frame/frame';
import PageContent from '../page-content/page-content';

const ArticlesList = ({ articles }) => (
  <PageContent>
    <div className="articles-list">
      <List
        theme={List.themes.grid}
        numberOfGridColumns={3}
        gutterSize={List.gutterSizes.small}
      >
        {articles.map(article => {
          const { id } = article;
          return (
            <Article key={id} {...article} theme={Article.themes.vertical} />
          );
        })}
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
