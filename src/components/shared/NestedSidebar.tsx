import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";
import logo from "../../assets/logo/logo.png";
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../../store/slice/action";

type NestedMenuStructureItem = {
  title: string;
  items: {
    title: string;
    image: string;
  }[];
}

type NestedMenuStructure = NestedMenuStructureItem[];

type NestedSidebarProps = {
  setSrc: (src: string | null) => void;
  data: NestedMenuStructure;
}

const NestedSidebar = ({ setSrc, data }: NestedSidebarProps) => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((state: any) => state?.isSidebarOpen);
  const [path, setPath] = useState<{ parentIndex: number | null; childIndex: number | null }>({ parentIndex: 0, childIndex: 0 });
  const [activeMenu, setActiveMenu] = useState<0 | 1>(0);

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
        ease: "easeInOut",
      }}
      className={` z-30 fixed top-0 left-0 min-w-[36vh] text-white bg-black/70 min-h-screen shadow-lg p-[4vh]`}
    >

      {/* menu toggler */}
      <div className=' z-30 absolute right-0 top-[50vh] translate-x-1/2 -translate-y-1/2 '>
        <button onClick={() => { dispatch(toggleSidebar()) }}
          className=' border border-black bg-accent w-[6vh] h-[6vh] text-[3vh] flex items-center justify-center rounded-full'
        >
          {isMenuOpen
            ? <MdOutlineArrowBackIos className=' text-white' />
            : <MdOutlineArrowForwardIos className=' text-white' />}
        </button>
      </div>

      <div className=' z-40 relative flex items-center flex-col justify-start h-screen'>

        {/* logo */}
        {window.innerHeight > 600 && <div className=' min-h-10 mb-[30px]'>
          <img src={logo} alt="logo" className="md:h-[9vh] h-[9vh]" />
        </div>}

        {/* back button */}
        <div className=' self-stretch'>
          <motion.button className={` w-[6vh] h-[6vh] text-[3vh] rounded-full border border-white bg-accent disabled:bg-accent/50 disabled:text-gray flex items-center justify-center`}
            disabled={path.parentIndex === null || activeMenu === 0}
            onClick={() => {
              setPath({
                parentIndex: path.parentIndex,
                childIndex: null,
              }); setActiveMenu(0);
            }}
          >
            <MdOutlineArrowBackIos className=' text-inherit' />
          </motion.button>
        </div>

        {/* menu */}
        <div className=' relative mt-[10vh] mb-auto self-stretch overflow-x-hidden overflow-y-auto h-full'>
          {/* parent menu */}
          <AnimatePresence>
            <motion.div
              className=' w-full text-left pl-[1vh] spacing flex items-stretch flex-col'
              initial={{
                opacity: 0,
                translateX: '-100%',
              }}
              animate={{
                opacity: activeMenu === 0 ? 1 : 0,
                translateX: activeMenu === 0 ? 0 : '-100%',
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
            >
              {data.map((item, index) => {
                return (
                  <div
                    key={index}
                    className=' w-full text-left border-b border-[#FFD700] spacing flex items-stretch'
                  >
                    <motion.button className={` relative py-[1vh] text-[2.4vh] italic w-full text-start`}
                      whileHover={{
                        color: '#FFD700',
                      }}
                      animate={{
                        color: path.parentIndex === index ? '#FFD700' : '#fff',
                      }}
                      onClick={() => {
                        setPath({
                          parentIndex: index,
                          childIndex: 0,
                        }); setActiveMenu(1); setSrc(item.items[0].image)
                      }}
                    >
                      {item?.title[0].toUpperCase() + item.title.slice(1)}
                    </motion.button>
                  </div>
                )
              })}
            </motion.div>
          </AnimatePresence>

          {/* child menu */}
          <AnimatePresence>
            <motion.div
              className=' absolute top-0 w-full text-left spacing flex items-stretch flex-col max-h-[30vh] overflow-y-auto'
              initial={{
                opacity: 0,
                translateX: '100%',
              }}
              animate={{
                opacity: activeMenu == 1 ? 1 : 0,
                translateX: activeMenu == 1 ? 0 : '100%',
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
            >
              {
                path.parentIndex !== null && data[path.parentIndex].items.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className=' w-full text-left border-b border-[#FFD700] pl-0 spacing'
                    >
                      <motion.button
                        className={` py-[1.1vh] text-[2.3vh] italic tracking-normal w-full text-start`}
                        animate={{
                          color: path.childIndex === index ? '#FFD700' : '#fff',
                        }}
                        whileHover={{
                          color: '#FFD700',
                        }}
                        onClick={() => {
                          setPath({
                            parentIndex: path.parentIndex,
                            childIndex: index,
                          }), setSrc(item.image)
                        }}
                      >
                        {item?.title[0].toUpperCase() + item.title.slice(1)}

                      </motion.button>
                    </div>
                  )
                })
              }
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  )
}

export default NestedSidebar;