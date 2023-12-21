import ReactPlayer from 'react-player';
import CommonModal from '../shared/SimpleModal';
import { useSelector } from 'react-redux';

const PalladianTour = () => {
  const is3dpalladian = useSelector((state: any) => state?.is3dpalladian);
  return (
    <>
      <CommonModal show={is3dpalladian}>
        <div className=' min-w-[450px] w-[70vw] aspect-video'>
          <ReactPlayer
            width='100%'
            height='100%'
            url='https://www.youtube.com/watch?v=ht4Fcf2kYwg' />
        </div>
      </CommonModal>
    </>
  )
}

export default PalladianTour;
