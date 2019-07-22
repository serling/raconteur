import React from 'react';
import PropTypes from 'prop-types';

import Heading from '../heading/heading';
import InfoIcon from '../info-icon/info-icon';

import './heading-with-info.scss';

const HeadingWithInfo = ({ heading, infoComponents }) => (
  <div className="heading-with-info">
    <div className="heading-with-info__heading">
      <Heading {...heading} />
    </div>
    {infoComponents && (
      <div className="heading-with-info__info">
        <InfoIcon components={infoComponents} />
      </div>
    )}
  </div>
);

HeadingWithInfo.propTypes = {
  heading: PropTypes.object.isRequired,
  infoComponents: PropTypes.array.isRequired
};

export default HeadingWithInfo;
