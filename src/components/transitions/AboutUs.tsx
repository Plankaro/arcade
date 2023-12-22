import CommonModal from '../shared/SimpleModal';
import { useSelector } from 'react-redux';
import logo from "../../assets/logo/logo.png"
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";


const AboutUs = () => {
  const isAboutUs = useSelector((state: any) => state?.isAboutUs);
  return (
    <>
      <CommonModal show={isAboutUs}>
        <div className='relative w-[80%] max-w-[1200px] min-w-[800px] h-[80vh] bg-primary flex flex-row items-stretch justify-end'>
          <img
            className='absoute w-full h-full object-cover'
            src='https://img.freepik.com/free-vector/gradient-cyber-futuristic-background_23-2149117429.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703203200&semt=sph' />

          <div className='absolute top-1/2 -translate-y-1/2 w-[30%] backdrop-blur-sm backdrop-brightness-125 mr-10 px-4 py-2 h-[95%] text-white bg-white/10'>
            <img src={logo} width={100} height={100}
              className='  w-[50px] h-[50px] sm:w-[100px] sm:h-[100px] object-contain'
            />
            <p className=' text-xs md:text-[10px] lg:text-sm '>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ab cumque modi provident, error deserunt. Totam asperiores ea eaque pariatur aperiam maiores dicta quidem quaerat vitae beatae perferendis, ullam aut? Consequatur, repellat quod recusandae quibusdam veniam a explicabo cumque natus.</p>
            <div className="mt-6 flex flex-row flex-wrap items-center gap-4">
              <SocialMediaLinkItem>
                <FaFacebookF />
              </SocialMediaLinkItem>
              <SocialMediaLinkItem>
                <RiTwitterXLine />
              </SocialMediaLinkItem>
              <SocialMediaLinkItem>
                <FaInstagram />
              </SocialMediaLinkItem>
              <SocialMediaLinkItem>
                <FaYoutube />
              </SocialMediaLinkItem>
              <SocialMediaLinkItem>
                <FaLinkedin />
              </SocialMediaLinkItem>
            </div>
          </div>
        </div>
      </CommonModal>
    </>
  )
}

export default AboutUs


const SocialMediaLinkItem = ({ children }: { children: React.ReactNode }) => (
  <a href="#" className=' w-[20px] h-[20px] text-[12px] md:w-[30px] md:h-[30px] md:text-[16px] rounded-full bg-white/30 flex items-center justify-center ' >
    {children}
  </a>
)