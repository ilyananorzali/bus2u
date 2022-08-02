import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import navReducer from "./src/screens/slices/navSlice"
import useReducer from "./src/screens/slices/userSlice"
// Augment middleware to consider Immutable.JS iterables serializable
const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false
})

export const store = configureStore({
  reducer: {
    user: useReducer,
    nav: navReducer
  },
  middleware: customizedMiddleware,
})