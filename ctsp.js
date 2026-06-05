document.addEventListener("DOMContentLoaded", function () {
  // 1. ĐỌC MÃ SỐ TRÊN THANH ĐỊA CHỈ
  const urlParams = new URLSearchParams(window.location.search);
  const productId = parseInt(urlParams.get("id"));

  const detailContainer = document.getElementById("detail-container");

  // 2. TÌM MÓN ĂN CHÍNH
  const product = productData.find((mon) => mon.id === productId);

  if (!product) {
    detailContainer.innerHTML = `<h2 style="color: red; padding: 50px; text-align: center; width: 100%;">Không tìm thấy món ăn! Vui lòng quay lại.</h2>`;
    return;
  }

  // 3. ĐỔ DỮ LIỆU MÓN CHÍNH VÀO HTML
  document.getElementById("detail-img").src = product.image;
  document.getElementById("detail-category").innerText = product.category;
  document.getElementById("detail-name").innerText = product.name;
  document.getElementById("detail-rate").innerText = product.rating;
  document.getElementById("detail-reviews").innerText = product.reviews;
  document.getElementById("detail-price").innerText =
    product.price.toLocaleString("vi-VN") + "đ";

  // 4. CHỨC NĂNG TĂNG/GIẢM SỐ LƯỢNG
  const btnMinus = document.getElementById("btn-minus");
  const btnPlus = document.getElementById("btn-plus");
  const qtyInput = document.getElementById("qty-input");

  btnMinus.addEventListener("click", () => {
    let currentQty = parseInt(qtyInput.value);
    if (currentQty > 1) qtyInput.value = currentQty - 1;
  });

  btnPlus.addEventListener("click", () => {
    let currentQty = parseInt(qtyInput.value);
    if (currentQty < 20) qtyInput.value = currentQty + 1;
  });

  // 5. THÊM VÀO GIỎ HÀNG
  const btnAddCart = document.querySelector(".btn-add-cart");
  btnAddCart.addEventListener("click", function () {
    let cart = JSON.parse(localStorage.getItem("meoBeoCart")) || [];
    let selectedQty = parseInt(qtyInput.value);
    let monDaCo = cart.find((item) => item.id === product.id);

    if (monDaCo) {
      monDaCo.quantity += selectedQty;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: selectedQty,
      });
    }
    localStorage.setItem("meoBeoCart", JSON.stringify(cart));
    alert(`🎉 Đã cất ${selectedQty} phần [${product.name}] vào Giỏ hàng!`);
  });

  // Nút Mua Ngay (Thêm vào giỏ và nhảy thẳng sang trang Giỏ hàng)
  const btnBuyNow = document.querySelector(".btn-buy-now");
  btnBuyNow.addEventListener("click", function () {
    btnAddCart.click(); // Gọi lại hành động thêm giỏ hàng ở trên
    window.location.href = "giohang.html"; // Chuyển trang
  });

  // ==========================================
  // 6. TÍNH NĂNG GỢI Ý MÓN ĂN KÈM (MỚI)
  // ==========================================
  const suggestedGrid = document.getElementById("suggested-grid");

  // Rây bột: Chỉ lấy những món KHÁC với món đang xem hiện tại
  let danhSachGoiY = productData.filter((mon) => mon.id !== productId);

  // Thuật toán tráo bài: Đảo lộn danh sách ngẫu nhiên để mỗi lần load trang là một gợi ý khác nhau
  danhSachGoiY.sort(() => 0.5 - Math.random());

  // Cắt lấy 4 món đầu tiên sau khi đã tráo
  let top4GoiY = danhSachGoiY.slice(0, 4);

  // Đưa 4 món này cho cô nhân viên vẽ ra phần Gợi ý
  top4GoiY.forEach((mon) => {
    const html = `
            <div class="s-card" onclick="window.location.href='ctsp.html?id=${mon.id}'">
                <img src="${mon.image}" alt="${mon.name}">
                <h4>${mon.name}</h4>
                <p>${mon.price.toLocaleString("vi-VN")}đ</p>
            </div>
        `;
    suggestedGrid.insertAdjacentHTML("beforeend", html);
  });
});
