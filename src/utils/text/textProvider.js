import React from 'react';

import en from './en.json';
import pb from './pb.json';

export const languageNames = {
  'en': 'English',
  'pb': 'ਪੰਜਾਬੀ',
};

const languageText = {
  'en': en,
  'pb': pb
}

const initState = () => ":)";

const ChangeLanguage = React.createContext(initState);
const GetText = React.createContext((key) => languageText['en'][key]);

// A Wrapper functional component that provides text and keeps track of the current language
const TextContextProvider = ({children}) => {
    const [lang, setLang] = React.useState('en');
    const toggleLang = () => lang === 'en' ? setLang('pb') : setLang('en');
    const getText = (key) => languageText[lang][key];
    return( 
      <GetText.Provider value={getText}>
          <ChangeLanguage.Provider value={toggleLang}>
            {children}
          </ChangeLanguage.Provider>
      </GetText.Provider>
    );
}

export default TextContextProvider;

export { GetText, ChangeLanguage };
