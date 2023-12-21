import { useSelector } from 'react-redux'
import CommonModal from '../shared/SimpleModal';
import ReactPlayer from 'react-player'

const IntroModal = () => {
  const isIntroVideoOpen = useSelector((state: any) => state?.isIntroVideo);
  return (
    <>
      <CommonModal show={isIntroVideoOpen}>
        <div className=' max-w-[900px] w-[50vw] aspect-video'>
          <ReactPlayer
            width='100%'
            height='100%'
            url='https://www.youtube.com/watch?v=ht4Fcf2kYwg' />
        </div>
      </CommonModal>
    </>
  )
}

export default IntroModal
