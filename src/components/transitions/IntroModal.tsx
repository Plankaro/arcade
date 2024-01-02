import { useSelector } from 'react-redux'
import CommonModal from '../shared/SimpleModal';
import ReactPlayer from 'react-player'

const IntroModal = () => {
  const isIntroVideoOpen = useSelector((state: any) => state?.isIntroVideo);
  return (
    <>
      <CommonModal show={isIntroVideoOpen}>
        <div className=' max-h-screen min-w-[450px] w-[70vw] aspect-video'>
          <ReactPlayer
            width='100%'
            height='100%'
            controls={true}
            url='https://youtu.be/SKsqN3zDtBA?si=_6_AQNaGPmrpJkfL' />
        </div>
      </CommonModal>
    </>
  )
}

export default IntroModal
