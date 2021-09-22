import styles from '../styles/Nav.module.scss'
import { motion } from 'framer-motion'

const Nav = () => {
  return (
    <motion.div initial="hidden" animate="visible" variants={{
      hidden: {
        scale: .8,
        opacity: 0
      },
      visible: {
        scale: 1,
        opacity: 1,
        transition: {
          duration: .5
        }
      }
    }}>
      <nav className={styles.nav}>

        <div className="logo"></div>
        <h2 className={styles.h2}>HOME</h2>
        <h2 className={styles.h2}>ABOUT</h2>
        <h2 className={styles.h2}>SERVICES</h2>
        <h2 className={styles.h2}>CONTACT</h2>

      </nav>
    </motion.div>

  );
};

export default Nav;