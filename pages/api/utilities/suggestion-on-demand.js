import data from '../../../static/data/utilities/suggestion-on-demand.json';

export default (req, res) => {
  res.status(200).json(data);
};
