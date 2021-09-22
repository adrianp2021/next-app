import React from 'react';
import quoteStyles from '../styles/Quotes.module.scss'

const Quotes = () => {

  return (
    <section className={quoteStyles.section}>
    <div>
      <h2 className={quoteStyles.h2}>Our clients love our work</h2>
      <h4 className={quoteStyles.h4}>But don’t just take our word for it...</h4>
    </div>

    </section>
  );
};

export default Quotes;