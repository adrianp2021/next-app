import portfolioStyles from '../styles/Portfolio.module.scss';
import { motion } from 'framer-motion'


const Portfolio = () => {

  const images = [
    {
      link: 'https://iso.500px.com/wp-content/uploads/2018/12/500px_our_favorite_photos_2018_part_2-1500x1000.jpg'
    },
    {
      link: 'https://images.unsplash.com/photo-1509281373149-e957c6296406?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmV0cm98ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      link: 'https://www.colesclassroom.com/wp-content/uploads/2018/07/pexels-photo-169677.jpeg'
    }
  ]
  const images1 = [
    {
      link1: 'https://images.unsplash.com/photo-1492171983775-a51717616c0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1164&q=80'
    },
    {
      link1: 'https://images.unsplash.com/photo-1541723011216-c57eaed19919?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80',
    },
    {
      link1: 'https://images.unsplash.com/photo-1521572063439-8a4186b6d843?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
    },
    {
      link1: 'https://images.unsplash.com/photo-1632220894022-a83eacddae2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80'
    }
  ]

  return (
    <section className={portfolioStyles.section}>
      <div className={portfolioStyles.top}>
        <div className={portfolioStyles.box} id="latest">
          <h2 className={portfolioStyles.h2}>Latest <br />creations</h2>
          <h4 className={portfolioStyles.h4}>We make beautiful things</h4>
          <p className={portfolioStyles.p}>Focus infographic venture business model canvas gamification ecosystem.
            Business plan gamification user experience low hanging fruit twitter.
            Metrics research & development market paradigm shift growth hacking.</p>
        </div>
        {images.map((image, i) => {
          return (
            <>
              <motion.div key={i} className={portfolioStyles.box} whileHover={{
                position: 'relative',
                zIndex: 1,
                background: 'white',
                scale: [1, 1.03],
                filter: [
                  'hue-rotate(0) contrast(100%)',
                  // 'hue-rotate(360deg) contrast(200%)',
                  'hue-rotate(45deg) contrast(250%)',
                  'hue-rotate(-20deg) contrast(100%)'
                ],
                transition: {
                  duration: .5
                }
              }}>
                <img src={image.link} className={portfolioStyles.image} />
              </motion.div>
            </>
          )
        })}
      </div>
      <div className={portfolioStyles.bottom}>
        {images1.map((item, i) => {
          return (
            <>
              <motion.div key={i} className={portfolioStyles.box} whileHover={{
                position: 'relative',
                zIndex: 1,
                background: 'white',
                scale: [1, 1.03],
                filter: [
                  'hue-rotate(0) contrast(100%)',
                  // 'hue-rotate(360deg) contrast(200%)',
                  'hue-rotate(45deg) contrast(250%)',
                  'hue-rotate(-20deg) contrast(100%)'
                ],
                boxShadow: "0 1px 2px rgba(0,0,0,0.07)", 
                transition: {
                  duration: .5
                }
              }}>
                <img src={item.link1} className={portfolioStyles.image} />
              </motion.div>
            </>
          )
        })}
      </div>
    </section>
  );
};

export default Portfolio;