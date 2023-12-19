import React from 'react'




const Label = () => {
  return (
    <>
      <div className="flex items-center ">
            <div className="w-[2rem] h-[0.2rem] bg-primary">

            </div>
          <div className=" border-primary border-[0.15rem] rounded-3xl p-1">
            <div className="w-[12rem] h-[2.4rem] bg-primary rounded-[2rem] flex items-center justify-center">
              {label}
            </div>
          </div>
          </div>
    </>
  )
}

export default Label
