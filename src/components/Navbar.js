import React,{useRef,useState,useEffect} from "react";
import { Link } from "react-router-dom";
import logo from "../baris.svg";
import "../index.css";
import AboutMe from "./section/AboutMe";
import Home from "./section/Home";
import Projects from "./section/Projects";
import Contact from "./section/Contact";

const getDimensions = ele => {
  const { height } = ele.getBoundingClientRect();
  const offsetTop = ele.offsetTop;
  const offsetBottom = offsetTop + height;
  return {
    height,
    offsetTop,
    offsetBottom,
  };
};

const scrollTo = ele => {
  ele.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};


export default function Navbar() {

   const [visibleSection, setVisibleSection] = useState();

  const headerRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const projectsRef = useRef(null);

  const sectionRefs = [
    { section: "Home", ref: headerRef },
    { section: "Leadership", ref: aboutRef },
    { section: "Providers", ref: contactRef },
    { section: "Operations", ref: projectsRef },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const { height: headerHeight } = getDimensions(headerRef.current);
      const scrollPosition = window.scrollY + headerHeight;

      const selected = sectionRefs.find(({ section, ref }) => {
        const ele = ref.current;
        if (ele) {
          const { offsetBottom, offsetTop } = getDimensions(ele);
          return scrollPosition > offsetTop && scrollPosition < offsetBottom;
        }
      });

      if (selected && selected.section !== visibleSection) {
        setVisibleSection(selected.section);
      } else if (!selected && visibleSection) {
        setVisibleSection(undefined);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visibleSection]);
  

  return (
    <>
<nav className="navbar sticky">
<div className="top-spacer" />
<div className="content">
      <div className="nav-center">
        <Link to="/"><img src={logo} alt="react logo" className="logo" /></Link>
        <ul className="nav-links">
          <li><Link to="home" className={`header_link ${visibleSection === "Home" ? "selected" : ""}`}
              onClick={() => {scrollTo(headerRef.current);}}>Home</Link></li>
          <li><Link  to="about"className={`header_link ${visibleSection === "Leadership" ? "selected" : ""}`}
              onClick={() => {scrollTo(aboutRef.current);}}>About</Link></li>
          <li><Link  to="projects" className={`header_link ${visibleSection === "Operations" ? "selected" : ""}`}
              onClick={() => {scrollTo(projectsRef.current);}}>Projects</Link></li>
                        <li><Link  to="contact" className={`header_link ${visibleSection === "Providers" ? "selected" : ""}`}
              onClick={() => {scrollTo(contactRef.current); }}>Contact</Link></li>
        </ul>
      </div>
      </div>
    </nav>
    <div className="section" id="Home" ref={headerRef} ><Home/></div>
    <div className="section" id="Leadership" ref={aboutRef} ><AboutMe/></div>
    <div className="section" id="Operations" ref={projectsRef} ><Projects/></div>
    <div className="section" id="Providers" ref={contactRef} > <Contact/> </div>
    </>
    
  );
  
  
  
  {/*(
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/">
          <img src={logo} alt="react logo" className="logo" />
        </Link>
        <ul className="nav-links">
        <li><Link activeClass="active" to="home" spy={true} smooth={true}>Home</Link></li>
          <li><Link  to="about" spy={true} smooth={true}>About</Link></li>
          <li><Link  to="contact" spy={true} smooth={true}>Contact</Link></li>
          <li><Link  to="service" spy={true} smooth={true}>Service</Link></li>
        </ul>
      </div>
    </nav>
  );*/}
}
