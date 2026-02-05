import nodemailer from 'nodemailer';

interface OrderItem {
  productName: string;
  variantName: string;
  quantity: number;
  price: number;
  total: number;
}

interface OrderDetails {
  orderNumber: string;
  guestName?: string | null;
  guestEmail?: string | null;
  total: number;
  items: OrderItem[];
  shippingAddress: {
    street: string;
    city: string;
    state: string;
    postcode: string;
    country: string;
  };
}

export async function sendOrderNotification(order: OrderDetails) {
  // Email Admin (Steven)
  const adminEmail = process.env.ADMIN_EMAIL || 'steven@hoppingmad.com.au';
  
  // SMTP Config check
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.log('⚠️ SMTP Credentials missing in .env');
    console.log('Would send email to:', adminEmail);
    return;
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true, // Use SSL for Gmail (port 465)
      auth: {
        user: process.env.SMTP_USER, // baliwebdevelover@gmail.com
        pass: process.env.SMTP_PASS, // App Password
      },
    });

    // Email Content (HTML)
    const itemsHtml = order.items
      .map(
        (item) => `
      <tr>
        <td style="padding: 8px; border-bottom: 1px solid #ddd;">${item.productName} - ${item.variantName}</td>
        <td style="padding: 8px; border-bottom: 1px solid #ddd;">${item.quantity}</td>
        <td style="padding: 8px; border-bottom: 1px solid #ddd;">$${item.price}</td>
        <td style="padding: 8px; border-bottom: 1px solid #ddd;">$${item.total}</td>
      </tr>
    `
      )
      .join('');

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
        <h2 style="color: #2563eb;">New Order Received!</h2>
        <p><strong>Order ID:</strong> ${order.orderNumber}</p>
        <p><strong>Customer:</strong> ${order.guestName || 'Guest'} (${order.guestEmail || 'No Email'})</p>
        
        <h3>Order Items</h3>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
          <thead>
            <tr style="background-color: #f3f4f6;">
              <th style="padding: 8px; text-align: left;">Item</th>
              <th style="padding: 8px; text-align: left;">Qty</th>
              <th style="padding: 8px; text-align: left;">Price</th>
              <th style="padding: 8px; text-align: left;">Total</th>
            </tr>
          </thead>
          <tbody>
            ${itemsHtml}
          </tbody>
        </table>
        
        <p style="font-size: 1.25em; font-weight: bold;">Total Paid: $${order.total}</p>
        
        <h3>Shipping Address</h3>
        <p>
          ${order.shippingAddress.street}<br>
          ${order.shippingAddress.city}, ${order.shippingAddress.state} ${order.shippingAddress.postcode}<br>
          ${order.shippingAddress.country}
        </p>
        <hr>
        <p style="font-size: 0.8em; color: #666;">This notification was sent automatically from Modafinil Sydney Website.</p>
      </div>
    `;

    // Send Mail
    await transporter.sendMail({
      from: `"Modafinil Sydney Notification" <${process.env.SMTP_USER}>`,
      to: adminEmail,
      subject: `[New Order] ${order.orderNumber} - $${order.total}`,
      html,
    });

    console.log(`✅ Email notification sent to ${adminEmail}`);
  } catch (error) {
    console.error('❌ Failed to send email:', error);
  }
}
