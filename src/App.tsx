import { useSelector, useDispatch } from "react-redux";
import Logo from "./components/Logo";
import { useMediaQuery } from "react-responsive";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { allClose, openFullScreen } from "./store/slice/action";
// import RoommComponent from "./components/RoomComponent";
import Neighbourhood360View from "./components/transitions/Neighbourhood360View";

import IntroModal from "./components/transitions/IntroModal";
import PalladianTour from "./components/transitions/PalladianTour";
// import HolisticEcosystem from "./components/transitions/HolisticEcosystem";
import Plans from "./components/transitions/Plans";
import Layouts from "./components/transitions/Layouts";
// import PdfViewerComponent from "./components/PdfModel";

import AllOptions from "./components/options/AllOptions";
import ContactUsModel from "./components/ContactUsModel";
// import AboutUs from "./components/transitions/AboutUs";
import React, { useEffect, useState } from "react";
import AskForLandscape from "./components/extras/AskForLandscape";
import FullPageLoading from "./components/extras/FullPageLoading";
// import { FaExternalLinkAlt } from "react-icons/fa";
import Footer from "./components/shared/Footer";
import Brochures from "./components/transitions/Brochure";

// import GalaryModel from "./components/GalaryModel";
const GalaryModel = React.lazy(() => import("./components/GalaryModel"))

function App() {
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

  const [isLandscape, setIsLandscape] = useState(window.innerWidth > window.innerHeight);

  useEffect(() => {
    const handleOrientationChange = () => {
      setTimeout(() => {
        setIsLandscape(window.innerWidth > window.innerHeight);
        console.log("orientation changed", window.innerWidth > window.innerHeight, isLandscape);
      }, 100);
    };
    window.addEventListener('orientationchange', handleOrientationChange);
    return () => {
      window.removeEventListener('orientationchange', handleOrientationChange);
    };
  }, []);


  return (
    <FullScreen handle={handle}>
      <div className={`w-screen ${isMobileHeight ? "h-screen" : "h-full"}`}>

        <div className="main relative w-full h-screen max-h-screen max-w-screen overflow-hidden flex flex-col">
          {isLandscape ?
            <>
              <div className="absolute inset-0 z-0  " />
              <div className="z-10 w-full px-[3vh] py-[1vh] relative grow-0 shrink-0">
                <Logo />
              </div>
              <div className={`z-10 px-[3vh] flex-grow shrink`}>
                <AllOptions toggleFullScreen={toggleFullScreen} />
              </div>

              <Footer />

              <div className="z-10 w-full relative">
                {<Neighbourhood360View />}
                {appSelector?.isIntroVideo && <IntroModal />}
                {/* {appSelector?.isHolisticsEcoststem && <HolisticEcosystem />} */}
                {appSelector?.ispalladian && <Layouts />}
                {appSelector?.is3dpalladian && <PalladianTour />}
                {appSelector?.isplans && <Plans />}
                {/* {appSelector?.isSalesPresenter && <PdfViewerComponent />} */}
                {appSelector?.isSalesPresenter && <Brochures />}
                <React.Suspense fallback={<FullPageLoading />}>
                  {appSelector?.isGalary && <GalaryModel />}
                </React.Suspense>
                {appSelector?.isContactUs && <ContactUsModel />}
                {/* {appSelector?.isAboutUs && <AboutUs />} */}

              </div>
            </>
            : <AskForLandscape />
          }
        </div>
      </div>
    </FullScreen>
  );
}

export default App;
