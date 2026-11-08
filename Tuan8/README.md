# BookStore Online — Buổi 8 (đã hoàn thiện)

Project được hoàn thiện dựa trên `BookStore_Buoi8_Starter.zip` và đề `BaiThucHanh_Buoi8_BookStore_DangNhap_GioHang_YeuThich.docx`, giữ nguyên cấu trúc Expo, React Navigation, Redux Toolkit, service Axios và json-server của starter.

## Yêu cầu môi trường

- Node.js 20+ và npm.
- Expo Go tương thích SDK hiện có trong `package.json`, hoặc trình duyệt cho Expo Web.
- Điện thoại thật và máy tính cùng mạng Wi-Fi.

## Chạy ứng dụng

Mở **Terminal 1**:

```bash
npm install
npm run api
```

Mở **Terminal 2** tại cùng thư mục:

```bash
npx expo start
```

Nhấn `w` để xem bằng trình duyệt, hoặc quét mã QR trong Expo Go. Kiểm tra TypeScript:

```bash
npx tsc --noEmit
```

Tài khoản thử: **demo@bookstore.vn** / **123456**.

Nếu chạy trên điện thoại thật mà không gọi được API, thay `<IP-MAY-TINH>` bằng IPv4 của máy tính và chạy PowerShell:

```powershell
$env:EXPO_PUBLIC_API_URL="http://<IP-MAY-TINH>:3000"
npx expo start -c
```

Server JSON phải đang chạy, cổng 3000 phải được firewall cho phép.

## Bài đã thực hiện

| Mã | Nội dung |
| --- | --- |
| 8.1 | Form đăng nhập, validate lỗi từng trường, xử lý API/loading và điều hướng sau đăng nhập |
| 8.2 | Form đăng ký, kiểm tra nhập lại mật khẩu, tự đăng nhập |
| 8.3 | Ghi/khôi phục phiên đăng nhập qua AsyncStorage, đăng xuất xóa phiên |
| 8.4 | Hai lớp bảo vệ Checkout, đi qua Login và quay về Checkout đúng tổng tiền |
| 8.5 | RatingStars tái sử dụng, trung bình sao, POST review, cập nhật màn hình tức thì |
| 8.6 | Tăng/giảm số lượng có giới hạn tồn kho, debounce 300 ms |
| 8.7 | Hộp xác nhận xóa hoạt động trên web/native, lưu giỏ và yêu thích khi reload |
| 8.8 | Tim thống nhất qua Redux; danh sách yêu thích, lỗi, loading, trạng thái trống |
| C1 | FlatList ngang sách cùng danh mục, trừ sách đang xem, mở bằng `push` |
| C2 | Mã giảm giá `SALE10`/`GIAM50K` và truyền tổng đã giảm đến Checkout |
| Bổ sung 5 | Nút hiện/ẩn mật khẩu có nhãn hỗ trợ tiếp cận |

`TraLoi.md` trả lời cả 5 câu hỏi ở cuối đề. Ảnh màn hình chứng minh thao tác cần chụp từ app đang chạy.

## Test thủ công nên thực hiện trước khi nộp

1. Đăng nhập với form trống, email sai và tài khoản demo; đăng ký một email mới.
2. Đăng xuất rồi vào giỏ, bấm Thanh toán; đăng nhập để tự về Checkout với đúng tổng tiền.
3. Vào chi tiết sách, chọn sao, viết bình luận; kiểm tra review mới ở đầu danh sách và API `/reviews`.
4. Thêm sách, tăng/giảm đến giới hạn tồn kho, áp dụng `SALE10` và `GIAM50K`, xóa/hủy xác nhận.
5. Thả tim trên Home, xem ở Chi tiết và màn Yêu thích; bỏ tim tại màn yêu thích.
6. Reload: kiểm tra phiên đăng nhập, giỏ hàng và yêu thích còn nguyên; sau đăng xuất và reload phải mất phiên.
7. Chụp ảnh màn hình trước/sau khi bấm nút mắt hiện mật khẩu.

## Lưu ý bảo mật và phạm vi

Đăng nhập của bài này **chỉ là mô phỏng phục vụ học tập**: client nhận bản ghi người dùng, tự so mật khẩu rồi tạo token giả. Không dùng cho sản phẩm thật; ở môi trường production server phải xác thực, băm mật khẩu, cấp và kiểm chứng token, client lưu thông tin nhạy cảm trong secure storage. `json-server` ghi thay đổi mới vào `db.json`. Màn Checkout chưa có form đặt hàng vì thuộc buổi học sau.
