import React,{useRef,useState,useEffect} from "react";
import { Link } from "react-router-dom";
import { FaBars } from 'react-icons/fa';
import { social } from '../data';
import logo from "../baris-logo.svg";
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
    block:'end',
  });
};


export default function Navbar() {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {setShowLinks(!showLinks);};

   const [visibleSection, setVisibleSection] = useState();

  const headerRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const projectsRef = useRef(null);

  const sectionRefs = [
    { section: "Home", ref: headerRef },
    { section: "About", ref: aboutRef },
    { section: "Contact", ref: contactRef },
    { section: "Projects", ref: projectsRef },
  ];

  useEffect(() => {
    
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }


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
  }, [visibleSection,sectionRefs,showLinks]);
  

  return (
    <>
<nav className="navbar sticky">
<div className="top-spacer" />
      <div className="nav-center">
        <div className="nav-header">
        <Link to="/"><img src={logo} alt="react logo" className="logo" /></Link>
        <button className='nav-toggle' onClick={toggleLinks}>
            <FaBars />
          </button>
          </div>
        <div className='links-container' ref={linksContainerRef}>
        <ul className="nav-links links" ref={linksRef}>
          <li><Link to="home" className={`header_link ${visibleSection === "Home" ? "selected" : ""}`}
              onClick={() => {scrollTo(headerRef.current);}}>Home</Link></li>
          <li><Link  to="about"className={`header_link ${visibleSection === "About" ? "selected" : ""}`}
              onClick={() => {scrollTo(aboutRef.current);}}>About</Link></li>
          <li><Link  to="projects" className={`header_link ${visibleSection === "Projects" ? "selected" : ""}`}
              onClick={() => {scrollTo(projectsRef.current);}}>Projects</Link></li>
          <li><Link  to="contact" className={`header_link ${visibleSection === "Contact" ? "selected" : ""}`}
              onClick={() => {scrollTo(contactRef.current); }}>Contact</Link></li>
        </ul>
      </div>
      <ul className='social-icons'>
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
</div>
</nav>
    <div ref={headerRef} ><Home/></div>
    <div ref={aboutRef} ><AboutMe/></div>
    <div ref={projectsRef} ><Projects/></div>
    <div ref={contactRef} > <Contact/> </div>
    </>
  );
}
