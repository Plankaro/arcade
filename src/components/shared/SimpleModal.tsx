import React from 'react'
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { allClose } from '../../store/slice/action'
import { IoClose } from "react-icons/io5";

interface IntroModalProps {
  children: React.ReactNode;
  show: boolean;
}

const CommonModal = ({ show, children }: IntroModalProps) => {
  const dispatch = useDispatch();
  // const isIntroVideoOpen = useSelector((state: any) => state?.isIntroVideo);
  return (
    <motion.div
      animate={{
        translateX: show ? '0%' : '-100%',
        opacity: show ? 1 : 0,
      }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={` fixed inset-0 backdrop-brightness-50 z-20`}
    >
      <div className=''>
        <button
          className="absolute top-0 right-0 p-4 text-white text-2xl hover:bg-white hover:text-primary transition-all"
          onClick={() => { dispatch(allClose()) }}>
          <IoClose />
        </button>
      </div>
      <div className=" h-screen flex items-center justify-center">
        {children}
      </div>
    </motion.div>
  )
}

export default CommonModal
