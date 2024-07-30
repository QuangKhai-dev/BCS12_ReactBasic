import React from "react";

const ButtonCustom = ({
  content,
  type = "button",
  bgColor = "bg-blue-500",
  onClick,
}) => {
  return (
    <button
      type={type}
      className={`py-2 px-5 text-white rounded-md ${bgColor}`}
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export default ButtonCustom;
