import { useContext, useState } from "react";
import LanguageContext from "./LanguageContext";

function Greeting() {
  const language = useContext(LanguageContext);

  return (
    <h2>
      {language === "en" ? "Hello!" : "¡Hola!"}
    </h2>
  );
}

function LanguageSwitcher({ toggleLanguage }) {
  const language = useContext(LanguageContext);

  return (
    <button onClick={toggleLanguage}>
      {language === "en"
        ? "Switch to Spanish"
        : "switch to English"}
    </button>
  );
}

function LanguageSelector() {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "es" : "en"));
  };

  return (
    <LanguageContext.Provider value={language}>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Language Selector</h1>

        <Greeting />
        <LanguageSwitcher toggleLanguage={toggleLanguage} />
      </div>
    </LanguageContext.Provider>
  );
}

export default LanguageSelector;