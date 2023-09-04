import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import Landing from "./pages/Website/Landing";
import LegalRenumerationOrder from "./pages/document";
import About from "./pages/Website/About";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route
          path="Legal-Practitioners-Renumeration-Order-2023"
          element={<LegalRenumerationOrder />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
