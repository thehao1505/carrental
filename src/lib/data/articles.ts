export const articles = [
  {
    slug: "top-5-dia-diem-checkin-bmt",
    title: "Top 5 địa điểm check-in đẹp nhất Buôn Ma Thuột",
    date: `${new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toLocaleDateString("vi-VN")}`,
    image: "/images/top-5-diadiemcheckin.jpg",
    excerpt:
      "Khám phá những địa điểm cực chill tại Đắk Lắk dành cho tín đồ du lịch: từ Thác Dray Nur đến KDL Ko Tam...",
    content: `
      <div class="text-gray-800">
        <!-- Giới thiệu -->
        <section class="max-w-6xl mx-auto px-6 pb-16 pt-12 mb-6">
          <div>
            <h2 class="text-2xl font-bold text-forest-600">
              Top 5 địa điểm check-in đẹp nhất Buôn Ma Thuột
            </h2>
            <p class="mb-4">
              Buôn Ma Thuột không chỉ là thủ phủ cà phê nổi tiếng, mà còn là điểm đến hấp dẫn với những cảnh quan thiên nhiên hùng vĩ và văn hóa dân tộc độc đáo. Dưới đây là 5 địa điểm bạn không thể bỏ qua khi đến với thành phố này.
            </p>
            <p class="text-gray-700 mb-4">
              Mỗi địa điểm đều có những đặc điểm riêng biệt, phù hợp với nhiều sở thích du lịch khác nhau:
            </p>
            <ul class="list-disc pl-5 space-y-3 text-gray-700 mb-4">
              <li>Thác nước hùng vĩ với khung cảnh thiên nhiên tuyệt đẹp.</li>
              <li>Hồ nước trong xanh giữa rừng nguyên sinh.</li>
              <li>Khu du lịch văn hóa đậm bản sắc Tây Nguyên.</li>
              <li>Bảo tàng với kiến trúc độc đáo về văn hóa cà phê.</li>
              <li>Đồi thông lãng mạn như "tiểu Đà Lạt".</li>
            </ul>
            <p>
              Hãy cùng khám phá chi tiết từng địa điểm để có thể lên kế hoạch cho chuyến du lịch hoàn hảo của bạn!
            </p>
          </div>
        </section>

        <section class="max-w-6xl mx-auto px-6 pb-16 space-y-16">
          <!-- ĐỊA ĐIỂM 1: Thác Dray Nur -->
          <div>
            <h2 class="text-2xl font-bold text-forest-600 mb-4">
              1. Thác Dray Nur – Kiệt tác thiên nhiên hùng vĩ
            </h2>
            
            <div class="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg border-l-4 border-blue-500 mb-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 class="font-bold text-blue-700 mb-3">📍 Thông tin cơ bản</h3>
                  <ul class="space-y-2 text-gray-700">
                    <li><strong>Vị trí:</strong> Cách trung tâm BMT 25km về phía Nam</li>
                    <li><strong>Chiều dài:</strong> 250m</li>
                    <li><strong>Độ cao:</strong> Hơn 30m</li>
                    <li><strong>Tên gọi khác:</strong> Thác Vợ</li>
                  </ul>
                </div>
                <div>
                  <h3 class="font-bold text-blue-700 mb-3">🚗 Hướng dẫn đi lại</h3>
                  <p class="text-gray-700">
                    Đi theo Quốc lộ 14 và rẽ vào đường dẫn đến thủy điện Buôn Kuốp. 
                    Có thể thuê xe máy hoặc ô tô để di chuyển thuận tiện.
                  </p>
                </div>
              </div>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-sm border">
              <p class="mb-4">
                Thác Dray Nur tạo nên một bức tranh thiên nhiên hùng vĩ với dòng nước trắng xóa đổ xuống từ độ cao, 
                tạo thành màn sương mờ ảo mang lại cảm giác mát lạnh và thư giãn tuyệt vời.
              </p>
              <div class="bg-blue-50 p-4 rounded-lg">
                <p class="text-sm text-blue-800">
                  <strong>💡 Điểm đặc biệt:</strong> Du khách có thể khám phá hang động bí ẩn phía sau thác, 
                  nơi ánh sáng xuyên qua màn nước tạo nên khung cảnh huyền ảo như trong truyện cổ tích.
                </p>
              </div>
            </div>
          </div>

          <!-- ĐỊA ĐIỂM 2: Hồ Lắk -->
          <div>
            <h2 class="text-2xl font-bold text-forest-600 mb-4">
              2. Hồ Lắk – Viên ngọc xanh giữa đại ngàn
            </h2>
            
            <div class="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border-l-4 border-green-500 mb-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 class="font-bold text-green-700 mb-3">📍 Thông tin cơ bản</h3>
                  <ul class="space-y-2 text-gray-700">
                    <li><strong>Vị trí:</strong> Thị trấn Liên Sơn, huyện Lắk</li>
                    <li><strong>Cách BMT:</strong> 60km về phía Nam</li>
                    <li><strong>Diện tích:</strong> 6,2 km²</li>
                    <li><strong>Đặc điểm:</strong> Hồ nước ngọt tự nhiên lớn thứ 2 VN</li>
                  </ul>
                </div>
                <div>
                  <h3 class="font-bold text-green-700 mb-3">🎯 Hoạt động nổi bật</h3>
                  <ul class="space-y-1 text-gray-700 text-sm">
                    <li>• Chèo thuyền độc mộc</li>
                    <li>• Tham quan buôn làng M'nông</li>
                    <li>• Thưởng thức cơm lam, gà nướng</li>
                    <li>• Chụp ảnh bình minh/hoàng hôn</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-sm border">
              <p class="mb-4">
                Hồ Lắk được bao bọc bởi những dãy núi và rừng nguyên sinh, tạo nên cảnh quan thơ mộng và yên bình. 
                Mặt hồ phẳng lặng như gương phản chiếu bầu trời xanh và những đám mây trắng.
              </p>
              <div class="bg-green-50 p-4 rounded-lg">
                <p class="text-sm text-green-800">
                  <strong>⏰ Thời điểm đẹp nhất:</strong> Bình minh và hoàng hôn trên hồ Lắk là những khoảnh khắc 
                  lý tưởng để chụp những bức ảnh tuyệt đẹp và cảm nhận sự bình yên của thiên nhiên.
                </p>
              </div>
            </div>
          </div>

          <!-- ĐỊA ĐIỂM 3: KoTam -->
          <div>
            <h2 class="text-2xl font-bold text-forest-600 mb-4">
              3. Khu du lịch KoTam – Bản sắc văn hóa Tây Nguyên
            </h2>
            
            <div class="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg border-l-4 border-amber-500 mb-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 class="font-bold text-amber-700 mb-3">📍 Thông tin cơ bản</h3>
                  <ul class="space-y-2 text-gray-700">
                    <li><strong>Địa chỉ:</strong> 789 Phạm Văn Đồng, phường Tân Hòa</li>
                    <li><strong>Cách trung tâm:</strong> 9km về phía Đông</li>
                    <li><strong>Thiết kế:</strong> Buôn làng truyền thống</li>
                    <li><strong>Đặc trưng:</strong> Nhà dài, suối nhân tạo, rừng tre</li>
                  </ul>
                </div>
                <div>
                  <h3 class="font-bold text-amber-700 mb-3">🎭 Trải nghiệm văn hóa</h3>
                  <div class="grid grid-cols-2 gap-2 text-sm text-gray-700">
                    <div>• Mặc trang phục dân tộc</div>
                    <div>• Xem biểu diễn cồng chiêng</div>
                    <div>• Thưởng thức ẩm thực địa phương</div>
                    <div>• Mua sắm thủ công mỹ nghệ</div>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-sm border">
              <p class="mb-4">
                KoTam là điểm đến lý tưởng để khám phá văn hóa và thiên nhiên Tây Nguyên một cách trọn vẹn. 
                Không gian xanh mát và kiến trúc độc đáo tạo ra bối cảnh hoàn hảo cho những bức ảnh đậm chất Tây Nguyên.
              </p>
              <div class="bg-amber-50 p-4 rounded-lg">
                <p class="text-sm text-amber-800">
                  <strong>📸 Photo tip:</strong> Khu du lịch có nhiều góc chụp đẹp với kiến trúc truyền thống, 
                  đặc biệt là khu vực nhà dài và khu rừng tre xanh mát.
                </p>
              </div>
            </div>
          </div>

          <!-- ĐỊA ĐIỂM 4: Bảo tàng Cà phê -->
          <div>
            <h2 class="text-2xl font-bold text-forest-600 mb-4">
              4. Bảo tàng Thế giới Cà phê – Biểu tượng kiến trúc độc đáo
            </h2>
            
            <div class="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border-l-4 border-purple-500 mb-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 class="font-bold text-purple-700 mb-3">📍 Thông tin cơ bản</h3>
                  <ul class="space-y-2 text-gray-700">
                    <li><strong>Địa chỉ:</strong> Đường Nguyễn Đình Chiểu, phường Tân Lợi</li>
                    <li><strong>Hiện vật:</strong> Hơn 11.000 hiện vật</li>
                    <li><strong>Chủ đề:</strong> Văn hóa cà phê thế giới</li>
                    <li><strong>Kiến trúc:</strong> Nhà dài Êđê + hiện đại</li>
                  </ul>
                </div>
                <div>
                  <h3 class="font-bold text-purple-700 mb-3">☕ Nội dung trưng bày</h3>
                  <p class="text-gray-700 text-sm">
                    Bảo tàng trưng bày các hiện vật liên quan đến văn hóa cà phê từ khắp nơi trên thế giới, 
                    từ dụng cụ pha chế truyền thống đến máy móc hiện đại.
                  </p>
                </div>
              </div>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-sm border">
              <p class="mb-4">
                Bảo tàng là điểm đến không thể bỏ qua cho những ai yêu thích cà phê và kiến trúc. 
                Kiến trúc độc đáo kết hợp giữa truyền thống và hiện đại tạo nên không gian ấn tượng.
              </p>
              <div class="bg-purple-50 p-4 rounded-lg">
                <p class="text-sm text-purple-800">
                  <strong>🎨 Điểm nhấn:</strong> Mỗi góc của bảo tàng đều là một bối cảnh tuyệt vời 
                  cho những bức ảnh nghệ thuật đậm chất văn hóa cà phê Việt Nam.
                </p>
              </div>
            </div>
          </div>

          <!-- ĐỊA ĐIỂM 5: Đồi thông Y Nuê -->
          <div>
            <h2 class="text-2xl font-bold text-forest-600 mb-4">
              5. Đồi thông Y Nuê – "Tiểu Đà Lạt" giữa lòng Buôn Ma Thuột
            </h2>
            
            <div class="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-lg border-l-4 border-teal-500 mb-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 class="font-bold text-teal-700 mb-3">📍 Thông tin cơ bản</h3>
                  <ul class="space-y-2 text-gray-700">
                    <li><strong>Vị trí:</strong> Thôn 1, xã Hòa Thắng</li>
                    <li><strong>Cách trung tâm:</strong> 8-10km về phía Tây Nam</li>
                    <li><strong>Đặc trưng:</strong> Hàng thông cao vút</li>
                    <li><strong>Biệt danh:</strong> "Tiểu Đà Lạt" của Tây Nguyên</li>
                  </ul>
                </div>
                <div>
                  <h3 class="font-bold text-teal-700 mb-3">🌅 Hoạt động lý tưởng</h3>
                  <ul class="space-y-1 text-gray-700 text-sm">
                    <li>• Dã ngoại, cắm trại</li>
                    <li>• Tận hưởng không khí trong lành</li>
                    <li>• Chụp ảnh lãng mạn</li>
                    <li>• Ngắm hoàng hôn qua tán thông</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-sm border">
              <p class="mb-4">
                Đồi thông Y Nuê với những hàng thông cao vút và không gian yên bình là địa điểm cực chill 
                để thư giãn và chụp những bức ảnh lãng mạn. Không gian xanh mát tương tự như Đà Lạt.
              </p>
              <div class="bg-teal-50 p-4 rounded-lg">
                <p class="text-sm text-teal-800">
                  <strong>🌇 Golden hour:</strong> Buổi chiều khi ánh hoàng hôn xuyên qua tán thông 
                  tạo nên khung cảnh tuyệt đẹp, thu hút nhiều bạn trẻ đến check-in.
                </p>
              </div>
            </div>
          </div>
        </section>

        <!-- Lời khuyên và kết luận -->
        <section class="max-w-5xl mx-auto px-6 pb-16 space-y-4">
          <h2 class="text-2xl font-bold text-forest-600 mb-4">
            Lời khuyên cho chuyến du lịch hoàn hảo
          </h2>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div class="bg-white p-6 rounded-lg shadow-sm border text-center">
              <div class="text-3xl mb-3">📱</div>
              <h3 class="font-bold mb-2">Chuẩn bị kỹ thuật</h3>
              <p class="text-gray-600 text-sm">Mang theo máy ảnh và sạc dự phòng để không bỏ lỡ khoảnh khắc đẹp</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-sm border text-center">
              <div class="text-3xl mb-3">🌤️</div>
              <h3 class="font-bold mb-2">Thời tiết</h3>
              <p class="text-gray-600 text-sm">Kiểm tra thời tiết trước khi đi để có trang phục phù hợp</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-sm border text-center">
              <div class="text-3xl mb-3">👕</div>
              <h3 class="font-bold mb-2">Trang phục</h3>
              <p class="text-gray-600 text-sm">Mặc đồ thoải mái, giày đi bộ để di chuyển thuận tiện</p>
            </div>
          </div>

          <p>
            Tất cả các địa điểm trên đều có những nét đẹp riêng biệt và thu hút du khách bởi vẻ đẹp tự nhiên cũng như giá trị văn hóa. 
            Mỗi nơi đều mang trong mình câu chuyện riêng về vùng đất Tây Nguyên hùng vĩ.
          </p>
          
          <p>
            Các nhân viên tư vấn du lịch địa phương luôn sẵn sàng hỗ trợ quý khách lập kế hoạch tham quan phù hợp. 
            Luôn có dịch vụ hỗ trợ 24/7 để đảm bảo chuyến đi của bạn được thuận lợi nhất.
          </p>
        </section>

        <!-- Kết luận -->
        <section class="max-w-5xl mx-auto px-6 pb-16">
          <div class="bg-gradient-to-r from-green-100 to-blue-100 p-8 rounded-xl text-center">
            <h2 class="text-2xl font-bold text-forest-600 mb-4">
              Hành trình khám phá Buôn Ma Thuột đang chờ bạn!
            </h2>
            <p class="text-gray-700 mb-4">
              5 địa điểm trên chỉ là khởi đầu cho cuộc phiêu lưu tuyệt vời tại thủ phủ cà phê. 
              Hãy lên kế hoạch và khám phá những trải nghiệm đáng nhớ tại Đắk Lắk.
            </p>
            <div class="flex flex-wrap justify-center gap-2 mt-6">
              <span class="bg-green-500 text-white px-3 py-1 rounded-full text-sm">#BuônMaThuột</span>
              <span class="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">#TâyNguyên</span>
              <span class="bg-amber-500 text-white px-3 py-1 rounded-full text-sm">#DuLịchViệtNam</span>
              <span class="bg-purple-500 text-white px-3 py-1 rounded-full text-sm">#CàPhêViệtNam</span>
            </div>
          </div>
        </section>
      </div>
    `,
  },
  {
    slug: "kinh-nghiem-thue-xe-tiet-kiem",
    title: "5 kinh nghiệm thuê xe du lịch tiết kiệm và an toàn",
    date: `${new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toLocaleDateString("vi-VN")}`,
    image: "/images/thuexe.jpg",
    excerpt:
      "Thuê xe không chỉ cần giá rẻ, mà còn phải đảm bảo chất lượng và dịch vụ. Xem ngay 5 mẹo thực tế!",
    content: `
      <div class="max-w-3xl mx-auto">
        <!-- Mở đầu -->
        <div class="border-b pb-6 mb-6">
          <p class="text-lg leading-relaxed">
            Thuê xe du lịch đang trở thành lựa chọn phổ biến cho những chuyến đi tự túc. Tuy nhiên, để có được chiếc xe phù hợp với mức giá hợp lý và dịch vụ chất lượng không phải điều dễ dàng. Hãy cùng tìm hiểu 5 kinh nghiệm vàng giúp bạn thuê xe vừa tiết kiệm vừa an toàn nhé!
          </p>
        </div>

        <!-- Kinh nghiệm 1 -->
        <div class="border-b pb-6 mb-6">
          <h2 class="text-2xl font-bold text-forest-600 mb-4">1. So sánh giá và đặt xe trước ít nhất 1 tuần</h2>
          <img src="/images/compare-price.png" alt="So sánh giá thuê xe online" class="w-full rounded-lg mb-4" />
          
          <p class="mb-4">
            <strong>Tại sao nên đặt trước?</strong> Giá thuê xe thường tăng cao vào cuối tuần, lễ tết và mùa du lịch cao điểm. Đặt trước giúp bạn có nhiều lựa chọn và giá tốt hơn.
          </p>
          
          <div class="bg-blue-50 p-4 rounded-lg mb-4">
            <p class="font-semibold mb-2">💡 Mẹo so sánh giá hiệu quả:</p>
            <p class="mb-2">• Sử dụng các app/website: Grab, GoViet, Avis, Hertz</p>
            <p class="mb-2">• Kiểm tra giá trên các group Facebook địa phương</p>
            <p class="mb-2">• Gọi trực tiếp đến các hãng để thương lượng giá</p>
            <p>• So sánh ít nhất 3-5 nhà cung cấp khác nhau</p>
          </div>
          
          <p class="mb-2"><strong>Bảng giá tham khảo (Hà Nội/TP.HCM):</strong></p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p class="mb-2">🚗 <strong>Xe 4 chỗ:</strong> 800.000 - 1.200.000đ/ngày</p>
              <p class="mb-2">🚙 <strong>Xe 7 chỗ:</strong> 1.200.000 - 1.800.000đ/ngày</p>
            </div>
            <div>
              <p class="mb-2">🚐 <strong>Xe 16 chỗ:</strong> 1.800.000 - 2.500.000đ/ngày</p>
              <p class="mb-2">🏍️ <strong>Xe máy:</strong> 120.000 - 200.000đ/ngày</p>
            </div>
          </div>
        </div>

        <!-- Kinh nghiệm 2 -->
        <div class="border-b pb-6 mb-6">
          <h2 class="text-2xl font-bold text-forest-600 mb-4">2. Kiểm tra kỹ xe trước khi nhận</h2>
          <img src="/images/xe-16(1).jpg" alt="Kiểm tra xe trước khi thuê" class="w-full rounded-lg mb-4" />
          
          <p class="mb-4">
            Đây là bước quan trọng nhất để tránh những rắc rối không đáng có. Hãy kiểm tra tỉ mỉ từng chi tiết của xe.
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p class="font-semibold mb-2">🔍 Ngoại thất xe:</p>
              <p class="mb-2">• Vết xước, móp méo trên thân xe</p>
              <p class="mb-2">• Tình trạng lốp xe (độ mòn, áp suất)</p>
              <p class="mb-2">• Đèn pha, đèn hậu, đèn xi nhan</p>
              <p class="mb-4">• Gương chiếu hậu, kính chắn gió</p>
            </div>
            <div>
              <p class="font-semibold mb-2">⚙️ Nội thất và máy móc:</p>
              <p class="mb-2">• Ghế ngồi, dây an toàn</p>
              <p class="mb-2">• Điều hòa, radio, GPS</p>
              <p class="mb-2">• Mức dầu, nước làm mát</p>
              <p class="mb-4">• Phanh, côn, tay lái</p>
            </div>
          </div>
          
          <div class="bg-yellow-50 p-4 rounded-lg">
            <p class="font-semibold mb-2">⚠️ Lưu ý quan trọng:</p>
            <p class="mb-2">• Chụp ảnh/quay video tình trạng xe trước khi nhận</p>
            <p class="mb-2">• Ghi chép lại các vết hư hỏng có sẵn</p>
            <p>• Yêu cầu chủ xe xác nhận và ký vào biên bản bàn giao</p>
          </div>
        </div>

        <!-- Kinh nghiệm 3 -->
        <div class="border-b pb-6 mb-6">
          <h2 class="text-2xl font-bold text-forest-600 mb-4">3. Đọc kỹ hợp đồng và điều khoản</h2>
          <img src="/images/kyhopdong.jpg" alt="Đọc hợp đồng thuê xe" class="w-full rounded-lg mb-4" />
          
          <p class="mb-4">
            Nhiều người bỏ qua bước này và gặp rắc rối sau này. Hãy đọc kỹ mọi điều khoản để bảo vệ quyền lợi của mình.
          </p>
          
          <div class="space-y-4">
            <div>
              <p class="font-semibold mb-2">📋 Các điều khoản cần chú ý:</p>
              <p class="mb-2"><strong>• Chính sách nhiên liệu:</strong> Trả xe với mức nhiên liệu như lúc nhận</p>
              <p class="mb-2"><strong>• Giới hạn km:</strong> Phụ phí nếu vượt quá số km cho phép</p>
              <p class="mb-2"><strong>• Chính sách hủy:</strong> Điều kiện hủy và mức phí hủy</p>
              <p class="mb-4"><strong>• Bảo hiểm:</strong> Mức bồi thường khi có sự cố</p>
            </div>
            
            <div>
              <p class="font-semibold mb-2">💰 Chi phí ẩn thường gặp:</p>
              <p class="mb-2">• Phí vệ sinh xe: 50.000 - 200.000đ</p>
              <p class="mb-2">• Phí giao nhận xe tận nơi: 100.000 - 300.000đ</p>
              <p class="mb-2">• Phí quá giờ: 50.000 - 100.000đ/giờ</p>
              <p class="mb-4">• Phí phụ kiện: GPS, ghế trẻ em...</p>
            </div>
          </div>
          
          <div class="bg-red-50 p-4 rounded-lg">
            <p class="font-semibold mb-2">🚨 Tuyệt đối không ký nếu:</p>
            <p class="mb-2">• Hợp đồng không rõ ràng hoặc viết tay</p>
            <p class="mb-2">• Không có con dấu, chữ ký của chủ xe</p>
            <p>• Yêu cầu đặt cọc quá lớn (>50% tổng giá trị)</p>
          </div>
        </div>

        <!-- Kinh nghiệm 4 -->
        <div class="border-b pb-6 mb-6">
          <h2 class="text-2xl font-bold text-forest-600 mb-4">4. Chọn đúng loại bảo hiểm</h2>
          
          <p class="mb-4">
            Bảo hiểm là "áo giáp" bảo vệ bạn khỏi những rủi ro không mong muốn. Đừng tiết kiệm sai chỗ!
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p class="font-semibold mb-2">🛡️ Các loại bảo hiểm cơ bản:</p>
              <p class="mb-2"><strong>• Bảo hiểm bắt buộc:</strong> Đã bao gồm trong giá thuê</p>
              <p class="mb-2"><strong>• Bảo hiểm tự nguyện:</strong> Bồi thường thithiệt hại vật chất</p>
              <p class="mb-4"><strong>• Bảo hiểm người ngồi trên xe:</strong> 100.000 - 200.000đ/người</p>
            </div>
            <div>
              <p class="font-semibold mb-2">💡 Lời khuyên:</p>
              <p class="mb-2">• Mua bảo hiểm nếu đi xa hoặc đường xấu</p>
              <p class="mb-2">• Kiểm tra mức bồi thường tối đa</p>
              <p class="mb-4">• Hỏi rõ quy trình giải quyết bồi thường</p>
            </div>
          </div>
          
          <div class="bg-green-50 p-4 rounded-lg">
            <p class="font-semibold mb-2">✅ Mức phí bảo hiểm hợp lý:</p>
            <p class="mb-2">• 5-10% tổng giá thuê xe cho bảo hiểm cơ bản</p>
            <p>• 10-15% cho gói bảo hiểm toàn diện</p>
          </div>
        </div>

        <!-- Kinh nghiệm 5 -->
        <div class="border-b pb-6 mb-6">
          <h2 class="text-2xl font-bold text-forest-600 mb-4">5. Chọn nhà cung cấp uy tín</h2>
          <img src="/images/logo-header.svg" alt="Chọn công ty thuê xe uy tín" class="w-full rounded-lg mb-4" />
          
          <p class="mb-2">
            Một nhà cung cấp uy tín sẽ giúp chuyến đi của bạn suôn sẻ và an toàn hơn rất nhiều.
          </p>
          <p class="mb-4">
            Đại Dương Travel chúng tôi tự tin là một nhà cung cấp dịch vụ uy tín, tận tâm và chuyên nghiệp, giúp chuyến đi của bạn an toàn và thoải mái nhất.
          </p>
          
          <div class="space-y-4">
            <div>
              <p class="font-semibold mb-2">🔍 Cách nhận biết nhà cung cấp uy tín:</p>
              <p class="mb-2">• Có giấy phép kinh doanh rõ ràng</p>
              <p class="mb-2">• Website/fanpage chính thức, thông tin đầy đủ</p>
              <p class="mb-2">• Nhiều đánh giá tích cực từ khách hàng</p>
              <p class="mb-2">• Có văn phòng/showroom cố định</p>
              <p class="mb-4">• Hỗ trợ 24/7 khi có sự cố</p>
            </div>
            
            <div>
              <p class="font-semibold mb-2">⭐ Top các hãng thuê xe uy tín:</p>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div> 
                  <p class="mb-2">• <strong>Nationwide:</strong> Avis, Hertz, Budget</p>
                  <p class="mb-2">• <strong>Địa phương:</strong> Đại Dương Travel</p>
                </div>
                <div>
                  <p class="mb-2">• <strong>Online:</strong> Mioto, TIMO</p>
                  <p class="mb-2">• <strong>App:</strong> Grab, Be</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="bg-blue-50 p-4 rounded-lg">
            <p class="font-semibold mb-2">📞 Câu hỏi nên hỏi trước khi thuê:</p>
            <p class="mb-2">• "Xe được bảo dưỡng định kỳ như thế nào?"</p>
            <p class="mb-2">• "Khi gặp sự cố, anh/chị hỗ trợ ra sao?"</p>
            <p class="mb-2">• "Có dịch vụ cứu hộ 24/7 không?"</p>
            <p>• "Chính sách đổi xe khi xe hỏng?"</p>
          </div>
        </div>

        <!-- Bonus tips -->
        <div class="border-b pb-6 mb-6">
          <h2 class="text-2xl font-bold text-forest-600 mb-4">Bonus: Những mẹo tiết kiệm thêm</h2>
          <img src="/images/saving.jpg" alt="Mẹo tiết kiệm khi thuê xe" class="w-full rounded-lg mb-4" />
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p class="font-semibold mb-2">💰 Tiết kiệm chi phí:</p>
              <p class="mb-2">• Thuê xe theo nhóm để chia sẻ chi phí</p>
              <p class="mb-2">• Chọn xe cũ hơn nhưng bảo dưỡng tốt</p>
              <p class="mb-2">• Thu nhận ưu đãi từ thành viên thân thiết</p>
              <p class="mb-4">• Thuê dài ngày để được giá tốt hơn</p>
            </div>
            <div>
              <p class="font-semibold mb-2">⏰ Tiết kiệm thời gian:</p>
              <p class="mb-2">• Chuẩn bị đầy đủ giấy tờ trước</p>
              <p class="mb-2">• Làm thủ tục online nếu có thể</p>
              <p class="mb-2">• Chọn điểm giao nhận thuận tiện</p>
              <p class="mb-4">• Đặt lịch hẹn cụ thể</p>
            </div>
          </div>
        </div>

        <!-- Checklist -->
        <div class="border-b pb-6 mb-6">
          <h2 class="text-2xl font-bold text-forest-600 mb-4">Checklist cần thiết khi thuê xe</h2>
          
          <div class="bg-gray-50 p-4 rounded-lg">
            <p class="font-semibold mb-3">📋 Giấy tờ cần mang theo:</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div>
                <p class="mb-1">☐ CMND/CCCD gốc</p>
                <p class="mb-1">☐ Bằng lái xe (đúng hạng)</p>
                <p class="mb-1">☐ Tiền đặt cọc</p>
              </div>
              <div>
                <p class="mb-1">☐ Hợp đồng thuê xe</p>
                <p class="mb-1">☐ Giấy tờ bảo hiểm</p>
                <p class="mb-1">☐ Số điện thoại khẩn cấp</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Kết luận -->
        <div>
          <h2 class="text-2xl font-bold text-forest-600 mb-4">Kết luận</h2>
          <p class="text-lg leading-relaxed mb-4">
            Thuê xe du lịch không chỉ đơn giản là chọn chiếc xe rẻ nhất. Bằng cách áp dụng 5 kinh nghiệm trên, bạn sẽ có được chiếc xe phù hợp, giá cả hợp lý và dịch vụ chất lượng. Hãy nhớ rằng, an toàn luôn là ưu tiên hàng đầu!
          </p>
          <p class="mb-4">
            Chúc bạn có những chuyến đi thú vị và an toàn cùng chiếc xe của mình!
          </p>
        </div>
      </div>
    `,
  },
  {
    slug: "goi-tour-daklak-mua-he",
    title: "Gợi ý tour Đắk Lắk hè này: thiên nhiên, văn hóa, ẩm thực",
    date: `${new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toLocaleDateString("vi-VN")}`,
    image: "/images/thien-nhien.jpg",
    excerpt:
      "Tham khảo lịch trình tour Đắk Lắk 3N2Đ, kết hợp khám phá núi rừng và trải nghiệm văn hóa bản địa.",
    content: `
      <div class="max-w-3xl mx-auto">
        <div class="border-b pb-6 mb-6">
          <p class="text-lg leading-relaxed">
            Đắk Lắk - vùng đất của những cánh rừng nguyên sinh, thác nước hùng vĩ và nền văn hóa đậm đà bản sắc dân tộc. Nếu bạn đang tìm kiếm một điểm đến lý tưởng cho kỳ nghỉ hè, hãy cùng khám phá lịch trình tour Đắk Lắk 3 ngày 2 đêm đầy thú vị này.
          </p>
        </div>

        <div class="border-b pb-6 mb-6">
          <h2 class="text-2xl font-bold text-forest-600 mb-4">Tại sao chọn Đắk Lắk làm điểm đến hè này?</h2>
          <img src="/images/phongcanh.jpg" alt="Phong cảnh Đắk Lắk" class="w-full rounded-lg mb-4" />
          <p class="mb-4">
            Đắk Lắk sở hữu khí hậu mát mẻ quanh năm với nhiệt độ trung bình 22-25°C, đặc biệt thích hợp cho việc du lịch vào mùa hè. Tỉnh này nổi tiếng với:
          </p>
          <p class="mb-2"><strong>• Thiên nhiên hoang sơ:</strong> Vườn quốc gia Yok Đôn, thác Dray Nur, hồ Lắk...</p>
          <p class="mb-2"><strong>• Văn hóa đa dạng:</strong> Làng văn hóa các dân tộc, lễ hội truyền thống</p>
          <p class="mb-4"><strong>• Ẩm thực đặc trưng:</strong> Cơm lam, thịt nướng lá chuối, rượu cần...</p>
        </div>

        <!-- Lịch trình chi tiết -->
        <div class="border-b pb-6 mb-6">
          <h2 class="text-2xl font-bold text-forest-600 mb-4">Lịch trình tour Đắk Lắk 3N2Đ chi tiết</h2>
          
          <!-- Ngày 1 -->
          <div class="mb-6">
            <h3 class="text-xl font-semibold text-forest-500 mb-3">Ngày 1: Buôn Ma Thuột - Khám phá thủ phủ cà phê</h3>
            <Image src="/images/le-hoi-caphe.jpg" alt="Buôn Ma Thuột thành phố cà phê" class="w-full rounded-lg mb-4 object-cover" />
            
            <p class="mb-2"><strong>Sáng (8:00-12:00):</strong></p>
            <p class="mb-2">• Đến sân bay Buôn Ma Thuột, nhận phòng khách sạn</p>
            <p class="mb-2">• Tham quan Bảo tàng Đắk Lắk - tìm hiểu lịch sử, văn hóa địa phương</p>
            <p class="mb-4">• Ghé thăm nhà Ksor Kok (nhà rông) - kiến trúc truyền thống độc đáo</p>
            
            <p class="mb-2"><strong>Chiều (14:00-18:00):</strong></p>
            <p class="mb-2">• Tham quan làng cà phê Trung Nguyên Legend</p>
            <p class="mb-2">• Thưởng thức cà phê rang xay tại chỗ</p>
            <p class="mb-4">• Mua sắm đặc sản tại chợ Buôn Ma Thuột</p>
            
            <p class="mb-2"><strong>Tối:</strong> Thưởng thức ẩm thực địa phương, nghỉ ngơi tại khách sạn</p>
          </div>

          <!-- Ngày 2 -->
          <div class="mb-6">
            <h3 class="text-xl font-semibold text-forest-500 mb-3">Ngày 2: Thác Dray Nur - Làng Ako Dhong</h3>
            <Image src="/images/draynur-waterfall.jpg" alt="Thác Dray Nur hùng vĩ" class="w-full rounded-lg mb-4" />
            
            <p class="mb-2"><strong>Sáng (7:00-12:00):</strong></p>
            <p class="mb-2">• Khởi hành đi thác Dray Nur (cách Buôn Ma Thuột 25km)</p>
            <p class="mb-2">• Khám phá hệ thống 3 tầng thác: Dray Nur, Dray Sap, Dray Sekumpul</p>
            <p class="mb-4">• Tắm thác, chụp ảnh check-in</p>
            
            <p class="mb-2"><strong>Chiều (14:00-18:00):</strong></p>
            <p class="mb-2">• Tham quan làng Ako Dhong của dân tộc Ê Đê</p>
            <p class="mb-2">• Trải nghiệm văn hóa: dệt thổ cẩm, làm gốm</p>
            <p class="mb-4">• Thưởng thức cơm lam, thịt nướng lá chuối</p>
            
            <p class="mb-2"><strong>Tối:</strong> Tham gia lửa trại, nghe kể chuyện cổ tích dân gian</p>
          </div>

          <!-- Ngày 3 -->
          <div class="mb-6">
            <h3 class="text-xl font-semibold text-forest-500 mb-3">Ngày 3: Hồ Lắk - Vườn Quốc gia Yok Đôn</h3>
            <img src="/images/ho-lak-buon-don.jpg" alt="Hồ Lắk thơ mộng" class="w-full rounded-lg mb-4" />
            
            <p class="mb-2"><strong>Sáng (7:00-12:00):</strong></p>
            <p class="mb-2">• Di chuyển đến hồ Lắk (30km từ Buôn Ma Thuột)</p>
            <p class="mb-2">• Trải nghiệm cưỡi voi, du ngoạn trên hồ bằng thúng chai</p>
            <p class="mb-4">• Tham quan làng buôn Jun, tìm hiểu đời sống của người M'Nông</p>
            
            <p class="mb-2"><strong>Chiều (14:00-17:00):</strong></p>
            <p class="mb-2">• Ghé thăm Vườn Quốc gia Yok Đôn</p>
            <p class="mb-2">• Trekking ngắn, quan sát động thực vật hoang dã</p>
            <p class="mb-4">• Chuẩn bị hành lý về</p>
          </div>
        </div>

        <!-- Ẩm thực đặc trưng -->
        <div class="border-b pb-6 mb-6">
          <h2 class="text-2xl font-bold text-forest-600 mb-4">Ẩm thực Đắk Lắk không thể bỏ qua</h2>
          <img src="/images/comlam.jpg" alt="Ẩm thực Đắk Lắk đặc sắc" class="w-full rounded-lg mb-4" />
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p class="font-semibold mb-2">🍚 Cơm lam</p>
              <p class="text-sm mb-4">Cơm nướng trong ống tre non, thơm ngon đặc trưng của vùng núi rừng Tây Nguyên</p>
              
              <p class="font-semibold mb-2">🥩 Thịt nướng lá chuối</p>
              <p class="text-sm mb-4">Thịt lợn ướp gia vị đặc biệt, nướng trong lá chuối tạo hương thơm quyến rũ</p>
            </div>
            <div>
              <p class="font-semibold mb-2">🍷 Rượu cần</p>
              <p class="text-sm mb-4">Rượu truyền thống uống bằng ống tre, biểu tượng của tình đoàn kết</p>
              
              <p class="font-semibold mb-2">☕ Cà phê Buôn Ma Thuột</p>
              <p class="text-sm mb-4">Hương vị đậm đà, đắng nhẹ, là niềm tự hào của vùng đất này</p>
            </div>
          </div>
        </div>

        <!-- Chi phí ước tính -->
        <div class="border-b pb-6 mb-6">
          <h2 class="text-2xl font-bold text-forest-600 mb-4">Chi phí ước tính cho tour 3N2Đ</h2>
          
          <div class="bg-gray-50 p-4 rounded-lg">
            <p class="mb-2"><strong>Khách sạn 3 sao:</strong> 800.000 - 1.200.000 VNĐ/đêm</p>
            <p class="mb-2"><strong>Ăn uống:</strong> 200.000 - 400.000 VNĐ/người/ngày</p>
            <p class="mb-2"><strong>Vé tham quan:</strong> 150.000 - 300.000 VNĐ/địa điểm</p>
            <p class="mb-2"><strong>Di chuyển:</strong> 300.000 - 500.000 VNĐ/ngày (thuê xe)</p>
            <p class="font-semibold text-forest-600 mt-4">
              <strong>Tổng chi phí ước tính: 2.500.000 - 4.000.000 VNĐ/người</strong>
            </p>
          </div>
        </div>

        <!-- Lưu ý khi đi tour -->
        <div class="border-b pb-6 mb-6">
          <h2 class="text-2xl font-bold text-forest-600 mb-4">Lưu ý quan trọng</h2>
          <img src="/images/chuanbi.jpg" alt="Chuẩn bị cho chuyến đi" class="w-full rounded-lg mb-4" />
          
          <p class="mb-2"><strong>🎒 Đồ dùng cần thiết:</strong></p>
          <p class="mb-2">• Giày trekking chống trượt cho việc đi bộ trong rừng</p>
          <p class="mb-2">• Kem chống nắng, nón, kính râm</p>
          <p class="mb-2">• Thuốc chống côn trùng</p>
          <p class="mb-4">• Áo mưa (thời tiết miền núi thay đổi nhanh)</p>
          
          <p class="mb-2"><strong>🕐 Thời điểm lý tưởng:</strong></p>
          <p class="mb-2">• Tháng 4-8: Thời tiết mát mẻ, ít mưa</p>
          <p class="mb-4">• Tránh mùa mưa lớn (tháng 9-11)</p>
          
          <p class="mb-2"><strong>🚗 Phương tiện di chuyển:</strong></p>
          <p class="mb-2">• Bay từ TP.HCM hoặc Hà Nội đến sân bay Buôn Ma Thuột</p>
          <p class="mb-4">• Thuê xe máy hoặc ô tô tại địa phương để di chuyển linh hoạt</p>
        </div>

        <!-- Kết luận -->
        <div>
          <h2 class="text-2xl font-bold text-forest-600 mb-4">Trải nghiệm đáng nhớ tại Đắk Lắk</h2>
          <img src="/images/kyniemdep.jpg" alt="Kỷ niệm đẹp tại Đắk Lắk" class="w-full rounded-lg mb-4" />
          <p class="text-lg leading-relaxed">
            Tour Đắk Lắk 3N2Đ không chỉ mang đến cho bạn những trải nghiệm thú vị về thiên nhiên hoang sơ mà còn giúp bạn hiểu sâu hơn về văn hóa đậm đà bản sắc của các dân tộc Tây Nguyên. Hãy chuẩn bị hành trang và lên đường khám phá vùng đất đầy quyến rũ này nhé!
          </p>
        </div>
      </div>
    `,
  },
  {
    slug: "tour-mangden-kontum-pleiku-daklak",
    title: "Đắk Lắk - Gia Lai - Măng Đen: Trọn Vẹn Một Tây Nguyên Hoang Sơ & Kỳ Bí",
    date: `${new Date(Date.now() - 13 * 24 * 60 * 60 * 1000).toLocaleDateString("vi-VN")}`,
    image: "/images/mangden.jpg",
    excerpt:
      "Khám phá Tây Nguyên trong 5 ngày 4 đêm qua hành trình độc đáo từ Đắk Lắk đến Măng Đen: thưởng thức cà phê Buôn Ma Thuột, hòa mình trong âm vang cồng chiêng, trekking thác Dray Nur, ngắm hoàng hôn hồ Lắk và trải nghiệm văn hóa bản địa nguyên sơ, đầy mê hoặc. Một chuyến đi đậm chất thiên nhiên – đậm đà bản sắc – khó quên trong đời.",
    content: `
      <div class="max-w-3xl mx-auto">
        <!-- Hook mạnh mẽ -->
        <div class="border-b pb-6 mb-6">
          <p class="text-xl leading-relaxed font-medium text-gray-800 mb-4">
            🌟 <strong>Bạn có từng mơ về một cuộc phiêu lưu giữa núi rừng hoang sơ, nghe tiếng cồng chiêng vọng từ xa, và cảm nhận hương vị đậm đà của ly cà phê nguyên chất?</strong>
          </p>
          <p class="text-lg leading-relaxed">
            Tây Nguyên đang chờ đón bạn với những trải nghiệm không thể tìm thấy ở bất kỳ đâu khác trên thế giới! Từ Đắk Lắk huyền thoại đến Gia Lai thơ mộng, từ Măng Đen mây trắng đến những làng buôn cổ kính - đây chính là hành trình khiến bạn "lạc lối" giữa thiên nhiên và con người.
          </p>
        </div>

        <!-- Lý do không thể bỏ qua -->
        <div class="border-b pb-6 mb-6">
          <h2 class="text-2xl font-bold text-forest-600 mb-4">🔥 Tại sao Tây Nguyên là "Must-Visit" năm 2025?</h2>
          <img src="/images/taynguyen.jpg" alt="Tây Nguyên hùng vĩ và thơ mộng" class="w-full rounded-lg mb-4" />
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="space-y-4">
              <div class="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg">
                <p class="font-bold text-forest-600 mb-2">🏔️ THIÊN NHIÊN HOANG SƠ HIẾM CÓ</p>
                <p class="text-sm">Thác nước 7 tầng Dray Nur, hồ Lắk mênh mông, cao nguyên Măng Đen mây trắng... Những kỳ quan thiên nhiên mà Instagram của bạn đang "khát khao"!</p>
              </div>
              
              <div class="bg-gradient-to-r from-orange-50 to-red-50 p-4 rounded-lg">
                <p class="font-bold text-forest-600 mb-2">🥁 VĂN HÓA CỒNG CHIÊNG ĐỘC ĐÁO</p>
                <p class="text-sm">Di sản văn hóa phi vật thể thế giới! Tham gia lễ hội, học nhảy sạp, nghe kể chuyện cổ tích bên lửa trại - trải nghiệm không có giá!</p>
              </div>
            </div>
            
            <div class="space-y-4">
              <div class="bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded-lg">
                <p class="font-bold text-forest-600 mb-2">☕ THIÊN ĐƯỜNG CÀ PHE NGUYÊN CHẤT</p>
                <p class="text-sm">Từ hạt cà phê đến ly cà phê hoàn hảo! Tự tay hái, rang, pha và thưởng thức cà phê đậm đà nhất thế giới ngay tại thủ phủ Buôn Ma Thuột.</p>
              </div>
              
              <div class="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg">
                <p class="font-bold text-forest-600 mb-2">🐘 TRẢI NGHIỆM CƯỠI VOI THẬT</p>
                <p class="text-sm">Cưỡi voi qua rừng, tắm cùng voi ở hồ Lắk - những khoảnh khắc "once in a lifetime" chỉ có ở Tây Nguyên!</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Hành trình khám phá -->
        <div class="border-b pb-6 mb-6">
          <h2 class="text-2xl font-bold text-forest-600 mb-4">🗺️ Hành trình khám phá 3 điểm đến huyền thoại</h2>
          
          <!-- Đắk Lắk -->
          <div class="mb-6">
            <div class="bg-gradient-to-r from-green-600 to-green-700 text-white p-4 rounded-t-lg">
              <h3 class="text-xl font-bold">🌟 ĐẮKLẮK - Thủ phủ cà phê thế giới</h3>
            </div>
            <div class="bg-green-50 p-4 rounded-b-lg">
              <img src="/images/thuphucaphe.jpg" alt="Đắk Lắk - Vương quốc cà phê" class="w-full rounded-lg mb-4" />
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p class="font-semibold mb-2">🎯 KHÔNG THỂ BỎ LỠ:</p>
                  <p class="mb-1">• <strong>Thác Dray Nur 7 tầng</strong> - "Niagara Việt Nam"</p>
                  <p class="mb-1">• <strong>Hồ Lắk</strong> - cưỡi voi, chèo thúng chai</p>
                  <p class="mb-1">• <strong>Làng cà phê Trung Nguyên</strong> - từ hạt đến ly</p>
                  <p class="mb-3">• <strong>Làng Ako Dhong</strong> - nhà rông cổ kính</p>
                </div>
                <div>
                  <p class="font-semibold mb-2">🍽️ ẨM THỰC ĐỈNH CAO:</p>
                  <p class="mb-1">• Cơm lam nướng tre tươi</p>
                  <p class="mb-1">• Thịt nướng lá chuối thơm lừng</p>
                  <p class="mb-1">• Rượu cần - thần dược tình bạn</p>
                  <p class="mb-3">• Cà phê chồn đắt nhất thế giới</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Gia Lai -->
          <div class="mb-6">
            <div class="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-t-lg">
              <h3 class="text-xl font-bold">🌟 GIA LAI - Xứ sở hoa sim tím</h3>
            </div>
            <div class="bg-blue-50 p-4 rounded-b-lg">
              <img src="/images/hoasim.jpg" alt="Gia Lai - Xứ sở hoa sim" class="w-full rounded-lg mb-4" />
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p class="font-semibold mb-2">🎯 ĐIỂM NHẤN ĐỘC ĐÁO:</p>
                  <p class="mb-1">• <strong>Biển Hồ T'nưng</strong> - "Đà Lạt thứ 2"</p>
                  <p class="mb-1">• <strong>Chùa Minh Thành</strong> - kiến trúc Khmer độc đáo</p>
                  <p class="mb-1">• <strong>Làng Plei Phun</strong> - làng gốm truyền thống</p>
                  <p class="mb-3">• <strong>Rừng thông Pleiku</strong> - check-in sống ảo</p>
                </div>
                <div>
                  <p class="font-semibold mb-2">🌸 MÙA HOA SIM (Tháng 9-11):</p>
                  <p class="mb-1">• Núi đồi nhuộm tím hoang dã</p>
                  <p class="mb-1">• Chụp ảnh cưới như cổ tích</p>
                  <p class="mb-1">• Thu hoạch mật ong sim rừng</p>
                  <p class="mb-3">• Festival hoa sim Pleiku</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Măng Đen -->
          <div class="mb-6">
            <div class="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-4 rounded-t-lg">
              <h3 class="text-xl font-bold">🌟 MĂNG ĐEN - Đà Lạt thu nhỏ của Tây Nguyên</h3>
            </div>
            <div class="bg-purple-50 p-4 rounded-b-lg">
              <Image src="/images/mangden.jpg" alt="Măng Đen - Đà Lạt thu nhỏ" class="w-full rounded-lg mb-4 h-[400px] w-auto object-cover" />
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p class="font-semibold mb-2">🎯 THIÊN ĐƯỜNG MÂY MÙ:</p>
                  <p class="mb-1">• <strong>Đỉnh núi Chư Đăng Ya</strong> - cao 2.405m</p>
                  <p class="mb-1">• <strong>Thác Pa Sỹ</strong> - thác nước 3 tầng</p>
                  <p class="mb-1">• <strong>Rừng thông Măng Đen</strong> - camping hoang dã</p>
                  <p class="mb-3">• <strong>Làng Đê Ar</strong> - văn hóa Sedang</p>
                </div>
                <div>
                  <p class="font-semibold mb-2">❄️ KHÍ HẬU MÁT MẺ:</p>
                  <p class="mb-1">• Nhiệt độ 15-22°C quanh năm</p>
                  <p class="mb-1">• Săn mây, ngắm bình minh</p>
                  <p class="mb-1">• Cắm trại qua đêm cực chill</p>
                  <p class="mb-3">• Trekking đỉnh núi chinh phục</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Trải nghiệm độc quyền -->
        <div class="border-b pb-6 mb-6">
          <h2 class="text-2xl font-bold text-forest-600 mb-4">💎 Những trải nghiệm ONLY IN TÂY NGUYÊN</h2>
          <img src="/api/placeholder/600/300" alt="Trải nghiệm độc đáo Tây Nguyên" class="w-full rounded-lg mb-4" />
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="space-y-3">
              <div class="bg-gradient-to-r from-yellow-100 to-orange-100 p-3 rounded-lg border-l-4 border-orange-400">
                <p class="font-bold">🔥 Tham gia lễ hội Cồng Chiêng</p>
                <p class="text-sm">Nhảy sạp cùng người dân, nghe tiếng cồng vang vọng núi rừng</p>
              </div>
              
              <div class="bg-gradient-to-r from-green-100 to-teal-100 p-3 rounded-lg border-l-4 border-teal-400">
                <p class="font-bold">🌿 Homestay trong nhà rông</p>
                <p class="text-sm">Ngủ đêm trong kiến trúc truyền thống, thức dậy cùng tiếng chim hót</p>
              </div>
              
              <div class="bg-gradient-to-r from-blue-100 to-purple-100 p-3 rounded-lg border-l-4 border-purple-400">
                <p class="font-bold">🐘 Tắm cùng voi ở hồ Lắk</p>
                <p class="text-sm">Trải nghiệm độc nhất chỉ có ở Tây Nguyên</p>
              </div>
            </div>
            
            <div class="space-y-3">
              <div class="bg-gradient-to-r from-pink-100 to-red-100 p-3 rounded-lg border-l-4 border-red-400">
                <p class="font-bold">☕ Barista cà phê 1 ngày</p>
                <p class="text-sm">Từ hái hạt, rang, pha đến thưởng thức ly cà phê hoàn hảo</p>
              </div>
              
              <div class="bg-gradient-to-r from-indigo-100 to-blue-100 p-3 rounded-lg border-l-4 border-blue-400">
                <p class="font-bold">🏔️ Săn mây đỉnh Chư Đăng Ya</p>
                <p class="text-sm">Cắm trại qua đêm, ngắm bình minh trên biển mây</p>
              </div>
              
              <div class="bg-gradient-to-r from-purple-100 to-pink-100 p-3 rounded-lg border-l-4 border-pink-400">
                <p class="font-bold">🎨 Học dệt thổ cẩm Ê Đê</p>
                <p class="text-sm">Tạo ra sản phẩm handmade độc nhất vô nhị</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
  },
  {
    slug: "thue-xe-co-tai-xe",
    title: "Thuê Xe Có Tài Xế: Giải Pháp Di Chuyển An Toàn & Tiện Lợi Cho Mọi Chuyến Đi",
    date: `${new Date(Date.now() - 16 * 24 * 60 * 60 * 1000).toLocaleDateString("vi-VN")}`,
    image: "/images/thuexecotaixe.jpg",
    excerpt:
      "Khám phá dịch vụ thuê xe có tài xế chuyên nghiệp với đội ngũ lái xe giàu kinh nghiệm, xe mới đời,q giá cả hợp lý. Từ du lịch gia đình đến công tác doanh nghiệp, từ đưa đón sân bay đến tour dài ngày - chúng tôi mang đến trải nghiệm di chuyển an toàn, thoải mái và đáng tin cậy nhất.",
    content: `
      <div class="max-w-3xl mx-auto">
        <!-- Hook mạnh mẽ -->
        <div class="border-b pb-6 mb-6">
          <p class="text-xl leading-relaxed font-medium text-gray-800 mb-4">
            🚗 <strong>Bạn đang tìm kiếm giải pháp di chuyển an toàn, tiện lợi mà không cần lo lắng về việc lái xe?</strong>
          </p>
          <p class="text-lg leading-relaxed">
            Dịch vụ thuê xe có tài xế chính là lựa chọn hoàn hảo! Với đội ngũ tài xế chuyên nghiệp, xe đời mới và dịch vụ 24/7, chúng tôi cam kết mang đến cho bạn những chuyến đi an toàn, thoải mái và đáng nhớ nhất.
          </p>
        </div>

        <!-- Lý do chọn thuê xe có tài xế -->
        <div class="border-b pb-6 mb-6">
          <h2 class="text-2xl font-bold text-forest-600 mb-4">🔥 Tại sao nên chọn thuê xe có tài xế?</h2>
          <img src="/images/thuexe.jpg" alt="Dịch vụ thuê xe có tài xế chuyên nghiệp" class="w-full rounded-lg mb-4" />
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="space-y-4">
              <div class="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg">
                <p class="font-bold text-forest-600 mb-2">🛡️ AN TOÀN TUYỆT ĐỐI</p>
                <p class="text-sm">Tài xế giàu kinh nghiệm, am hiểu địa hình, lái xe thành thạo. Xe được bảo dưỡng định kỳ, bảo hiểm đầy đủ. Bạn chỉ cần thư giãn và tận hưởng chuyến đi!</p>
              </div>
              
              <div class="bg-gradient-to-r from-orange-50 to-red-50 p-4 rounded-lg">
                <p class="font-bold text-forest-600 mb-2">💰 TIẾT KIỆM CHI PHÍ</p>
                <p class="text-sm">Không cần trả phí gửi xe, xăng dầu, bảo dưỡng. Giá thuê cạnh tranh, minh bạch. Đặc biệt tiết kiệm cho nhóm đông người và chuyến đi dài ngày!</p>
              </div>
            </div>
            
            <div class="space-y-4">
              <div class="bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded-lg">
                <p class="font-bold text-forest-600 mb-2">🎯 TIỆN LỢI TỐI ĐA</p>
                <p class="text-sm">Đón tận nơi, trả tận chỗ. Không lo lắng về đường xá, không stress vì tắc đường. Tài xế kiêm hướng dẫn viên địa phương, tư vấn địa điểm thú vị!</p>
              </div>
              
              <div class="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg">
                <p class="font-bold text-forest-600 mb-2">⏰ LINH HOẠT THỜI GIAN</p>
                <p class="text-sm">Dịch vụ 24/7, đặt xe linh hoạt theo giờ, ngày hoặc chuyến. Thay đổi lịch trình dễ dàng. Phù hợp mọi mục đích từ công tác đến du lịch!</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Các loại hình dịch vụ -->
        <div class="border-b pb-6 mb-6">
          <h2 class="text-2xl font-bold text-forest-600 mb-4">🚙 Đa dạng loại xe - Đa dạng nhu cầu</h2>
          
          <!-- Xe du lịch gia đình -->
          <div class="mb-6">
            <div class="bg-gradient-to-r from-green-600 to-green-700 text-white p-4 rounded-t-lg">
              <h3 class="text-xl font-bold">👨‍👩‍👧‍👦 XE DU LỊCH GIA ĐÌNH (4-7 chỗ)</h3>
            </div>
            <div class="bg-green-50 p-4 rounded-b-lg">
              <img src="/images/noithatxe7cho.jpg" alt="Xe du lịch gia đình 4-7 chỗ" class="w-full rounded-lg mb-4" />
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p class="font-semibold mb-2">🚗 DÒNG XE PHỔ BIẾN:</p>
                  <p class="mb-1">• <strong>Toyota Vios/Camry</strong> - sang trọng, tiết kiệm</p>
                  <p class="mb-1">• <strong>Honda City/Civic</strong> - êm ái, bền bỉ</p>
                  <p class="mb-1">• <strong>Toyota Innova</strong> - rộng rãi 7 chỗ</p>
                  <p class="mb-3">• <strong>Ford Everest</strong> - SUV cao cấp</p>
                </div>
                <div>
                  <p class="font-semibold mb-2">💵 GIÁ THUÊ HẤP DẪN:</p>
                  <p class="mb-1">• Trong thành phố: 400.000 - 600.000đ/ngày</p>
                  <p class="mb-1">• Liên tỉnh: 800.000 - 1.200.000đ/ngày</p>
                  <p class="mb-1">• Thuê theo giờ: 150.000 - 200.000đ/giờ</p>
                  <p class="mb-3">• <strong>Miễn phí:</strong> nước uống, khăn lạnh</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Xe đưa đón sân bay -->
          <div class="mb-6">
            <div class="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-t-lg">
              <h3 class="text-xl font-bold">✈️ XE ĐƯA ĐÓN SÂN BAY</h3>
            </div>
            <div class="bg-blue-50 p-4 rounded-b-lg">
              <img src="/images/xe-16(1).jpg" alt="Dịch vụ đưa đón sân bay" class="w-full rounded-lg mb-4" />
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p class="font-semibold mb-2">🎯 DỊCH VỤ CHUYÊN NGHIỆP:</p>
                  <p class="mb-1">• <strong>Đón đúng giờ</strong> - theo dõi chuyến bay</p>
                  <p class="mb-1">• <strong>Biển tên</strong> - dễ dàng nhận diện</p>
                  <p class="mb-1">• <strong>Hỗ trợ hành lý</strong> - chu đáo tận tình</p>
                  <p class="mb-3">• <strong>Xe sang</strong> - tạo ấn tượng đầu tiên</p>
                </div>
                <div>
                  <p class="font-semibold mb-2">💰 GÁI ƯU ĐÃI:</p>
                  <p class="mb-1">• BMV ↔ Trung tâm Buôn Ma Thuột: 700.000đ</p>
                  <p class="mb-1">• Đặt 2 chiều: Giảm 5%</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Xe du lịch nhóm lớn -->
          <div class="mb-6">
            <div class="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-4 rounded-t-lg">
              <h3 class="text-xl font-bold">🚌 XE DU LỊCH NHÓM LỚN (16-45 chỗ)</h3>
            </div>
            <div class="bg-purple-50 p-4 rounded-b-lg">
              <Image src="/images/xe-45.jpg" alt="Xe du lịch nhóm lớn 16-45 chỗ" class="w-full rounded-lg mb-4 h-[450px] w-auto object-cover" />
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p class="font-semibold mb-2">🚐 LOẠI XE ĐA DẠNG:</p>
                  <p class="mb-1">• <strong>Ford Transit 16 chỗ</strong> - nhóm vừa</p>
                  <p class="mb-1">• <strong>Hyundai County 29 chỗ</strong> - du lịch</p>
                  <p class="mb-1">• <strong>Thaco Universe 45 chỗ</strong> - hội nghị</p>
                  <p class="mb-3">• <strong>Luxury Limousine</strong> - VIP cao cấp</p>
                </div>
                <div>
                  <p class="font-semibold mb-2">🎊 ƯU ĐÃI NHÓM:</p>
                  <p class="mb-1">• Thuê 3 ngày: Giảm 15%</p>
                  <p class="mb-1">• Thuê 7 ngày: Giảm 25%</p>
                  <p class="mb-1">• Nhóm 20+ người: Ưu đãi đặc biệt</p>
                  <p class="mb-3">• Miễn phí: nước, karaoke, wifi</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Quy trình thuê xe -->
        <div class="border-b pb-6 mb-6">
          <h2 class="text-2xl font-bold text-forest-600 mb-4">📋 Quy trình thuê xe siêu đơn giản</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="space-y-3">
              <div class="bg-gradient-to-r from-blue-100 to-cyan-100 p-4 rounded-lg border-l-4 border-cyan-400">
                <p class="font-bold text-lg mb-2">1️⃣ LIÊN HỆ ĐỂ TƯ VẤN</p>
                <p class="text-sm mb-2"><strong>Hotline:</strong> 0941.43.70.70 (24/7)</p>
                <p class="text-sm mb-2"><strong>Zalo/Viber:</strong> 0941.43.70.70</p>
                <p class="text-sm"><strong>Website:</strong> Đặt xe online tiện lợi</p>
              </div>
              
              <div class="bg-gradient-to-r from-green-100 to-teal-100 p-4 rounded-lg border-l-4 border-teal-400">
                <p class="font-bold text-lg mb-2">2️⃣ BÁO GIÁ MINH BẠCH</p>
                <p class="text-sm mb-1">• Báo giá chi tiết trong 15 phút</p>
                <p class="text-sm mb-1">• Không phát sinh chi phí ẩn</p>
                <p class="text-sm">• Tư vấn loại xe phù hợp nhất</p>
              </div>
            </div>
            
            <div class="space-y-3">
              <div class="bg-gradient-to-r from-orange-100 to-red-100 p-4 rounded-lg border-l-4 border-red-400">
                <p class="font-bold text-lg mb-2">3️⃣ XÁC NHẬN & CỌC</p>
                <p class="text-sm mb-1">• Đặt cọc 30% giá trị hợp đồng (không bắt buộc)</p>
                <p class="text-sm mb-1">• Chuyển khoản hoặc tiền mặt</p>
                <p class="text-sm">• Ký hợp đồng rõ ràng, minh bạch</p>
              </div>
              
              <div class="bg-gradient-to-r from-purple-100 to-pink-100 p-4 rounded-lg border-l-4 border-pink-400">
                <p class="font-bold text-lg mb-2">4️⃣ NHẬN XE & KHỞI HÀNH</p>
                <p class="text-sm mb-1">• Tài xế đến đúng giờ, đúng địa điểm</p>
                <p class="text-sm mb-1">• Xe sạch sẽ, đầy đủ tiện nghi</p>
                <p class="text-sm">• Sẵn sàng cho chuyến đi tuyệt vời!</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Tại sao chọn chúng tôi -->
        <div class="border-b pb-6 mb-6">
          <h2 class="text-2xl font-bold text-forest-600 mb-4">🏆 Tại sao hàng nghìn khách hàng tin tựa?</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div class="text-center p-4 bg-gradient-to-b from-green-50 to-green-100 rounded-lg">
              <div class="text-3xl mb-3">👨‍✈️</div>
              <p class="font-bold text-lg mb-2">TÀI XẾ CHUYÊN NGHIỆP</p>
              <p class="text-sm">10+ năm kinh nghiệm, bằng lái đầy đủ, thái độ niềm nở, am hiểu địa phương</p>
            </div>
            
            <div class="text-center p-4 bg-gradient-to-b from-blue-50 to-blue-100 rounded-lg">
              <div class="text-3xl mb-3">🚗</div>
              <p class="font-bold text-lg mb-2">ĐỘI XE HIỆN ĐẠI</p>
              <p class="text-sm">Xe đời mới, bảo dưỡng định kỳ, nội thất sạch sẽ, tiện nghi đầy đủ</p>
            </div>
            
            <div class="text-center p-4 bg-gradient-to-b from-orange-50 to-orange-100 rounded-lg">
              <div class="text-3xl mb-3">🛡️</div>
              <p class="font-bold text-lg mb-2">BẢO HIỂM ĐẦY ĐỦ</p>
              <p class="text-sm">Bảo hiểm xe, người, hàng hóa. An tâm 100% cho mại chuyến đi</p>
            </div>
          </div>

          <div class="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-lg border border-orange-200">
            <h3 class="text-xl font-bold text-center mb-4 text-orange-700">🌟 CAM KẾT DỊCH VỤ</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p class="mb-2">✅ <strong>Đúng giờ:</strong> Cam kết đến đúng thời gian</strong></p>
                <p class="mb-2">✅ <strong>An toàn:</strong> Tài xế kinh nghiệm, xe bảo dưỡng tốt</p>
              </div>
              <div>
                <p class="mb-2">✅ <strong>Sạch sẽ:</strong> Xe sạch, không mùi thuốc lá</p>
                <p class="mb-2">✅ <strong>Linh hoạt:</strong> Thay đổi lộ trình theo yêu cầu</p>
                <p class="mb-2">✅ <strong>Hỗ trợ 24/7:</strong> Sẵn sàng giải đáp mọi lúc</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Call to action -->
        <div class="text-center bg-gradient-to-r from-green-600 to-blue-600 text-white p-8 rounded-lg">
          <h2 class="text-2xl font-bold mb-4">🚗 ĐẶTXE NGAY - KHỞI HÀNH LIỀN!</h2>
          <p class="text-lg mb-6">Hotline tư vấn 24/7: <strong>0941.43.70.70</strong></p>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>
              <p class="font-bold mb-1">📞 GỌI NGAY</p>
              <p>Tư vấn miễn phí</p>
            </div>
            <div>
              <p class="font-bold mb-1">💬 CHAT ZALO</p> 
              <p>Báo giá nhanh chóng</p>
            </div>
            <div>
              <p class="font-bold mb-1">🌐 ĐẶT ONLINE</p>
              <p>Tiện lợi 24/7</p>
            </div>
          </div>
        </div>
      </div>
    `,
  },
  {
    slug: "thue-xe-di-du-lich",
    title: "Thuê Xe Du Lịch: Trải Nghiệm Chuyến Đi Hoàn Hảo Cùng Dịch Vụ Chuyên Nghiệp",
    date: `${new Date(Date.now() - 19 * 24 * 60 * 60 * 1000).toLocaleDateString("vi-VN")}`,
    image: "/images/dalat.jpg",
    excerpt:
      "Khám phá dịch vụ thuê xe du lịch chuyên nghiệp với đội xe đa dạng, tài xế giàu kinh nghiệm và dịch vụ tận tâm. Từ chuyến đi ngắn ngày đến tour dài hạn, từ gia đình nhỏ đến nhóm đông người - chúng tôi mang đến giải pháp di chuyển an toàn, tiện lợi và osát với giá cả hợp lý nhất.",
    content: `
      <div class="max-w-3xl mx-auto">
        <!-- Hook mạnh mẽ -->
        <div class="border-b pb-6 mb-6">
          <p class="text-xl leading-relaxed font-medium text-gray-800 mb-4">
            🌟 <strong>Bạn đang lên kế hoạch cho chuyến du lịch trong mơ nhưng băn khoăn về phương tiện di chuyển?</strong>
          </p>
          <p class="text-lg leading-relaxed">
            Dịch vụ thuê xe du lịch chuyên nghiệp sẽ giúp bạn tận hưởng chuyến đi một cách trọn vẹn nhất! Với đội xe đa dạng, tài xế kinh nghiệm và dịch vụ chu đáo, chúng tôi cam kết mang đến những trải nghiệm du lịch đáng nhớ và an toàn cho bạn và gia đình.
          </p>
        </div>

        <!-- Lý do chọn thuê xe du lịch -->
        <div class="border-b pb-6 mb-6">
          <h2 class="text-2xl font-bold text-forest-600 mb-4">🔥 Tại sao nên thuê xe du lịch?</h2>
          <img src="/images/dibien.jpg" alt="Dịch vụ thuê xe du lịch chuyên nghiệp" class="w-full rounded-lg mb-4" />
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="space-y-4">
              <div class="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg">
                <p class="font-bold text-forest-600 mb-2">🗺️ TỰ DO KHÁM PHÁ</p>
                <p class="text-sm">Chủ động lịch trình, dừng chân bất cứ đâu bạn muốn. Không bị ràng buộc bởi giờ giấc xe khách hay tour cố định. Khám phá những địa điểm ẩn giấu theo cách riêng của bạn!</p>
              </div>
              
              <div class="bg-gradient-to-r from-orange-50 to-red-50 p-4 rounded-lg">
                <p class="font-bold text-forest-600 mb-2">👨‍👩‍👧‍👦 THOẢI MÁI TỐI ĐA</p>
                <p class="text-sm">Không gian riêng tư cho gia đình, điều hòa mát lạnh, có thể nghỉ ngơi bất cứ lúc nào. Đặc biệt phù hợp với trẻ em và người cao tuổi!</p>
              </div>
            </div>
            
            <div class="space-y-4">
              <div class="bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded-lg">
                <p class="font-bold text-forest-600 mb-2">💰 TIẾT KIỆM THÔNG MINH</p>
                <p class="text-sm">Chi phí hợp lý cho nhóm đông người, không phí phụ thu hành lý. Tiết kiệm thời gian và công sức so với việc đi phương tiện công cộng!</p>
              </div>
              
              <div class="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg">
                <p class="font-bold text-forest-600 mb-2">🛡️ AN TOÀN ĐẢM BẢO</p>
                <p class="text-sm">Tài xế giàu kinh nghiệm, am hiểu đường xá địa phương. Xe được bảo dưỡng định kỳ, bảo hiểm đầy đủ. An tâm 100% cho chuyến đi!</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Các loại hình du lịch -->
        <div class="border-b pb-6 mb-6">
          <h2 class="text-2xl font-bold text-forest-600 mb-4">🎯 Đa dạng hình thức du lịch</h2>
          
          <!-- Du lịch gia đình -->
          <div class="mb-6">
            <div class="bg-gradient-to-r from-green-600 to-green-700 text-white p-4 rounded-t-lg">
              <h3 class="text-xl font-bold">👨‍👩‍👧‍👦 DU LỊCH GIA ĐÌNH</h3>
            </div>
            <div class="bg-green-50 p-4 rounded-b-lg">
              <img src="/images/family-trip.jpg" alt="Du lịch gia đình" class="w-full rounded-lg mb-4" />
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p class="font-semibold mb-2">🚗 XE PHÙ HỢP:</p>
                  <p class="mb-1">• <strong>Xe 4-7 chỗ</strong> - Honda CRV, Toyota Innova</p>
                  <p class="mb-1">• <strong>Nội thất cao cấp</strong> - Da sang trọng, điều hòa 2 chiều</p>
                  <p class="mb-1">• <strong>An toàn tuyệt đối</strong> - Ghế trẻ em, túi khí đầy đủ</p>
                  <p class="mb-3">• <strong>Tiện nghi</strong> - USB sạc, wifi, nước uống miễn phí</p>
                </div>
                <div>
                  <p class="font-semibold mb-2">💝 DỊCH VỤ ĐI KÈM:</p>
                  <p class="mb-1">• Tư vấn lịch trình phù hợp gia đình</p>
                  <p class="mb-1">• Đặt khách sạn, nhà hàng theo yêu cầu</p>
                  <p class="mb-1">• Hướng dẫn viên địa phương (tùy chọn)</p>
                  <p class="mb-3">• Chụp ảnh kỷ niệm miễn phí</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Du lịch nhóm bạn -->
          <div class="mb-6">
            <div class="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-t-lg">
              <h3 class="text-xl font-bold">🧑‍🤝‍🧑 DU LỊCH NHÓM BẠN</h3>
            </div>
            <div class="bg-blue-50 p-4 rounded-b-lg">
              <img src="/images/friend-trip.jpg" alt="Du lịch nhóm bạn" class="w-full rounded-lg mb-4" />
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p class="font-semibold mb-2">🚐 XE ĐA DẠNG:</p>
                  <p class="mb-1">• <strong>Xe 7-16 chỗ</strong> - Ford Transit, Hyundai Solati</p>
                  <p class="mb-1">• <strong>Không gian rộng rãi</strong> - Thoải mái di chuyển</p>
                  <p class="mb-1">• <strong>Âm thanh hiện đại</strong> - Karaoke, Bluetooth</p>
                  <p class="mb-3">• <strong>Hành lý lớn</strong> - Khoang chứa đồ rộng rãi</p>
                </div>
                <div>
                  <p class="font-semibold mb-2">🎉 TRẢI NGHIỆM VUI VẺ:</p>
                  <p class="mb-1">• Tự do ca hát, trò chuyện trên xe</p>
                  <p class="mb-1">• Dừng chân chụp ảnh theo ý muốn</p>
                  <p class="mb-1">• Linh hoạt thay đổi điểm đến</p>
                  <p class="mb-3">• Giá ưu đãi cho nhóm đông</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Du lịch công ty -->
          <div class="mb-6">
            <div class="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-4 rounded-t-lg">
              <h3 class="text-xl font-bold">🏢 DU LỊCH CÔNG TY - TEAM BUILDING</h3>
            </div>
            <div class="bg-purple-50 p-4 rounded-b-lg">
              <img src="/images/team-building.jpg" alt="Du lịch công ty team building" class="w-full rounded-lg mb-4" />
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p class="font-semibold mb-2">🚌 ĐỘI XE CHUYÊN NGHIỆP:</p>
                  <p class="mb-1">• <strong>Xe 29-45 chỗ</strong> - Universe, Thaco Town</p>
                  <p class="mb-1">• <strong>Tiêu chuẩn cao</strong> - Ghế massage, màn hình LCD</p>
                  <p class="mb-1">• <strong>An toàn tuyệt đối</strong> - Tài xế 2 người, GPS</p>
                  <p class="mb-3">• <strong>Dịch vụ VIP</strong> - Tiếp viên, đồ uống cao cấp</p>
                </div>
                <div>
                  <p class="font-semibold mb-2">📋 HỖ TRỢ TỔ CHỨC:</p>
                  <p class="mb-1">• Lập kế hoạch chi tiết cho đoàn</p>
                  <p class="mb-1">• Phối hợp địa điểm tổ chức sự kiện</p>
                  <p class="mb-1">• Hỗ trợ logistics, âm thanh</p>
                  <p class="mb-3">• Báo giá trọn gói ưu đãi</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Điểm đến hot -->
        <div class="border-b pb-6 mb-6">
          <h2 class="text-2xl font-bold text-forest-600 mb-4">🏖️ Các điểm đến hot được yêu thích</h2>
          <img src="/images/dalat.jpg" alt="Các điểm đến du lịch hot" class="w-full rounded-lg mb-4" />
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Đà Lạt -->
            <div class="bg-gradient-to-r from-pink-50 to-rose-50 p-4 rounded-lg border border-pink-200">
              <h3 class="font-bold text-lg mb-2 text-pink-700">🌹 ĐÀ LẠT - Thành phố ngàn hoa</h3>
              <p class="text-sm mb-2">Thời tiết mát mẻ quanh năm, phong cảnh thơ mộng với hồ Xuân Hương, thác Datanla, Crazy House...</p>
              <p class="text-xs text-pink-600">🚗 Khoảng cách: ~200km | ⏱️ Thời gian: 4-5 tiếng</p>
            </div>

            <!-- Nha Trang -->
            <div class="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-lg border border-blue-200">
              <h3 class="font-bold text-lg mb-2 text-blue-700">🏖️ NHA TRANG - Thiên đường biển đảo</h3>
              <p class="text-sm mb-2">Biển xanh cát trắng, đảo Hòn Tre, Vinpearl Land, tắm bùn khoáng nóng I-Resort...</p>
              <p class="text-xs text-blue-600">🚗 Khoảng cách: ~350km | ⏱️ Thời gian: 6-7 tiếng</p>
            </div>

            <!-- Phú Yên -->
            <div class="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border border-green-200">
              <h3 class="font-bold text-lg mb-2 text-green-700">🌊 PHÚ YÊN - Xứ sở hoa vàng cỏ xanh</h3>
              <p class="text-sm mb-2">Gành Đá Đĩa kỳ vĩ, Mũi Điện hoang sơ, Bãi Xép thơ mộng, Tháp Nhạn cổ kính...</p>
              <p class="text-xs text-green-600">🚗 Khoảng cách: ~250km | ⏱️ Thời gian: 5-6 tiếng</p>
            </div>

            <!-- Đà Nẵng -->
            <div class="bg-gradient-to-r from-orange-50 to-amber-50 p-4 rounded-lg border border-orange-200">
              <h3 class="font-bold text-lg mb-2 text-orange-700">🌉 ĐÀ NẴNG - Thành phố đáng sống</h3>
              <p class="text-sm mb-2">Cầu Rồng phun lửa, Bà Nà Hills, Hội An cổ kính, bãi biển Mỹ Khê tuyệt đẹp...</p>
              <p class="text-xs text-orange-600">🚗 Khoảng cách: ~450km | ⏱️ Thời gian: 8-9 tiếng</p>
            </div>
          </div>

          <div class="mt-4 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-200">
            <p class="text-sm text-center">
              <strong>💡 Mẹo hay:</strong> Kết hợp nhiều điểm đến trong 1 chuyến đi để tối ưu chi phí và thời gian! 
              Ví dụ: Đà Lạt ➜ Nha Trang ➜ Phú Yên (5-7 ngày) hoặc Đà Nẵng ➜ Hội An ➜ Huế (4-5 ngày)
            </p>
          </div>
        </div>

        <!-- Cam kết dịch vụ -->
        <div class="border-b pb-6 mb-6">
          <h2 class="text-2xl font-bold text-forest-600 mb-4">🛡️ Cam kết chất lượng dịch vụ</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="space-y-4">
              <div class="flex items-start space-x-3">
                <div class="text-2xl">🚗</div>
                <div>
                  <p class="font-bold mb-1">Đội xe chất lượng cao</p>
                  <p class="text-sm text-gray-600">Xe đời mới, bảo dưỡng định kỳ, sạch sẽ, điều hòa mát lạnh, không mùi thuốc lá</p>
                </div>
              </div>

              <div class="flex items-start space-x-3">
                <div class="text-2xl">👨‍✈️</div>
                <div>
                  <p class="font-bold mb-1">Tài xế chuyên nghiệp</p>
                  <p class="text-sm text-gray-600">5+ năm kinh nghiệm, bằng lái đầy đủ, am hiểu địa phương, thái độ niềm nở</p>
                </div>
              </div>

              <div class="flex items-start space-x-3">
                <div class="text-2xl">💰</div>
                <div>
                  <p class="font-bold mb-1">Giá cả minh bạch</p>
                  <p class="text-sm text-gray-600">Báo giá chi tiết, không phát sinh phí ẩn, nhiều ưu đãi hấp dẫn</p>
                </div>
              </div>
            </div>

            <div class="space-y-4">
              <div class="flex items-start space-x-3">
                <div class="text-2xl">🛡️</div>
                <div>
                  <p class="font-bold mb-1">Bảo hiểm toàn diện</p>
                  <p class="text-sm text-gray-600">Bảo hiểm xe, người và hàng hóa. An tâm 100% cho mọi chuyến đi</p>
                </div>
              </div>

              <div class="flex items-start space-x-3">
                <div class="text-2xl">📞</div>
                <div>
                  <p class="font-bold mb-1">Hỗ trợ 24/7</p>
                  <p class="text-sm text-gray-600">Luôn sẵn sàng hỗ trợ khách hàng mọi lúc, mọi nơi trong suốt chuyến đi</p>
                </div>
              </div>

              <div class="flex items-start space-x-3">
                <div class="text-2xl">🔄</div>
                <div>
                  <p class="font-bold mb-1">Linh hoạt thay đổi</p>
                  <p class="text-sm text-gray-600">Dễ dàng điều chỉnh lịch trình, điểm đến theo mong muốn của khách hàng</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Call to action -->
        <div class="text-center bg-gradient-to-r from-green-600 to-blue-600 text-white p-8 rounded-lg">
          <h2 class="text-2xl font-bold mb-4">🎯 BẮT ĐẦU CHUYẾN ĐI TRONG MƠ NGAY HÔM NAY!</h2>
          <p class="text-lg mb-6">
            <strong>Hotline tư vấn:</strong> 0941.43.70.70<br>
            <span class="text-sm">Báo giá trong vòng 15 phút - Cam kết giá tốt nhất thị trường</span>
          </p>
          
          <div class="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm mt-6">
            <div class="bg-white/20 p-3 rounded-lg">
              <a href='tel:0941437070'>
                <p class="font-bold mb-1">📞 GỌI NGAY</p>
                <p>Tư vấn 1-1 miễn phí</p>
              </a>
            </div>
            <div class="bg-white/20 p-3 rounded-lg">
              <a href='https://zalo.me/0941437070' target='_blank'>
                <p class="font-bold mb-1">💬 CHAT ZALO</p>
                <p>Nhận báo giá nhanh</p>
              </a>
            </div>
            <div class="bg-white/20 p-3 rounded-lg">
              <p class="font-bold mb-1">🌐 ĐẶT ONLINE</p>
              <p>Tiện lợi 24/7</p>
            </div>
            <div class="bg-white/20 p-3 rounded-lg">
              <p class="font-bold mb-1">🎁 ƯU ĐÃI</p>
              <p>Giảm 10% đặt sớm</p>
            </div>
          </div>
        </div>
      </div>
    `,
  },
  {
    slug: "thue-xe-di-cong-tac",
    title: "Thuê Xe Đi Công Tác: Dịch Vụ Chuyên Nghiệp Cho Doanh Nghiệp & Cá Nhân",
    date: `${new Date(Date.now() - 22 * 24 * 60 * 60 * 1000).toLocaleDateString("vi-VN")}`,
    image: "/images/di-cong-tac.png",
    excerpt:
      "Dịch vụ thuê xe đi công tác chuyên nghiệp với đội xe đa dạng, tài xế kinh nghiệm và giá cả hợp lý. Phục vụ các chuyến công tác trong ngày, liên tỉnh, đưa đón khách hàng, hội nghị, sự kiện doanh nghiệp. Cam kết đúng giờ, an toàn và tạo ấn tượng chuyên nghiệp.",
    content: `
      <div class="max-w-3xl mx-auto">
        <!-- Hook mạnh mẽ -->
        <div class="border-b pb-6 mb-6">
          <p class="text-xl leading-relaxed font-medium text-gray-800 mb-4">
            💼 <strong>Bạn cần dịch vụ thuê xe đi công tác chuyên nghiệp, đáng tin cậy?</strong>
          </p>
          <p class="text-lg leading-relaxed">
            Với hơn 10 năm kinh nghiệm phục vụ doanh nghiệp, chúng tôi cung cấp dịch vụ thuê xe công tác cao cấp với đội xe đa dạng, tài xế chuyên nghiệp và dịch vụ hỗ trợ 24/7. Tạo ấn tượng tốt với khách hàng và đối tác ngay từ chuyến đi đầu tiên!
          </p>
        </div>

        <!-- Lý do chọn thuê xe công tác -->
        <div class="border-b pb-6 mb-6">
          <h2 class="text-2xl font-bold text-forest-600 mb-4">🎯 Tại sao doanh nghiệp nên thuê xe công tác?</h2>
          <img src="/images/congtac.jpg" alt="Dịch vụ thuê xe công tác chuyên nghiệp" class="w-full rounded-lg mb-4" />
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="space-y-4">
              <div class="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg">
                <p class="font-bold text-forest-600 mb-2">🏢 HÌNH ĐẢI CHUYÊN NGHIỆP</p>
                <p class="text-sm">Xe sang, tài xế lịch sự, trang phục đồng phục. Tạo ấn tượng tốt với khách hàng, đối tác. Thể hiện đẳng cấp và sự chuyên nghiệp của doanh nghiệp.</p>
              </div>
              
              <div class="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg">
                <p class="font-bold text-forest-600 mb-2">💰 TIẾT KIỆM CHI PHÍ</p>
                <p class="text-sm">Không cần đầu tư mua xe công ty, không lo bảo dưỡng, bảo hiểm. Chi phí thuê xe theo chuyến giúp kiểm soát ngân sách hiệu quả hơn.</p>
              </div>
            </div>
            
            <div class="space-y-4">
              <div class="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg">
                <p class="font-bold text-forest-600 mb-2">⏰ TIẾT KIỆM THỜI GIAN</p>
                <p class="text-sm">Tập trung vào công việc thay vì lo lắng về giao thông. Tài xế am hiểu đường xá, tránh tắc đường, đến đúng giờ hẹn với khách hàng.</p>
              </div>
              
              <div class="bg-gradient-to-r from-orange-50 to-red-50 p-4 rounded-lg">
                <p class="font-bold text-forest-600 mb-2">🛡️ AN TOÀN & BẢO MẬT</p>
                <p class="text-sm">Tài xế được đào tạo về bảo mật thông tin. Xe có bảo hiểm đầy đủ. Đảm bảo an toàn cho lãnh đạo và nhân viên trong mọi chuyến đi.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Các loại hình dịch vụ -->
        <div class="border-b pb-6 mb-6">
          <h2 class="text-2xl font-bold text-forest-600 mb-4">🚙 Đa dạng loại xe phục vụ mọi nhu cầu công tác</h2>
          
          <!-- Xe sedan cao cấp -->
          <div class="mb-6">
            <div class="bg-gradient-to-r from-gray-700 to-gray-800 text-white p-4 rounded-t-lg">
              <h3 class="text-xl font-bold">👔 XE SEDAN CAO CẤP (4-5 chỗ)</h3>
            </div>
            <div class="bg-gray-50 p-4 rounded-b-lg">
              <img src="/images/noithatxe4cho.jpg" alt="Xe sedan cao cấp cho công tác" class="w-full rounded-lg mb-4" />
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p class="font-semibold mb-2">🚗 DÒNG XE SANG TRỌNG:</p>
                  <p class="mb-1">• <strong>Toyota Camry 2.5Q</strong> - đẳng cấp doanh nhân</p>
                  <p class="mb-1">• <strong>Honda Accord</strong> - sang trọng, êm ái</p>
                  <p class="mb-1">• <strong>Mercedes C-Class</strong> - thương hiệu danh tiếng</p>
                  <p class="mb-3">• <strong>BMW 3 Series</strong> - lái thể thao, hiện đại</p>
                </div>
                <div>
                  <p class="font-semibold mb-2">💵 GIÁ THUÊ DOANH NGHIỆP:</p>
                  <p class="mb-1">• Nửa ngày (4h): 800.000 - 1.200.000đ</p>
                  <p class="mb-1">• Cả ngày (8h): 1.400.000 - 2.000.000đ</p>
                  <p class="mb-1">• Công tác liên tỉnh: 2.500.000đ/ngày</p>
                  <p class="mb-3">• <strong>Ưu đãi:</strong> Hợp đồng dài hạn giảm 15%</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Xe SUV 7 chỗ -->
          <div class="mb-6">
            <div class="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-t-lg">
              <h3 class="text-xl font-bold">🚐 XE SUV 7 CHỖ - NHÓM CÔNG TÁC</h3>
            </div>
            <div class="bg-blue-50 p-4 rounded-b-lg">
              <img src="/images/noithatxe7cho.jpg" alt="Xe SUV 7 chỗ cho nhóm công tác" class="w-full rounded-lg mb-4" />
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p class="font-semibold mb-2">🚙 MẪU XE PHỔ BIẾN:</p>
                  <p class="mb-1">• <strong>Toyota Fortuner</strong> - chắc chắn, off-road tốt</p>
                  <p class="mb-1">• <strong>Ford Everest</strong> - rộng rãi, tiện nghi</p>
                  <p class="mb-1">• <strong>Mazda CX-8</strong> - thiết kế Nhật, sang trọng</p>
                  <p class="mb-3">• <strong>Hyundai Santa Fe</strong> - công nghệ hiện đại</p>
                </div>
                <div>
                  <p class="font-semibold mb-2">🎯 PHÙ HỢP CHO:</p>
                  <p class="mb-1">• Nhóm công tác 5-7 người</p>
                  <p class="mb-1">• Đi công tác xa có hành lý nhiều</p>
                  <p class="mb-1">• Công tác khu vực nông thôn, miền núi</p>
                  <p class="mb-3">• Giá: 1.200.000 - 1.800.000đ/ngày</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Xe Limousine VIP -->
          <div class="mb-6">
            <div class="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-4 rounded-t-lg">
              <h3 class="text-xl font-bold">👑 XE MINUBUS 16 CHỖ - NHÓM CÔNG TÁC NHIỀU NGƯỜI</h3>
            </div>
            <div class="bg-purple-50 p-4 rounded-b-lg">
              <img src="/images/noithatxelimousine.jpg" alt="Xe Limousine VIP cho lãnh đạo" class="w-full rounded-lg mb-4" />
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p class="font-semibold mb-2">🏆 MẪU XE PHỔ BIẾN:</p>
                  <p class="mb-1">• <strong>Ford Transit</strong> - rộng rãi thoải mái</p>
                  <p class="mb-1">• <strong>Huyndai County</strong> - đoàn thể nhiều người</p>
                  <p class="mb-1">• <strong>Huyndai Universe</strong> - êm ái tuyệt đối</p>
                </div>
                <div>
                  <p class="font-semibold mb-2">💎 TIỆN ÍCH CAO CẤP:</p>
                  <p class="mb-1">• Ghế massage, rèm che nắng</p>
                  <p class="mb-1">• Wifi, sạc không dây</p>
                  <p class="mb-1">• Tài xế kinh nghiệm 10+ năm</p>
                  <p class="mb-3">• Giá: 1.300.000 - 5.000.000đ/ngày</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Dịch vụ chuyên biệt -->
        <div class="border-b pb-6 mb-6">
          <h2 class="text-2xl font-bold text-forest-600 mb-4">🎪 Dịch vụ chuyên biệt cho doanh nghiệp</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg">
              <h3 class="text-lg font-bold text-green-700 mb-3">✈️ ĐƯA ĐÓN SÂN BAY VIP</h3>
              <p class="text-sm mb-2">• Theo dõi chuyến bay real-time</p>
              <p class="text-sm mb-2">• Biển tên, hỗ trợ hành lý</p>
              <p class="text-sm font-semibold">Giá: 500.000 - 1.500.000đ/chuyến</p>
            </div>
            
            <div class="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
              <h3 class="text-lg font-bold text-blue-700 mb-3">🏢 THUÊ XE THEO THÁNG</h3>
              <p class="text-sm mb-2">• Xe riêng cho công ty</p>
              <p class="text-sm mb-2">• Tài xế cố định, đào tạo riêng</p>
              <p class="text-sm mb-2">• Bảo dưỡng, bảo hiểm bao gồm</p>
              <p class="text-sm font-semibold">Giá: 25.000.000 - 45.000.000đ/tháng</p>
            </div>
            
            <div class="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg">
              <h3 class="text-lg font-bold text-orange-700 mb-3">🎭 HỘI NGHỊ - SỰ KIỆN</h3>
              <p class="text-sm mb-2">• Đội xe đồng bộ, chuyên nghiệp</p>
              <p class="text-sm mb-2">• Phối hợp theo chương trình</p>
              <p class="text-sm font-semibold">Báo giá theo quy mô sự kiện</p>
            </div>
            
            <div class="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg">
              <h3 class="text-lg font-bold text-purple-700 mb-3">🌏 CÔNG TÁC LIÊN TỈNH</h3>
              <p class="text-sm mb-2">• Lộ trình tối ưu, tiết kiệm thời gian</p>
              <p class="text-sm mb-2">• Nghỉ đêm: hỗ trợ khách sạn tài xế</p>
              <p class="text-sm mb-2">• Theo đoàn nhiều ngày</p>
              <p class="text-sm font-semibold">Giá: 2.000.000 - 4.000.000đ/ngày</p>
            </div>
          </div>
        </div>

        <!-- Quy trình dịch vụ -->
        <div class="border-b pb-6 mb-6">
          <h2 class="text-2xl font-bold text-forest-600 mb-4">📋 Quy trình dịch vụ chuyên nghiệp</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="space-y-3">
              <div class="bg-gradient-to-r from-indigo-100 to-blue-100 p-4 rounded-lg border-l-4 border-blue-400">
                <p class="font-bold text-lg mb-2">1️⃣ TIẾP NHẬN YÊU CẦU</p>
                <p class="text-sm mb-2"><strong>Hotline doanh nghiệp:</strong> 0941 43 70 70</p>
                <p class="text-sm mb-2"><strong>Email:</strong> thehao155@gmail.com</p>
                <p class="text-sm">Tư vấn loại xe, lộ trình phù hợp</p>
              </div>
              
              <div class="bg-gradient-to-r from-green-100 to-emerald-100 p-4 rounded-lg border-l-4 border-emerald-400">
                <p class="font-bold text-lg mb-2">2️⃣ BÁO GIÁ & HỢP ĐỒNG</p>
                <p class="text-sm mb-1">• Báo giá chi tiết trong 30 phút</p>
                <p class="text-sm mb-1">• Ký hợp đồng theo Luật Doanh nghiệp</p>
                <p class="text-sm">• Thanh toán linh hoạt: CK/tiền mặt</p>
              </div>
            </div>
            
            <div class="space-y-3">
              <div class="bg-gradient-to-r from-orange-100 to-red-100 p-4 rounded-lg border-l-4 border-red-400">
                <p class="font-bold text-lg mb-2">3️⃣ CHUẨN BỊ XE & TÀI XẾ</p>
                <p class="text-sm mb-1">• Xe được vệ sinh, kiểm tra kỹ thuật</p>
                <p class="text-sm mb-1">• Tài xế trang phục lịch sự</p>
                <p class="text-sm">• Brief lộ trình, yêu cầu đặc biệt</p>
              </div>
              
              <div class="bg-gradient-to-r from-purple-100 to-pink-100 p-4 rounded-lg border-l-4 border-pink-400">
                <p class="font-bold text-lg mb-2">4️⃣ THỰC HIỆN & THEO DÕI</p>
                <p class="text-sm mb-1">• Báo cáo tình hình thực hiện</p>
                <p class="text-sm mb-1">• Hỗ trợ 24/7 trong suốt chuyến đi</p>
                <p class="text-sm">• Thu thập feedback sau dịch vụ</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Ưu điểm cạnh tranh -->
        <div class="border-b pb-6 mb-6">
          <h2 class="text-2xl font-bold text-forest-600 mb-4">🏆 Tại sao doanh nghiệp lựa chọn chúng tôi?</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div class="text-center p-4 bg-gradient-to-b from-blue-50 to-blue-100 rounded-lg">
              <div class="text-3xl mb-3">🎖️</div>
              <p class="font-bold text-lg mb-2">10+ NĂM KINH NGHIỆM</p>
              <p class="text-sm">Phục vụ hàng trăm doanh nghiệp lớn nhỏ. Hiểu rõ nhu cầu và văn hóa doanh nghiệp Việt Nam</p>
            </div>
            
            <div class="text-center p-4 bg-gradient-to-b from-green-50 to-green-100 rounded-lg">
              <div class="text-3xl mb-3">👨‍💼</div>
              <p class="font-bold text-lg mb-2">TÀI XẾ CHUYÊN NGHIỆP</p>
              <p class="text-sm">Đào tạo về lễ tân, bảo mật thông tin. Trang phục lịch sự, thái độ niềm nở, chu đáo</p>
            </div>
            
            <div class="text-center p-4 bg-gradient-to-b from-purple-50 to-purple-100 rounded-lg">
              <div class="text-3xl mb-3">📱</div>
              <p class="font-bold text-lg mb-2">CÔNG NGHỆ HIỆN ĐẠI</p>
              <p class="text-sm">App theo dõi hành trình, báo cáo chi tiết. Thanh toán online, hóa đơn điện tử</p>
            </div>
          </div>

          <div class="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
            <h3 class="text-xl font-bold text-center mb-4 text-blue-700">💼 CAM KẾT DỊCH VỤ DOANH NGHIỆP</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p class="mb-2">✅ <strong>Đúng giờ:</strong> Cam kết đến trước 15 phút</p>
                <p class="mb-2">✅ <strong>Bảo mật:</strong> Ký cam kết bảo mật thông tin</p>
                <p class="mb-2">✅ <strong>Linh hoạt:</strong> Sẵn sàng thay đổi lịch trình</p>
              </div>
              <div>
                <p class="mb-2">✅ <strong>Hỗ trợ 24/7:</strong> Hotline doanh nghiệp riêng</p>
                <p class="mb-2">✅ <strong>Thanh toán:</strong> Chuyển khoản, hóa đơn VAT</p>
                <p class="mb-2">✅ <strong>Ưu đãi:</strong> Khách VIP được giảm giá đặc biệt</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Call to action -->
        <div class="text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-lg">
          <h2 class="text-2xl font-bold mb-4">💼 ĐĂNG KÝ DỊCH VỤ THUÊ XE CÔNG TÁC</h2>
          <p class="text-lg mb-6">Hotline doanh nghiệp: <strong>0941.43.70.70</strong></p>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>
              <p class="font-bold mb-1">📞 TƯ VẤN MIỄN PHÍ</p>
              <p>Báo giá nhanh trong 30 phút</p>
            </div>
            <div>
              <p class="font-bold mb-1">📧 GỬI YÊU CẦU</p>
              <p>thehao155@gmail.com</p>
            </div>
            <div>
              <p class="font-bold mb-1">🤝 HỢP TÁC DÀI HẠN</p>
              <p>Ưu đãi đặc biệt cho khách VIP</p>
            </div>
          </div>
        </div>
      </div>
    `,
  },
];
