import { Routes, Route } from "react-router-dom";
import Books from "./components/Books";
import DetailPage from "./pages/DetailPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/books/:id" element={<DetailPage />} />
    </Routes>
  );
};

export default App;
