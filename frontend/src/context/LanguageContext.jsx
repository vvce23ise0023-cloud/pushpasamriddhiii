import React, { createContext, useState, useContext } from 'react';

const translations = {
  en: { home: "Home", articles: "Guides", marketplace: "Market", askExpert: "Ask AI", searchPlaceholder: "Search crops...", weatherTitle: "Farm Weather" },
  hi: { home: "होम", articles: "जानकारी", marketplace: "मंडी बाजार", askExpert: "AI सहायक", searchPlaceholder: "फूल या फसल खोजें...", weatherTitle: "खेत का मौसम" },
  kn: { home: "ಮುಖಪುಟ", articles: "ಮಾಹಿತಿ", marketplace: "ಮಾರುಕಟ್ಟೆ", askExpert: "AI ಸಹಾಯ", searchPlaceholder: "ಹುಡುಕಿ...", weatherTitle: "ಹವಾಮಾನ ಮಾಹಿತಿ" },
  ta: { home: "முகப்பு", articles: "வழிகாட்டி", marketplace: "சந்தை", askExpert: "AI உதவி", searchPlaceholder: "தேடுக...", weatherTitle: "வானிலை" },
  mr: { home: "मुख्यपृष्ठ", articles: "मार्गदर्शन", marketplace: "बाजारपेठ", askExpert: "AI मदत", searchPlaceholder: "शोध घ्या...", weatherTitle: "हवामान" }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('en');
  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
};
export const useLanguage = () => useContext(LanguageContext);