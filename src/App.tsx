import React, { Suspense } from "react";
import { useSelector, useDispatch } from "react-redux";
import Logo from "./components/Logo";
import AllOptions from "./components/options/AllOptions";
import { useMediaQuery } from "react-responsive";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { allClose, openFullScreen, openIntroVideo } from "./store/slice/action";
import Sample from "./components/PdfModel";
// import { toggleFullScreenAction } from 'path/to/your/actions'; // Import your action
import RoommComponent from "./components/RoomComponent";
import IntroModal from "./components/transitions/IntroModal";
import PalladianTour from "./components/transitions/PalladianTour";
import HolisticEcosystem from "./components/transitions/HolisticEcosystem";

// import FullPageLoading from "./components/extras/FullPageLoading";
// const IntroModal = React.lazy(() => import("./components/transitions/IntroModal"));
// const PalladianTour = React.lazy(() => import("./components/transitions/PalladianTour"));
// const HolisticEcosystem = React.lazy(() => import("./components/transitions/HolisticEcosystem"));

function App() {
  const isMobile = useMediaQuery({ maxHeight: 767 });
  const isMobileHeight = useMediaQuery({ minHeight: 500 });
  const isFullScreen = useSelector((state: any) => state?.isFullScreen);

  const dispatch = useDispatch();

  const handle = useFullScreenHandle();

  const toggleFullScreen = () => {
    isFullScreen
      ? dispatch(allClose()) :  // Dispatch your action to toggle fullscreen state
      dispatch(openFullScreen())  // Dispatch your action to toggle off fullscreen state
    if (!isFullScreen) {
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
            {/* <Suspense fallback={<FullPageLoading />}> */}
              <IntroModal />
            {/* </Suspense> */}
            {/* <Suspense fallback={<FullPageLoading />}> */}
              <PalladianTour />
            {/* </Suspense> */}
            {/* <Suspense fallback={<FullPageLoading />}> */}
              <HolisticEcosystem />
            {/* </Suspense> */}
          </div>
        </div>
        {/* <RoommComponent imageUrl={"https://images.unsplash.com/photo-1625015531264-43c3fce8c792?q=80&w=1460&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} /> */}
      </div>
    </FullScreen>
  );
}

export default App;
