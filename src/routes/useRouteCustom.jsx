import React from "react";
import { useRoutes } from "react-router-dom";
import HomeTemplate from "../template/HomeTemplate/HomeTemplate";
import PageNotFound from "../components/PageNotFound/PageNotFound";
import BaiTap1Props from "../components/BaiTap/BaiTap1Props";
import BaiTapHienThiDienThoai from "../components/BaiTap/BaiTapHienThiDienThoai/BaiTapHienThiDienThoai";
import ShoeDetail from "../components/ShoeDetail";
import { path } from "../common/path";

const useRouteCustom = () => {
  const elements = useRoutes([
    {
      path: path.homePage,
      element: <HomeTemplate />,
      children: [
        {
          index: true,
          element: <BaiTap1Props />,
        },
        {
          path: path.baiTapDienThoai,
          element: <BaiTapHienThiDienThoai />,
        },
        {
          path: `${path.shoeDetail}/:id`,
          element: <ShoeDetail />,
        },
      ],
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);
  return elements;
};

export default useRouteCustom;
