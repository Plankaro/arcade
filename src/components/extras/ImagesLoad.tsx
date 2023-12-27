import { useImage } from 'react-image'
import { FC } from 'react'
interface ImageProps {
  src: string
}
const ImagesLoad: FC<ImageProps> = ({ src }) => {
  return (
    <picture>
      <img src={src} alt={src} loading='lazy' decoding='async' />
    </picture>
  )
}

export default ImagesLoad

export function MyImage({ url }: any) {
  const { src } = useImage({
    srcList: url,
  })

  return <img src={src} />
}
