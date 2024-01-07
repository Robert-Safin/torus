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
    <div className='flex mx-auto bg-white w-full h-screen'>
      <Canvas >
        <Torus position={cameraPosition} name="box 1" />
      </Canvas>
      <div
      onClick={()=>{
        setCameraPosition(0,-1,4)
        setCameraLookAt(0,-10,0)
      }}
      >hi mum</div>
    </div>
  );
};

export default Scene;
