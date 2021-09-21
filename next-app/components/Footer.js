import React from 'react';
import footerStyles from '../styles/Footer.module.scss'
import Image from 'next/image'
// import logoStyle from '../styles/Logo.module.scss'


const Footer = () => {
  return (
    <section className={footerStyles.footerContent}>
      <div className={footerStyles.content}>
        <Image src="/lotr.png" alt="next-logo" width={150} height={150} />
      </div>
      <div className={footerStyles.content}>
        <h2 className={footerStyles.h2}>Menu</h2>
        <p>Home</p>
        <p>About</p>
        <p>Services</p>
        <p>Contact</p>
      </div>
      <div className={footerStyles.content}>
        <h2 className={footerStyles.h2}>Address</h2>
        <p>Suite #913</p>
        <p>Corporation Building</p>
        <p>Tibb Street</p>
        <p>Manchester</p>
        <p>M1 1TA</p>
      </div>
      <div className={footerStyles.content}>
        <h3 className={footerStyles.h2}>Contact</h3>
        <p>E: info@email.com</p>
        <p>T: +44 734 029 2840</p>
        <p>F: +44 800 294 292</p>
      </div>
    </section>
  );
};

export default Footer;