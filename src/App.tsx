import Logo from "./components/Logo";
import AllOptions from "./components/options/AllOptions";
import { useMediaQuery } from "react-responsive";

function App() {
  const isMobile = useMediaQuery({ maxHeight: 767 });
  const isMobileHeight = useMediaQuery({ minHeight: 500 });

  // }
  return (
    <div className={`w-screen ${isMobileHeight ? "h-screen" : "h-full"}`}>


      <div className="main w-full h-full p-2 flex flex-col" >
        <div className="w-full h-[5rem] p-3 relative ">
          <Logo />
        </div>
        {/* <CommonButton /> */}
        <div className={`  flex-grow ${isMobile ? "mt-3" : "mt-5"}`}>
          <AllOptions />
          
        </div>
      </div>
    </div>
  );
}

export default App;
