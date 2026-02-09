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

    const pricePerUnit = new Intl.NumberFormat("sr-RS", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(Math.floor(data.totalPrice / data.quantity))

    const year = new Date().getFullYear()

    await resend.emails.send({
      from: "disi <narudzbine@disi.rs>",
      to: data.customerEmail,
      subject: `Potvrda porudžbine #${data.orderNumber} | disi.rs`,
      html: `
<!DOCTYPE html>
<html lang="sr" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Potvrda porudžbine - disi.rs</title>
  <!--[if mso]>
  <style type="text/css">
    table { border-collapse: collapse; }
    .fallback-font { font-family: Arial, sans-serif; }
  </style>
  <![endif]-->
</head>
<body style="margin: 0; padding: 0; background-color: #f3f4f6; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; -webkit-font-smoothing: antialiased;">

  <!-- Wrapper -->
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #f3f4f6;">
    <tr>
      <td align="center" style="padding: 40px 16px;">

        <!-- Email Container -->
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width: 600px; width: 100%; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05), 0 10px 15px rgba(0, 0, 0, 0.03);">

          <!-- Header with Logo -->
          <tr>
            <td style="background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #60a5fa 100%); padding: 40px 40px 32px; text-align: center;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center" style="padding-bottom: 24px;">
                    <img src="https://disi.rs/logo.png" alt="disi" width="100" style="display: block; width: 100px; height: auto; filter: brightness(0) invert(1);" />
                  </td>
                </tr>
                <tr>
                  <td align="center">
                    <!-- Success checkmark circle -->
                    <table role="presentation" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="background-color: rgba(255,255,255,0.2); border-radius: 50%; width: 64px; height: 64px; text-align: center; vertical-align: middle;">
                          <span style="font-size: 32px; line-height: 64px; color: #ffffff;">&#10003;</span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td align="center" style="padding-top: 20px;">
                    <h1 style="margin: 0; font-size: 26px; font-weight: 700; color: #ffffff; letter-spacing: -0.5px;">Porudžbina Potvrđena!</h1>
                  </td>
                </tr>
                <tr>
                  <td align="center" style="padding-top: 8px;">
                    <p style="margin: 0; font-size: 15px; color: rgba(255,255,255,0.85);">Hvala vam na poverenju</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Greeting -->
          <tr>
            <td style="padding: 36px 40px 0;">
              <p style="margin: 0 0 8px; font-size: 18px; font-weight: 600; color: #111827;">Poštovani/a ${data.customerName},</p>
              <p style="margin: 0; font-size: 15px; line-height: 1.6; color: #4b5563;">Vaša porudžbina je uspešno primljena i već pripremamo vaše <strong style="color: #3b82f6;">disi</strong> trakice za nos. Očekujte dostavu u roku od <strong>2-3 radna dana</strong>.</p>
            </td>
          </tr>

          <!-- Order Number Badge -->
          <tr>
            <td style="padding: 24px 40px 0;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #eff6ff; border-radius: 12px; border: 1px solid #bfdbfe;">
                <tr>
                  <td style="padding: 16px 20px; text-align: center;">
                    <p style="margin: 0 0 4px; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: #6b7280; font-weight: 600;">Broj porudžbine</p>
                    <p style="margin: 0; font-size: 22px; font-weight: 700; color: #1e3a8a; letter-spacing: 1px;">#${data.orderNumber}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Order Details Card -->
          <tr>
            <td style="padding: 24px 40px 0;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden;">
                <!-- Card Header -->
                <tr>
                  <td style="background-color: #f9fafb; padding: 14px 20px; border-bottom: 1px solid #e5e7eb;">
                    <p style="margin: 0; font-size: 14px; font-weight: 700; color: #111827; text-transform: uppercase; letter-spacing: 0.5px;">Detalji porudžbine</p>
                  </td>
                </tr>
                <!-- Product Row -->
                <tr>
                  <td style="padding: 16px 20px; border-bottom: 1px solid #f3f4f6;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="vertical-align: top; width: 48px;">
                          <div style="width: 44px; height: 44px; background-color: #eff6ff; border-radius: 10px; text-align: center; line-height: 44px;">
                            <span style="font-size: 20px;">&#128483;</span>
                          </div>
                        </td>
                        <td style="vertical-align: middle; padding-left: 12px;">
                          <p style="margin: 0 0 2px; font-size: 15px; font-weight: 600; color: #111827;">disi Premium Trakice za Nos</p>
                          <p style="margin: 0; font-size: 13px; color: #6b7280;">Količina: ${data.quantity} × ${pricePerUnit} RSD</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <!-- Total Row -->
                <tr>
                  <td style="padding: 16px 20px; background-color: #f9fafb;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="font-size: 15px; font-weight: 700; color: #111827;">Ukupno</td>
                        <td align="right" style="font-size: 20px; font-weight: 700; color: #3b82f6;">${formattedPrice} RSD</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Shipping Address Card -->
          <tr>
            <td style="padding: 16px 40px 0;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden;">
                <tr>
                  <td style="background-color: #f9fafb; padding: 14px 20px; border-bottom: 1px solid #e5e7eb;">
                    <p style="margin: 0; font-size: 14px; font-weight: 700; color: #111827; text-transform: uppercase; letter-spacing: 0.5px;">Adresa za dostavu</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 16px 20px;">
                    <table role="presentation" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="vertical-align: top; padding-right: 12px;">
                          <span style="font-size: 18px;">&#128205;</span>
                        </td>
                        <td style="vertical-align: top;">
                          <p style="margin: 0; font-size: 15px; line-height: 1.5; color: #374151;">
                            ${data.customerName}<br>
                            ${data.shippingAddress}<br>
                            ${data.city}, ${data.state} ${data.zipCode}
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Timeline / Next Steps -->
          <tr>
            <td style="padding: 28px 40px 0;">
              <p style="margin: 0 0 16px; font-size: 14px; font-weight: 700; color: #111827; text-transform: uppercase; letter-spacing: 0.5px;">Šta sledi?</p>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <!-- Step 1 -->
                <tr>
                  <td style="padding-bottom: 16px;">
                    <table role="presentation" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="vertical-align: top; width: 36px;">
                          <div style="width: 28px; height: 28px; background-color: #3b82f6; border-radius: 50%; text-align: center; line-height: 28px; color: #ffffff; font-size: 13px; font-weight: 700;">1</div>
                        </td>
                        <td style="vertical-align: middle; padding-left: 8px;">
                          <p style="margin: 0; font-size: 14px; color: #374151;"><strong>Obrada porudžbine</strong> — Vaša porudžbina se priprema</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <!-- Step 2 -->
                <tr>
                  <td style="padding-bottom: 16px;">
                    <table role="presentation" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="vertical-align: top; width: 36px;">
                          <div style="width: 28px; height: 28px; background-color: #e5e7eb; border-radius: 50%; text-align: center; line-height: 28px; color: #6b7280; font-size: 13px; font-weight: 700;">2</div>
                        </td>
                        <td style="vertical-align: middle; padding-left: 8px;">
                          <p style="margin: 0; font-size: 14px; color: #374151;"><strong>Slanje paketa</strong> — Dobićete obaveštenje kad pošaljemo</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <!-- Step 3 -->
                <tr>
                  <td>
                    <table role="presentation" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="vertical-align: top; width: 36px;">
                          <div style="width: 28px; height: 28px; background-color: #e5e7eb; border-radius: 50%; text-align: center; line-height: 28px; color: #6b7280; font-size: 13px; font-weight: 700;">3</div>
                        </td>
                        <td style="vertical-align: middle; padding-left: 8px;">
                          <p style="margin: 0; font-size: 14px; color: #374151;"><strong>Dostava</strong> — Za 2-3 radna dana na vašoj adresi</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- CTA Button -->
          <tr>
            <td style="padding: 32px 40px 0;" align="center">
              <table role="presentation" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background-color: #3b82f6; border-radius: 10px;">
                    <a href="https://disi.rs" target="_blank" style="display: inline-block; padding: 14px 32px; font-size: 15px; font-weight: 600; color: #ffffff; text-decoration: none;">Posetite disi.rs</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Help Note -->
          <tr>
            <td style="padding: 28px 40px 0;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #f9fafb; border-radius: 10px;">
                <tr>
                  <td style="padding: 16px 20px; text-align: center;">
                    <p style="margin: 0; font-size: 13px; color: #6b7280; line-height: 1.5;">Imate pitanje? Jednostavno odgovorite na ovaj email ili nas kontaktirajte na <a href="mailto:info@disi.rs" style="color: #3b82f6; text-decoration: none; font-weight: 600;">info@disi.rs</a></p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 32px 40px 36px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="border-top: 1px solid #e5e7eb; padding-top: 24px; text-align: center;">
                    <img src="https://disi.rs/logo.png" alt="disi" width="60" style="display: inline-block; width: 60px; height: auto; opacity: 0.5; margin-bottom: 12px;" />
                    <p style="margin: 0 0 4px; font-size: 13px; color: #9ca3af;">Premium trakice za nos za bolje disanje</p>
                    <p style="margin: 0 0 12px; font-size: 12px; color: #9ca3af;">&copy; ${year} disi.rs — Sva prava zadržana.</p>
                    <p style="margin: 0;">
                      <a href="https://disi.rs" style="font-size: 12px; color: #3b82f6; text-decoration: none;">disi.rs</a>
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
        <!-- End Email Container -->

      </td>
    </tr>
  </table>
  <!-- End Wrapper -->

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
