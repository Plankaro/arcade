import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { motion } from "framer-motion";

const BasicLoading = () => {
  return (
    <motion.div
      className='flex items-center justify-center animate-spin text-5xl text-inherit'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <AiOutlineLoading3Quarters />
    </motion.div>
  )
}

export default BasicLoading
