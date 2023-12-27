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
            <h2 className="font-roboto-bold text-lg md:text-2xl text-black/80 font-semibold ">Contact Us</h2>

            {/* Phone */}
            <div className="text-md md:text-lg">
              <Strong>Phone:</Strong>
              <Span>
                <a href="tel:03512463384"> 03512463384</a>
              </Span>
            </div>

            {/* Email */}
            <div className="text-md md:text-lg">
              <Strong>E-Mail:</Strong>
              <Span>
                <a href="mailto:akarghy08@gmail.com">akarghy08@gmail.com</a>
              </Span>
            </div>

            {/* Address */}
            <div className="text-md md:text-lg">
              <Strong>Address:</Strong>
              <address>
                <Span> {" "}
                  2nd floor, Wooland M H Complex, Bye Lane opp. DGP Office,
                  B K Kakaty Road, Ulubari, Guwahati 781 007
                </Span>
              </address>
            </div>
            {/* Site Address */}
            <div className="text-md md:text-lg">
              <Strong>Site Address:</Strong>
              <address>
                <Span>Arcade, Dhopatari Bazaar, Changsari, Kamrup, Assam - 781101</Span>
              </address>
            </div>

          </div>
        </div>
      </div>
    </CommonModal>
  )
}

export default ContactUsModel


const Strong = ({ children }: any) => <strong className=" border-b-2 border-accent font-medium text-black/80">{children}</strong>
const Span = ({ children }: any) => <span className=" pl-2 text-black/60 text-md">{children}</span>