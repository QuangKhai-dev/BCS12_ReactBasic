import React from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { NavLink, Outlet } from "react-router-dom";
import { path } from "../../common/path";
import { useSelector } from "react-redux";
const { Header, Content, Footer } = Layout;

const HomeTemplate = () => {
  const { hoTen } = useSelector((state) => state.userSlice);
  const arrNavlink = [
    {
      to: path.homePage,
      content: "Home",
    },
    {
      to: path.baiTapDienThoai,
      content: "Bài tập điện thoại",
    },
    {
      to: path.demoRedux,
      content: "Demo Redux",
    },
    {
      to: path.baiTapLacXiNgau,
      content: "Bài tập lắc xí ngầu",
    },
  ];
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout className="min-h-screen">
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div className="demo-logo" />
        <div>
          {arrNavlink.map((item, index) => {
            return (
              <NavLink
                className={({ isActive }) => {
                  // trong hàm trả về class của thẻ NavLink có cung cấp thuộc tính isActive giúp kiểm tra path của url và giá trị trong thuộc tính to của thẻ xem giống nhau hay không, nếu giống trả về kết quả true và ngược lại
                  console.log(isActive);
                  return `mx-4 ${isActive ? "text-red-500" : "text-white"}`;
                }}
                to={item.to}
              >
                {item.content}
              </NavLink>
            );
          })}
        </div>
        <div className="text-white uppercase">{hoTen}</div>
      </Header>
      <Content
        style={{
          padding: "0 48px",
        }}
      >
        <div
          style={{
            padding: 24,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Repo của Quách Khải
      </Footer>
    </Layout>
  );
};
export default HomeTemplate;
