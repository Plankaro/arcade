import { useState } from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

import CloseButton from '../options/CloseButton';
import { FloorPlans } from '../../constants/ImageUrls';
import Image from '../extras/Image';
import NestedSidebar from '../shared/NestedSidebar';

const Layouts = () => {
  const ispalladian = useSelector((state: any) => state?.ispalladian);
  const isSidebarOpen = useSelector((state: any) => state?.isSidebarOpen);
  const [src, setSrc] = useState<string | null>(FloorPlans[0].items[0].image);

  return (
    <motion.div
      animate={{
        translateX: ispalladian ? '0%' : '-100%',
        opacity: ispalladian ? 1 : 0,
      }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={` fixed inset-0 bg-black/60`}
    >

      <NestedSidebar
        data={FloorPlans}
        setSrc={setSrc}
      />

      {/* body */}
      {/* {<div className=" z-10 relative h-screen flex items-center justify-center ">
        <motion.div
          key={src}
          initial={{
            opacity: 0,
            translateX: '-20%',
            skewY: 3,
          }}
          animate={{
            opacity: 1,
            translateX: '0%',
            skewY: 0,
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          className='absolute flex items-center justify-center h-full'>
          <motion.div
            initial={{
              translateX: 0,
            }}
            animate={{
              translateX: isMenuOpen ? 130 : 0,
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut"
            }}
            className={` w-[55vw] flex items-center justify-center`}
            >
            <Image
              src={src ?? FloorPlans[0].items[0].image}
              className='bg-white max-h-[90vh] rounded-md' />
          </motion.div>
        </motion.div>

      </div>} */}

      <motion.div
        initial={{ translateX: 0 }}
        animate={{ translateX: isSidebarOpen && window.innerWidth > 1000 ? 100 : 0 }}
        transition={{ duration: 0.5 }}
        className="z-10 relative h-screen flex items-center justify-center">
        <motion.div
          key={src}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='absolute max-w-[60dvh] bg-white rounded-md overflow-hidden shadow-2xl flex items-center justify-center'
        >
          <Image
            src={src ?? FloorPlans[0].items[0].image}
            className={"bg-white max-h-[90dvh] rounded-md"} />
        </motion.div>
      </motion.div>

      {/* close button */}
      <CloseButton />
    </motion.div>
  )
}

export default Layouts;




