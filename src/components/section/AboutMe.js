import React from "react";

export default function AboutMe({ aboutRef }) {
  return (
    <section className="about section" ref={aboutRef}>
      <h1>About</h1>
      <div className="about_container">
        <img
          src="https://avatars.githubusercontent.com/u/83955254?v=4"
          alt="About"
        />
        <div>
          <h2 className="about_subtitle">Hello, I'm Baris</h2>
          <p className="about_text">
            I am a web developer with a knowledge in different front end and
            back end languages, responsive frameworks, databases and best code
            practices. My objective is simply to be the best web developer that
            I can be and to contribute to the technology industry all that I
            know and can do. I am dedicated to perfecting my craft by learning
            from more seasoned developers, remaining humble and continuously
            making strides to learn all that I can about development.
          </p>
        </div>
      </div>
    </section>
  );
}
