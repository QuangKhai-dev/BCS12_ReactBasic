import React from "react";
import { useRoutes } from "react-router-dom";
import HomeTemplate from "../template/HomeTemplate/HomeTemplate";
import PageNotFound from "../components/PageNotFound/PageNotFound";
import BaiTap1Props from "../components/BaiTap/BaiTap1Props";
import BaiTapHienThiDienThoai from "../components/BaiTap/BaiTapHienThiDienThoai/BaiTapHienThiDienThoai";
import ShoeDetail from "../components/ShoeDetail";
import { path } from "../common/path";
import DemoRedux from "../components/DemoRedux/DemoRedux";
import BaiTapLacXiNgau from "../components/BaiTap/BaiTapLacXiNgau/BaiTapLacXiNgau";
import DemoUseEffect from "../components/DemoUseEffect/DemoUseEffect";
import DemoUseEffectDetail from "../components/DemoUseEffect/DemoUseEffectDetail";
import DemoFormReact from "../components/DemoFormReact/DemoFormReact";

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
        {
          path: path.demoRedux,
          element: <DemoRedux />,
        },
        {
          path: path.baiTapLacXiNgau,
          element: <BaiTapLacXiNgau />,
        },
        {
          path: "/demo-useEffect",
          element: <DemoUseEffect />,
        },
        {
          path: "/demo-use-effect-detail/:id",
          element: <DemoUseEffectDetail />,
        },
        {
          path: "/demo-form-react",
          element: <DemoFormReact />,
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
