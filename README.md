# Barcode Scanner — bản modular

Ứng dụng web tĩnh cho GitHub Pages: tải Excel/CSV, nhận diện cột barcode/tên/giá, cho phép sửa ánh xạ cột, quét bằng camera hoặc nhập mã thủ công.

## Cấu trúc
- `index.html`: cấu trúc giao diện.
- `css/styles.css`: giao diện responsive.
- `js/app.js`: điều phối giao diện và trạng thái.
- `js/data-import.js`: đọc Excel/CSV, tìm sheet có dữ liệu và dòng tiêu đề.
- `js/column-mapper.js`: từ điển tên cột và logic nhận diện.
- `js/product-search.js`: chỉ mục tra cứu barcode.
- `js/scanner.js`: camera và giải mã barcode.
- `js/normalizer.js`: chuẩn hóa chuỗi/mã.
- `js/price.js`: định dạng giá.

## Cập nhật GitHub Pages
Giữ nguyên cấu trúc thư mục. Đặt `index.html` ở thư mục gốc repository, cùng thư mục `css/` và `js/`. Commit và Sync Changes lên nhánh `main`. Pages đang cấu hình `main` + `/(root)` sẽ xuất bản các file này.

## Lưu ý
- File được xử lý trong trình duyệt, không tự gửi lên server. Mỗi thiết bị cần tải file dữ liệu riêng.
- XLSX và ZXing được tải từ CDN, nên cần Internet khi mở ứng dụng.
- Tự nhận diện cột là heuristic; hãy kiểm tra 3 lựa chọn trước khi xác nhận.
- Nên lưu barcode trong Excel dưới dạng Text nếu có số 0 ở đầu. Nếu Excel đã xóa số 0 hoặc làm tròn mã dài, ứng dụng không thể tự khôi phục dữ liệu đã mất.
- Chọn đúng sheet trước khi tải; ứng dụng lấy sheet không rỗng đầu tiên.
- Không commit dữ liệu sản phẩm nội bộ vào repository công khai.
