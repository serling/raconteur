import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Button from '../button/button';
import Modal from '../modal/modal';
import DynamicContent from '../dynamic-content/dynamic-content';

const InfoIcon = ({ components }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleOnClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="info-icon">
      <Button
        textIsHidden={true}
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
  components: PropTypes.array
};

export default InfoIcon;
