import React from 'react';
import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const client = sanityClient({
  projectId: 'f9f2v1e7',
  dataset: 'articles',
  useCdn: false
});

const builder = imageUrlBuilder(client);

const urlFor = source => {
  return builder.image(source);
};

module.exports = {
  client,
  urlFor
};
