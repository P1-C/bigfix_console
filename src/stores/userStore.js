import create from 'zustand';
import { persist } from 'zustand/middleware';

// Define the initial state of the store
const initialState = {
  isUserLoggedIn: false,
};

// Create the Zustand store
const useUserStore = create(persist(
  (set) => ({
    // State
    ...initialState,

    // Actions
    login: () => set((state) => ({ ...state, isUserLoggedIn: true })),
    logout: () => set((state) => ({ ...initialState })),
  }),
  {
    name: 'user-store', 
    getStorage: () => localStorage,
  }
));

export default useUserStore;
