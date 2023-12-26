import { useSelector } from "react-redux";
import CommonModal from "./shared/SimpleModal"
import MapModel from "./MapModel";

const ContactUsModel = () => {
  const isContactUs = useSelector((state: any) => state.isContactUs);
  return (
    <CommonModal show={isContactUs}>
      <div className=" relative z-30 w-full h-full p-6 mr-5">
        <div className="flex gap-2 items-center justify-center bg-white">
          <div className=" grow h-full w-full">
            <MapModel />
          </div>
          <div className=" grow flex gap-3 flex-col">
            <h2 className="font-roboto-bold text-2xl text-black">Contact Us</h2>
            <address>
              Esplanade, Calcutta Ballygunge, West Bengal 700087
            </address>
          </div>
        </div>
      </div>
    </CommonModal>
  )
}

export default ContactUsModel
