import data from '../../static/data/articles.json';

export default (req, res) => {
  res.status(200).json(data);
};
