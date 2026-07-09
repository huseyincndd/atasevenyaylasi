import nodemailer from "nodemailer";

// E-posta gönderim fonksiyonu
export const sendOrderEmail = async (orderNumber: string, customerEmail: string, customerName: string) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Gmail adresiniz
        pass: process.env.EMAIL_PASS, // Gmail uygulama şifresi
      },
    });

    const mailOptions = {
      from: `"Ataseven Yaylası" <${process.env.EMAIL_USER}>`,
      to: customerEmail,
      subject: `Siparişiniz Alındı - Sipariş No: ${orderNumber}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #059669; text-align: center;">Ödemeniz Başarıyla Alındı!</h2>
          <p>Merhaba <strong>${customerName}</strong>,</p>
          <p>Bizi tercih ettiğiniz için teşekkür ederiz. <strong>${orderNumber}</strong> numaralı siparişiniz başarıyla sistemimize düşmüştür ve ödemeniz onaylanmıştır.</p>
          <p>Doğal ürünleriniz özenle paketlenip en kısa sürede adresinize doğru yola çıkacaktır. Kargonuz yola çıktığında SMS veya WhatsApp üzerinden bilgilendirileceksiniz.</p>
          
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
          
          <p style="font-size: 12px; color: #666; text-align: center;">
            Bu e-posta otomatik olarak gönderilmiştir. Sorularınız için bizimle iletişime geçebilirsiniz.
          </p>
          <p style="font-size: 12px; color: #666; text-align: center;">
            <strong>Ataseven Yaylası</strong> - 100% Doğal Süt ve Süt Ürünleri
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log(`E-posta başarıyla gönderildi: ${customerEmail}`);
  } catch (error) {
    console.error("E-posta gönderme hatası:", error);
  }
};
