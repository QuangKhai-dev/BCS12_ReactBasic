import React from "react";
import animationPageNotFound from "./../../assets/animation/animation.json";
import Lottie from "lottie-react";
import { Link, useNavigate } from "react-router-dom";
const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen flex justify-center items-center flex-col space-y-2">
      <Lottie
        style={{
          width: "600px",
          height: "600px",
        }}
        animationData={animationPageNotFound}
        loops
      />
      <h2>
        Trang web bạn đang tìm kiếm không có, vui lòng quay trở về trang chủ
      </h2>
      <button
        onClick={() => {
          navigate("/");
        }}
        className="bg-red-600 text-white py-2 px-5 rounded-lg"
      >
        Bấm vào để về trang chủ
      </button>
      {/* <Link to={"/"} className="bg-red-600 text-white py-2 px-5 rounded-lg">
        Bấm vào để về trang chủ
      </Link> */}
    </div>
  );
};

export default PageNotFound;
