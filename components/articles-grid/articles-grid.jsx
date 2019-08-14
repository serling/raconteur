import React from 'react';
import PropTypes from 'prop-types';

import Article from '../article/article';
import Grid from '../grid/grid';
import Image from '../image/image';
import PageContent from '../page-content/page-content';
import ReadMore from '../read-more/read-more';

const ArticlesGrid = ({ articles, readMore }) => (
    <>
  <PageContent theme={PageContent.themes.wide}>
    <div className="articles-grid">
      <Grid>
        {articles.map((article, index) => {
          const { id } = article;
          return (
            <Article key={id} {...article} theme={index === 1 ? Article.themes.vertical : Article.themes.overlay } imageAspect={index === 0 ? Image.aspects.wider : undefined}  />
          );
        })}
      </Grid>
      {readMore && 
        <div className="articles-grid__read-more"><ReadMore {...readMore} /></div>
    }
    </div>
  </PageContent>
  <style jsx>{`
    .articles-grid {
        &__read-more {
            margin-top: 1.5rem;
        }
    }

    `}</style>
  </>
);

ArticlesGrid.propTypes = {
    readMore: PropTypes.object,
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired
    })
  ).isRequired
};

ArticlesGrid.defaultProps = {
  articles: []
};

export default ArticlesGrid;
