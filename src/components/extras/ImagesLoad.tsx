import { AsyncImage } from 'loadable-image'
import { useImage } from 'react-image'
import { FC } from 'react'
interface ImageProps {
  src: string
}
const ImagesLoad: FC<ImageProps> = ({ src }) => {
  return (
    // <div className=' relative sm:w-[32rem] sm:h-[20rem]'>
    // <AsyncImage
    //   src={src}
    //   style={{
    //     position: "absolute",
    //     top: 0,
    //     left: 0,
    //     width: "100%",
    //     height: "100%",
    //     maxWidth: "600px",
    //     maxHeight: "300px",
    //     borderRadius: 3,
    //     objectPosition: "center",
    //   }}
    //   loader={<div style={{ background: '#888' }}>Loading...</div>}
    // />
    <picture>
      <img src={src} alt={src} loading='lazy' decoding='async' />
    </picture>
    // </div>
  )
}

export default ImagesLoad

export function MyImage({ url }:any) {
  const { src } = useImage({
    srcList: url,
  })

  return <img src={src} />
}
