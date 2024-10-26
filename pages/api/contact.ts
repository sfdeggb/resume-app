import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body

    // 创建 Nodemailer 传输器
    const transporter = nodemailer.createTransport({
      host: 'smtp.163.com',
      port: 465,
      secure: true, // 使用 SSL
      auth: {
        user: 'zjmac1635@163.com', // 替换为您的163邮箱
        pass: 'EYT4HRDB8ZeYWPwb' // 替换为您的密码或应用专用密码
      }
    })

    try {
      // 发送邮件
      await transporter.sendMail({
        from: 'zjmac1635@163.com', // 替换为您的163邮箱
        to: 'zjmac1635@163.com',
        subject: '有人联系你啦！',
        text: `
          姓名: ${name}
          邮箱: ${email}
          留言: ${message}
        `
      })

      res.status(200).json({ message: '邮件发送成功' })
    } catch (error) {
      console.error('发送邮件时出错:', error)
      res.status(500).json({ message: '发送邮件失败' })
    }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
