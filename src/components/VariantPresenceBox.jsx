import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"

const boxVariants = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
    x: 100,
  }
}

const VariantPresenceBox = () => {

  const [show, setShow] = useState(false);

  return (
    <div>
      <button
        onClick={() => setShow(!show)}
      >토글 버튼</button>

      <AnimatePresence>
        {show && (
          <motion.div
            variants={boxVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
            transition={{ duration: 0.4 }}
            style={{
              width: 200,
              height: 100,
              backgroundColor: 'black',
              marginTop: 20,
            }}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

export default VariantPresenceBox
