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
    const formattedPrice = new Intl.NumberFormat("sr-RS", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(Math.floor(data.totalPrice))

    await resend.emails.send({
      from: "DISHI <narudzbine@disi.rs>",
      to: data.customerEmail,
      subject: `Potvrda porudžbine - ${data.orderNumber}`,
      html: `
        <!DOCTYPE html>
        <html lang="sr">
          <head>
            <meta charset="UTF-8">
            <style>
              body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                margin: 0;
                padding: 0;
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
                <h1>Hvala Vam na porudžbini!</h1>
              </div>
              <div class="content">
                <p>Poštovani/a ${data.customerName},</p>
                <p>Hvala vam na porudžbini! Sa zadovoljstvom pripremamo vaše DISHI trakice za nos.</p>

                <div class="order-details">
                  <h2 style="margin-top: 0;">Detalji porudžbine</h2>
                  <div class="detail-row">
                    <span>Broj porudžbine:</span>
                    <span><strong>${data.orderNumber}</strong></span>
                  </div>
                  <div class="detail-row">
                    <span>Proizvod:</span>
                    <span>DISHI Trakice za Nos</span>
                  </div>
                  <div class="detail-row">
                    <span>Količina:</span>
                    <span>${data.quantity}</span>
                  </div>
                  <div class="detail-row">
                    <span>Ukupna cena:</span>
                    <span>${formattedPrice} RSD</span>
                  </div>
                </div>

                <div class="order-details">
                  <h2 style="margin-top: 0;">Adresa za dostavu</h2>
                  <p style="margin: 0;">
                    ${data.shippingAddress}<br>
                    ${data.city}, ${data.state} ${data.zipCode}
                  </p>
                </div>

                <p>Uskoro ćemo obraditi vašu porudžbinu i poslati je na gore navedenu adresu. Dobićete još jedan email kada vaša porudžbina bude poslata.</p>

                <p>Ako imate bilo kakva pitanja, odgovorite na ovaj email sa vašim brojem porudžbine (${data.orderNumber}).</p>
              </div>
              <div class="footer">
                <p>&copy; ${new Date().getFullYear()} DISHI.rs - Sva prava zadržana.</p>
                <p><a href="https://disi.rs" style="color: #3b82f6;">disi.rs</a></p>
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
