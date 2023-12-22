// import React, { Suspense } from "react";
import { useSelector, useDispatch } from "react-redux";
import Logo from "./components/Logo";
import { useMediaQuery } from "react-responsive";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { allClose, openFullScreen } from "./store/slice/action";
// import Sample from "./components/PdfModel";
// import { toggleFullScreenAction } from 'path/to/your/actions'; // Import your action
import RoommComponent from "./components/RoomComponent";
import pdf from "./assets/Arcade_residentail_brochure_R2_compressed (1).pdf"
import Neighbourhood360View from "./components/transitions/Neighbourhood360View";

import IntroModal from "./components/transitions/IntroModal";
import PalladianTour from "./components/transitions/PalladianTour";
import HolisticEcosystem from "./components/transitions/HolisticEcosystem";
import Plans from "./components/transitions/Plans";
import Layouts from "./components/transitions/Layouts";
import GalaryModel from "./components/GalaryModel";
import PdfViewerComponent from "./components/PdfModel";

import AllOptions from "./components/options/AllOptions";
import ContactUsModel from "./components/ContactUsModel";
import AboutUs from "./components/transitions/AboutUs";

function App() {
  const isMobile = useMediaQuery({ maxHeight: 767 });
  const isMobileHeight = useMediaQuery({ minHeight: 500 });
  const Options = useSelector((state: any) => state);
  const dispatch = useDispatch();

  const handle = useFullScreenHandle();
  const appSelector = useSelector((state: any) => state);

  const toggleFullScreen = () => {
    Options.isFullScreen
      ? dispatch(allClose()) :  // Dispatch your action to toggle fullscreen state
      dispatch(openFullScreen())  // Dispatch your action to toggle off fullscreen state
    if (!Options.isFullScreen) {
      handle.enter(); // Enter fullscreen on user action
    } else {
      handle.exit(); // Exit fullscreen on user action
    }
  };


  return (
    <FullScreen handle={handle}>
      <div className={`w-screen ${isMobileHeight ? "h-screen" : "h-full"}`}>

        <RoommComponent imageUrl={"/3d.jpg"} nextRoomImageUrl={"/360/villa.jpg"} />

        <div className="main relative w-full h-full p-2 flex flex-col">
          <div className="absolute inset-0 z-0 backdrop-brightness-50 " />
          <div className="z-10 w-full px-3 py-3 relative">
            <Logo />
          </div>
          <div className={`z-10 px-[1rem] flex-grow ${isMobile ? "mt-3" : "mt-5"}`}>
            <AllOptions toggleFullScreen={toggleFullScreen} />
          </div>
          <div className="z-10 w-full p-3 relative">
            {<Neighbourhood360View />}
            {appSelector?.isIntroVideo && <IntroModal />}
            {appSelector?.isHolisticsEcoststem && <HolisticEcosystem />}
            {appSelector?.ispalladian && <Layouts />}
            {appSelector?.is3dpalladian && <PalladianTour />}
            {appSelector?.isplans && <Plans />}
            {appSelector?.isSalesPresenter && <PdfViewerComponent document={pdf} />}
            {appSelector?.isGalary && <GalaryModel />}
            {appSelector?.isContactUs && <ContactUsModel />}
            {appSelector?.isAboutUs && <AboutUs />}
            
          </div>
        </div>
      </div>
    </FullScreen>
  );
}

export default App;
