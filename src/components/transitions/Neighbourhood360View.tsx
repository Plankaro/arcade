// import React from 'react'
import { motion } from 'framer-motion'
import { useDispatch } from 'react-redux'
import { allClose } from '../../store/slice/action'
import { IoClose } from "react-icons/io5";
import { useSelector } from 'react-redux';
import ArView from '../lib/ArView';

const Neighbourhood360View = () => {
  const dispatch = useDispatch();
  const is360view = useSelector((state: any) => state?.is360view);
  console.log('is360view rendered', is360view);
  return (
    <motion.div
      initial={{
        opacity: 0,
        translateX: '-100vw',
      }}
      animate={{
        opacity: is360view ? 1 : 0,
        translateX: is360view ? '0' : '-100vw',
      }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={` fixed inset-0 backdrop-brightness-50 z-30`}
    >
      <div className=' z-50'>
        <button
          className="absolute z-50  p-2 top-2 right-2 text-white text-2xl hover:bg-white cursor-pointer z-25 hover:text-primary transition-all"
          onClick={() => { dispatch(allClose()) }}>
          <IoClose />
        </button>
      </div>
      <div className=" h-screen flex items-center justify-center">
        {<ArView imageUrl={"/360/villa.jpg"} />}
      </div>
    </motion.div>
  )
}

export default Neighbourhood360View;
