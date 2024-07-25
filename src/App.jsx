import { Route, Routes } from "react-router-dom";
import BaiTap1Props from "./components/BaiTap/BaiTap1Props";
import BaiTapHienThiDienThoai from "./components/BaiTap/BaiTapHienThiDienThoai/BaiTapHienThiDienThoai";
import HomeTemplate from "./template/HomeTemplate/HomeTemplate";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import ShoeDetail from "./components/ShoeDetail";
import useRouteCustom from "./routes/useRouteCustom";
import { message } from "antd";
import React from "react";

export const NotificationContext = React.createContext();

function App() {
  const [messageApi, contextHolder] = message.useMessage();
  const routes = useRouteCustom();
  const handleNotification = (status, content) => {
    messageApi.open({
      type: status,
      content,
    });
  };
  return (
    <>
      <NotificationContext.Provider
        value={{
          abc: "Linh đa",
          handleNotification,
        }}
      >
        {contextHolder}
        {routes}
      </NotificationContext.Provider>
      {/* <NotificationContext.Provider value={{
        abc : 'Khải'
      }}>
        <Header />
      </NotificationContext.Provider>
      <Body />
      <Footer /> */}
    </>
  );
  {
    /* // path (tuyến đường) : endpoint  /home */
  }
  // cách setup và sử dụng
  // index, elment, path trong react router dom
  // setup template sử dụng chung cho các trang
  // PAGE NOT FOUND
  // lấy dữ liệu param (:id), query param (&name="")
  // Custom xây dựng cơ chế routing theo hook useRoutes từ react router dom

  // return (
  //   <>
  //     <Routes>
  //       {/* path /bai-tap-hien-thi-dien-thoai  */}

  //       {/* pathTemplate/pathChildElement  */}
  //       {/* /home/bai-tap-pokemon    */}
  //       <Route path="/" element={<HomeTemplate />}>
  //         {/* thuộc tính index giúp xác định một component con sẽ hiển thị cùng lúc khi người dùng truy cập tới đường dẫn của component cha  */}
  //         <Route index element={<BaiTap1Props />} />
  //         <Route
  //           path="bai-tap-hien-thi-dien-thoai"
  //           element={<BaiTapHienThiDienThoai />}
  //         />
  //         <Route path="shoe-detail/:id" element={<ShoeDetail />} />
  //       </Route>
  //       {/* path với giá trị * sẽ là các đường dẫn không bao gồm các đường dẫn đã setup  */}
  //       <Route path="*" element={<PageNotFound />} />
  //     </Routes>
  //   </>
  // );
}

export default App;
