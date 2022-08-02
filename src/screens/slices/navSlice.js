import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  origin: null, // user - user tu kat busstop 
  destination: null, // user ke bus 
  busorigin: null, // bus tu kat ne
  travelTimeInformation: null, // eta
  showMap: true, 
  isArrived: null, 
  open: false, 
  isHome: false
}

export const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    setOrigin: (state, action) => {
      state.origin = action.payload
    },
    setDestination: (state, action) => {
      state.destination = action.payload
    },
    setBusOrigin: (state, action) => {
      state.busorigin = action.payload
    },
    setTravelTimeInformation: (state, action) => {
      state.travelTimeInformation = action.payload
    },
    setMap: (state, action) => {
      state.showMap = !(state.showMap)
    },
    setArrived: (state) => {
      state.isArrived = true;
    },
    setHome: (state) => {
      state.isHome = true;
    },
    setOpen: (state, action) => {
      state.open = action.payload
    },
    clearState: (state) => {
      state.showMap = true;
      state.isArrived = false;
      state.isHome = false;
      return state
    }, 
  }
})

export const {setOrigin, setDestination, setTravelTimeInformation, setMap, clearState, setArrived, setBusOrigin, setOpen, setHome} = navSlice.actions;

// Selectors 
export const selectOrigin = (state) => state.nav.origin;
export const selectBusOrigin = (state) => state.nav.busorigin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) => state.nav.travelTimeInformation;
export const selectMap = (state) => state.nav.showMap; 
export const selectArrived = (state) => state.nav.isArrived; 
export const selectOpen = (state) => state.nav.open; 
export const selectHome = (state) => state.nav.isHome; 



export default navSlice.reducer;