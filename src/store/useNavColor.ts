import { create } from "zustand";

interface State {
  color: string;
  setColor: (color: string) => void;
}

const useNavColor = create<State>()((set) => ({
  color: "white",
  setColor: (color: string) => set({ color }),
}));

export default useNavColor;
