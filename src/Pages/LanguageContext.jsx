import React, { createContext, useContext, useState } from 'react';
const LanguageContext = createContext();
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('English (UK)');

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook for using language context
export const useLanguage = () => {
  return useContext(LanguageContext);
};