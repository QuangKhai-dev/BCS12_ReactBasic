import { createSlice } from "@reduxjs/toolkit";
import { getRandomNumber } from "../../utils/utils";

const initialState = {
  xiNgau: {
    xiNgau1: 2,
    xiNgau2: 3,
    xiNgau3: 6,
  },
  tongSoBanThang: 0,
  tongSoBanChoi: 0,
  // tài = true, xỉu = false
  banChon: true,
};

const xiNgauSlice = createSlice({
  name: "xiNgau",
  initialState,
  reducers: {
    luaChonNguoiDung: (state, action) => {
      console.log(action);
      state.banChon = action.payload;
    },
    nguoiDungBam: (state, action) => {
      let xiNgau1 = getRandomNumber();
      let xiNgau2 = getRandomNumber();
      let xiNgau3 = getRandomNumber();
      // state.xiNgau.xiNgau1 =xiNgau1
      state.xiNgau = { xiNgau1, xiNgau2, xiNgau3 };
      state.tongSoBanChoi++;
      let checker = xiNgau1 + xiNgau2 + xiNgau3 > 11 ? true : false;
      checker == state.banChon && state.tongSoBanThang++;
    },
    // NV1: Thực hiện tạo một action dùng để xử lí chức năng khi ng dùng bấm play game, các công việc cần làm
    // B1: Thực hiện tạo ngẫu nhiên 3 con xí ngầu mới
    // B2: Thực hiện tăng tổng số bàn chơi thêm 1 giá trị
    // B3: Thực hiện lấy 3 con xí ngầu mới cộng lại và kiểm tra xem là tài hay xỉu, sau đó so sánh với kết quả ng dùng chọn để xác định xem là ng dùng thắng hay thua, thắng thì cộng thêm tổng số bàn thắng 1 giá trị
  },
});

export const { luaChonNguoiDung, nguoiDungBam } = xiNgauSlice.actions;

export default xiNgauSlice.reducer;
