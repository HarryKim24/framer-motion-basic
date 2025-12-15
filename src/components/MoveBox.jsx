import { motion } from 'framer-motion';

const MoveBox = () => {
  return (
    <motion.div
      initial={{ x: 0, opacity: 0 }}
      animate={{ x: 100, opacity: 1 }}
      transition={{ duration: 1 }}
      style={{
        width: 120,
        height: 120,
        backgroundColor: 'black',
      }}
    />
  )
}

export default MoveBox
