import React from "react";
import { IoPlayCircleOutline } from "react-icons/io5";
import CommonButton from './CommonButton';
interface AllOptionsProps{
    toggleFullScreen:()=>void
}

const AllOptions:React.FC<AllOptionsProps> = ({
    toggleFullScreen
}) => {
    return (
        <div className="flex justify-between items-center p-3 w-full h-full">
            <div className="flex flex-col justify-between gap-4 h-full">
                <div><CommonButton label="Introduction" icon={IoPlayCircleOutline} /></div>
                <div><CommonButton label='' icon={IoPlayCircleOutline} /></div>
                <div><CommonButton label='' icon={IoPlayCircleOutline}/></div>
                <div><CommonButton label='' icon={IoPlayCircleOutline} /></div>
                <div><CommonButton  label='' icon={IoPlayCircleOutline}/></div>
                <div><CommonButton label='' icon={IoPlayCircleOutline}/></div>
            </div>
            <div className="flex flex-col gap-4 justify-between h-full">
                <div><CommonButton right label='' icon={IoPlayCircleOutline}/></div>
                <div><CommonButton right label='' icon={IoPlayCircleOutline}/></div>
                <div><CommonButton right label='' icon={IoPlayCircleOutline}/></div>
                <div><CommonButton right label='' icon={IoPlayCircleOutline}/></div>
                <div><CommonButton right label='' icon={IoPlayCircleOutline}/></div>
                <div onClick={()=>toggleFullScreen()}><CommonButton right label='' icon={IoPlayCircleOutline}/></div>
            </div>

        </div>
    )
}

export default AllOptions
