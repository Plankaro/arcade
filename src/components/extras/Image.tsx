import { SetStateAction, Suspense, useState } from "react";
import { MdFullscreenExit } from "react-icons/md";
import { motion } from 'framer-motion';
import { useImage } from 'react-image'

const Image = ({ src,  renderImage = true }: { src: string, className?: string, renderImage?: boolean }) => {

  return (
    <>
      {renderImage &&

        <Suspense>
          <MyImageComponent url={src} />


          {/* <img
          src={src}
          alt='gallery image'
          className={className ?? ` max-h-full aspect-video w-auto max-w-[900px] ${loaded ? ' opacity-100' : 'opacity-0'}`}
          onLoad={() => setLoaded(true)}
        />} */}
        </Suspense>
      }

    </>
  )
};

export default Image;

function MyImageComponent({ url }: any) {
  const { src } = useImage({
    srcList: url,
  })

  return <img src={src} />
}

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
          <img src={src} onLoad={() => setLoaded(true)} className='w-full h-full object-cover object-center' alt='Fullscreen' decoding="async" loading="lazy" />
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
