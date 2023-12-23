// import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { motion } from "framer-motion";
import logo from "../../assets/logo/logo.png";

const BasicLoading = () => {
  return (
    // <motion.div
    //   className='flex items-center justify-center animate-spin text-5xl text-inherit'
    //   initial={{ opacity: 0 }}
    //   animate={{ opacity: 1 }}
    //   exit={{ opacity: 0 }}
    //   transition={{ duration: 0.3 }}
    // >
    //   <AiOutlineLoading3Quarters />
    // </motion.div>
    <motion.div
      initial={{
        scale: 0,
      }}
      animate={{
        scale: 1,
      }}
      exit={{
        scale: 0,
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
      className='bg-white h-40 w-40 rounded-full flex items-center justify-center relative overflow-hidden'>
      <img
        src={logo}
        alt="logo"
        className="absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 rounded-full"
      />
      <svg className="loading-spinner absolute top-0 left-0 w-full h-full">
        <circle cx="50%" cy="50%" r="48%" />
      </svg>
    </motion.div>
  )
}

export default BasicLoading
