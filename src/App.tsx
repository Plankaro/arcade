import Logo from "./components/Logo";
import AllOptions from "./components/options/AllOptions";
import { useMediaQuery } from "react-responsive";

function App() {
  const isMobile = useMediaQuery({ maxHeight: 767 });
  //   const styles = {
  //     margin: 0;
  //     padding: 0;
  //     background- image: url("./assets/home/home.jpg"); /* Adjust the path accordingly */
  //   background - size: cover;
  //   background - position: center;
  //   background - repeat: no - repeat;
  // }
  return (
    <div className="w-screen h-screen">


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
