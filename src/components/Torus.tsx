"use client";
import useTorusThreeStore from "@/store/useTorusThreeStore";
import { useFrame } from "@react-three/fiber";
import { FC, useEffect, useRef } from "react";
interface Props {
  position: [number, number, number];
  name: string;
}

const Torus: FC<Props> = (props) => {
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

  const ref = useRef<THREE.TorusGeometry>(null!);

  useFrame((state, delta) => {
    ref.current.rotateZ(torusRotateZ);
    state.camera.lookAt(...cameraLookAt);
  });

  return (
    <>
      <mesh position={props.position} rotation={meshRotation}>
        <torusGeometry ref={ref} args={[1, 0.5, 16, 100]} />
        <meshBasicMaterial color={"blue"} wireframe={true} />
      </mesh>
    </>
  );
};

export default Torus;
