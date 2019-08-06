import articles from '../../../static/data/articles/articles';

export default ({ query }, res) => {
  const { payload } = articles;

  const filtered = payload.articles.filter(article => article.id === query.id);

  if (filtered.length <= 0) {
    const errorObject = {
      statusCode: 404,
      title: 'Could not find article'
    };

    res.status(404).json({ error: errorObject });
  }

  const data = {
    ...articles,
    payload: { ...filtered[0].data }
  };

  res.status(200).json(data);
};
