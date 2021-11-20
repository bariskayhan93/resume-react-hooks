import React from "react";
import image from "../../photo.jpg";

export default function AboutMe({ aboutRef }) {
  return (
    <section className="about section" ref={aboutRef}>
      <h1>About</h1>
      <div className="about_container">
        <img src={image} alt="About" />
        <div>
          <h2 className="about_subtitle">Hello, I'm Baris</h2>
          <p className="about_text">
            I'm currently looking for new opportunities in Web Development.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse modi
            praesentium earum maiores ipsa repudiandae cumque eaque! Repellendus
            quis voluptates, reprehenderit, libero est nam amet voluptatem iusto
            necessitatibus, aut maiores magnam eligendi dolor. Nesciunt sunt
            assumenda a error, maiores quasi tempore eligendi esse. Iure impedit
            aspernatur placeat eligendi commodi blanditiis. After many years of
            support I've decided to expand my skills into web programming. After
            completing my recent web projects, it's now time to take my career
            to the next level.
          </p>
        </div>
      </div>
    </section>
  );
}
