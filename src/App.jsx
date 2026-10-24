import { BrowserRouter, Route, Routes }  from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import NotFound from './pages/NotFound';

function App() {
  return (
<BrowserRouter>
<Routes>
<Route path="/" element={<HomePage />}/>
<Route path="/about" element={<AboutPage />}/>
<Route path="/contact" element={<ContactPage />}/>
<Route path="login" element={<LoginPage />}/>
<Route path="*" element={<NotFound />}/>
</Routes>
</BrowserRouter>
  );
}

export default App;





