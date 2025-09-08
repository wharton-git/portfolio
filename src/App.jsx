import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import Home from "./assets/pages/Home";
import Navbar from "./assets/components/Navbar";
import Skills from "./assets/pages/Skills";
import Experiences from "./assets/pages/Experiences";
import Projects from "./assets/pages/Projects";
import About from "./assets/pages/About";
import Contacts from "./assets/pages/Contacts";
import { useEffect, useState } from "react";

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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      if (/android|ipad|iphone|ipod/i.test(userAgent)) {
        setIsMobile(true);
      } else if (window.innerWidth < 768) {
        // sécurité si l'écran est petit
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (isMobile) {
    return (
      <div className="flex items-center justify-center h-screen w-screen bg-black text-white text-center p-6">
        <p className="text-xl font-bold">
          This website is currently available only on PC.<br />
          Please visit us from a computer.
        </p>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <AnimatedRoutes />
    </>
  );
}

export default App;
