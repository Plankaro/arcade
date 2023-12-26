import { AsyncImage } from 'loadable-image'
import { FC } from 'react'
interface ImageProps{
    src:string
}
const ImagesLoad:FC<ImageProps> = ({src}) => {
    return (
      <div className=' max-h-full aspect-video w-auto max-w-[900px]'>
            <AsyncImage
                src={src}
                style={{ height:"100vh" , width:"100vw" , borderRadius: 3 }}
                loader={<div style={{ background: '#888' }} />}
            />
      </div>
    )
}

export default ImagesLoad
