import { useSelector } from "react-redux";
import CommonModal from "./shared/SimpleModal"
import MapModel from "./MapModel";

const ContactUsModel = () => {
  const isContactUs = useSelector((state: any) => state.isContactUs);
  return (
    <CommonModal show={isContactUs}>
      <div className="relative z-30">

        <div className="flex flex-row items-center justify-center bg-white h-[60dvh] w-[100dvh] rounded-[2dvh]  ">
          {/* Map Section */}
          <div className="grow basis-1/2">
            <MapModel />
          </div>

          {/* Contact Details Section */}
          <div className="grow basis-1/2 flex gap-[1dvh] flex-col items-start justify-start p-[2dvh] leading-[3dvh]">
            {/* Heading */}
            <h2 className="font-roboto-bold text-[3dvh] text-black/80 font-semibold ">Contact Us</h2>

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


const Strong = ({ children }: any) => <strong className=" border-b-[0.3dvh] text-[2dvh] border-accent font-medium text-black/80">{children}</strong>
const Span = ({ children }: any) => <span className=" pl-[0.7dvh] text-[1.8dvh] text-black/60">{children}</span>