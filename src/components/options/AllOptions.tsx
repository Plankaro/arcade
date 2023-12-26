import CommonButton from './CommonButton';
import { IoPlayCircleOutline } from "react-icons/io5";
// import { BiNetworkChart } from "react-icons/bi";
import { Tb360View } from "react-icons/tb";
import { FiLayout } from "react-icons/fi";
// import { PiVirtualRealityBold } from "react-icons/pi";
import { FaRegMap } from "react-icons/fa6";

import { BsHeadsetVr } from "react-icons/bs";
import { RiPresentationLine } from "react-icons/ri";
import { FaRegImages } from "react-icons/fa";
import { LuContact } from "react-icons/lu";
import { MdFullscreen } from "react-icons/md";

import { useDispatch } from 'react-redux';
import { open360view, open3dpalladian, openIntroVideo, openSalesPresenter, openpalladian, openplans, openGalary, openContactUs} from '../../store/slice/action';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { IoHomeOutline } from "react-icons/io5";

interface AllOptionsProps {
  toggleFullScreen: () => void
}

const AllOptions: React.FC<AllOptionsProps> = ({
  toggleFullScreen
}) => {

  const appSelector = useSelector((state: any) => state);
  const dispatch = useDispatch();
  const focusHome = (!appSelector.isIntroVideo &&
    !appSelector.is3dpalladian &&
    !appSelector.isHolisticsEcoststem &&
    !appSelector.isSalesPresenter &&
    !appSelector.d360View &&
    !appSelector.isplans &&
    !appSelector.ispalladian &&
    !appSelector.isGalary &&
    !appSelector.isContactUs);

  return (
    <div className="flex grow justify-between items-center py-[2vh] w-full h-full">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: focusHome ? 1 : 0,
          x: focusHome ? 0 : -20,
        }}
        exit={{ opacity: 0 }}
        className="flex flex-col justify-around h-full">
        <div>
          <CommonButton onClick={() => { dispatch(openIntroVideo());}} label='Arcade Commercial' icon={IoPlayCircleOutline} />
        </div>
        <div>
          <CommonButton onClick={() => { dispatch(open3dpalladian()) }} label='Arcade Residential' icon={IoHomeOutline} />
        </div>
        {/* <div>
          <CommonButton onClick={() => { dispatch(openHolisticsEcoststem()) }} label='Holistic Ecosystem' icon={BiNetworkChart} />
        </div> */}
        <div>
          <CommonButton onClick={() => { dispatch(open360view()) }} label='Neighbour View' icon={Tb360View} />
        </div>
        <div>
          <CommonButton onClick={() => { dispatch(openpalladian()) }} label='Palladian Layout' icon={FiLayout} />
        </div>
        <div>
          <CommonButton onClick={() => { dispatch(openplans()) }} label='Plans' icon={FaRegMap} />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: focusHome ? 1 : 0,
          x: focusHome ? 0 : 20,
        }}
        exit={{ opacity: 0 }}
        className="flex flex-col justify-around h-full">
        <div>
          <CommonButton onClick={() => { window.location.href = "https://vr-tour-arcade-git-main-plankaro.vercel.app/" }} right label='3D Home Tour' icon={BsHeadsetVr} />
        </div>
        <div>
          <CommonButton onClick={() => { dispatch(openSalesPresenter()) }} right label='Sales Presenter' icon={RiPresentationLine} />
        </div>
        <div>
          <CommonButton onClick={() => { dispatch(openGalary()) }} right label='Gallery' icon={FaRegImages} />
        </div>
        <div>
          <CommonButton onClick={() => {dispatch(openContactUs()) }} right label='Contact Us' icon={LuContact} />
        </div>
        {/* <div>
          <CommonButton onClick={() => {dispatch(openAboutUs())}} right label='About Us' icon={IoIosContacts} />
        </div> */}
        <div>
          <CommonButton onClick={() => toggleFullScreen()} right label='Full Screen' icon={MdFullscreen} />
        </div>
      </motion.div>

    </div>
  )
}

export default AllOptions
