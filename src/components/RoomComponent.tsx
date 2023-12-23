// import { Canvas, useLoader } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import { TextureLoader } from "three";
// import { useSelector } from "react-redux";

// function ARImageViewer({ imageUrl }: any) {
//   const is3dHomeTour = useSelector((state: any) => state?.is3dHomeTour);
//   // if (!is3dHomeTour) {
//   //   return null;
//   // }
//   const texture = useLoader(TextureLoader, imageUrl);
//   return (
//     <>
//       {is3dHomeTour && (
//         <Canvas
//           style={{
//             backgroundImage: `url(${imageUrl})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             backgroundRepeat: "no-repeat",
//           }}
//           camera={{
//             fov: 75,
//             aspect: window.innerWidth / window.innerHeight,
//             near: 1,
//             far: 1100,
//             position: [0, 0, 0.01],
//           }}
//         >
//           {/* Lights */}
//           <ambientLight />
//           <pointLight position={[10, 10, 10]} />
//           <mesh>
//             <sphereGeometry args={[500, 60, 40]} />
//             <meshBasicMaterial side={2} map={texture as any} />
//           </mesh>
//           <OrbitControls enableZoom enablePan enableRotate />
//         </Canvas>
//       )}
//     </>
//   );
// }

// export default ARImageViewer;

import { useRef, useState } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import {  OrbitControls, Html } from "@react-three/drei";
import { TextureLoader } from "three";
import { useSelector } from "react-redux";
import { BsDoorOpen } from "react-icons/bs";

function ARImageViewer({ imageUrl, nextRoomImageUrl }: any) {
  const is3dHomeTour = useSelector((state: any) => state?.is3dHomeTour);
  let texture = useLoader(TextureLoader, imageUrl);
  const nextRoomTexture = useLoader(TextureLoader, nextRoomImageUrl);
  const [isTransitioning, setTransitioning] = useState(false);
  const doorRef = useRef();
  const handleDoorClick = () => {

    setTransitioning((value) => !value);

  };

  if (isTransitioning) {
    texture = nextRoomTexture
  }



  return (
    <>
      {is3dHomeTour && (
        <div className="fixed inset-0 backdrop-brightness-50 z-20 ">
          <Canvas
            camera={{
              fov: 75,
              aspect: window.innerWidth / window.innerHeight,
              near: 1,
              far: 1100,
              position: [0, 0, 0.01],
            }}
          >
            {/* Lights */}
            <ambientLight />
            <pointLight position={[10, 10, 10]} />

            {/* Current Room */}
            <mesh>
              <sphereGeometry args={[500, 60, 40]} />
              <meshBasicMaterial side={2} map={texture as any} />
            </mesh>
            {/* Door/Button */}
            <mesh
              ref={doorRef as any}
              position={[380, 30, -550]} // Adjust the position of the door/button
              onClick={handleDoorClick}
            // cursor="pointer"
            >
              {/* <Box material-color="hotpink" /> */}
              <Html position={[0, 0, 0]}>
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <button
                    style={{
                      width: '100%',
                      height: '100%',
                      background: 'transparent',
                      border: 'none',
                      color: 'white',
                      cursor: 'pointer',
                      fontSize: '1em',
                    }}
                  onClick={handleDoorClick}
                  >
                    Click me!
                    <BsDoorOpen />
                  </button>
                </div>
              </Html>
            </mesh>


            {/* Orbit Controls for Interaction */}
            <OrbitControls enableZoom enablePan enableRotate />


          </Canvas>
        </div>
      )}
    </>
  );
}

export default ARImageViewer;

