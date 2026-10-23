import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { ExperienceDetail } from "./pages/ExperienceDetail";
import Experiences from "./pages/Experiences";
import Contact from "./pages/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/experiences" element={<Experiences />} />
      <Route path="/contact" element={<Contact />} />
      <Route
        path="/experiences/:id"
        element={<ExperienceDetail />}
      />
    </Routes>
  );
}

export default App;