document.addEventListener("DOMContentLoaded", function () {
  const cartContent = document.getElementById("cart-content");

  // ==========================================
  // 1. MÁY QUÉT MÃ VẠCH (Vẽ giỏ hàng)
  // ==========================================
  function renderCart() {
    // Mở Ba-lô ra lấy đồ
    let cart = JSON.parse(localStorage.getItem("meoBeoCart")) || [];

    // Nếu giỏ hàng trống trơn
    if (cart.length === 0) {
      cartContent.innerHTML = `
                <div style="text-align: center; padding: 50px;">
                    <img src="https://cdn-icons-png.flaticon.com/512/11329/11329060.png" width="100" style="opacity: 0.5; margin-bottom: 20px;">
                    <h3 style="color: #666;">Bụng Mèo Béo đang trống rỗng...</h3>
                    <br>
                    <a href="tc.html" style="color: #D32F2F; text-decoration: underline; font-weight: bold;">Đi mua Gà Rán ngay!</a>
                </div>
            `;
      return;
    }

    // Nếu có đồ, chuẩn bị in hóa đơn (Bảng HTML)
    let tableHTML = `
            <table class="cart-table">
                <thead>
                    <tr>
                        <th>Món ăn</th>
                        <th>Đơn giá</th>
                        <th>Số lượng</th>
                        <th>Thành tiền</th>
                        <th>Thao tác</th>
                    </tr>
                </thead>
                <tbody>
        `;

    let totalPrice = 0;

    // Vòng lặp: Lôi từng món ra tính tiền
    cart.forEach((item, index) => {
      const itemTotal = item.price * item.quantity;
      totalPrice += itemTotal; // Cộng dồn vào rổ tiền tổng

      tableHTML += `
                <tr>
                    <td>
                        <div style="display: flex; align-items: center;">
                            <img src="${item.image}" class="cart-item-img">
                            <strong style="color: #333;">${item.name}</strong>
                        </div>
                    </td>
                    <td style="font-weight: bold; color: #555;">${item.price.toLocaleString("vi-VN")}đ</td>
                    <td>
                        <div class="qty-box">
                            <button class="qty-btn" onclick="updateQty(${index}, -1)">-</button>
                            <input type="text" class="qty-input" value="${item.quantity}" readonly>
                            <button class="qty-btn" onclick="updateQty(${index}, 1)">+</button>
                        </div>
                    </td>
                    <td style="color: #D32F2F; font-weight: 900;">${itemTotal.toLocaleString("vi-VN")}đ</td>
                    <td>
                        <button class="btn-remove" onclick="removeItem(${index})">Xóa</button>
                    </td>
                </tr>
            `;
    });

    tableHTML += `</tbody></table>`;

    // Phần tổng thanh toán ở dưới cùng
    tableHTML += `
            <div class="cart-summary">
                <span class="total-text">Tổng thanh toán:</span>
                <span class="total-price">${totalPrice.toLocaleString("vi-VN")}đ</span>
                <br>
                <a href="#" class="btn-checkout" onclick="alert('Tính năng Đặt Hàng đang cập nhật!')">Thanh Toán Ngay</a>
            </div>
        `;

    // Dán hóa đơn lên màn hình
    cartContent.innerHTML = tableHTML;
  }

  // Chạy lần đầu tiên
  renderCart();

  // ==========================================
  // 2. CÁC NÚT BẤM (Cộng/Trừ/Xóa)
  // ==========================================

  // Hàm tăng giảm số lượng (+1 hoặc -1)
  window.updateQty = function (index, change) {
    let cart = JSON.parse(localStorage.getItem("meoBeoCart")) || [];

    cart[index].quantity += change;

    // Nếu trừ xuống 0 thì lấy kéo cắt phăng món đó đi (Xóa)
    if (cart[index].quantity <= 0) {
      cart.splice(index, 1);
    }

    // Cất lại vào Ba-lô và In lại hóa đơn
    localStorage.setItem("meoBeoCart", JSON.stringify(cart));
    renderCart();
  };

  // Hàm xóa hẳn 1 món
  window.removeItem = function (index) {
    if (confirm("Bạn có chắc muốn bỏ món này ra khỏi giỏ? 😿")) {
      let cart = JSON.parse(localStorage.getItem("meoBeoCart")) || [];
      cart.splice(index, 1);
      localStorage.setItem("meoBeoCart", JSON.stringify(cart));
      renderCart();
    }
  };
});
