import React from 'react'
import { motion } from 'framer-motion'

interface IntroModalProps {
  show: boolean
}

const IntroModal = ({ show }: IntroModalProps) => {
  return (
    <motion.div className={``}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div>
        <h1>This is a box</h1>
      </div>
    </motion.div>
  )
}

export default IntroModal
