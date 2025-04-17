import { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ExpForm from "./components/ExpForm";
import Competences from "./components/Competences";
import Contact from "./components/Contact";
import Projets from "./components/Projets";
import blackWave from "./assets/svg/black_wave.svg";
import whiteWave from "./assets/svg/white_wave.svg";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Test from "./components/Test";

const App = () => {
  const sections = useRef([]);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = (e) => {
      if (isScrolling) return; // Empêche un scroll trop rapide

      setIsScrolling(true);
      setTimeout(() => setIsScrolling(false), 1000); // Délai entre chaque scroll

      const currentScrollY = window.scrollY;
      const direction = e.deltaY > 0 ? "down" : "up";

      const currentSectionIndex = sections.current.findIndex(
        (section) => section.offsetTop >= currentScrollY
      );

      let nextSection;
      if (direction === "down") {
        nextSection = sections.current[currentSectionIndex + 1];
      } else {
        nextSection = sections.current[currentSectionIndex - 1];
      }

      if (nextSection) {
        e.preventDefault();
        nextSection.scrollIntoView({ behavior: "smooth" });
      }
    };

    window.addEventListener("wheel", handleScroll, { passive: false });

    return () => window.removeEventListener("wheel", handleScroll);
  }, [isScrolling]);

  return (
    <div className="bg-gray-100">
      <Router>
        <Routes>
          <Route path="/test" element={<Test />} />
        </Routes>
      </Router>
      <Navbar />
      <section ref={(el) => (sections.current[0] = el)} id="accueil">
        <Home />
      </section>
      <div>
        <img src={blackWave} alt="" className="" />
      </div>
      <section ref={(el) => (sections.current[1] = el)} id="projets">
        <Projets />
      </section>
      <div>
        <img src={whiteWave} alt="" className="" />
      </div>
      <section ref={(el) => (sections.current[2] = el)} id="competences">
        <Competences />
      </section>
      <section ref={(el) => (sections.current[3] = el)} id="expForm">
        <ExpForm />
      </section>
      <section ref={(el) => (sections.current[4] = el)} id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
