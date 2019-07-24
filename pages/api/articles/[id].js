import { articles } from '../../../static/data/articles/articles';

export default ({ query }, res) => {
  const filtered = articles.filter(article => article.id === query.id);

  if (filtered.length > 0) {
    res.status(200).json(filtered[0].data);
  } else {
    let error = {
      message: 'Article not found'
    };

    res.status(404).json({ error });
  }
};
