import React,{useState} from "react";
import { send } from 'emailjs-com';
import{ init } from 'emailjs-com';
init("user_Wr3JNRm01T7fDOlRfIoTr");


export default function Contact() {

  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: '',
    message: '',
    reply_to: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      'SERVICE ID',
      'TEMPLATE ID',
      toSend,
      'User ID'
    )
      .then((response) => {console.log('SUCCESS!', response.status, response.text);})
      .catch((err) => {console.log('FAILED...', err);});
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="contact">
        <h1>Contact</h1>
        <form onSubmit={onSubmit}>
  <input type='text' name='from_name'placeholder='from name'   value={toSend.from_name} onChange={handleChange}/>
  <input type='text' name='to_name'  placeholder='to name'     value={toSend.to_name}   onChange={handleChange}/>
  <input type='text' name='message'  placeholder='Your message'value={toSend.message}   onChange={handleChange}/>
  <input type='text' name='reply_to' placeholder='Your email'  value={toSend.reply_to}  onChange={handleChange}/>
  <button type='submit'>Submit</button>
        </form>
      </div>
      <div className="footer">
      <p>&copy; 2021 Baris Kayhan</p>
      </div>
    </>
  );

  

  
}
