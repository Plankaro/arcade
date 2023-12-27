// import { useSelector } from 'react-redux'
import { AnimatePresence, motion } from 'framer-motion';
import PdfViewer from '../shared/PdfViewer';
import CommercialBrochure from "../../assets/brochure/compressed/commercial-brochure.pdf";
import ResidentialBrochure from "../../assets/brochure/compressed/residential-brochure.pdf";
import ServiceAptBrochure from "../../assets/brochure/compressed/service-apartment-brochure.pdf";
import { useState } from 'react';
import Sidebar from '../shared/Sidebar';
import CloseButton from '../options/CloseButton';

const Brochures = () => {
  const brochures = [
    {
      title: "Commercial Brochure",
      src: CommercialBrochure
    },
    {
      title: "Residential Brochure",
      src: ResidentialBrochure
    },
    {
      title: "Service Apartment Brochure",
      src: ServiceAptBrochure
    }];

  const [slide, setSlide] = useState<number>(0);

  return (
    <AnimatePresence>
      <motion.div
        initial={{
          opacity: 0,
          translateX: '-100%',
        }}
        animate={{
          opacity: 1,
          translateX: '0%',
        }}
        transition={{ duration: 1, ease: "easeInOut" }}
        exit={{ opacity: 0 }}
        className={` fixed inset-0 bg-black/60`}
      > 
        <CloseButton />
        <Sidebar slide={slide} items={brochures.map(i => i.title)} setSlide={setSlide} />

        <PdfViewer pdf={brochures[slide].src} />
      </motion.div>
    </AnimatePresence>
  )
}

export default Brochures;
