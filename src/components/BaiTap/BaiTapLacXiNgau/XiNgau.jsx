import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { luaChonNguoiDung } from "../../../redux/slices/xiNgauSlice";
const XiNgau = () => {
  const dispatch = useDispatch();
  const { xiNgau } = useSelector((state) => state.xiNgauSlice);
  return (
    <div className="xiNgau flex justify-between">
      <button
        onClick={() => {
          dispatch(luaChonNguoiDung(true));
        }}
        className="btn-xiNgau"
      >
        Tài
      </button>
      <div className="flex items-center p-3 bg-white h-max">
        <img
          src={`./public/lacXiNgau/${xiNgau.xiNgau1}.png`}
          width={50}
          alt=""
        />
        <img
          src={`./public/lacXiNgau/${xiNgau.xiNgau2}.png`}
          width={50}
          alt=""
        />
        <img
          src={`./public/lacXiNgau/${xiNgau.xiNgau3}.png`}
          width={50}
          alt=""
        />
      </div>
      <button
        onClick={() => {
          dispatch(luaChonNguoiDung(false));
        }}
        className="btn-xiNgau"
      >
        Xỉu
      </button>
    </div>
  );
};

export default XiNgau;
