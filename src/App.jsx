import Card from "./components/Card";
import i18next from "./i18";
const App = () => {
  const changeLanguage = (lang) => {
    i18next.changeLanguage(lang);
  };

  return (
    <>
      <div className="flex items-center justify-center gap-x-2">
        <button
          onClick={() => changeLanguage("uz")}
          className="bg-amber-500 px-4 py-1 rounded-xl"
        >
          UZ
        </button>
        <button
          onClick={() => changeLanguage("ru")}
          className="bg-amber-500 px-4 py-1 rounded-xl"
        >
          RU
        </button>
        <button
          onClick={() => changeLanguage("en")}
          className="bg-amber-500 px-4 py-1 rounded-xl"
        >
          EN
        </button>
      </div>
      <Card />
    </>
  );
};

export default App;
