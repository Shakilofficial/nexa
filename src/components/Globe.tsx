import { useFrame, useLoader } from "@react-three/fiber";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { Mesh, TextureLoader } from "three";

const Globe = () => {
  const meshRef = useRef<Mesh>(null);
  const earthMap = useLoader(
    TextureLoader,
    "https://res.cloudinary.com/dcyupktj6/image/upload/v1728174319/yr31l07j2yfbdgtbyj7k.jpg"
  );

  useEffect(() => {
    if (meshRef.current) {
      gsap.to(meshRef.current.rotation, {
        y: Math.PI * 2,
        duration: 20,
        ease: "none",
        repeat: -1,
      });
    }
  }, []);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[2, 64, 64]} />
      <meshStandardMaterial map={earthMap} />
    </mesh>
  );
};

export default Globe;
