import { createSlice } from "@reduxjs/toolkit";

interface OptionStates {
  isIntroVideo: boolean;
  isHolisticsEcoststem: boolean;
  is360view: boolean;
  ispalladian: boolean;
  is3dpalladian: boolean;
  isplans: boolean;
  is3dHomeTour: boolean;
  isSalesPresenter: boolean;
  isGalary: boolean;
  isContactUs: boolean;
  isAboutUs: boolean;
  isFullScreen: boolean;

  isSidebarOpen: boolean;
}

const initialState: OptionStates = {
  isIntroVideo: false,
  isHolisticsEcoststem: false,
  is360view: false,
  ispalladian: false,
  is3dpalladian: false,
  isplans: false,
  is3dHomeTour: false,
  isSalesPresenter: false,
  isGalary: false,
  isContactUs: false,
  isAboutUs: false,
  isFullScreen: false,

  isSidebarOpen: true,
};

const optionsSlice = createSlice({
  name: "options",
  initialState,
  reducers: {
    openIntroVideo: (state) => {
      state.isIntroVideo = true;
    },
    openHolisticsEcoststem: (state) => {
      state.isHolisticsEcoststem = true;
    },
    open360view: (state) => {
      state.is360view = true;
    },
    openpalladian: (state) => {
      state.ispalladian = true;
    },
    open3dpalladian: (state) => {
      state.is3dpalladian = true;
    },
    openplans: (state) => {
      state.isplans = true;
    },
    open3dHomeTour: (state) => {
      state.is3dHomeTour = true;
    },
    openSalesPresenter: (state) => {
      state.isSalesPresenter = true;
    },
    openGalary: (state) => {
      state.isGalary = true;
    },
    openContactUs: (state) => {
      state.isContactUs = true;
    },
    openAboutUs: (state) => {
      state.isAboutUs = true;
    },
    openFullScreen: (state) => {
      state.isFullScreen = true;
    },
    allClose: (state) => {
      state.isIntroVideo = false;
      state.isHolisticsEcoststem = false;
      state.is360view = false;
      state.ispalladian = false;
      state.is3dpalladian = false;
      state.isplans = false;
      state.is3dHomeTour = false;
      state.isSalesPresenter = false;
      state.isGalary = false;
      state.isContactUs = false;
      state.isAboutUs = false;
      state.isFullScreen = false;
      state.isSidebarOpen = true
    },
    openSidebar: (state) => {
      state.isSidebarOpen = true;
    },
    closeSidebar: (state) => {
      state.isSidebarOpen = false;
    },
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    }
  },
});

export const {
  openIntroVideo,
  openHolisticsEcoststem,
  open360view,
  openpalladian,
  open3dpalladian,
  openplans,
  open3dHomeTour,
  openSalesPresenter,
  openGalary,
  openContactUs,
  openAboutUs,
  openFullScreen,
  allClose,
  openSidebar,
  closeSidebar,
  toggleSidebar,
} = optionsSlice.actions;

export default optionsSlice.reducer;
