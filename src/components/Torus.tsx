"use client";
import { useFrame, useThree } from "@react-three/fiber";
import { FC, useEffect, useRef, useState } from "react";
import * as THREE from "three";

interface Props {
  position: [number, number, number];
  name: string;
}

const Torus: FC<Props> = (props) => {
  const ref = useRef<THREE.Mesh>(null!);
  const { camera } = useThree();
  const [currentViewIndex, setCurrentViewIndex] = useState(0);

  const views = [
    new THREE.Vector3(1, 0, 0),
    new THREE.Vector3(0, 1, 0),
    new THREE.Vector3(0, 0, 1),

    new THREE.Vector3(0, 0, 1),
    new THREE.Vector3(0, 1, 0),
    new THREE.Vector3(1, 0, 0),
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentViewIndex((prevIndex) => (prevIndex + 1) % views.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [views.length]);

  useFrame(() => {
    ref.current.rotateZ(0.0009);

    const targetPosition = views[currentViewIndex];

    camera.position.lerp(targetPosition, 0.002);
    camera.lookAt(ref.current.position);
  });

  return (
    <mesh ref={ref} position={props.position} rotation={[Math.PI / 1, 0, 0]}>
      <torusGeometry args={[1, 0.6, 16, 100]} />
      <meshBasicMaterial color={"#B7BCFF"} wireframe={true} />
    </mesh>
  );
};

export default Torus;
