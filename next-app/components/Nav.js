import styles from '../styles/Nav.module.scss'

const Nav = () => {
  return (
  
    <nav className={styles.nav}>
      <div className="logo"></div>
    <h2 className={styles.h2}>HOME</h2>
    <h2 className={styles.h2}>ABOUT</h2>
    <h2 className={styles.h2}>SERVICES</h2>
    <h2 className={styles.h2}>CONTACT</h2>

  </nav>

  
  );
};

export default Nav;