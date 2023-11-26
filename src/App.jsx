/* eslint-disable react/no-unknown-property */

import { Canvas } from "@react-three/fiber";
import "./App.css";
import FukumaMizushi from "./components/Experience";

const App = () => {
  return (
    <div className="apph">
      <Canvas camera={{ fov: 45 }}>
        <color attach="background" args={["#1b1b1b"]} />
        <FukumaMizushi />
      </Canvas>
    </div>
  );
};

export default App;
