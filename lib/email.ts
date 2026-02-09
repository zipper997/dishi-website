import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

interface OrderConfirmationEmailData {
  orderNumber: string
  customerName: string
  customerEmail: string
  quantity: number
  totalPrice: number
  shippingAddress: string
  city: string
  state: string
  zipCode: string
}

export async function sendOrderConfirmationEmail(
  data: OrderConfirmationEmailData
): Promise<{ success: boolean; error?: string }> {
  try {
    await resend.emails.send({
      from: "Nose Strips <orders@yourdomain.com>", // Update with your verified domain
      to: data.customerEmail,
      subject: `Order Confirmation - ${data.orderNumber}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background-color: #3b82f6;
                color: white;
                padding: 20px;
                text-align: center;
                border-radius: 5px 5px 0 0;
              }
              .content {
                background-color: #f9fafb;
                padding: 30px;
                border: 1px solid #e5e7eb;
              }
              .order-details {
                background-color: white;
                padding: 20px;
                border-radius: 5px;
                margin: 20px 0;
              }
              .detail-row {
                display: flex;
                justify-content: space-between;
                padding: 10px 0;
                border-bottom: 1px solid #e5e7eb;
              }
              .detail-row:last-child {
                border-bottom: none;
                font-weight: bold;
              }
              .footer {
                text-align: center;
                color: #6b7280;
                padding: 20px;
                font-size: 14px;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>Thank You for Your Order!</h1>
              </div>
              <div class="content">
                <p>Hi ${data.customerName},</p>
                <p>Thank you for your order! We're excited to get your nose strips to you.</p>

                <div class="order-details">
                  <h2 style="margin-top: 0;">Order Details</h2>
                  <div class="detail-row">
                    <span>Order Number:</span>
                    <span><strong>${data.orderNumber}</strong></span>
                  </div>
                  <div class="detail-row">
                    <span>Product:</span>
                    <span>Nose Strips</span>
                  </div>
                  <div class="detail-row">
                    <span>Quantity:</span>
                    <span>${data.quantity}</span>
                  </div>
                  <div class="detail-row">
                    <span>Total Price:</span>
                    <span>$${data.totalPrice.toFixed(2)}</span>
                  </div>
                </div>

                <div class="order-details">
                  <h2 style="margin-top: 0;">Shipping Address</h2>
                  <p style="margin: 0;">
                    ${data.shippingAddress}<br>
                    ${data.city}, ${data.state} ${data.zipCode}
                  </p>
                </div>

                <p>We'll process your order shortly and ship it to the address above. You'll receive another email once your order has been shipped.</p>

                <p>If you have any questions about your order, please reply to this email with your order number (${data.orderNumber}).</p>
              </div>
              <div class="footer">
                <p>© ${new Date().getFullYear()} Nose Strips. All rights reserved.</p>
              </div>
            </div>
          </body>
        </html>
      `,
    })

    return { success: true }
  } catch (error) {
    console.error("Error sending email:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to send email",
    }
  }
}
