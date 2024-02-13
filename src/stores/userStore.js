import {create} from 'zustand';
import { persist } from 'zustand/middleware';


// Define the initial state of the store
const initialState = {
  isUserLoggedIn: false,
  isTimeOut : false,
  isDarkTheme : true,
};

// Create the Zustand store
const useUserStore = create(persist(
  (set) => ({
    // State
    ...initialState,

    // Actions
    login: () => set((state) => ({ ...state, isUserLoggedIn: true })),
    logout: () => set((state) => ({ ...state, isUserLoggedIn: false })),
    toggleTheme: () => set((state) => ({ ...state, isDarkTheme: !state.isDarkTheme })),
    enableTimeout: () => set((state) => ({ ...state, isTimeOut: true })),
    disableTimeout: () => set((state) => ({ ...state, isTimeOut: false, isUserLoggedIn: false })),
  }),

  {
    name: 'user-store', 
    getStorage: () => localStorage,
  }
));

export default useUserStore;
