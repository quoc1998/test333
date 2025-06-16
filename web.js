function validateForm() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document.getElementById("confirmPassword").value.trim();

  // Reset lỗi trước khi kiểm tra lại
  document.getElementById("emailError").textContent = "";
  document.getElementById("passwordError").textContent = "";
  document.getElementById("confirmPasswordError").textContent = "";

  let valid = true;

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    document.getElementById("emailError").textContent = "Email không hợp lệ.";
    valid = false;
  }

  const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
  if (!passwordPattern.test(password)) {
    document.getElementById("passwordError").textContent = "Mật khẩu phải từ 6 ký tự, chứa chữ và số.";
    valid = false;
  }

  if (password !== confirmPassword) {
    document.getElementById("confirmPasswordError").textContent = "Mật khẩu nhập lại không khớp.";
    valid = false;
  }

  if (valid) {
    alert("Đăng ký thành công!");
  } else {
    alert("Chưa đăng ký thành công! Vui lòng kiểm tra lại thông tin.");
  }

  return valid; // Chỉ gửi form khi valid = true
}