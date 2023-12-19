import React from 'react'
import { IoPlayCircleOutline } from "react-icons/io5";
import CommonButton from './CommonButton';



const AllOptions = () => {
    return (
        <div className="flex  justify-between items-center p-3 h-full">
            <div className="flex flex-col justify-between h-full">
                <div><CommonButton label="Introduction" icon={IoPlayCircleOutline} /></div>
                <div><CommonButton /></div>
                <div><CommonButton /></div>
                <div><CommonButton /></div>
                <div><CommonButton /></div>
                <div><CommonButton /></div>
            </div>
            <div className="flex flex-col justify-between h-full">
                <div><CommonButton left /></div>
                <div><CommonButton left/></div>
                <div><CommonButton left/></div>
                <div><CommonButton left/></div>
                <div><CommonButton left/></div>
                <div><CommonButton left/></div>
            </div>

        </div>
    )
}

export default AllOptions