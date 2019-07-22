import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Button from '../button/button';
import Modal from '../modal/modal';
import DynamicContent from '../dynamic-content/dynamic-content';

import './info-icon.scss';

const InfoIcon = ({ components }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleOnClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="info-icon">
      <Button
        onClick={toggleOnClick}
        iconName="info"
        iconSize={Button.iconSizes.small}
      />
      <Modal
        onClose={toggleOnClick}
        isVisible={isVisible}
        isCloseable={true}
        contentLabel="info"
      >
        <DynamicContent components={components} />
      </Modal>
    </div>
  );
};

InfoIcon.propTypes = {
  text: PropTypes.string.isRequired
};

InfoIcon.defaultProps = {
  text: ''
};

export default InfoIcon;
