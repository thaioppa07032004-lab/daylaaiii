// =====================================================================
//  CẤU HÌNH THIỆP CƯỚI — chỉ cần sửa ở file này là toàn bộ web cập nhật
// =====================================================================

export const wedding = {
  // Ngày & giờ tổ chức chính (dùng cho đồng hồ đếm ngược)
  // Định dạng: "YYYY-MM-DDTHH:mm:ss"
  weddingDate: "2026-12-20T11:00:00",

  // Câu chào ngắn hiển thị ở đầu trang
  hashtag: "#SonGiang2026",

  groom: {
    name: "Hoàng Sơn",
    fullName: "Nguyễn Hoàng Sơn",
    role: "Chú rể",
    description:
      "Con trai út trong gia đình, là người điềm đạm, ấm áp và luôn hết lòng vì người mình yêu thương.",
    photo: "/images/groom.png",
    father: "Ông Nguyễn Văn A",
    mother: "Bà Trần Thị B",
    // Mạng xã hội (để trống nếu không dùng)
    facebook: "",
    instagram: "",
  },

  bride: {
    name: "Hương Giang",
    fullName: "Trần Hương Giang",
    role: "Cô dâu",
    description:
      "Con gái đầu lòng, dịu dàng, tinh tế và luôn mang năng lượng ấm áp đến cho mọi người xung quanh.",
    photo: "/images/bride.png",
    father: "Ông Trần Văn C",
    mother: "Bà Lê Thị D",
    facebook: "",
    instagram: "",
  },

  // Lời ngỏ / lời mời
  invitation: {
    quote:
      "Tình yêu không làm cho thế giới quay tròn. Tình yêu là điều làm cho chuyến đi đáng giá.",
    message:
      "Trân trọng kính mời bạn đến chung vui cùng gia đình chúng tôi trong ngày trọng đại. Sự hiện diện của bạn là niềm vinh hạnh và là món quà quý giá nhất đối với đôi uyên ương.",
  },

  // Câu chuyện tình yêu
  loveStory: [
    {
      date: "Mùa hè 2020",
      title: "Lần đầu gặp gỡ",
      text: "Chúng tôi tình cờ gặp nhau trong một buổi chiều mưa, và có lẽ ông tơ bà nguyệt đã se duyên từ khoảnh khắc ấy.",
    },
    {
      date: "Tháng 2, 2021",
      title: "Chính thức yêu",
      text: "Sau những buổi cà phê và những cuộc trò chuyện thâu đêm, chúng tôi quyết định nắm tay nhau cùng bước tiếp.",
    },
    {
      date: "Tháng 9, 2025",
      title: "Lời cầu hôn",
      text: "Dưới ánh hoàng hôn bên bờ biển, anh đã quỳ gối và trao cho em chiếc nhẫn cùng lời hứa trọn đời.",
    },
    {
      date: "20.12.2026",
      title: "Ngày về chung một nhà",
      text: "Và hôm nay, chúng tôi chính thức trở thành của nhau, bắt đầu một hành trình mới mang tên gia đình.",
    },
  ],

  // Album ảnh
  gallery: [
    "/images/gallery-1.png",
    "/images/gallery-2.png",
    "/images/gallery-3.png",
    "/images/gallery-4.png",
    "/images/gallery-5.png",
    "/images/gallery-6.png",
  ],

  // Các sự kiện: lễ nhà trai, nhà gái, tiệc cưới...
  events: [
    {
      title: "Lễ Vu Quy",
      side: "Nhà Gái",
      date: "Thứ Bảy, 19.12.2026",
      time: "09:00 sáng",
      venue: "Tư gia nhà gái",
      address: "123 Đường Hoa Sữa, Phường 5, Quận 3, TP. Hồ Chí Minh",
      mapUrl: "https://maps.google.com/?q=Quan+3+Ho+Chi+Minh",
    },
    {
      title: "Lễ Thành Hôn",
      side: "Nhà Trai",
      date: "Chủ Nhật, 20.12.2026",
      time: "11:00 trưa",
      venue: "Trung tâm tiệc cưới White Palace",
      address: "194 Hoàng Văn Thụ, Phường 9, Quận Phú Nhuận, TP. Hồ Chí Minh",
      mapUrl: "https://maps.google.com/?q=White+Palace+Hoang+Van+Thu",
    },
  ],

  // Mừng cưới / hộp quà
  gifts: [
    {
      label: "Chú rể",
      name: "NGUYEN HOANG SON",
      bank: "Vietcombank",
      account: "0123456789",
    },
    {
      label: "Cô dâu",
      name: "TRAN HUONG GIANG",
      bank: "Techcombank",
      account: "9876543210",
    },
  ],

  // Nhạc nền (đặt file mp3 vào /public/music/ rồi đổi đường dẫn)
  music: {
    src: "",
    title: "Nhạc nền",
  },
} as const

export type Wedding = typeof wedding
