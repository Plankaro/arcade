import home from "./assets/home/home.jpg";
import Logo from "./components/Logo";
import AllOptions from "./components/options/AllOptions";

function App() {
  const backgroundImageStyle = {
    backgroundImage: `url(${home})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div
      className="w-screen h-screen  p-2 flex flex-col"
      style={backgroundImageStyle}
    >
      <div className="w-full h-[5rem] p-3 relative ">
        <Logo />
      </div>
      {/* <CommonButton /> */}
      <div className=" flex-grow mt-3">
        <AllOptions />
      </div>
    </div>
  );
}

export default App;
