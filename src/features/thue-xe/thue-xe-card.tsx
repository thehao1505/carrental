"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { carRentalData } from "@/lib/data";

export function ThueXeSlugPage() {
  const params = useParams();
  const xe = carRentalData.find((x) => x.slug === params.slug);
  if (!xe) return notFound();

  return (
    <main className="max-w-5xl mx-auto px-6 py-12 text-gray-800">
      <Link href="/" className="text-sm text-forest-500 hover:underline mb-6 inline-block">
        ← Quay lại danh sách dịch vụ
      </Link>

      <h1 className="text-3xl font-bold text-forest-600 mb-4">{xe.title}</h1>
      <div className="relative w-full h-[500px] rounded-xl overflow-hidden shadow-md mb-8">
        <Image src={xe.image} alt={xe.title} fill className="object-cover" priority />
      </div>

      <article
        className="prose prose-sm md:prose-base prose-forest max-w-none"
        dangerouslySetInnerHTML={{ __html: xe.content }}
      />

      <div className="text-center mt-10">
        <h3 className="text-lg text-moss-500 mb-4">Bạn cần đặt xe hoặc báo giá?</h3>
        <Link
          href="/lien-he"
          className="inline-block bg-forest-500 text-lemon-500 px-8 py-3 rounded-full text-lg font-semibold hover:bg-forest-600 transition hover:scale-105"
        >
          Liên hệ ngay
        </Link>
      </div>
    </main>
  );
}
