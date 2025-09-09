import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // Создаём транспорт (пример для Gmail, но лучше использовать SMTP своего домена)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER, // почта отправителя
        pass: process.env.SMTP_PASS // пароль/ключ приложения
      }
    });

    const htmlContent = `
      <!DOCTYPE html>
      <html lang="uk">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Новий запит з сайту</title>
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f8f9fa;
          }
          .container {
            background: white;
            border-radius: 12px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            overflow: hidden;
          }
          .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 30px;
            text-align: center;
          }
          .header h1 {
            margin: 0;
            font-size: 24px;
            font-weight: 600;
          }
          .content {
            padding: 30px;
          }
          .field {
            margin-bottom: 20px;
            padding: 15px;
            background: #f8f9fa;
            border-radius: 8px;
            border-left: 4px solid #667eea;
          }
          .field-label {
            font-weight: 600;
            color: #495057;
            margin-bottom: 5px;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }
          .field-value {
            color: #212529;
            font-size: 16px;
          }
          .message-field {
            background: #fff;
            border: 1px solid #e9ecef;
            border-radius: 8px;
            padding: 20px;
            margin-top: 10px;
            white-space: pre-wrap;
            font-family: inherit;
          }
          .footer {
            background: #f8f9fa;
            padding: 20px;
            text-align: center;
            color: #6c757d;
            font-size: 14px;
            border-top: 1px solid #e9ecef;
          }
          .logo {
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 10px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>📧 Новий запит з сайту</h1>
          </div>
          <div class="content">
            <div class="field">
              <div class="field-label">👤 Ім'я</div>
              <div class="field-value">${name}</div>
            </div>
            <div class="field">
              <div class="field-label">📧 Email</div>
              <div class="field-value">${email}</div>
            </div>
            <div class="field">
              <div class="field-label">💬 Повідомлення</div>
              <div class="message-field">${message}</div>
            </div>
          </div>
          <div class="footer">
            <div class="logo">Vladi Store</div>
            <p>Цей email було відправлено автоматично з вашого сайту</p>
          </div>
        </div>
      </body>
      </html>
    `;

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.RECIPIENT_EMAIL || "your-email@domain.com", // куда отправлять
      subject: "🆕 Новий запит з сайту Vladi Store",
      html: htmlContent,
      text: `
        Новий запит з сайту Vladi Store
        
        Ім'я: ${name}
        Email: ${email}
        Повідомлення:
        ${message}
        
        ---
        Vladi Store
      `
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
