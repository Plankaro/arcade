import React from "react";

interface LabelProps {
    label: string;
    right?: boolean;
}

const Label: React.FC<LabelProps> = ({ label, right }) => {
    return (
        <>
            <div className="flex items-center ">
                {!right && <div className="md:w-[2rem] w-[1rem] h-[0.2rem] bg-primary"></div>}
                <div className=" border-primary border-[0.15rem] rounded-3xl p-1">
                    <div className="md:w-[12rem] w-[7rem] md:h-[2.4rem] h-[1.2rem] bg-primary rounded-[2rem] flex items-center justify-center">
                        <h5 className="text-lg text-white font-roboto-bold">{label}</h5>
                    </div>
                </div>
                {right && <div className="md:w-[2rem] w-[1rem] h-[0.2rem] bg-primary"></div>}
            </div>
        </>
    );
};

export default Label;
