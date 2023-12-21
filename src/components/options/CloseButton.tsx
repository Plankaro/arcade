import { useDispatch } from 'react-redux';
import { allClose } from '../../store/slice/action';
import { IoClose } from 'react-icons/io5';

const CloseButton = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className='z-50'>
        <button
          className="absolute z-50  p-2 top-0 right-0 text-white text-2xl hover:bg-white cursor-pointer z-25 hover:text-primary transition-all"
          onClick={() => { dispatch(allClose()) }}>
          <IoClose />
        </button>
      </div>
    </>
  )
}

export default CloseButton;
