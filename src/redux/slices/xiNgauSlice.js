import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  xiNgau: {
    xiNgau1: 2,
    xiNgau2: 3,
    xiNgau3: 6,
  },
  tongSoBanThang: 0,
  tongSoBanChoi: 0,
  banChon: "Tài",
};

const xiNgauSlice = createSlice({
  name: "xiNgau",
  initialState,
  reducers: {},
});

export const {} = xiNgauSlice.actions;

export default xiNgauSlice.reducer;
