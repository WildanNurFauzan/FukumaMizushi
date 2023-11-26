/* eslint-disable react/no-unknown-property */
import {
  MeshReflectorMaterial,
  PresentationControls,
  Stage,
} from "@react-three/drei";

import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const FukumaMizushi = () => {
  const gltf = useLoader(GLTFLoader, "./models/mlvlnt.glb");
  return (
    <PresentationControls
      speed={1.5}
      global
      zoom={0.5}
      polar={[-1, Math.PI / 4]}
    >
      <Stage environment={"city"} intensity={1} contactShadow={false}>
        <primitive object={gltf.scene} position={[0, 0.395, 0]} />
      </Stage>

      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[150, 150]} />
        <MeshReflectorMaterial
          blur={[300, 100]}
          resolution={2048}
          mixBlur={1}
          mixStrength={40}
          roughness={1}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={0.7}
          color="#101010"
          metalness={0.5}
        />
      </mesh>
    </PresentationControls>
  );
};

export default FukumaMizushi;
