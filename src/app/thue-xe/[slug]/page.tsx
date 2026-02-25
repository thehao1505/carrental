import { ThueXeSlugPage } from "@/features/thue-xe/thue-xe-card";
import { Metadata } from "next";
import { carRentalData } from "@/lib/data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const xe = carRentalData.find((x) => x.slug === slug);

  if (!xe) {
    return {
      title: "Dịch Vụ Thuê Xe",
    };
  }

  const canonicalUrl = `/thue-xe/${slug}`;
  const defaultDescription = `Dịch vụ ${xe.title} tại DVDL Đại Dương Ban Mê. Xe đời mới, tài xế chuyên nghiệp, an toàn và uy tín tại Buôn Ma Thuột - Đắk Lắk.`;

  return {
    title: xe.title,
    description: defaultDescription,
    keywords: [
      xe.title,
      "thuê xe du lịch Đắk Lắk",
      "thuê xe Buôn Ma Thuột",
      "DVDL Đại Dương Ban Mê",
      "xe có tài xế BMT",
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${xe.title} | DVDL Đại Dương Ban Mê`,
      description: `Dịch vụ ${xe.title} - xe đời mới, tài xế chuyên nghiệp tại Buôn Ma Thuột.`,
      url: canonicalUrl,
      locale: "vi_VN",
      type: "website",
      images: [
        xe.image
          ? { url: xe.image, width: 800, height: 500, alt: xe.title }
          : { url: "/og-image.jpg", width: 1200, height: 630, alt: xe.title },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${xe.title} | DVDL Đại Dương Ban Mê`,
      description: `Dịch vụ ${xe.title} tại Buôn Ma Thuột - Đắk Lắk.`,
    },
  };
}

export default function ThueXePage() {
  return <ThueXeSlugPage />;
}
