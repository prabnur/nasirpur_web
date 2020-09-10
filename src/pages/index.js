import React from 'react'

//import Test from '../components/test'
import Header from '../components/header';
import Test from '../components/test';

export const LanguageContext = React.createContext();

const IndexPage = () => {
  const [lang, setLang] = React.useState('en');
  const toggleLang = lang => lang === 'en' ? setLang('pb') : setLang('en');
  return (
    <LanguageContext.Provider value={lang}>
      <Header toggleLang={toggleLang}/>
    </LanguageContext.Provider>
  );
};

export default IndexPage;
