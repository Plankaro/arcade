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



const AllOptions = () => {
    return (
        <div className="flex justify-between items-center p-3 w-full h-full">
            <div className="flex flex-col justify-between gap-4 h-full">
                <div><CommonButton label='Introduction' icon={IoPlayCircleOutline} /></div>
                <div><CommonButton label='Holistic Ecosystem' icon={BiNetworkChart} /></div>
                <div><CommonButton label='Neighbourhood 360 View' icon={Tb360View}/></div>
                <div><CommonButton label='Palladian Layout' icon={FiLayout} /></div>
                <div><CommonButton label='3D Palladian Tour' icon={PiVirtualRealityBold}/></div>
                <div><CommonButton label='Plans' icon={FaRegMap}/></div>
            </div>
            <div className="flex flex-col gap-4 justify-between h-full">
                <div><CommonButton right label='3D Home Tour' icon={BsHeadsetVr}/></div>
                <div><CommonButton right label='Sales Presenter' icon={RiPresentationLine}/></div>
                <div><CommonButton right label='Gallery' icon={GrGallery}/></div>
                <div><CommonButton right label='Contact Us' icon={LuContact}/></div>
                <div><CommonButton right label='About Us' icon={IoIosContacts}/></div>
                <div><CommonButton right label='Full Screen' icon={BsFullscreen}/></div>
            </div>

        </div>
    )
}

export default AllOptions
