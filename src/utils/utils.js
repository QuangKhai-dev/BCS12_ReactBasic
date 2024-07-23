export function getRandomNumber(range = 6) {
  // Math.random() tạo ra một số ngẫu nhiên giữa 0 và 1
  // Nhân với 6 để mở rộng khoảng từ 0 đến 5.9999...
  // Math.floor() để làm tròn xuống số nguyên gần nhất
  // Cộng thêm 1 để có khoảng từ 1 đến 6
  return Math.floor(Math.random() * range) + 1;
}
