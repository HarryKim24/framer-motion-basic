import { motion } from 'framer-motion';
import { useState } from "react"

const ToggleBox = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen(!open)}>
        토글
      </button>

      <motion.div
        animate={{ x: open? 200 : 0 }}
        transition={{ 
          type: 'spring',
          stiffness: 100,
          damping: 12,
        }}
        style={{
          width: 120,
          height: 120,
          backgroundColor: 'tomato',
          marginTop: 20,
        }}
      />
    </div>
  )
}

export default ToggleBox
