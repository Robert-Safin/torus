import { create } from "zustand";

interface ThreeTorusState {
  cameraLookAt: [number, number, number];
  setCameraLookAt: (x: number, y: number, z: number) => void;
  meshRotation: [number, number, number];
  setMeshRotation: (x: number, y: number, z: number) => void;
  cameraPosition: [number, number, number];
  setCameraPosition: (x: number, y: number, z: number) => void;
  torusRotateZ: number;
  setTorusRotateZ: (z: number) => void;
}

const useTorusThreeStore = create<ThreeTorusState>()((set) => ({
  cameraLookAt: [2, 0, 0],
  setCameraLookAt: (x: number, y: number, z: number) =>
    set({ cameraLookAt: [x, y, z] }),
  meshRotation: [Math.PI / 1, 0, 0],
  setMeshRotation: (x: number, y: number, z: number) =>
    set({ meshRotation: [x, y, z] }),
  cameraPosition: [0, 0, 3],
  setCameraPosition: (x: number, y: number, z: number) =>
    set({ cameraPosition: [x, y, z] }),
  torusRotateZ: 0.0005,
  setTorusRotateZ: (z: number) => set({ torusRotateZ: z }),
}));

export default useTorusThreeStore;
