import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';

const Home = () => {

  const text = "WHARTON";
  const hey = useRef(null);
  const lettersRef = useRef([]);
  const aldrickRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Animation "Hey I'm"
    tl.fromTo(
      hey.current,
      { x: -200, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: 'power2.out' }
    );

    // Animation des lettres de "WHARTON"
    tl.fromTo(
      lettersRef.current,
      { y: -30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out'
      },
      "<" // "<" pour enchaîner directement après l'élément précédent
    );

    // Animation "ALDRICK" après WHARTON
    tl.fromTo(
      aldrickRef.current,
      { opacity: 0, y: 10 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out'
      },
      "+=0.2" // petit délai après WHARTON
    );
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen text-[#1c1c1c] bg-gray-100">
      <div className="text-center">
        <div className="text-4xl space-x-2 flex flex-col md:flex-row lg:text-6xl transition-all">
          <span ref={hey}>Hey I&apos;m</span>
          <div className="flex justify-center space-x-2">
            {text.split("").map((char, index) => (
              <span
                key={index}
                ref={(el) => (lettersRef.current[index] = el)}
                className="inline-block text-transparent text-stroke-2"
              >
                {char}
              </span>
            ))}
            <span ref={aldrickRef} className="">
              ALDRICK
            </span>
          </div>
        </div>
        <div className="flex items-center justify-center text-2xl lg:text-4xl">
          <span className="mr-2">Code Name</span>
          <span className="text-transparent text-stroke-2">XEON</span>
        </div>
        <div>
          I&apos;m a full stack developer & computer network technician
        </div>
      </div>
      <div
        onClick={() => scrollToSection('projets')}
        className="cursor-pointer space-x-2 flex items-center my-5 border-2 p-3 rounded-full hover:bg-black hover:text-white active:scale-95 transition-all translate-y-10"
      >
        <ArrowRight />
        <div>See my projects</div>
      </div>
    </div>
  );
};

export default Home;
