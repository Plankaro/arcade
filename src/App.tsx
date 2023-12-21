import React, { Suspense } from "react";
import { useSelector, useDispatch } from "react-redux";
import Logo from "./components/Logo";
import AllOptions from "./components/options/AllOptions";
import { useMediaQuery } from "react-responsive";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { allClose, openFullScreen } from "./store/slice/action";
// import Sample from "./components/PdfModel";
// import { toggleFullScreenAction } from 'path/to/your/actions'; // Import your action
// import RoommComponent from "./components/RoomComponent";
import IntroModal from "./components/transitions/IntroModal";
import PalladianTour from "./components/transitions/PalladianTour";
import HolisticEcosystem from "./components/transitions/HolisticEcosystem";
import PdfViewerComponent from "./components/PdfModel";
import pdf  from "./assets/Arcade_residentail_brochure_R2_compressed (1).pdf"

// import FullPageLoading from "./components/extras/FullPageLoading";
// const IntroModal = React.lazy(() => import("./components/transitions/IntroModal"));
// const PalladianTour = React.lazy(() => import("./components/transitions/PalladianTour"));
// const HolisticEcosystem = React.lazy(() => import("./components/transitions/HolisticEcosystem"));

function App() {
  const isMobile = useMediaQuery({ maxHeight: 767 });
  const isMobileHeight = useMediaQuery({ minHeight: 500 });
  const Options = useSelector((state: any) => state);
  const dispatch = useDispatch();

  const handle = useFullScreenHandle();

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

  console.log("=> Main app rendered");

  return (
    <FullScreen handle={handle}>
      <div className={`w-screen ${isMobileHeight ? "h-screen" : "h-full"}`}>
        <div className="main relative w-full h-full p-2 flex flex-col">
          <div className="absolute inset-0 z-0 backdrop-brightness-50 " />
          <div className="z-10 w-full h-[5rem] p-3 relative">
            <Logo />
          </div>
          <div className={`z-10 flex-grow ${isMobile ? "mt-3" : "mt-5"}`}>
            <AllOptions toggleFullScreen={toggleFullScreen} />
          </div>
          <div className="z-10 w-full h-[5rem] p-3 relative">
            <IntroModal />
            <PalladianTour />
            <HolisticEcosystem />
            <PdfViewerComponent  document={pdf}/>
          </div>
        </div>
        {/* <RoommComponent imageUrl={"/360/1.png"} /> */}
      </div>
    </FullScreen>
  );
}

export default App;
