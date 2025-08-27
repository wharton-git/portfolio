import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import Home from "./assets/pages/Home";
import Navbar from "./assets/components/Navbar";
import Skills from "./assets/pages/Skills";
import Experiences from "./assets/pages/Experiences";
import Projects from "./assets/pages/Projects";
import About from "./assets/pages/About";
import Contacts from "./assets/pages/Contacts";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <>
      <Navbar />
      <AnimatedRoutes />
    </>
  );
}

export default App;
