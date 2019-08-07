import { getAllArticles, getArticleById } from '../../js/db-helper';

export default async (req, res) => {
  const data = await getArticleById('5d4aa443c7f7873ed0e8e029');

  console.log('got', data);

  res.status(200).json({ data });
};
