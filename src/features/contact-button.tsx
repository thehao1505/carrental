import { useState } from "react";

export function ContactButton() {
  const [copied, setCopied] = useState(false);
  const [isClicked, setIsClicked] = useState(false)

  const handleCopy = async () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 200);

    try {
      if (typeof window !== 'undefined' && navigator.clipboard) {
        await navigator.clipboard.writeText('0941 437 070');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch (error) {
      console.error('Failed to copy: ', error);
    }
  };
  
  return (
    <>
      {!copied ? (
        <button
          onClick={handleCopy}
          className={`bg-forest-500 cursor-pointer h-[50px] text-sm font-semibold px-6 py-2 rounded-3xl text-lemon-500 w-fit hover:scale-105 transition-all duration-200 transform ${
            isClicked ? 'scale-95' : ''
          }`}
        >
          Liên hệ
        </button>
      ) : (
        <button className='bg-forest-500 text-sm h-[50px] font-semibold px-6 py-2 rounded-3xl text-lemon-500 w-fit'>
          Đã copy sđt
        </button>
      )}
    </>
  );
}