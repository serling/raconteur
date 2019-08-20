import BlockContent from '@sanity/block-content-to-react';
import Poster from '../../components/image/poster';

const serializers = {
  types: {
    poster: data => {
      const { node, isInline, options } = data;

      console.log('serializing poster:', data);
      return <Poster image={node} showMeta={true} />;
    }
  }
};

const Blocks = props => {
  const { body } = props;

  return <BlockContent blocks={body} serializers={serializers} />;
};

export default Blocks;
