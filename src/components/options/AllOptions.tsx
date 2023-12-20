import CommonButton from './CommonButton';
import { IoPlayCircleOutline } from "react-icons/io5";
import { BiNetworkChart } from "react-icons/bi";
import { Tb360View } from "react-icons/tb";
import { FiLayout } from "react-icons/fi";
import { PiVirtualRealityBold } from "react-icons/pi";
import { FaRegMap } from "react-icons/fa6";

import { BsHeadsetVr } from "react-icons/bs";
import { RiPresentationLine } from "react-icons/ri";
import { GrGallery } from "react-icons/gr";
import { LuContact } from "react-icons/lu";
import { IoIosContacts } from "react-icons/io";
import { BsFullscreen } from "react-icons/bs";

import { useSelector, useDispatch } from 'react-redux';

interface AllOptionsProps{
  toggleFullScreen:()=>void
}

const AllOptions:React.FC<AllOptionsProps> = ({
    toggleFullScreen
}) => {
    return (
        <div className="flex justify-between items-center p-3 w-full h-full">
            <div className="flex flex-col justify-between gap-4 h-full">
                <div><CommonButton onClick={() => {}} label='Introduction' icon={IoPlayCircleOutline} /></div>
                <div><CommonButton onClick={() => {}} label='Holistic Ecosystem' icon={BiNetworkChart} /></div>
                <div><CommonButton onClick={() => {}} label='Neighbourhood 360 View' icon={Tb360View}/></div>
                <div><CommonButton onClick={() => {}} label='Palladian Layout' icon={FiLayout} /></div>
                <div><CommonButton onClick={() => {}} label='3D Palladian Tour' icon={PiVirtualRealityBold}/></div>
                <div><CommonButton onClick={() => {}} label='Plans' icon={FaRegMap}/></div>
            </div>
            <div className="flex flex-col gap-4 justify-between h-full">
                <div><CommonButton onClick={() => {}} right label='3D Home Tour' icon={BsHeadsetVr}/></div>
                <div><CommonButton onClick={() => {}} right label='Sales Presenter' icon={RiPresentationLine}/></div>
                <div><CommonButton onClick={() => {}} right label='Gallery' icon={GrGallery}/></div>
                <div><CommonButton onClick={() => {}} right label='Contact Us' icon={LuContact}/></div>
                <div><CommonButton onClick={() => {}} right label='About Us' icon={IoIosContacts}/></div>
                <div><CommonButton onClick={() => toggleFullScreen()} right label='Full Screen' icon={BsFullscreen}/></div>
            </div>

        </div>
    )
}

export default AllOptions
