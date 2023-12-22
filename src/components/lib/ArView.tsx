import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { TextureLoader } from "three";
import { useSelector } from "react-redux";

function ARImageViewer({ imageUrl }: any) {
  let texture;
  texture = useLoader(TextureLoader, imageUrl);
  const is360view = useSelector((state: any) => state?.is360view);
  return (is360view &&
    <Canvas
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        zIndex: 40
      }}
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
      <mesh>
        <sphereGeometry args={[500, 60, 40]} />
        {texture && <meshBasicMaterial side={2} map={texture as any} />}
      </mesh>
      <OrbitControls enableZoom enablePan enableRotate />
    </Canvas>
  );
}

export default ARImageViewer;

