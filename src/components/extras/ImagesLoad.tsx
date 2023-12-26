import { AsyncImage } from 'loadable-image'
import { FC } from 'react'
interface ImageProps {
  src: string
}
const ImagesLoad: FC<ImageProps> = ({ src }) => {
  return (
    <AsyncImage
      src={src}
      style={{
        width: "100%",
        height: "100%",
        borderRadius: 3,
        objectPosition: "center",
      }}
      loader={<div style={{ background: '#888' }}>Loading...</div>}
    />
  )
}

export default ImagesLoad
