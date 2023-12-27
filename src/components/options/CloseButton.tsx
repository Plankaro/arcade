import { useDispatch } from 'react-redux';
import { allClose } from '../../store/slice/action';
import { IoClose } from 'react-icons/io5';

const CloseButton = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className='z-50'>
        <button
          className="absolute z-50 p-[1dvh] top-0 right-0 bg-white text-black text-[5dvh] hover:text-white hover:bg-black cursor-pointer z-25 transition-all"
          onClick={() => { dispatch(allClose()) }}>
          <IoClose />
        </button>
      </div>
    </>
  )
}

export default CloseButton;
