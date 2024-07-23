import React from "react";
import "./style.scss";
import XiNgau from "./XiNgau";
import KetQua from "./KetQua";
import { useDispatch } from "react-redux";
import { nguoiDungBam } from "../../../redux/slices/xiNgauSlice";
const BaiTapLacXiNgau = () => {
  const dispath = useDispatch();
  return (
    <div className="baiTap2">
      <h2 className="uppercase text-5xl">Game Đổ xúc xắc</h2>
      <XiNgau />
      <KetQua />
      <button
        onClick={() => {
          dispath(nguoiDungBam());
        }}
        className="btn-play"
      >
        Play game
      </button>
    </div>
  );
};

export default BaiTapLacXiNgau;
