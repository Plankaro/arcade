import React from 'react'
import { motion } from 'framer-motion'
import CloseButton from '../options/CloseButton';

interface IntroModalProps {
  children: React.ReactNode;
  show?: boolean;
}

const CommonModal = ({ show, children }: IntroModalProps) => {
  return (
    <motion.div
      initial={{
        translateX: '-40%',
        opacity: 0,
      }}
      animate={{
        translateX: show ? '0%' : '-40%',
        opacity: show ? 1 : 0,
      }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={` fixed inset-0 z-20 bg-black/60`}
    >
      <CloseButton />
      <div className=" h-screen flex items-center justify-center">
        {children}
      </div>
    </motion.div>
  )
}

export default CommonModal
