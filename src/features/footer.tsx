"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

export interface ContactFormData {
  name: string;
  phone: string;
  content: string;
}

export interface ApiResponse {
  message: string;
  success: boolean;
}

export default function Footer() {
  const router = useRouter();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "SOMEONE",
    phone: "KHÔNG CÓ",
    content: "",
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data: ApiResponse = await response.json();

      if (response.ok) {
        setMessage("Gửi yêu cầu thành công! Chúng tôi sẽ liên hệ lại sớm.");
        setFormData({
          name: "",
          phone: "",
          content: "",
        });
      } else {
        setMessage(data.message || "Có lỗi xảy ra. Vui lòng thử lại.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setMessage("Có lỗi xảy ra. Vui lòng thử lại.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-forest-500 text-white px-6 md:px-10 xl:px-30 pt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <div className="flex items-center gap-2">
            <Image src="/images/logo-light.png" alt="logo" width={200} height={100} />
          </div>
          <p className="text-sm text-moss-100 max-w-sm">
            Dịch vụ thuê xe uy tín, nhanh chóng, giá hợp lý. Đặt xe dễ dàng chỉ trong vài phút, sẵn
            sàng đồng hành cùng bạn trên mọi hành trình!
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <h4 className="font-semibold">
              Để lại email hoặc số điện thoại để nhận được ưu đãi mới nhất
            </h4>
            {message && (
              <div
                className={`py-3 px-6 rounded-r-3xl ${
                  message.includes("thành công")
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {message}
              </div>
            )}
            <input
              name="content"
              value={formData.content}
              onChange={handleChange}
              placeholder="example@gmail.com or 0941437070"
              className="w-full p-3 rounded-r-3xl bg-white text-black placeholder-gray-400 px-6"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-lemon-500 hover:bg-lemon-400 text-black font-semibold px-6 py-2 rounded-r-3xl"
            >
              {isSubmitting ? "Đang gửi..." : "Gửi yêu cầu"}
            </button>
          </div>
        </form>
      </div>

      <hr className="my-10 border-moss-100/20" />

      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-sm pb-10">
        <div>
          <h5 className="font-semibold mb-4">Trang</h5>
          <ul className="space-y-2 text-moss-100">
            <li
              onClick={() => router.push("/")}
              className="transition-all duration-300 cursor-pointer hover:text-lemon-500 hover:underline"
            >
              Trang chủ
            </li>
            <li
              onClick={() => router.push("/gioi-thieu")}
              className="transition-all duration-300 cursor-pointer hover:text-lemon-500 hover:underline"
            >
              Giới thiệu
            </li>
            <li
              onClick={() => router.push("/tin-tuc")}
              className="transition-all duration-300 cursor-pointer hover:text-lemon-500 hover:underline"
            >
              Tin tức
            </li>
            <li
              onClick={() => router.push("/lien-he")}
              className="transition-all duration-300 cursor-pointer hover:text-lemon-500 hover:underline"
            >
              Liên hệ
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold mb-4">Dịch vụ</h5>
          <ul className="space-y-2 text-moss-100">
            <li
              onClick={() => router.push("/tin-tuc/thue-xe-co-tai-xe")}
              className="transition-all duration-300 cursor-pointer hover:text-lemon-500 hover:underline"
            >
              Thuê xe có tài xế
            </li>
            <li
              onClick={() => router.push("/thue-xe/thuexe-16-cho")}
              className="transition-all duration-300 cursor-pointer hover:text-lemon-500 hover:underline"
            >
              Thuê xe 16 chỗ
            </li>
            <li
              onClick={() => router.push("/tin-tuc/thue-xe-di-du-lich")}
              className="transition-all duration-300 cursor-pointer hover:text-lemon-500 hover:underline"
            >
              Thuê xe đi du lịch
            </li>
            <li
              onClick={() => router.push("/tin-tuc/thue-xe-di-cong-tac")}
              className="transition-all duration-300 cursor-pointer hover:text-lemon-500 hover:underline"
            >
              Thuê xe đi công tác
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold mb-4">Hỗ trợ</h5>
          <ul className="space-y-2 text-moss-100">
            <li>Hướng dẫn sử dụng</li>
            <li>Chính sách bảo mật</li>
            <li>Chính sách vận chuyển</li>
            <li>Hướng dẫn sử dụng</li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold mb-4">Liên hệ</h5>
          <ul className="space-y-2 text-moss-100">
            <li>
              <a
                href="https://www.facebook.com/share/1AczYur4wu/"
                className="hover:text-lemon-400 hover:underline"
              >
                Facebook
              </a>
            </li>
            <li>
              <a href="tel:0941437070" className="hover:text-lemon-400 hover:underline">
                0941 437 070
              </a>
            </li>
            <li>
              <a href="mailto:thehao155@gmail.com" className="hover:text-lemon-400 hover:underline">
                thehao155@gmail.com
              </a>
            </li>
            <li>
              <a href="https://zalo.me/0941437070" className="hover:text-lemon-400 hover:underline">
                Zalo: 0941 437 070
              </a>
            </li>
            <li>
              <a
                href="https://maps.app.goo.gl/7AeopSFXS4vKVxwL6"
                className="hover:text-lemon-400 hover:underline"
              >
                252/6 Phan Huy Chú,
                <br />
                Buôn Ma Thuột, Đắk Lắk, Vietnam
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="py-3 text-center text-sm text-moss-100 border-t border-moss-100/20">
        Copyright © DVDL Đại Dương Ban Mê | Powered by{" "}
        <span className="text-lemon-400">The Hao</span> | Designed by The Hao Nguyen
      </div>
    </footer>
  );
}
