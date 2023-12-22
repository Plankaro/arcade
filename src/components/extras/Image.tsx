import BasicLoading from "./BasicLoading";
import { useState } from "react";

const Image = ({ src, className }: { src: string, className?: string }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <>
      <img
        src={src}
        alt='gallery image'
        className={className ?? ` max-h-full aspect-video w-auto max-w-[900px] ${loaded ? ' opacity-100' : 'opacity-0'}`}
        onLoad={() => setLoaded(true)}
      />
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