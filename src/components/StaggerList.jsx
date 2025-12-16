import { useState } from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    }
  }
}

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
  }
}

const StaggerList = () => {

  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        토글
      </button>

      <motion.ul
        variants={containerVariants}
        initial='hidden'
        animate={show ? 'visible' : 'hidden'}
        style={{
          listStyle: 'none', padding: 0, marginTop: 20
        }}
      >
        {[1, 2, 3, 4].map(item => (
          <motion.li 
            key={item}
            variants={itemVariants}
            style={{
              backgroundColor: 'black',
              color: 'white',
              padding: 12,
              marginBottom: 8,
            }}
          >
            Item {item}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  )
}

export default StaggerList
