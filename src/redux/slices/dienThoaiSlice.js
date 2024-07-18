import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ten: "iphone 15 promax",
  gia: 25000000,
  hang: "Apple",
  iphones: [
    {
      name: "iPhone 12",
      image:
        "https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-trang-13-600x600.jpg",
      screen: 'OLED, 6.1", Super Retina XDR',
      os: "iOS 14",
      front_camera: "12 MP",
      rear_camera: "Chính 12 MP & Phụ 12 MP",
      ram: "4 GB",
      rom: "64 GB",
    },
    {
      name: "iPhone 11",
      image:
        "https://cdn.tgdd.vn/Products/Images/42/153856/iphone-11-trang-600x600.jpg",
      screen: 'LCD, 6.1", Liquid Retina',
      os: "iOS 13",
      front_camera: "12 MP",
      rear_camera: "Chính 12 MP & Phụ 12 MP",
      ram: "4 GB",
      rom: "64 GB",
    },
    {
      name: "iPhone SE (2020)",
      image:
        "https://cdn.tgdd.vn/Products/Images/42/222631/iphone-se-128gb-2020-den-600x600.jpg",
      screen: 'LCD, 4.7", Retina HD',
      os: "iOS 13",
      front_camera: "7 MP",
      rear_camera: "12 MP",
      ram: "3 GB",
      rom: "64 GB",
    },
    {
      name: "iPhone 13 Pro",
      image:
        "https://cdn.tgdd.vn/Products/Images/42/250258/iphone-13-midnight-1-600x600.jpg",
      screen: 'OLED, 6.1", Super Retina XDR',
      os: "iOS 15",
      front_camera: "12 MP",
      rear_camera: "Chính 12 MP & Phụ 12 MP",
      ram: "6 GB",
      rom: "128 GB",
    },
  ],
};

const dienThoaiSlice = createSlice({
  name: "dienThoai",
  initialState,
  reducers: {},
});

export const {} = dienThoaiSlice.actions;

export default dienThoaiSlice.reducer;
