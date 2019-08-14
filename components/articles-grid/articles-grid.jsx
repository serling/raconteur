import React from 'react';
import PropTypes from 'prop-types';

import Article from '../article/article';
import Grid from '../grid/grid';
import Image from '../image/image';
import PageContent from '../page-content/page-content';
import Link from '../link/link';

const ArticlesGrid = ({ articles, readMoreText = "Read more" }) => (
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
      {readMoreText && <div className="articles-grid__read-more">
        <Link href="/articles" theme={Link.themes.primary}>
            {readMoreText}
        </Link>
      </div>}
    </div>
  </PageContent>
  <style jsx>{`
    .articles-grid {
        &__read-more {
            margin-top: 1rem;
            padding-top: 0.5rem;
            border-top: 2px solid #da0050;
            text-align: right;
        }
    }

    `}</style>
  </>
);

ArticlesGrid.propTypes = {
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
