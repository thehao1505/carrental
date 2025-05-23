import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Tạo transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER!,
      pass: process.env.EMAIL_PASS!,
    },
  })
}

export async function POST(request: NextRequest) {
  console.log(process.env.EMAIL_USER, process.env.EMAIL_PASS, process.env.ADMIN_EMAIL)
  try {
    const body = await request.json()
    const { name, phone, content } = body

    // Validate dữ liệu
    if (!name || !phone || !content) {
      return NextResponse.json(
        { message: 'Vui lòng điền đầy đủ thông tin', success: false },
        { status: 400 }
      )
    }

    const transporter = createTransporter()

    // Nội dung email
    const mailOptions = {
      from: process.env.EMAIL_USER!,
      to: process.env.ADMIN_EMAIL!,
      subject: `Yêu cầu mới từ ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2d5a3d; border-bottom: 2px solid #2d5a3d; padding-bottom: 10px;">
            🔔 Có yêu cầu mới từ website
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>👤 Họ tên:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>📱 Số điện thoại:</strong> 
              <a href="tel:${phone}" style="color: #2d5a3d;">${phone}</a>
            </p>
            <p style="margin: 10px 0;"><strong>💬 Nội dung yêu cầu:</strong></p>
            <div style="background-color: white; padding: 15px; border-left: 4px solid #2d5a3d; margin: 10px 0;">
              ${content.replace(/\n/g, '<br>')}
            </div>
            <p style="margin: 10px 0; color: #666;">
              <strong>🕒 Thời gian:</strong> ${new Date().toLocaleString('vi-VN', {
                timeZone: 'Asia/Ho_Chi_Minh'
              })}
            </p>
          </div>
          
          <div style="text-align: center; margin: 20px 0;">
            <a href="tel:${phone}" 
               style="background-color: #2d5a3d; color: white; padding: 12px 24px; 
                      text-decoration: none; border-radius: 6px; display: inline-block;">
              📞 Gọi ngay
            </a>
          </div>
        </div>
      `,
    }

    // Gửi email
    await transporter.sendMail(mailOptions)

    // Log để debug (có thể lưu vào database)
    console.log(`New contact request from ${name} (${phone}) at ${new Date().toISOString()}`)

    return NextResponse.json(
      { message: 'Gửi yêu cầu thành công', success: true },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    
    return NextResponse.json(
      { 
        message: 'Có lỗi xảy ra khi gửi yêu cầu. Vui lòng thử lại sau.', 
        success: false 
      },
      { status: 500 }
    )
  }
}