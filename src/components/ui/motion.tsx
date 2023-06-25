'use client'

import { useState } from 'react'

import { motion } from 'framer-motion'

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => {
    const delay = 1 + i * 0.2
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: 'spring', duration: 1, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    }
  },
}

export default function Motion() {
  const [key, setKey] = useState(0)

  const handleClick = () => {
    setKey((prevKey) => prevKey + 1) // change key to re-run animation
  }

  return (
    <motion.svg
      width="300"
      height="300"
      viewBox="0 0 600 600"
      initial="hidden"
      animate="visible"
      key={key}
      onClick={handleClick}
    >
      <motion.circle cx="100" cy="100" r="80" stroke="#ff0055" variants={draw} custom={1} />

      <motion.line x1="220" y1="30" x2="360" y2="170" stroke="#00cc88" variants={draw} custom={2} />

      <motion.line x1="220" y1="170" x2="360" y2="30" stroke="#00cc88" variants={draw} custom={2.5} />

      <motion.rect width="140" height="140" x="410" y="30" rx="20" stroke="#0099ff" variants={draw} custom={3} />

      <motion.circle cx="100" cy="300" r="80" stroke="#0099ff" variants={draw} custom={2} />

      <motion.line x1="220" y1="230" x2="360" y2="370" stroke="#ff0055" custom={3} variants={draw} />

      <motion.line x1="220" y1="370" x2="360" y2="230" stroke="#ff0055" custom={3.5} variants={draw} />

      <motion.rect width="140" height="140" x="410" y="230" rx="20" stroke="#00cc88" custom={4} variants={draw} />

      <motion.circle cx="100" cy="500" r="80" stroke="#00cc88" variants={draw} custom={3} />

      <motion.line x1="220" y1="430" x2="360" y2="570" stroke="#0099ff" variants={draw} custom={4} />

      <motion.line x1="220" y1="570" x2="360" y2="430" stroke="#0099ff" variants={draw} custom={4.5} />

      <motion.rect width="140" height="140" x="410" y="430" rx="20" stroke="#ff0055" variants={draw} custom={5} />
    </motion.svg>
  )
}

// // Initialize SVG elements as list items
// const initialItems = [
//   {
//     id: 1,
//     component: <motion.circle cx="100" cy="100" r="80" stroke="#ff0055" variants={draw} custom={1} />,
//   },
//   {
//     id: 2,
//     component: <motion.line x1="220" y1="30" x2="360" y2="170" stroke="#00cc88" variants={draw} custom={2} />,
//   },
//   {
//     id: 3,
//     component: <motion.line x1="220" y1="170" x2="360" y2="30" stroke="#00cc88" variants={draw} custom={2.5} />,
//   },
//   {
//     id: 4,
//     component: (
//       <motion.rect width="140" height="140" x="410" y="30" rx="20" stroke="#0099ff" variants={draw} custom={3} />
//     ),
//   },
//   {
//     id: 5,
//     component: <motion.circle cx="100" cy="300" r="80" stroke="#0099ff" variants={draw} custom={2} />,
//   },
//   {
//     id: 6,
//     component: <motion.line x1="220" y1="230" x2="360" y2="370" stroke="#ff0055" custom={3} variants={draw} />,
//   },
//   {
//     id: 7,
//     component: <motion.line x1="220" y1="370" x2="360" y2="230" stroke="#ff0055" custom={3.5} variants={draw} />,
//   },
//   {
//     id: 8,
//     component: (
//       <motion.rect width="140" height="140" x="410" y="230" rx="20" stroke="#00cc88" custom={4} variants={draw} />
//     ),
//   },
//   {
//     id: 9,
//     component: <motion.circle cx="100" cy="500" r="80" stroke="#00cc88" variants={draw} custom={3} />,
//   },
//   {
//     id: 10,
//     component: <motion.line x1="220" y1="430" x2="360" y2="570" stroke="#0099ff" variants={draw} custom={4} />,
//   },
//   {
//     id: 11,
//     component: <motion.line x1="220" y1="570" x2="360" y2="430" stroke="#0099ff" variants={draw} custom={4.5} />,
//   },
//   {
//     id: 12,
//     component: (
//       <motion.rect width="140" height="140" x="410" y="430" rx="20" stroke="#ff0055" variants={draw} custom={5} />
//     ),
//   },
// ]

// export default function Motion() {
//   const [items, setItems] = useState(initialItems)

//   return (
//     <Reorder.Group values={items} onReorder={setItems}>
//       {items.map((item) => (
//         <Reorder.Item key={item.id} value={item} drag={true}>
//           <motion.svg width="30" height="30" viewBox="0 0 600 600" initial="hidden" animate="visible">
//             {item.component}
//           </motion.svg>
//         </Reorder.Item>
//       ))}
//     </Reorder.Group>
//   )
// }
