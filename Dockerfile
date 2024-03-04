# Sử dụng một image cơ sở có hỗ trợ Node.js
FROM node:18 as build-stage

# Thiết lập thư mục làm việc trong container
WORKDIR /app

# Sao chép file package.json và package-lock.json vào thư mục làm việc
COPY package*.json ./

# Cài đặt các dependencies
RUN npm install

# Sao chép toàn bộ mã nguồn vào thư mục làm việc
COPY . .

# Xây dựng ứng dụng Vue
RUN npm run build

# Sử dụng một image cơ sở nhỏ hơn để chạy ứng dụng Vue đã xây dựng
FROM nginx:1.21.0

# Sao chép các tệp tĩnh từ giai đoạn xây dựng vào thư mục mặc định của Nginx
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Copy tệp cấu hình Nginx để hỗ trợ HTTPS
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose cổng 443 cho kết nối HTTPS
EXPOSE 443

# Khởi động Nginx khi container chạy
CMD ["nginx", "-g", "daemon off;"]