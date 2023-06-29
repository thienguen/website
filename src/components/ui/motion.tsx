'use client'

import { useState } from 'react'

import { motion } from 'framer-motion'

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => {
    const delay = 0.3 + i * 0.2
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
    <div className="col-span-2 flex  items-center justify-center rounded-2xl bg-[#f9f4f4] dark:bg-[#1a202c]">
      <motion.svg
        width="208"
        height="192"
        viewBox="0 0 600 600"
        initial="hidden"
        animate="visible"
        key={key}
        whileFocus={{ scale: 1.1 }}
        onClick={handleClick}
        className={''}
      >
<<<<<<< HEAD
        <circle cx="105" cy="100" r="80" stroke="#333" fill="#fff" stroke-width="10" />
        <motion.circle cx="105" cy="100" r="80" stroke="#ff0055" variants={draw} custom={1} />

        <line x1="225" y1="25" x2="365" y2="165" stroke="#333" strokeWidth="10" />
        <motion.line x1="225" y1="25" x2="365" y2="165" stroke="#00cc88" variants={draw} custom={2} />

        <line x1="225" y1="165" x2="365" y2="25" stroke="#333" strokeWidth="10" />
        <motion.line x1="225" y1="165" x2="365" y2="25" stroke="#00cc88" variants={draw} custom={2.5} />

        <rect width="145" height="145" x="415" y="25" rx="20" stroke="#333" fill="#ddd" strokeWidth="10" />
        <motion.rect width="145" height="145" x="415" y="25" rx="20" stroke="#0099ff" variants={draw} custom={3} />

        <circle cx="105" cy="295" r="80" stroke="#333" fill="#ddd" strokeWidth="10" />
        <motion.circle cx="105" cy="295" r="80" stroke="#0099ff" variants={draw} custom={2} />

        <line x1="225" y1="225" x2="365" y2="365" stroke="#333" strokeWidth="10" />
        <motion.line x1="225" y1="225" x2="365" y2="365" stroke="#ff0055" custom={3} variants={draw} />

        <line x1="225" y1="365" x2="365" y2="225" stroke="#333" strokeWidth="10" />
        <motion.line x1="225" y1="365" x2="365" y2="225" stroke="#ff0055" custom={3.5} variants={draw} />

        <rect width="145" height="145" x="415" y="225" rx="20" stroke="#333" fill="#ddd" strokeWidth="10" />
        <motion.rect width="145" height="145" x="415" y="225" rx="20" stroke="#00cc88" custom={4} variants={draw} />

        <circle cx="105" cy="495" r="80" stroke="#333" fill="#ddd" strokeWidth="10" />
        <motion.circle cx="105" cy="495" r="80" stroke="#00cc88" variants={draw} custom={3} />

        <line x1="225" y1="425" x2="365" y2="565" stroke="#333" strokeWidth="10" />
        <motion.line x1="225" y1="425" x2="365" y2="565" stroke="#0099ff" variants={draw} custom={4} />

        <line x1="225" y1="565" x2="365" y2="425" stroke="#333" strokeWidth="10" />
        <motion.line x1="225" y1="565" x2="365" y2="425" stroke="#0099ff" variants={draw} custom={4.5} />

        <rect width="145" height="145" x="415" y="425" rx="20" stroke="#333" fill="#ddd" strokeWidth="10" />
        <motion.rect width="145" height="145" x="415" y="425" rx="20" stroke="#ff0055" variants={draw} custom={5} />
=======
        <circle cx="105" cy="105" r="80" stroke="#333" fill="#fff" stroke-width="10" />
        <motion.circle cx="105" cy="105" r="80" stroke="#ff0055" variants={draw} custom={1} />

        <line x1="225" y1="35" x2="365" y2="175" stroke="#333" strokeWidth="10" />
        <motion.line x1="225" y1="35" x2="365" y2="175" stroke="#00cc88" variants={draw} custom={2} />

        <line x1="225" y1="175" x2="365" y2="35" stroke="#333" strokeWidth="10" />
        <motion.line x1="225" y1="175" x2="365" y2="35" stroke="#00cc88" variants={draw} custom={2.5} />

        <rect width="145" height="145" x="415" y="35" rx="20" stroke="#333" fill="#ddd" strokeWidth="10" />
        <motion.rect width="145" height="145" x="415" y="35" rx="20" stroke="#0099ff" variants={draw} custom={3} />

        <circle cx="105" cy="305" r="80" stroke="#333" fill="#ddd" strokeWidth="10" />
        <motion.circle cx="105" cy="305" r="80" stroke="#0099ff" variants={draw} custom={2} />

        <line x1="225" y1="235" x2="365" y2="375" stroke="#333" strokeWidth="10" />
        <motion.line x1="225" y1="235" x2="365" y2="375" stroke="#ff0055" custom={3} variants={draw} />

        <line x1="225" y1="375" x2="365" y2="235" stroke="#333" strokeWidth="10" />
        <motion.line x1="225" y1="375" x2="365" y2="235" stroke="#ff0055" custom={3.5} variants={draw} />

        <rect width="145" height="145" x="415" y="235" rx="20" stroke="#333" fill="#ddd" strokeWidth="10" />
        <motion.rect width="145" height="145" x="415" y="235" rx="20" stroke="#00cc88" custom={4} variants={draw} />

        <circle cx="105" cy="505" r="80" stroke="#333" fill="#ddd" strokeWidth="10" />
        <motion.circle cx="105" cy="505" r="80" stroke="#00cc88" variants={draw} custom={3} />

        <line x1="225" y1="435" x2="365" y2="575" stroke="#333" strokeWidth="10" />
        <motion.line x1="225" y1="435" x2="365" y2="575" stroke="#0099ff" variants={draw} custom={4} />

        <line x1="225" y1="575" x2="365" y2="435" stroke="#333" strokeWidth="10" />
        <motion.line x1="225" y1="575" x2="365" y2="435" stroke="#0099ff" variants={draw} custom={4.5} />

        <rect width="145" height="145" x="415" y="435" rx="20" stroke="#333" fill="#ddd" strokeWidth="10" />
        <motion.rect width="145" height="145" x="415" y="435" rx="20" stroke="#ff0055" variants={draw} custom={5} />
>>>>>>> main
      </motion.svg>
    </div>
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
