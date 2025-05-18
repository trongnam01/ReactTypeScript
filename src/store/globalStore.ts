import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

interface GlobalStoreState {
  userInfo: any | null;
  setUserInfo: (data: any | null) => void;
}

const store = immer<GlobalStoreState>((set) => ({
  userInfo: {
    name: 'Ngô Thị Lan Hương',
  },
  setUserInfo: (userInfo: any | null) =>
    set((state: GlobalStoreState) => {
      state.userInfo = userInfo;
    }),
}));

const useAuthStore = create(
  persist(devtools(store), { name: 'globalStore' }),
);

export default useAuthStore;
