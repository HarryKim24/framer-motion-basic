import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react"

const PresenceBox = () => {
  const [showBox, setShowBox] = useState(false);

  return (
    <div>
      <button onClick={() => setShowBox(!showBox)}>토글 버튼</button>

      <AnimatePresence>
        {showBox && (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
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

export default PresenceBox
