import React from "react";
import { useSelector } from "react-redux";
const XiNgau = () => {
  const { xiNgau } = useSelector((state) => state.xiNgauSlice);
  return (
    <div className="xiNgau flex justify-between">
      <button className="btn-xiNgau">Tài</button>
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
      <button className="btn-xiNgau">Xỉu</button>
    </div>
  );
};

export default XiNgau;
