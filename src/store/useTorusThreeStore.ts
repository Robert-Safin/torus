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
  cameraLookAt: [10, 0, 0],
  setCameraLookAt: (x: number, y: number, z: number) =>
    set({ cameraLookAt: [x, y, z] }),
  meshRotation: [Math.PI / 2, 0, 0],
  setMeshRotation: (x: number, y: number, z: number) =>
    set({ meshRotation: [x, y, z] }),
  cameraPosition: [0, 0, 4],
  setCameraPosition: (x: number, y: number, z: number) =>
    set({ cameraPosition: [x, y, z] }),
  torusRotateZ: 0.005,
  setTorusRotateZ: (z: number) => set({ torusRotateZ: z }),
}));

export default useTorusThreeStore;
