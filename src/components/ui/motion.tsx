'use client'

import { useState } from 'react'

import { motion } from 'framer-motion'

const draw = {
  /* When hidden, do this */
  hidden: { pathLength: 0, opacity: 0 },

  /* When animation run, do this */
  visible: (i: number) => {
    const delay = 0.3 + i * 0.2 // fast delay
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
    <div className="col-span-2 flex min-h-[16rem] items-center justify-center rounded-2xl bg-[#f9f4f4] p-2 dark:bg-[#1a202c]">
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
      </motion.svg>
    </div>
  )
}

