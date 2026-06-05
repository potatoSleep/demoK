// ==========================================
// THỰC ĐƠN TIỆM: MÈO BÉO ĂN GÀ RÁN
// ==========================================
const productData = [
  {
    id: 1,
    name: "Đùi Gà Rán Giòn Rụm (1 Miếng)",
    price: 35000,
    category: "Gà Rán",
    rating: 5.0,
    reviews: 210,
    // Dùng tạm ảnh đồ ăn miễn phí từ Unsplash cho đẹp mắt
    image: "z7575291813301_8459929d381e46478ba97800b7415cdb.jpg",
  },
  {
    id: 2,
    name: "Cánh Gà Sốt Cay Hàn Quốc",
    price: 45000,
    category: "Gà Rán",
    rating: 4.8,
    reviews: 185,
    image:
      "https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 3,
    name: "Gà Viên Chiên Nhỏ (Popcorn)",
    price: 30000,
    category: "Gà Rán",
    rating: 4.5,
    reviews: 92,
    image:
      "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 4,
    name: "Khoai Tây Chiên Lắc Phô Mai",
    price: 25000,
    category: "Ăn Vặt",
    rating: 4.9,
    reviews: 340,
    image:
      "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 5,
    name: "Phô Mai Que Kéo Sợi (3 Thanh)",
    price: 30000,
    category: "Ăn Vặt",
    rating: 4.7,
    reviews: 156,
    image:
      "https://images.unsplash.com/photo-1531749668029-2db88e4276c7?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 6,
    name: "Xúc Xích Đức Nướng Đá",
    price: 20000,
    category: "Ăn Vặt",
    rating: 4.6,
    reviews: 88,
    image:
      "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 7,
    name: "Hamburger Bò Phô Mai Chảy",
    price: 55000,
    category: "Đồ Ăn Chính",
    rating: 5.0,
    reviews: 412,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 8,
    name: "Mì Ý Sốt Bò Băm (Spaghetti)",
    price: 60000,
    category: "Đồ Ăn Chính",
    rating: 4.4,
    reviews: 76,
    image:
      "https://images.unsplash.com/photo-1622973536968-3ead9e780960?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 9,
    name: "Trà Sữa Trân Châu Đường Đen",
    price: 35000,
    category: "Đồ Uống",
    rating: 4.9,
    reviews: 520,
    image:
      "https://images.unsplash.com/photo-1588713028359-192a6c2311c6?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 10,
    name: "Nước Ngọt Có Gas (Pepsi/Coca)",
    price: 15000,
    category: "Đồ Uống",
    rating: 4.5,
    reviews: 120,
    image:
      "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 11,
    name: "Gà Rán Phủ Phô Mai Tuyết",
    price: 55000,
    category: "Gà Rán",
    rating: 4.9,
    reviews: 320,
    image:
      "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 12,
    name: "Gà Quay Tiêu Tiện Lợi",
    price: 50000,
    category: "Gà Rán",
    rating: 4.6,
    reviews: 112,
    image:
      "https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 13,
    name: "Mực Vòng Chiên Giòn (Calamari)",
    price: 40000,
    category: "Ăn Vặt",
    rating: 4.7,
    reviews: 145,
    image:
      "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 14,
    name: "Bánh Mì Bơ Tỏi Phô Mai",
    price: 25000,
    category: "Ăn Vặt",
    rating: 4.8,
    reviews: 260,
    image:
      "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 15,
    name: "Cơm Gà Xốt Teriyaki",
    price: 55000,
    category: "Đồ Ăn Chính",
    rating: 4.8,
    reviews: 310,
    image:
      "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 16,
    name: "Salad Lườn Gà Nướng",
    price: 45000,
    category: "Đồ Ăn Chính",
    rating: 4.5,
    reviews: 95,
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 17,
    name: "Pizza Mini Xúc Xích Phô Mai",
    price: 65000,
    category: "Đồ Ăn Chính",
    rating: 4.6,
    reviews: 180,
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 18,
    name: "Trà Đào Cam Sả Giải Nhiệt",
    price: 30000,
    category: "Đồ Uống",
    rating: 4.9,
    reviews: 450,
    image:
      "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 19,
    name: "Trà Chanh Dây Nhiệt Đới",
    price: 25000,
    category: "Đồ Uống",
    rating: 4.7,
    reviews: 210,
    image:
      "https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 20,
    name: "Sữa Chua Lắc Trân Châu",
    price: 35000,
    category: "Đồ Uống",
    rating: 4.8,
    reviews: 175,
    image:
      "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?auto=format&fit=crop&w=500&q=80",
  },
];
