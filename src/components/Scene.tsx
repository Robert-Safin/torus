"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import Torus from "./Torus";
import useTorusThreeStore from "@/store/useTorusThreeStore";

const Scene = () => {
  const {
    cameraLookAt,
    setCameraLookAt,
    meshRotation,
    setMeshRotation,
    cameraPosition,
    setCameraPosition,
    torusRotateZ,
    setTorusRotateZ,
  } = useTorusThreeStore();

  return (
    <div className="w-full h-full absolute">
      <Canvas>
        <Torus position={cameraPosition} name="box 1" />
      </Canvas>
      <div
        onClick={() => {
          setCameraPosition(0, -1, 4);
          setCameraLookAt(0, -10, 0);
        }}
      >
        pos 2
      </div>
    </div>
  );
};

export default Scene;
