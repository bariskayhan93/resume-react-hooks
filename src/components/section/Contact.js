import React, { useState } from "react";
import { send } from "emailjs-com";
import { init } from "emailjs-com";
init("user_Wr3JNRm01T7fDOlRfIoTr");

export default function Contact() {
  const [toSend, setToSend] = useState({
    message: "",
    reply_to: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      "service_gnd1j19",
      "template_431a5pa",
      toSend,
      "user_Wr3JNRm01T7fDOlRfIoTr"
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="wave">
        <h1>Contact</h1>
      </div>
      <div className="contact">
        <div id="fm" className="">
          <div className="fish" id="fish"></div>
          <div className="fish" id="fish2"></div>

          <form id="waterform" method="post" onSubmit={onSubmit}>
            <div className="formgroup" id="email-form">
              <label for="email">Your e-mail*</label>
              <input
                type="email"
                id="email"
                name="reply_to"
                value={toSend.reply_to}
                onChange={handleChange}
              />
            </div>

            <div className="formgroup" id="message-form">
              <label for="message">Your message</label>
              <textarea
                id="message"
                name="message"
                value={toSend.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <input type="submit" value="Send your message!" />
          </form>
        </div>
      </div>
      <div className="footer">
        <p>&copy; 2021 Baris Kayhan</p>
      </div>
    </>
  );
}
