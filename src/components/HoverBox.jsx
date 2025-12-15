import { motion } from 'framer-motion';

const HoverBox = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.1, rotate: 45 }}
      whileTap={{ scale: 1, y: 10 }}
      transition={{
        type: 'spring',
        stiffness: 200,
        damping: 10,
      }}
      style={{
        width: 120,
        height: 120,
        backgroundColor: 'royalblue',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        cursor: 'pointer',
      }}
    >
      Hover me
    </motion.div>
  )
}

export default HoverBox