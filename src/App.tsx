import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Personal from "./Pages/Personal";
import Bussiness from "./Pages/Business";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Personal />} />
        <Route path="/business" element={<Bussiness />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
