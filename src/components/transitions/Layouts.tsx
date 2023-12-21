import { useState } from 'react'
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";
import logo from "../../assets/logo/logo.png";
import CloseButton from '../options/CloseButton';
import { LayoutMap } from '../../constants/ImageUrls';

const Layouts = () => {
  const ispalladian = useSelector((state: any) => state?.ispalladian);

  const [src, setSrc] = useState<string | null>(null);

  return (
    <motion.div
      animate={{
        translateX: ispalladian ? '0%' : '-100%',
        opacity: ispalladian ? 1 : 0,
      }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={` fixed inset-0 bg-black/30`}
    >

      <Sidebar
        setSrc={setSrc}
        slide={[0, 0]}
      />

      {/* body */}
      <div className=" z-10 relative h-screen flex items-center justify-center ">
        <motion.div
          key={src ?? LayoutMap[0].items[0].image}
          initial={{
            opacity: 0,
            translateX: '-20%',
            skewY: 3,
          }}
          animate={{
            opacity: 1,
            translateX: 0,
            skewY: 0,
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          className='flex items-center justify-center h-full'>
          <img src={src ?? LayoutMap[0].items[0].image} alt='gallery image' className=' translate-x-16 aspect-video h-[70%]' />
        </motion.div>

      </div>

      {/* close button */}
      <CloseButton />
    </motion.div>
  )
}

export default Layouts




interface SidebarProps {
  slide: [number, number];
  setSrc: (src: string | null) => void;
}

export const Sidebar = ({ setSrc }: SidebarProps) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [path, setPath] = useState<[number | null, number | null]>([null, null]);

  return (
    <motion.div
      initial={{
        translateX: '-90%',
      }}
      animate={{
        translateX: isMenuOpen ? '0%' : '-90%',
      }}
      transition={{
        duration: 0.3,
        ease: "easeIn",
      }}
      className={` z-30 fixed top-0 left-0 min-w-[300px] text-white bg-black/30 shadow-lg h-screen p-8`}
    >
      <div className=' z-30 absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 '>
        <button onClick={() => setMenuOpen(i => !i)}
          className=' border border-black bg-accent w-[40px] h-[40px] flex items-center justify-center rounded-full'
        >
          {isMenuOpen ?
            <MdOutlineArrowBackIos className=' text-white' />
            : <MdOutlineArrowForwardIos className=' text-white' />}
        </button>
      </div>

      <div className=' z-40 relative flex items-center flex-col justify-start h-full'>
        <div className=' min-h-10 mb-[30px]'>
          <img src={logo} alt="logo" className="md:h-[7rem] h-[4rem] md:w-[7rem] w-[4rem]" />
        </div>
        <div className=' self-stretch'>
          <motion.button className={` w-[40px] h-[40px] rounded-full border border-white bg-accent disabled:bg-accent/50 disabled:text-gray flex items-center justify-center`}
            disabled={path[0] === null}
            onClick={() => { setPath([null, null]) }}
          >
            <MdOutlineArrowBackIos className=' text-inherit' />
          </motion.button>
        </div>
        <div className=' relative mt-[30px] mb-auto self-stretch'>
          <motion.div
            className=' w-full text-left pl-6 spacing flex items-stretch flex-col'
            initial={{
              opacity: 0,
              translateX: '-100%',
            }}
            animate={{
              opacity: path[0] === null ? 1 : 0,
              translateX: path[0] === null ? 0 : '-100%',
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
          >

            {LayoutMap.map((item, index) => {
              return (
                <div
                  key={index}
                  className=' w-full text-left border-b border-[#FFD700] pl-6 spacing flex items-stretch'
                >
                  <motion.button className={` relative py-4 text-lg italic tracking-normal w-full text-start`}
                    whileHover={{
                      color: '#FFD700',
                    }}
                    onClick={() => { setPath([index, null]) }}
                  >
                    {item?.title[0].toUpperCase() + item.title.slice(1)}
                  </motion.button>
                </div>
              )
            })}
          </motion.div>

          <motion.div
            className=' absolute top-0 w-full text-left pl-6 spacing flex items-stretch flex-col'
            initial={{
              opacity: 0,
              translateX: '100%',
            }}
            animate={{
              opacity: path[0] !== null ? 1 : 0,
              translateX: path[0] !== null ? 0 : '100%',
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
          >
            {
              path[0] !== null && LayoutMap[path[0]].items.map((item, index) => {
                return (
                  <div
                    key={index}
                    className=' w-full text-left border-b border-[#FFD700] pl-6 spacing'
                  >
                    <motion.button className={` py-4 text-lg italic tracking-normal w-full text-start`}
                      whileHover={{
                        color: '#FFD700',
                      }}
                      onClick={() => { setPath([path[0], index]), setSrc(item.image) }}
                    >
                      {item?.title[0].toUpperCase() + item.title.slice(1)}
                    </motion.button>
                  </div>
                )
              })
            }
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
