import { create } from 'zustand';

interface ToggleState {
  isOpen: boolean;
  toggle: (value: boolean) => void;
}

export const useToggle = create<ToggleState>((set) => ({
  isOpen: false,
  toggle: (value) => 
    set((state) => ({ 
      isOpen: value !== undefined ? value : !state.isOpen 
    })),
}));