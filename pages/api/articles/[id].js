import { articles } from '../../../static/data/articles';

export default ({ query }, res) => {
  // console.log('got', query); // if one article : one file

  const filtered = articles.filter(article => article.id === query.id);

  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res.status(404).json({ message: `Article with id: ${id} not found.` });
  }
};
