import { motion } from 'framer-motion';
import logo from '../../assets/logo/logo.png';

const FullPageLoading = () => {
  return (
    <motion.div className='fixed inset-0 backdrop-brightness-50 flex items-center justify-center z-50'>
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
        className='bg-black/30 h-40 w-40 rounded-full flex items-center justify-center relative overflow-hidden'>
        <img
          src={logo}
          alt="logo"
          className="absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 w-3/5 rounded-full"
        />
        <svg className="loading-spinner absolute top-0 left-0 w-full h-full">
          <circle cx="50%" cy="50%" r="48%" />
        </svg>
      </motion.div>
    </motion.div>
  );
}

export default FullPageLoading;
