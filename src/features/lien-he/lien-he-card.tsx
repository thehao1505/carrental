'use client';

import { Mail, MapPin, Phone, MessageSquareText } from 'lucide-react';
import Link from 'next/link';
import { ChangeEvent, FormEvent, useState } from 'react';

export interface ContactFormData {
  name: string
  phone: string
  content: string
}

export interface ApiResponse {
  message: string
  success: boolean
}

export default function LienHeCard() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    phone: '',
    content: ''
  })
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [message, setMessage] = useState<string>('')

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data: ApiResponse = await response.json()

      if (response.ok) {
        setMessage('Gửi yêu cầu thành công! Chúng tôi sẽ liên hệ lại sớm.')
        setFormData({ name: '', phone: '', content: '' })
      } else {
        setMessage(data.message || 'Có lỗi xảy ra. Vui lòng thử lại.')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setMessage('Có lỗi xảy ra. Vui lòng thử lại.')
    } finally {
      setIsSubmitting(false)
    }
  }
  
  return (
    <main className='max-w-5xl mx-auto px-6 py-12 text-gray-800'>
      <h1 className='text-3xl font-bold text-forest-600 mb-6 text-center'>
        Liên hệ với chúng tôi
      </h1>
      <p className='text-center text-lg text-gray-600 mb-10'>
        Hãy liên hệ với Đại Dương Travel nếu bạn cần tư vấn tour, báo giá thuê xe
        hoặc hỗ trợ dịch vụ!
      </p>

      {/* Thông tin liên hệ */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-12'>
        <div className='space-y-6'>
          <div className='flex items-start gap-4'>
            <Phone className='text-moss-500 mt-1' />
            <div>
              <p className='font-semibold'>Số điện thoại</p>
              <a
                href='tel:0941437070'
                className='text-forest-500 hover:underline'
              >
                0941 437 070
              </a>
            </div>
          </div>
          <div className='flex items-start gap-4'>
            <MessageSquareText className='text-moss-500 mt-1' />
            <div>
              <p className='font-semibold'>Zalo hỗ trợ</p>
              <Link
                href='https://zalo.me/0941437070'
                target='_blank'
                className='text-forest-500 hover:underline'
              >
                zalo.me/0941437070
              </Link>
            </div>
          </div>
          <div className='flex items-start gap-4'>
            <Mail className='text-moss-500 mt-1' />
            <div>
              <p className='font-semibold'>Email</p>
              <a
                href='mailto:thehao155@gmail.com'
                className='text-forest-500 hover:underline'
              >
                thehao155@gmail.com
              </a>
            </div>
          </div>
          <div className='flex items-start gap-4'>
            <MapPin className='text-moss-500 mt-1' />
            <div>
              <p className='font-semibold'>Địa chỉ</p>
              <p className='text-gray-700'>Buôn Ma Thuột, Đắk Lắk</p>
            </div>
          </div>
        </div>

        {/* (Tùy chọn) Form liên hệ */}
        <form
          onSubmit={handleSubmit}
          className='space-y-4 bg-gray-50 p-6 rounded-xl shadow'
        >
          <h2 className='text-lg font-semibold text-moss-600 mb-2'>
            Gửi yêu cầu
          </h2>
          
          {message && (
            <div className={`p-3 rounded-md ${message.includes('thành công') 
              ? 'bg-green-100 text-green-700' 
              : 'bg-red-100 text-red-700'}`}>
              {message}
            </div>
          )}

          <input
            type='text'
            name='name'
            value={formData.name}
            onChange={handleChange}
            placeholder='Họ và tên'
            className='w-full border px-4 py-2 rounded-md focus:outline-moss-500'
            required
          />
          
          <input
            type='tel'
            name='phone'
            value={formData.phone}
            onChange={handleChange}
            placeholder='Số điện thoại'
            className='w-full border px-4 py-2 rounded-md focus:outline-moss-500'
            required
          />
          
          <textarea
            rows={4}
            name='content'
            value={formData.content}
            onChange={handleChange}
            placeholder='Nội dung yêu cầu'
            className='w-full border px-4 py-2 rounded-md focus:outline-moss-500'
            required
          />
          
          <button
            type='submit'
            disabled={isSubmitting}
            className='bg-forest-500 text-white px-6 py-2 rounded-full hover:bg-forest-600 transition disabled:opacity-50'
          >
            {isSubmitting ? 'Đang gửi...' : 'Gửi yêu cầu'}
          </button>
        </form>
      </div>

      {/* CTA */}
      <div className='text-center mt-16'>
        <p className='text-gray-600'>
          Chúng tôi sẽ phản hồi nhanh nhất trong vòng 1 giờ làm việc.
        </p>
      </div>
    </main>
  );
}
