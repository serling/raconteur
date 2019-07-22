import React, { useState } from 'react';

import Button from '../../components/button/button';
import List from '../../components/list/list';
import PageContent from '../../components/page-content/page-content';

import './suggestion-generator.scss';

const SuggestionGenerator = () => {
  const [activeWord, setActiveWord] = useState('generator');
  const [isLoading, setIsLoading] = useState(false);

  const apiKey = '8O23WFPE'; //https://random-word-api.herokuapp.com/
  const numberOfWords = 1;

  const getWord = async () => {
    setIsLoading(true);
    const endpoint = `https://random-word-api.herokuapp.com/word?key=${apiKey}&number=${numberOfWords}`;
    const response = await fetch(endpoint);

    const data = await response.json();

    if (!data.length > 0) {
      console.log('api returned no results');
    }

    return { word: data[0] };
  };

  const handleOnClick = () => {
    getWord().then(({ word }) => {
      setIsLoading(false);
      setActiveWord(word);
    });
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

export default SuggestionGenerator;
