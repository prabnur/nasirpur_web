import React from 'react'
import Test from '../components/test'

export const LanguageContext = React.createContext('en');

const IndexPage = () => (
  <LanguageContext.Provider value={'en'}>
    <Test/>
  </LanguageContext.Provider>
)

export default IndexPage
