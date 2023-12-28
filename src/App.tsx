import { useSelector, useDispatch } from "react-redux";
import Logo from "./components/Logo";
import { useMediaQuery } from "react-responsive";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { allClose, openFullScreen } from "./store/slice/action";
import Neighbourhood360View from "./components/transitions/Neighbourhood360View";

import IntroModal from "./components/transitions/IntroModal";
import ArcadeResidential from "./components/transitions/ArcadeResidential";
import Plans from "./components/transitions/Plans";
import FloorPlan from "./components/transitions/FloorPlan";

import AllOptions from "./components/options/AllOptions";
import ContactUsModel from "./components/ContactUsModel";
import React, { useEffect, useState } from "react";
import AskForLandscape from "./components/extras/AskForLandscape";
import FullPageLoading from "./components/extras/FullPageLoading";
import Footer from "./components/shared/Footer";
import Brochures from "./components/transitions/Brochure";
const GalleryModal = React.lazy(() => import("./components/GalleryModal"));

function App() {
  const isMobileHeight = useMediaQuery({ minHeight: 500 });
  const Options = useSelector((state: any) => state);
  const dispatch = useDispatch();

  const handle = useFullScreenHandle();
  const appSelector = useSelector((state: any) => state);

  const toggleFullScreen = () => {
    Options.isFullScreen ? dispatch(allClose()) : dispatch(openFullScreen());
    if (!Options.isFullScreen) {
      handle.enter();
    } else {
      handle.exit();
    }
  };

  const [isLandscape, setIsLandscape] = useState(
    window.innerWidth > window.innerHeight
  );

  useEffect(() => {
    const handleOrientationChange = () => {
      setTimeout(() => {
        setIsLandscape(window.innerWidth > window.innerHeight);
      }, 100);
    };

    window.addEventListener("orientationchange", handleOrientationChange);
    return () => {
      window.removeEventListener("orientationchange", handleOrientationChange);
    };
  }, []);


  return (
    <FullScreen handle={handle}>
      <div className={`w-screen ${isMobileHeight ? "h-screen" : "h-full"}`}>
        <div className="main relative w-full h-screen max-h-screen max-w-screen overflow-hidden flex flex-col">
          {isLandscape ? (
            <>
              <div className="absolute inset-0 z-0  " />
              <div className="z-10 w-full px-[3dvh] py-[1dvh] relative grow-0 shrink-0">
                <Logo />
              </div>
              <div className={`z-10 px-[3dvh] flex-grow shrink`}>
                <AllOptions toggleFullScreen={toggleFullScreen} />
              </div>

              <Footer />

              <div className="z-10 w-full relative">
                {<Neighbourhood360View />}
                {appSelector?.isIntroVideo && <IntroModal />}
                {appSelector?.ispalladian && <FloorPlan />}
                {appSelector?.is3dpalladian && <ArcadeResidential />}
                {appSelector?.isplans && <Plans />}
                {appSelector?.isSalesPresenter && <Brochures />}
                <React.Suspense fallback={<FullPageLoading />}>
                  {appSelector?.isGalary && <GalleryModal />}
                </React.Suspense>
                {appSelector?.isContactUs && <ContactUsModel />}
              </div>
            </>
          ) : (
            <AskForLandscape />
          )}
        </div>
      </div>
    </FullScreen>
  );
}

export default App;
