import React, { useState} from 'react';
import contactStyles from '../styles/Contact.module.scss'


const Contact = () => {

  const [formValue, setFormValue] = useState({
    name: '',
    email: '',
    message: '',
  })

  function handleFormChange(e) {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value
    })
    console.log(formValue)
  }

  return (
    <section className={contactStyles.contact}>
      <div className={contactStyles.box}>
        
        <div className={contactStyles.top}>
          <h2 className={contactStyles.h2}>reach out to us</h2>
          <h4 className={contactStyles.h4}>we are open to any ideas</h4>
        </div>

        <form className={contactStyles.form} >

          <div>
            <input type="text" 
            name="name" 
            placeholder="name" 
            id={contactStyles.input} 
            value={formValue.name} 
            minLength="2" 
            onChange={handleFormChange} ></input>
          </div>

          <div>
            <input 
            type="email" 
            name="email" 
            placeholder="email" 
            id={contactStyles.input} 
            value={formValue.email} 
            minLength="2" 
            onChange={handleFormChange} ></input>
          </div>
          <div>
            <textarea 
            name="message" 
            placeholder="subject" 
            id={contactStyles.input} 
            value={formValue.message} 
            minLength="2" 
            onChange={handleFormChange} ></textarea>
          </div>
          <button className={contactStyles.button}>submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;