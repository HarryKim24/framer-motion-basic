import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const items = [
  { id: 1, title: 'Card 1', desc: 'Detail for card 1' },
  { id: 2, title: 'Card 2', desc: 'Detail for card 2' },
  { id: 3, title: 'Card 3', desc: 'Detail for card 3' },
];

const modalContentVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
    backgroundColor: "rgba(255,0,0,0.1)",
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    backgroundColor: "rgba(255,0,0,0.5)",
    transition: {
      delay: 0.1, 
      duration: 0.5,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    scale: 0,
    transition: {
      duration: 0.4,
    },
  },
};


const SharedLayoutCardVariants = () => {

  const [selectedId, setSelectedId] = useState(null);

  const selectedItem = items.find(item => item.id === selectedId);

  return (
    <div>
      <div style={{ display: 'flex', gap: 12 }}>
        {items.map(item => (
          <motion.div
            key={item.id}
            layoutId={item.id}
            onClick={() => setSelectedId(item.id)}
            style={{
              width: 100,
              height: 80,
              background: 'black',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              borderRadius: 8,
            }}
          >
            {item.title}
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedItem && (
          <motion.div
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0, 0, 0, 0.5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              layoutId={selectedItem.id}
              style={{
                width: 320,
                height: 220,
                background: 'white',
                borderRadius: 8,
                padding: 20,
              }}
              onClick={e => e.stopPropagation()}
            >
              <motion.div
                variants={modalContentVariants}
                initial='hidden'
                animate='visible'
                exit='exit'
                style={{ padding: 10, borderRadius: 8 }}
              >
                <h3>{selectedItem.title}</h3>
                <p>{selectedItem.desc}</p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default SharedLayoutCardVariants
