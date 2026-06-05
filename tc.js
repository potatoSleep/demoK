// Đợi cái khung nhà (HTML) tải xong hết rồi mới cho "Cô nhân viên" vào làm việc
document.addEventListener("DOMContentLoaded", function () {
  // 1. CHUẨN BỊ ĐỒ NGHỀ
  // Tìm cái "Kệ trưng bày" trên web (nơi sẽ đặt món ăn)
  const productGrid = document.getElementById("product-grid");

  // Tìm danh sách các nút bấm danh mục ở cột bên trái
  const categoryLinks = document.querySelectorAll("#category-list a");

  // ==========================================
  // 2. CÔ NHÂN VIÊN XẾP HÀNG LÊN KỆ
  // ==========================================
  function renderProducts(danhSachMonAn) {
    // Trước khi xếp hàng, phải quét dọn sạch sẽ cái kệ cũ
    productGrid.innerHTML = "";

    // Lôi TỪNG món ăn trong danh sách ra để đóng gói (forEach)
    danhSachMonAn.forEach((product) => {
      // Biến số tiền 35000 thành "35.000đ" cho đẹp mắt
      const giaTienDep = product.price.toLocaleString("vi-VN") + "đ";

      // Đóng gói thông tin món ăn thành 1 cái hộp HTML (Card)
      const htmlBox = `
                <div class="product-card">
                    <div class="product-image" style="background: transparent; height: auto;">
                        <img src="${product.image}" alt="${product.name}" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px;">
                    </div>
                    
                    <div class="product-info">
                        <h3 style="font-size: 16px; margin-bottom: 5px; color: #333;">${product.name}</h3>
                        <p class="price">${giaTienDep}</p>
                        <a href="ctsp.html?id=${product.id}">Mua Ngay</a>
                    </div>
                </div>
            `;

      // Bê cái hộp vừa đóng gói xong đặt lên kệ
      productGrid.insertAdjacentHTML("beforeend", htmlBox);
    });
  }

  // Buổi sáng mở cửa tiệm: Lôi TOÀN BỘ kho hàng (productData) ra xếp lên kệ
  renderProducts(productData);

  // ==========================================
  // 3. KHÁCH HÀNG BẤM LỌC MÓN (SIDEBAR)
  // ==========================================
  categoryLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      // Ngăn chặn web bị giật nảy lên trên khi bấm vào thẻ link (href="#")
      event.preventDefault();

      // Xóa màu đỏ in đậm ở tất cả các chữ danh mục khác
      categoryLinks.forEach((el) => {
        el.style.fontWeight = "normal";
        el.style.color = "#555";
      });

      // Tô đỏ in đậm cho cái chữ mà khách vừa bấm
      this.style.fontWeight = "bold";
      this.style.color = "#D32F2F";

      // Lấy ra TÊN CỦA DANH MỤC khách vừa bấm (nhờ thuộc tính data-category)
      // Ví dụ: Lấy ra chữ "Đồ Uống"
      const categoryName = this.getAttribute("data-category");

      if (categoryName === "All") {
        // Nếu bấm "Tất cả món" -> Gọi cô nhân viên lôi toàn bộ hàng ra xếp lại
        renderProducts(productData);
      } else {
        // DÙNG CÁI RÂY (filter) ĐỂ LỌC:
        // Kêu máy tính nhặt ra những món ăn có chữ 'category' khớp với cái khách vừa bấm
        const monDaLoc = productData.filter(
          (mon) => mon.category === categoryName,
        );

        // Đưa những món vừa lọc được cho cô nhân viên xếp lên kệ
        renderProducts(monDaLoc);
      }
    });
  });
});

// Đợi HTML tải xong rồi mới chạy
document.addEventListener("DOMContentLoaded", function () {
  // 1. CHUẨN BỊ ĐỒ NGHỀ
  const productGrid = document.getElementById("product-grid");
  const categoryLinks = document.querySelectorAll("#category-list a");
  const searchInput = document.querySelector(".search-bar input");

  // Kiểm tra "cứu hộ": Nhỡ quên nhúng data.js thì báo lỗi ra màn hình luôn
  if (typeof productData === "undefined") {
    console.error("LỖI: Chưa tìm thấy kho dữ liệu productData!");
    if (productGrid) {
      productGrid.innerHTML =
        "<h3 style='color:red; text-align:center; width:100%;'>Lỗi: Không tải được menu món ăn! Cần kiểm tra lại file data.js</h3>";
    }
    return; // Dừng luôn không làm gì nữa
  }

  // ==========================================
  // 2. CÔ NHÂN VIÊN XẾP HÀNG LÊN KỆ
  // ==========================================
  function renderProducts(danhSachMonAn) {
    if (!productGrid) return; // Nếu không thấy kệ thì nghỉ

    productGrid.innerHTML = ""; // Quét sạch kệ cũ

    // Nếu rây bột xong mà không còn món nào
    if (danhSachMonAn.length === 0) {
      productGrid.innerHTML =
        "<p style='width: 100%; text-align: center; grid-column: 1 / -1; padding: 50px; color: #888;'>Không tìm thấy món ăn nào phù hợp!</p>";
      return;
    }

    // Lặp qua từng món đóng gói HTML
    danhSachMonAn.forEach((product) => {
      const giaTienDep = product.price.toLocaleString("vi-VN") + "đ";
      const htmlBox = `
        <div class="product-card">
            <div class="product-image" style="background: transparent; height: auto;">
                <img src="${product.image}" alt="${product.name}" onerror="this.onerror=null; this.src='https://placehold.co/500x300?text=Meo+Beo'" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px;">
            </div>
            
            <div class="product-info">
                <h3 style="font-size: 16px; margin-bottom: 5px; color: #333;">${product.name}</h3>
                <p class="price">${giaTienDep}</p>
                <a href="ctsp.html?id=${product.id}">Mua Ngay</a>
            </div>
        </div>
      `;
      productGrid.insertAdjacentHTML("beforeend", htmlBox);
    });
  }

  // Chạy lần đầu tiên: Lôi hết 10 món ra
  renderProducts(productData);

  // ==========================================
  // 3. KHÁCH BẤM LỌC DANH MỤC (SIDEBAR)
  // ==========================================
  if (categoryLinks.length > 0) {
    categoryLinks.forEach((link) => {
      link.addEventListener("click", function (event) {
        event.preventDefault(); // Ngừng giật web lên trên

        // Reset màu chữ các nút khác
        categoryLinks.forEach((el) => {
          el.style.fontWeight = "normal";
          el.style.color = "#555";
        });

        // In đậm nút vừa bấm
        this.style.fontWeight = "bold";
        this.style.color = "#D32F2F";

        const categoryName = this.getAttribute("data-category");

        if (categoryName === "All") {
          renderProducts(productData); // Hiện tất cả
        } else {
          // Rây bột theo danh mục
          const monDaLoc = productData.filter(
            (mon) => mon.category === categoryName,
          );
          renderProducts(monDaLoc); // Hiện món đã lọc
        }
      });
    });
  }

  // ==========================================
  // 4. CỖ MÁY DÒ TÌM (THANH SEARCH)
  // ==========================================
  if (searchInput) {
    searchInput.addEventListener("input", function () {
      const keyword = this.value.toLowerCase().trim();

      // Rây bột theo tên có chứa chữ khách gõ
      const ketQuaTimKiem = productData.filter((mon) =>
        mon.name.toLowerCase().includes(keyword),
      );

      // Đưa cho cô nhân viên vẽ ra
      renderProducts(ketQuaTimKiem);

      // (Mẹo nhỏ) Trả lại màu đỏ cho chữ "Tất cả món" bên cột trái
      if (categoryLinks.length > 0) {
        categoryLinks.forEach((el) => {
          el.style.fontWeight = "normal";
          el.style.color = "#555";
        });
        categoryLinks[0].style.fontWeight = "bold";
        categoryLinks[0].style.color = "#D32F2F";
      }
    });
  }
});
