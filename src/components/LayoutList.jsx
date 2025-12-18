import { useState } from "react"
import { motion } from 'framer-motion';

const LayoutList = () => {

  const [items, setItems] = useState([1, 2, 3, 4]);

  return (
    <div>
      <button onClick={() => setItems([...items].reverse())}>
        순서 바꾸기
      </button>

      <ul style={{ listStyle: 'none', padding: 0, marginTop: 20 }}>
        {items.map(item => (
          <motion.li
            key={item}
            layout
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
      </ul>
    </div>
  )
}

export default LayoutList
