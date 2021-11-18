import React, { useRef } from "react";
import image from "../../photo.jpg";

export default function AboutMe({ aboutRef }) {
  return (
    <section className="about" ref={aboutRef}>
        <div className="about-wrapper grey-padding section">

          <div className="about_container grid">
            {image === "" ? (
              <React.Fragment />
            ) : (
              <div className="about_img">
                <img src={image} alt="About" />
              </div>
            )}
            <div>
              <h2 className="about_subtitle">Hello, I'm Baris</h2>
              <p className="about_text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Excepturi non quis, repellendus voluptate vero tempora corporis
                ipsa dicta voluptatibus. Quam deserunt optio vitae eligendi
                nostrum sit obcaecati dolor magnam fugit magni illo sint
                officiis oiatis quod facere! Corrupti fuga saepe, maxime
                aliquid quisquam deleniti cum ipsa error, quaerat impedit
                recusandae enim exercitationem sed ducimus quas culpa eum alias
                harum? Veniam ex eaque minus tenetur iusto adipisci, dicta ab
                eligendi illo fuga. Dicta atque debitis commodi. Officiis, dicta
                modi? Natus, neque? Vel deleniti eligendi optio? Reiciendis nisi
                atque error officiis et dolorem dolore, cupiditate sunt natus ad
                commodi! Animi Fugit?
              </p>
            </div>
          </div>
        </div>
    </section>
  );
}
