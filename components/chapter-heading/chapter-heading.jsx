import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Heading from '../heading/heading';
import Image from '../image/image';

import './chapter-heading.scss';

const themes = {
  overlap: 'overlap'
};

const ChapterHeading = ({ title, subtitle, image, theme }) => (
  <div
    className={cn('chapter-heading', {
      'chapter-heading--subtitle': !!subtitle,
      [`chapter-heading--${themes[theme]}`]: themes[theme]
    })}
  >
    <div className="chapter-heading__image">
      <Image {...image} enforceAspectRatio={true} />
    </div>
    <div className="chapter-heading__text">
      <div className="chapter-heading__heading">
        <Heading level={1} text={title} theme={Heading.themes.headline} />
      </div>
      {subtitle && (
        <div className="chapter-heading__subtitle">
          <span>{subtitle}</span>
        </div>
      )}
    </div>
  </div>
);

ChapterHeading.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.object
};

ChapterHeading.themes = themes;

export default ChapterHeading;
