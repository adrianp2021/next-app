import React, { useState} from 'react';
import contactStyles from '../styles/Contact.module.scss'


const Contact = () => {

  const [formValue, setFormValue] = useState({
    name: '',
    email: '',
    subject: ''
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
          <h2 className={contactStyles.h2}>Reach out to us</h2>
          <h4 className={contactStyles.h4}>We are open to any ideas</h4>
        </div>

        <form className={contactStyles.form}>
          <div>
            <input type="text" name="name" placeholder="Name" id={contactStyles.input} value={formValue.name} minLength="50" onChange={handleFormChange} ></input>
          </div>
          <div>
            <input type="text" name="email" placeholder="Email" id={contactStyles.input} value={formValue.name} onChange={handleFormChange} ></input>
          </div>
          <div>
            <textarea type="text" name="subject" placeholder="Let us know of anything" id={contactStyles.input} value={formValue.name} onChange={handleFormChange} ></textarea>
          </div>
          <button className={contactStyles.button}>Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;