import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Button from '../../components/button/button';
import List from '../../components/list/list';
import PageContent from '../../components/page-content/page-content';

import './suggestion-generator.scss';

const SuggestionGenerator = ({ words }) => {
  const [activeWord, setActiveWord] = useState('generator');

  const handleOnClick = () => {
    setActiveWord('new word');
  };

  return (
    <>
      <PageContent
        theme={PageContent.themes.full}
        backgroundColor={PageContent.colors.grey}
      >
        <div className="suggestion-generator__canvas">
          <span>{activeWord}</span>
        </div>
      </PageContent>
      <PageContent theme={PageContent.themes.full}>
        <List theme={List.themes.grid} isCentered={true}>
          <Button text="Word" onClick={handleOnClick} />
          <Button text="Location" onClick={handleOnClick} />
          <Button text="Emotion" onClick={handleOnClick} />
        </List>
      </PageContent>
    </>
  );
};

SuggestionGenerator.propTypes = {
  words: PropTypes.array.isRequired
};

export default SuggestionGenerator;
