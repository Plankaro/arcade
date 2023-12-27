import { useState } from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { PlanImageUrls } from '../../constants/ImageUrls';
import CloseButton from '../options/CloseButton';
import Image from '../extras/Image';
import NestedSidebar from '../shared/NestedSidebar';

const Plans = () => {
  const isplans = useSelector((state: any) => state?.isplans);
  // const isSidebarOpen = useSelector((state: any) => state?.isSidebarOpen);
  const [src, setSrc] = useState<string | null>(PlanImageUrls[0].items[0].image);

  console.log("plans rendered", PlanImageUrls);

  return (
    <div
      style={{
        transform: `translateX(${isplans ? '0%' : '-100%'})`,
        opacity: isplans ? 1 : 0,
        transition: 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out',
      }}
      className={`fixed inset-0 bg-black/60`}
    >
      <NestedSidebar
        data={PlanImageUrls}
        setSrc={setSrc}
      />

      {/* body */}
      <div
        className="z-10 relative h-screen flex items-center justify-center">
        <motion.div
          key={src}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className='absolute w-[70vw] max-w-[500px] bg-white rounded-md overflow-hidden shadow-2xl flex items-center justify-center'
        >
          <Image
            src={src ?? PlanImageUrls[0].items[0].image}
            className={"bg-white max-h-[90dvh] rounded-md"} />
        </motion.div>
      </div>

      {/* close button */}
      <CloseButton />
    </div>
  );
};

export default Plans;


