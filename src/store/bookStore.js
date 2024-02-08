import { create } from 'zustand'

export const useBookStore = create((set) => ({
  value: 'cat',//Global State
  updateValue: (newValue) => set({value: newValue}),//SetGlobalState
//   removeAllBears: () => set({ bears: 0 }),
}))