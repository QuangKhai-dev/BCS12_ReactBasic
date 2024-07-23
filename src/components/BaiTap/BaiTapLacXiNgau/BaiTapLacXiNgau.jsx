import React from "react";
import "./style.scss";
import XiNgau from "./XiNgau";
import KetQua from "./KetQua";
const BaiTapLacXiNgau = () => {
  return (
    <div className="baiTap2">
      <h2 className="uppercase text-5xl">Game Đổ xúc xắc</h2>
      <XiNgau />
      <KetQua />
      <button className="btn-play">Play game</button>
    </div>
  );
};

export default BaiTapLacXiNgau;
