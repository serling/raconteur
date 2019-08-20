import BlockContent from '@sanity/block-content-to-react';

const Blocks = props => {
  const { body, serializers } = props;

  return <BlockContent blocks={body} serializers />;
};

export default Blocks;
