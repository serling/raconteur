import React, { useState } from 'react';

import Button from '../../components/button/button';
import List from '../../components/list/list';
import PageContent from '../../components/page-content/page-content';

const SuggestionGenerator = props => {
  const { endpoint } = props;

  const [activeWord, setActiveWord] = useState('generator');
  const [isLoading, setIsLoading] = useState(false);

  const getWord = async type => {
    setIsLoading(true);

    const response = await fetch(`${endpoint}?type=${type}`);

    const { payload, error } = await response.json();

    return { word: payload };
  };

  const handleOnClick = type => {
    getWord(type).then(({ word }) => {
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
        {isLoading && (
          <div className="suggestion-generator__loader">
            <div>Loading...</div>
          </div>
        )}
        <div className="suggestion-generator__canvas">
          <span>{activeWord}</span>
        </div>
      </PageContent>
      <PageContent theme={PageContent.themes.full}>
        <List theme={List.themes.grid} isCentered={true}>
          <Button
            theme={Button.themes.primary}
            text="Profession"
            onClick={() => handleOnClick('professions')}
          />
          <Button
            theme={Button.themes.primary}
            text="Emotion"
            onClick={() => handleOnClick('emotions')}
          />
          <Button
            theme={Button.themes.primary}
            text="Name"
            onClick={() => handleOnClick('names')}
          />
          <Button
            theme={Button.themes.primary}
            text="Quirk"
            onClick={() => handleOnClick('quirks')}
          />
          <Button
            theme={Button.themes.primary}
            text="Need"
            onClick={() => handleOnClick('needs')}
          />
        </List>
      </PageContent>
      <style jsx>
        {`
          .suggestion-generator {
            &__canvas {
              text-align: center;
              font-size: 8rem;
            }
          }
        `}
      </style>
    </>
  );
};

export default SuggestionGenerator;
