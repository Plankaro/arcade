import { useSelector, useDispatch } from "react-redux";
import Logo from "./components/Logo";
import AllOptions from "./components/options/AllOptions";
import { useMediaQuery } from "react-responsive";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { allClose, openFullScreen } from "./store/slice/action";
import ARImageViewer from "./components/RoomComponent";
import PdfViewerComponent from "./components/PdfModel";
// import Sample from "./components/PdfModel";
// import { toggleFullScreenAction } from 'path/to/your/actions'; // Import your action
import pdf from "./assets/Arcade_residentail_brochure_R2_compressed (1).pdf"

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
        </div>
      </div>
    </FullScreen>
  );
}

export default App;
