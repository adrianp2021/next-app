import React from 'react';
import quoteStyles from '../styles/Quotes.module.scss'
import { motion, AnimatePresence } from 'framer-motion'

const Quotes = () => {


  return (
    <section className={quoteStyles.section}>
      <div>
        <h2 className={quoteStyles.h2}>Our clients love our work</h2>
        <h4 className={quoteStyles.h4}>But don’t just take our word for it...</h4>
      </div>
      <Actions />
    </section>
  );
};

const Actions = ({ isVisible }) => {
  const [shouldShowActions, setShouldShowActions] = React.useState(false)

  const [lastYpos, setLastYPos] = React.useState(0)

  React.useEffect(() => {

    function handleScroll() {
      console.log('scrolled')
      const yPos = window.scrollY
      const isScrollingUp = yPos < lastYpos

      setShouldShowActions(isScrollingUp)
      setLastYPos(yPos)
    }

    window.addEventListener('scroll', handleScroll, false)

    return () => {
      window.removeEventListener('scroll', handleScroll, false)
    }

  }, [lastYpos])

  return (
    <AnimatePresence >
    <motion.div className="actions" initial={{ opacity: 0 }} animate={{ opacity: .4 }} transition={{ opacity: { duration: 2.2 } }} exit={{ opacity: 0 }}>
      <p className={quoteStyles.p} >
        <span className="">“ABC Agency our the best. Not only did they deliver my work on time, they even walked my dog when I was out of town”</span>
      </p>
      <p className={quoteStyles.p} >
        <span className="">“I don’t like people, but I make an exception for ABC Agency. They’re pretty damn cool.”</span>
      </p>
    </motion.div>
    </AnimatePresence>
  )
}

export default Quotes;