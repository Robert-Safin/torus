"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import Torus from "./Torus";

const Scene = () => {
  return (
    <div className="w-full h-full absolute">
      <Canvas>
        <Torus position={[0, 0, 0]} name="box 1" />
      </Canvas>
    </div>
  );
};

export default Scene;
