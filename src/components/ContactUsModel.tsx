import { useSelector } from "react-redux";
import CommonModal from "./shared/SimpleModal"
import MapModel from "./MapModel";

const ContactUsModel = () => {
  const isContactUs = useSelector((state: any) => state.isContactUs);
  return (
    <CommonModal show={isContactUs}>
      <div className="relative z-30">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-center
     bg-white min-w-[90vw] w-[90vw] md:min-w-[800px]  max-w-[1000px]">
          {/* Map Section */}
          <div className="grow basis-1/2">
            <MapModel />
          </div>

          {/* Contact Details Section */}
          <div className="grow basis-1/2 self-start flex gap-3 flex-col items-start justify-start p-5">
            {/* Heading */}
            <h2 className="font-roboto-bold text-lg md:text-2xl text-black/80 font-bold">Contact Us</h2>

            {/* Phone */}
            <div className="text-md md:text-lg">
              <strong className="text-black/80">Phone:</strong>
              <span className=" text-black/60 text-md pl-1">
                <a href="tel:03512463384"> 03512463384</a>
              </span>
            </div>

            {/* Email */}
            <div className="text-md md:text-lg">
              <strong className="text-black/80">E-Mail:</strong>
              <span className=" text-black/60 text-md pl-1">
                <a href="mailto:akarghy08@gmail.com">akarghy08@gmail.com</a>
              </span>
            </div>

            {/* Address */}
            <div className="text-md md:text-lg">
              <strong className="text-black/80">Address:</strong>
              <address>
                <span className=" text-black/60 text-md"> {" "}
                  2nd floor, Wooland M H Complex, Bye Lane opp. DGP Office,
                  B K Kakaty Road, Ulubari, Guwahati 781 007
                </span>
              </address>
            </div>
            {/* Site Address */}
            <div className="text-md md:text-lg">
              <strong className="text-black/80">Site Address:</strong>
              <address>
                <span className=" text-black/60 text-md">Arcade, Dhopatari Bazaar, Changsari, Kamrup, Assam - 781101</span>
              </address>
            </div>

          </div>
        </div>
      </div>
    </CommonModal>
  )
}

export default ContactUsModel
