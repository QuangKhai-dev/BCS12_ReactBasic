import React, { useState } from "react";
import { useFormik } from "formik";
import InputCustom from "./InputCustom";
import { DatePicker } from "antd";
import ButtonCustom from "./ButtonCustom";
import TableNhanVien from "./TableNhanVien";
const DemoFormReact = () => {
  // const [value, setValue] = useState({
  //   hoTen: "",
  //   email: "",
  // });
  // console.log(value);
  // const handleChange = (event) => {
  //   const id = event.target.id;
  //   setValue({ ...value, [id]: event.target.value });
  // };

  // msnv,họ tên, email, mật khẩu, ngày tháng năm sinh, giới tính, số điện thoại
  // Form nhập dữ liệu người dùng (thuần), Table quản lí nhân viên (antd)
  const [arrNhanVien, setArrNhanVien] = useState([]);
  const { handleSubmit, handleChange, values, setFieldValue } = useFormik({
    // initialValues là dữ liệu mặc định của formik được cung cấp từ người dùng
    initialValues: {
      msnv: "",
      hoTen: "",
      email: "",
      soDienThoai: "",
      matKhau: "",
      gioiTinh: "",
      ngaySinh: "",
    },
    // onSubmit được thực thi khi form bắt đầu chạy sự kiện submit, tham số values đại diện cho dữ liệu của tất cả field trong form
    onSubmit: (values) => {
      console.log(values);
      // const newArrNhanVien = [...arrNhanVien];
      // newArrNhanVien.push(values);
      // setArrNhanVien(newArrNhanVien);
      setArrNhanVien([...arrNhanVien, values]);
    },
  });

  return (
    <div>
      <h2>Bài tập ứng dụng xây dựng form lấy dữ liệu trong React</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-5">
          <InputCustom
            labelContent={"MSNV"}
            placeholder={"Vui lòng nhập msnv"}
            name={"msnv"}
            value={values.msnv}
            onChange={handleChange}
            id={"msnv"}
          />
          <InputCustom
            labelContent={"Họ tên"}
            placeholder={"Vui lòng nhập họ tên"}
            name={"hoTen"}
            value={values.hoTen}
            onChange={handleChange}
            id={"hoTen"}
          />
          <InputCustom
            labelContent={"Email"}
            placeholder={"Vui lòng nhập email"}
            name={"email"}
            value={values.email}
            onChange={handleChange}
            id={"email"}
          />
          <InputCustom
            labelContent={"Số điện thoại"}
            placeholder={"Vui lòng nhập số điện thoại"}
            name={"soDienThoai"}
            value={values.soDienThoai}
            onChange={handleChange}
            id={"soDienThoai"}
          />
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Ngày sinh
            </label>
            <DatePicker
              className="!w-full"
              format={"DD-MM-YYYY"}
              onChange={(date, dateString) => {
                console.log(dateString);
                setFieldValue("ngaySinh", dateString);
              }}
              // style={{
              //   width: "100%",
              // }}
            />
          </div>
          <div>
            <div>
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Giới tính
              </label>
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                value={values.gioiTinh}
                onChange={handleChange}
                name="gioiTinh"
              >
                <option value="">Vui lòng chọn giới tính</option>
                <option value="Nam">Nam</option>
                <option value="Nữ">Nữ</option>
              </select>
            </div>
          </div>
          <InputCustom
            labelContent={"Mật khẩu"}
            id={"matKhau"}
            name={"matKhau"}
            placeholder={"Vui lòng nhập mật khẩu"}
            value={values.matKhau}
            onChange={handleChange}
            classWrapper="col-span-2"
          />
          <div className="space-x-5">
            <ButtonCustom content={"Thêm nhân viên"} type="submit" />
            <ButtonCustom content={"Reset Form"} bgColor="bg-black" />
            <ButtonCustom
              content={"Cập nhật nhân viên"}
              bgColor="bg-yellow-500"
            />
          </div>
        </div>
        {/* <InputCustom
          labelContent={"Họ tên"}
          placeholder={"Vui lòng nhập họ tên"}
          name={"hoTen"}
          value={formik.values.hoTen}
          onChange={formik.handleChange}
          id={"hoTen"}
        /> */}
      </form>
      <TableNhanVien data={arrNhanVien} />
    </div>
  );
};

export default DemoFormReact;
