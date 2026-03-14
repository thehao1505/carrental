"use client";

import Link from "next/link";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  basePath: string;
}

export default function Pagination({
  currentPage,
  totalPages,
  basePath,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const getPageHref = (page: number) => {
    if (page === 1) return basePath;
    return `${basePath}?page=${page}`;
  };

  // Build page numbers to display
  const getPageNumbers = () => {
    const pages: (number | "...")[] = [];
    const delta = 1; // pages around current

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - delta && i <= currentPage + delta)
      ) {
        pages.push(i);
      } else if (pages[pages.length - 1] !== "...") {
        pages.push("...");
      }
    }
    return pages;
  };

  const pages = getPageNumbers();

  return (
    <nav aria-label="Phân trang" className="flex justify-center items-center gap-2 mt-10">
      {/* Previous */}
      {currentPage > 1 ? (
        <Link
          href={getPageHref(currentPage - 1)}
          className="px-3 py-2 rounded-lg border border-gray-300 text-sm font-medium text-gray-700 hover:bg-forest-500 hover:text-white transition-colors"
        >
          ← Trước
        </Link>
      ) : (
        <span className="px-3 py-2 rounded-lg border border-gray-200 text-sm font-medium text-gray-400 cursor-not-allowed">
          ← Trước
        </span>
      )}

      {/* Page numbers */}
      {pages.map((page, idx) =>
        page === "..." ? (
          <span key={`dots-${idx}`} className="px-2 py-2 text-sm text-gray-500">
            ...
          </span>
        ) : (
          <Link
            key={page}
            href={getPageHref(page)}
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              page === currentPage
                ? "bg-forest-500 text-white shadow-md"
                : "border border-gray-300 text-gray-700 hover:bg-forest-500 hover:text-white"
            }`}
          >
            {page}
          </Link>
        )
      )}

      {/* Next */}
      {currentPage < totalPages ? (
        <Link
          href={getPageHref(currentPage + 1)}
          className="px-3 py-2 rounded-lg border border-gray-300 text-sm font-medium text-gray-700 hover:bg-forest-500 hover:text-white transition-colors"
        >
          Sau →
        </Link>
      ) : (
        <span className="px-3 py-2 rounded-lg border border-gray-200 text-sm font-medium text-gray-400 cursor-not-allowed">
          Sau →
        </span>
      )}
    </nav>
  );
}
