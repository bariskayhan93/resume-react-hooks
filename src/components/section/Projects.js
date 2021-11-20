import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import data from '../../data';

export default function Projects() {
  const [projects, setProjects] = useState(data);
  const [index, setIndex] = React.useState(0);

  useEffect(() => {
    const lastIndex = projects.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, projects]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <div className="projects section" >
    <section className="section" id="service">
      <div className="title ">
      <h1>Projects</h1>
      </div>
      <div className="section-center">
        {projects.map((project, projectIndex) => {
          const { id, image, name, title, quote,source,deploy } = project;

          let position = 'nextSlide';
          if (projectIndex === index) {
            position = 'activeSlide';
          }
          if (
            projectIndex === index - 1 ||
            (index === 0 && projectIndex === projects.length - 1)
          ) {
            position = 'lastSlide';
          }

          return (
            <article className={position} key={id}>
              <a href={deploy}>
              <img src={image} alt={name} className="project-img" />
              </a>
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <a href={source} className="btn-primary">Source Code</a>
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
    </div>
  );
}
