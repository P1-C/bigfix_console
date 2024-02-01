import create from 'zustand';

// Define the initial state of the store
const initialState = {
  isLoggedIn: false,
  username: '',
};

// Create the Zustand store
const useUserStore = create((set) => ({
  // State
  ...initialState,

  // Actions
  login: (username) => set((state) => ({ ...state, isLoggedIn: true, username })),
  logout: () => set((state) => ({ ...initialState })),
}));

export default useUserStore;
