import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';


const containerVariants = {
  hidden: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
  visible: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: 1,
    }
  }
}

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
  }
}

const items = [1, 2, 3, 4];

const StaggerPresence = () => {

  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        토글
      </button>

      <AnimatePresence>
        {show && (
          <motion.ul
            variants={containerVariants}
            initial='hidden'
            animate='visible'
            exit='hidden'
            style={{ listStyle: 'none', padding: 0, marginTop: 20 }}
          >
            {items.map(item => (
              <motion.li
                key={item}
                variants={itemVariants}
                style={{
                  background: 'black',
                  color: 'white',
                  padding: 12,
                  marginBottom: 8,
                }}
              >
                Item {item}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}

export default StaggerPresence
