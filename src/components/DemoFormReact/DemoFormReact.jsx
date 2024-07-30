import React, { useState } from "react";

const DemoFormReact = () => {
  const [value, setValue] = useState({
    hoTen: "",
    email: "",
  });
  console.log(value);
  const handleChange = (event) => {
    const id = event.target.id;
    setValue({ ...value, [id]: event.target.value });
  };
  return (
    <div>
      <h2>Bài tập ứng dụng xây dựng form lấy dữ liệu trong React</h2>
      <form>
        <div>
          <label
            htmlFor="first_name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            họ tên
          </label>
          <input
            type="text"
            id="hoTen"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="vui lòng nhập họ tên"
            value={value.hoTen}
            onChange={handleChange}
          />
        </div>
        <div>
          <label
            htmlFor="first_name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            email
          </label>
          <input
            type="text"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="vui lòng nhập họ tên"
            value={value.email}
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
};

export default DemoFormReact;
