import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const DemoUseEffect = () => {
  const [listShoe, setListShoe] = useState();
  useEffect(() => {
    console.log("Tôi là useEffect chạy sau khi giao diện xuất hiện");
    // lưu ý useEffect này sẽ chạy 1 lần duy nhất khi component được khởi tạo
    // Xử lí gọi API cho component ở useEffect này
    axios({
      method: "GET",
      url: "https://shop.cyberlearn.vn/api/Product",
    })
      .then((res) => {
        console.log(res);
        setListShoe(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log("Tôi là component demoUseEffect");
  console.log(listShoe);
  function render() {
    console.log("Tôi là giao diện của demouseEffect");
    return <p>BCS12</p>;
  }
  return (
    <div>
      {render()}
      <div className="grid grid-cols-4 gap-5">
        {/* nếu có dữ liệu thì chạy, không thì sẽ không chạy  */}
        {listShoe?.map((item, index) => {
          return (
            <div>
              <img src={item.image} alt="" />
              <h3>{item.name}</h3>
              <p>Giá tiền: {item.price}</p>
              <Link
                to={`/demo-use-effect-detail/${item.id}`}
                className="bg-blue-500 text-white py-2 px-5 rounded-md"
              >
                Xem chi tiết
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DemoUseEffect;
