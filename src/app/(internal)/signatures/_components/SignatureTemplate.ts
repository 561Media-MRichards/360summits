import { Employee } from "../_data/employees";

const SITE_URL = "https://www.360summits.com";
const LOGO_URL = `${SITE_URL}/images/logo-horizontal.png`;

export function generateSignatureHtml(employee: Employee): string {
  return `<table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;font-family:Arial,Helvetica,sans-serif;max-width:520px;width:100%;">
  <!-- Pastel card wrapper -->
  <tr>
    <td style="background:#F3EEFF;border-radius:16px;padding:28px 28px 24px 28px;">
      <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;width:100%;">
        <!-- Logo + Name Row -->
        <tr>
          <td style="padding:0 0 20px 0;">
            <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;width:100%;">
              <tr>
                <!-- Left: Name & Title -->
                <td style="vertical-align:top;padding:0;">
                  <p style="margin:0 0 4px 0;font-size:22px;font-weight:800;color:#1A1A1A;line-height:1.2;mso-line-height-rule:exactly;letter-spacing:-0.3px;">
                    ${employee.name}
                  </p>
                  <p style="margin:0;font-size:13px;font-weight:500;color:#6b6b8d;line-height:1.3;mso-line-height-rule:exactly;letter-spacing:0.5px;text-transform:uppercase;">
                    ${employee.title}
                  </p>
                </td>
                <!-- Right: Logo -->
                <td style="vertical-align:top;text-align:right;padding:2px 0 0 0;">
                  <a href="${SITE_URL}" target="_blank" style="text-decoration:none;">
                    <img src="${LOGO_URL}" alt="360Summits" width="120" height="19" style="display:inline-block;width:120px;height:auto;border:0;outline:none;" />
                  </a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <!-- Purple gradient divider -->
        <tr>
          <td style="padding:0 0 18px 0;">
            <div style="height:3px;border-radius:2px;background:#330362;background:linear-gradient(90deg,#330362 0%,#8B5CF6 50%,#040ECF 100%);">&nbsp;</div>
          </td>
        </tr>
        <!-- Contact info row - horizontal -->
        <tr>
          <td style="padding:0 0 16px 0;">
            <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
              <tr>
                <td style="padding:0 16px 0 0;font-size:13px;line-height:1.4;mso-line-height-rule:exactly;">
                  <a href="tel:${employee.phone.replace(/\./g, "")}" style="color:#1A1A1A;text-decoration:none;font-weight:500;">${employee.phone}</a>
                </td>
                <td style="padding:0 16px 0 0;font-size:13px;color:#dddde8;">|</td>
                <td style="padding:0 16px 0 0;font-size:13px;line-height:1.4;mso-line-height-rule:exactly;">
                  <a href="mailto:${employee.email}" style="color:#330362;text-decoration:none;font-weight:500;">${employee.email}</a>
                </td>
                <td style="padding:0 0 0 0;font-size:13px;color:#dddde8;">|</td>
                <td style="padding:0 0 0 16px;font-size:13px;line-height:1.4;mso-line-height-rule:exactly;">
                  <a href="${SITE_URL}" style="color:#330362;text-decoration:none;font-weight:500;">360summits.com</a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <!-- Social pills row -->
        <tr>
          <td style="padding:0 0 14px 0;">
            <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:separate;">
              <tr>
                <td style="padding:0 6px 0 0;">
                  <a href="https://www.facebook.com/360summits" target="_blank" style="display:inline-block;padding:5px 14px;background:#ffffff;border-radius:20px;font-size:11px;font-weight:600;color:#330362;text-decoration:none;letter-spacing:0.3px;">Facebook</a>
                </td>
                <td style="padding:0 6px 0 0;">
                  <a href="https://www.linkedin.com/company/360summits" target="_blank" style="display:inline-block;padding:5px 14px;background:#ffffff;border-radius:20px;font-size:11px;font-weight:600;color:#330362;text-decoration:none;letter-spacing:0.3px;">LinkedIn</a>
                </td>
                <td style="padding:0;">
                  <a href="https://www.instagram.com/360summits/" target="_blank" style="display:inline-block;padding:5px 14px;background:#ffffff;border-radius:20px;font-size:11px;font-weight:600;color:#330362;text-decoration:none;letter-spacing:0.3px;">Instagram</a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <!-- Tagline -->
        <tr>
          <td style="padding:0;">
            <p style="margin:0;font-size:11px;font-weight:500;color:#8B5CF6;line-height:1.4;mso-line-height-rule:exactly;letter-spacing:0.5px;">
              For Those Who Love Learning
            </p>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>`;
}
