import { useState } from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

import CloseButton from '../options/CloseButton';
import { LayoutMap } from '../../constants/ImageUrls';
import Image from '../extras/Image';
import NestedSidebar from '../shared/NestedSidebar';

const Layouts = () => {
  const ispalladian = useSelector((state: any) => state?.ispalladian);

  const [src, setSrc] = useState<string | null>(LayoutMap[0].items[0].image);

  console.log("layout rendered", src);
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
        data={LayoutMap}
        setSrc={setSrc}
      />

      {/* body */}
      {
        <div className=" z-10 relative h-screen flex items-center justify-center ">
          {/* {LayoutMap.map((section) =>
            section.items.map((item) => ( */}
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
            <Image src={src ?? LayoutMap[0].items[0].image} />
          </motion.div>

        </div>
      }

      {/* close button */}
      <CloseButton />
    </motion.div>
  )
}

export default Layouts;




