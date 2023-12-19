import Logo from "./components/Logo";
import AllOptions from "./components/options/AllOptions";
import { useMediaQuery } from "react-responsive";

function App() {
  const isMobile = useMediaQuery({ maxHeight: 767 });

  return (
    <div className="w-full h-full p-2 flex flex-col">
      <div className="w-full h-[5rem] p-3 relative ">
        <Logo />
      </div>
      {/* <CommonButton /> */}
      <div className={`  flex-grow ${isMobile ? "mt-3" : "mt-5"}`}>
        <AllOptions />
      </div>
    </div>
  );
}

export default App;
