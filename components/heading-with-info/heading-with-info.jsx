import React from 'react';
import PropTypes from 'prop-types';

import Heading from '../heading/heading';
import InfoIcon from '../info-icon/info-icon';

import './heading-with-info.scss';

const HeadingWithInfo = ({ heading, infoText }) => (
  <div className="heading-with-info">
    <div className="heading-with-info__heading">
      <Heading {...heading} />
    </div>
    {infoText && (
      <div className="heading-with-info__info">
        <InfoIcon text={infoText} />
      </div>
    )}
  </div>
);

HeadingWithInfo.propTypes = {
  heading: PropTypes.object.isRequired,
  infoText: PropTypes.string
};

export default HeadingWithInfo;
