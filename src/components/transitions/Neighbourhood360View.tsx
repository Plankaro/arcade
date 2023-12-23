import { motion } from 'framer-motion'
import { useSelector } from 'react-redux';
import ArView from '../lib/ArView';
import CloseButton from '../options/CloseButton';

const Neighbourhood360View = () => {
  const is360view = useSelector((state: any) => state?.is360view);
  // console.log('is360view rendered', is360view);
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
      <CloseButton />
      <div className=" h-screen flex items-center justify-center">
        {<ArView imageUrl={"/360/villa.jpg"} />}
      </div>
    </motion.div>
  )
}

export default Neighbourhood360View;
