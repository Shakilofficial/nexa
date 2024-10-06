import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Globe from "./Globe";

const GlobeScene = () => {
  return (
    <div style={{ width: "100%", height: "400px" }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Globe />
          <OrbitControls enableZoom={false} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default GlobeScene;
