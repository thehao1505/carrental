"use client";

import { ChangeEvent, FormEvent, useState } from "react";

interface FormData {
  name: string;
  phone: string;
  tourType: string;
  groupSize: string;
  date: string;
  note: string;
}

export default function TourBookingForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    tourType: "",
    groupSize: "",
    date: "",
    note: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    const content = `[YÊU CẦU ĐẶT TOUR ĐẮK LẮK]
Tour: ${formData.tourType}
Số người: ${formData.groupSize}
Ngày dự kiến: ${formData.date || "Chưa xác định"}
Ghi chú: ${formData.note || "Không có"}`;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          content,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setMessage("Đặt tour thành công! Chúng tôi sẽ liên hệ xác nhận trong vòng 30 phút.");
        setFormData({ name: "", phone: "", tourType: "", groupSize: "", date: "", note: "" });
      } else {
        setMessage(data.message || "Có lỗi xảy ra. Vui lòng thử lại.");
      }
    } catch {
      setMessage("Có lỗi xảy ra. Vui lòng thử lại hoặc gọi hotline.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-forest-400 text-gray-800 text-sm bg-white";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Họ và tên <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Nguyễn Văn A"
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Số điện thoại <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="0941.437.070"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Chọn gói tour <span className="text-red-500">*</span>
          </label>
          <select
            name="tourType"
            value={formData.tourType}
            onChange={handleChange}
            required
            className={inputClass}
          >
            <option value="">-- Chọn gói tour --</option>
            <option value="Tour 1 ngày – Văn Hóa Buôn Ma Thuột">Tour 1 ngày – Văn Hóa BMT</option>
            <option value="Tour 2 ngày 1 đêm – Phiêu Lưu Tây Nguyên">Tour 2 ngày 1 đêm – Phiêu Lưu</option>
            <option value="Tour 3 ngày 2 đêm – Khám Phá Tây Nguyên Toàn Diện">Tour 3 ngày 2 đêm – Toàn Diện</option>
            <option value="Tour tùy chỉnh">Tour tùy chỉnh theo yêu cầu</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Số người <span className="text-red-500">*</span>
          </label>
          <select
            name="groupSize"
            value={formData.groupSize}
            onChange={handleChange}
            required
            className={inputClass}
          >
            <option value="">-- Số người --</option>
            <option value="1-2 người">1–2 người</option>
            <option value="3-4 người">3–4 người</option>
            <option value="5-7 người">5–7 người</option>
            <option value="8-16 người">8–16 người</option>
            <option value="Trên 16 người">Trên 16 người</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Ngày dự kiến khởi hành
        </label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Ghi chú thêm (điểm xuất phát, yêu cầu đặc biệt…)
        </label>
        <textarea
          name="note"
          value={formData.note}
          onChange={handleChange}
          rows={3}
          placeholder="VD: Xuất phát từ sân bay, cần ghế trẻ em, muốn thêm điểm Đồi Cỏ Hồng…"
          className={inputClass + " resize-none"}
        />
      </div>

      {message && (
        <div
          className={`px-4 py-3 rounded-xl text-sm font-medium ${
            message.includes("thành công")
              ? "bg-green-50 text-green-700 border border-green-200"
              : "bg-red-50 text-red-700 border border-red-200"
          }`}
        >
          {message}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-lemon-500 text-forest-700 font-bold py-3.5 rounded-xl text-base hover:bg-lemon-400 transition hover:scale-[1.01] disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Đang gửi…" : "Đặt Tour Ngay"}
      </button>
      <p className="text-xs text-gray-400 text-center">
        Hoặc gọi ngay{" "}
        <a href="tel:0941437070" className="text-forest-600 font-semibold hover:underline">
          0941.437.070
        </a>{" "}
        để được tư vấn miễn phí
      </p>
    </form>
  );
}
