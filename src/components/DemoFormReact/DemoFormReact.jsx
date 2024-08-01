import React, { useContext, useState } from "react";
import { useFormik } from "formik";
import InputCustom from "./InputCustom";
import { DatePicker } from "antd";
import ButtonCustom from "./ButtonCustom";
import TableNhanVien from "./TableNhanVien";
import * as yup from 'yup'
import { NotificationContext } from "../../App";


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
  const { handleSubmit, handleChange, values, setFieldValue,errors,handleBlur,touched,resetForm ,setValues} = useFormik({
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
    onSubmit: (values,{resetForm}) => {
      console.log(values);
      // const newArrNhanVien = [...arrNhanVien];
      // newArrNhanVien.push(values);
      // setArrNhanVien(newArrNhanVien);
      setArrNhanVien([...arrNhanVien, values]);
      resetForm()
    },
    // ở phương thức yup.object sẽ nhận một object chứa thông tin các validation dành cho các field ở initialValues
    validationSchema: yup.object({
      email: yup.string().required("Vui lòng không bỏ trống").email("Vui lòng nhập đúng định dạng email"),
      msnv: yup.string().required("Vui lòng không bỏ trống").min(4, "Vui lòng nhập tối thiểu 4 ký tự").max(8, "Vui lòng nhập tối đa 8 ký tự"),
      soDienThoai: yup.string().matches(/^(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})$/, "Vui lòng nhập đúng sdt việt nam"),
      matKhau: yup.string().matches(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/, "Vui lòng tạo mật khẩu có ít nhất 1 ký tự đặc biệt, 1 chữ cái viết hoa và 1 số"),
      hoTen: yup.string().matches(/^[A-Za-zÀ-ỹ\s]+$/, "Vui lòng nhập chữ không có số"),
      gioiTinh: yup.string().required("Vui lòng chọn giới tính"),
      ngaySinh : yup.string().required("Vui lòng chọn ngày sinh")
      
      // msnv : gồm từ 4 đến 8 ký tự, không bỏ trống
      // số điện thoại : nhập đúng số điện thoại việt nam (regex)
      // matKhau : bao gồm ít nhất 1 ký tự đặc biệt, ít nhất 1 chữ cái viết hoa và có ít nhất 1 số
      // giới tính : bắt buộc chọn
      // họ tên : phải là chữ 

    })
  });
  const valueContext = useContext(NotificationContext)
  const deleteNhanVien = (msnv) => {
    const newArrNhanVien = [...arrNhanVien]
    const index = newArrNhanVien.findIndex((item) => item.msnv == msnv)
    if (index != -1) {
      newArrNhanVien.splice(index, 1)
      setArrNhanVien(newArrNhanVien)
    } else {
      valueContext.handleNotification("error","Có lỗi xảy ra người dùng không có trong hệ thống")
    }
  }

  const getInforNhanVien = (record) => {
    // sử dụng phương thực setValues để lấy record và cập nhật lên form
  }

  const updateNhanVien = () => {
    // sử dụng isValid từ formik để kiểm tra, nếu không còn lỗi thì sẽ cập nhật dữ liệu
  }

  // Tìm kiếm nhân viên (Lọc theo tên)
  const searchNhanVien = () => {
    
  }

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
            onBlur={handleBlur}
            error={errors.msnv}
            touched={touched.msnv}
          />
          <InputCustom
            labelContent={"Họ tên"}
            placeholder={"Vui lòng nhập họ tên"}
            name={"hoTen"}
            value={values.hoTen}
            onChange={handleChange}
            id={"hoTen"}
            onBlur={handleBlur}
            error={errors.hoTen}
            touched={touched.hoTen}
          />
          <InputCustom
            labelContent={"Email"}
            placeholder={"Vui lòng nhập email"}
            name={"email"}
            value={values.email}
            onChange={handleChange}
            id={"email"}
            onBlur={handleBlur}
            error={errors.email}
            touched={touched.email}
          />
         
          <InputCustom
            labelContent={"Số điện thoại"}
            placeholder={"Vui lòng nhập số điện thoại"}
            name={"soDienThoai"}
            value={values.soDienThoai}
            onChange={handleChange}
            id={"soDienThoai"}
            onBlur={handleBlur}
            error={errors.soDienThoai}
            touched={touched.soDienThoai}
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
              onBlur={() => handleBlur({ target: { name: 'ngaySinh' } })}
              // style={{
              //   width: "100%",
              // }}
            />
            {errors.ngaySinh && touched.ngaySinh ? <p className="text-red-500">{errors.ngaySinh}</p>: null}
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
                onBlur={handleBlur}
         
              >
                <option value="">Vui lòng chọn giới tính</option>
                <option value="Nam">Nam</option>
                <option value="Nữ">Nữ</option>
              </select>
              {errors.gioiTinh && touched.email ? <p className="text-red-500">{errors.gioiTinh}</p>: null}
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
            onBlur={handleBlur}
            error={errors.matKhau}
            touched={touched.matKhau}
          />
          <div className="space-x-5">
            <ButtonCustom content={"Thêm nhân viên"} type="submit" />
            <ButtonCustom onClick={() => {
              resetForm()
            }} content={"Reset Form"} bgColor="bg-black" />
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
      <TableNhanVien data={arrNhanVien} handleDeleteNhanVien={deleteNhanVien} />
    </div>
  );
};

export default DemoFormReact;
