import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const config = {
  url: process.env.NEXT_PUBLIC_BACKEND_URL,
  api_key: process.env.NEXT_PUBLIC_API_KEY,
};
