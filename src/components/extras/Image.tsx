import BasicLoading from "./BasicLoading";
import { SetStateAction, useState } from "react";
import { MdFullscreenExit } from "react-icons/md";
import { motion } from 'framer-motion';


const Image = ({ src, className, renderImage = true }: { src: string, className?: string, renderImage?: boolean }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <>
      {renderImage && <img
        src={src}
        alt='gallery image'
        className={className ?? ` max-h-full aspect-video w-auto max-w-[900px] ${loaded ? ' opacity-100' : 'opacity-0'}`}
        onLoad={() => setLoaded(true)}
      />}
      {!loaded && <div
        className='absolute inset-0 flex items-center justify-center h-full text-black text-2xl font-bold'>
        <span>
          <BasicLoading />
        </span>
      </div>}
    </>
  )
};

export default Image;


export const FullScreenViewer = ({ src, setFullScreen }: { src: string, setFullScreen: React.Dispatch<SetStateAction<string | null>> }) => {
  const [loaded, setLoaded] = useState<boolean>(false);
  return (
    <div className='fixed min-h-screen min-w-screen max-h-screen max-w-screen z-50 bg-white' >
      <div className='relative h-full'>
        <motion.div
          animate={{
            opacity: loaded ? 1 : 0,
          }}
          className=" w-screen h-screen"
        >
          <img src={src} onLoad={() => setLoaded(true)} className='w-full h-full object-cover object-center' alt='Fullscreen' />
        </motion.div>
        <button
          onClick={() => setFullScreen(null)}
          className='absolute top-3 right-3 w-8 h-8 bg-black text-white flex items-center justify-center text-xl shadow-md shadow-black/40 hover:scale-105 transition-transform duration-150 rounded-sm'
        >
          <MdFullscreenExit />
        </button>
      </div>
    </div>
  )
}
