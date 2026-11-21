import { Routes, Route } from "react-router-dom";
import Books from "./components/Books";
import DetailPage from "./pages/DetailPage";
import AboutPage from "./pages/AboutPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/books/:id" element={<DetailPage />} />
    </Routes>
  );
};

export default App;
