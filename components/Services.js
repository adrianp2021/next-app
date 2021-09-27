// import React from 'react';
import servicesStyles from '../styles/Services.module.scss'
import Image from 'next/image'
import brand from '../public/coder.png'
import design from '../public/design.png'
import graphic from '../public/graphic.png'

const Services = () => {

  return (
    <section className={servicesStyles.section}>
      <div className={servicesStyles.top}>
        <div className={servicesStyles.top1}>
          <img src="https://images.unsplash.com/photo-1632502361954-0dd92ce797db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1625&q=80" className={servicesStyles.image}></img>
        </div>

        <div className={servicesStyles.top2}>
        <h2>Things that we do</h2>
        <p>We exist to create</p>
        <p>Focus infographic venture business model canvas gamification ecosystem. 
          Business plan gamification user experience low hanging fruit twitter. 
          Metrics research & development market paradigm shift growth hacking disruptive user experience iPad social media angel investor alpha. 
          Social proof lean startup alpha scrum project non-disclosure agreement.</p>
          <button className={servicesStyles.button}>Get in touch</button>
        </div>

      </div>

      <div className={servicesStyles.bottom}>
        
        <div className={`${servicesStyles.box1} ${servicesStyles.first} `}>
        <Image src={brand} width={100} height={100} />
          <h2>Branding</h2>
          <p>Focus infographic venture business model canvas gamification ecosystem. 
            Business plan gamification user experience low hanging fruit twitter. 
            Metrics research & development market paradigm shift growth hacking disruptive user experience iPad social media angel investor alpha.</p>
        </div>

        <div className={`${servicesStyles.box1} ${servicesStyles.second} `}>
        <Image src={design} width={100} height={100} />
          <h2>Web Design</h2>
          <p>Focus infographic venture business model canvas gamification ecosystem. 
            Business plan gamification user experience low hanging fruit twitter. 
            Metrics research & development market paradigm shift growth hacking disruptive user experience iPad social media angel investor alpha.</p>
        </div>

        <div className={`${servicesStyles.box1} ${servicesStyles.third} `}>
        <Image src={graphic} width={150} height={100} />
        <h2>Graphic Design</h2>
        <p>Focus infographic venture business model canvas gamification ecosystem. 
            Business plan gamification user experience low hanging fruit twitter. 
            Metrics research & development market paradigm shift growth hacking disruptive user experience iPad social media angel investor alpha.</p>
        </div>
          
      </div>
    </section>
  );
};

export default Services;