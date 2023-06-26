import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import LegalRenumerationOrder from "./pages/document";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="Legal-Practitioners-Renumeration-Order-2023"
          element={<LegalRenumerationOrder />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
