import { Employee } from "../_data/employees";

const SITE_URL = "https://www.360summits.com";
const LOGO_URL = `${SITE_URL}/images/logo-horizontal.png`;

export function generateSignatureHtml(employee: Employee): string {
  return `<table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;font-family:Arial,Helvetica,sans-serif;max-width:520px;width:100%;">
  <!-- Glassmorphic card wrapper -->
  <tr>
    <td style="background:linear-gradient(135deg,#F3EEFF 0%,#EEF6FF 50%,#FFF0F3 100%);border-radius:20px;padding:0;">
      <!-- Top accent bar - vivid gradient -->
      <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;width:100%;">
        <tr>
          <td style="height:5px;border-radius:20px 20px 0 0;background:#330362;background:linear-gradient(90deg,#330362 0%,#8B5CF6 30%,#040ECF 60%,#84CC16 100%);">&nbsp;</td>
        </tr>
      </table>
      <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;width:100%;padding:0;">
        <tr>
          <td style="padding:24px 28px 22px 28px;">
            <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;width:100%;">
              <!-- Logo + Name Row -->
              <tr>
                <td style="padding:0 0 18px 0;">
                  <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;width:100%;">
                    <tr>
                      <td style="vertical-align:middle;padding:0;">
                        <p style="margin:0 0 3px 0;font-size:22px;font-weight:800;color:#1A1A1A;line-height:1.2;mso-line-height-rule:exactly;letter-spacing:-0.3px;">
                          ${employee.name}
                        </p>
                        <p style="margin:0;font-size:12px;font-weight:600;color:#8B5CF6;line-height:1.3;mso-line-height-rule:exactly;letter-spacing:1px;text-transform:uppercase;">
                          ${employee.title}
                        </p>
                      </td>
                      <td style="vertical-align:top;text-align:right;padding:4px 0 0 0;">
                        <a href="${SITE_URL}" target="_blank" style="text-decoration:none;">
                          <img src="${LOGO_URL}" alt="360Summits" width="110" height="18" style="display:inline-block;width:110px;height:auto;border:0;outline:none;" />
                        </a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <!-- Contact info with colored icons -->
              <tr>
                <td style="padding:0 0 16px 0;">
                  <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;font-size:13px;line-height:1.5;mso-line-height-rule:exactly;">
                    <tr>
                      <td style="padding:0 0 4px 0;">
                        <span style="display:inline-block;width:18px;font-size:14px;vertical-align:middle;">&#9742;</span>
                        <a href="tel:${employee.phone.replace(/\./g, "")}" style="color:#1A1A1A;text-decoration:none;font-weight:500;vertical-align:middle;">${employee.phone}</a>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:0 0 4px 0;">
                        <span style="display:inline-block;width:18px;font-size:14px;vertical-align:middle;">&#9993;</span>
                        <a href="mailto:${employee.email}" style="color:#330362;text-decoration:none;font-weight:600;vertical-align:middle;">${employee.email}</a>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:0;">
                        <span style="display:inline-block;width:18px;font-size:14px;vertical-align:middle;">&#127760;</span>
                        <a href="${SITE_URL}" style="color:#040ECF;text-decoration:none;font-weight:600;vertical-align:middle;">360summits.com</a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <!-- Thin divider -->
              <tr>
                <td style="padding:0 0 14px 0;">
                  <div style="height:1px;background:linear-gradient(90deg,rgba(139,92,246,0.3) 0%,rgba(4,14,207,0.2) 50%,rgba(132,204,22,0.3) 100%);">&nbsp;</div>
                </td>
              </tr>
              <!-- Social pills row - colored pills -->
              <tr>
                <td style="padding:0 0 14px 0;">
                  <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:separate;">
                    <tr>
                      <td style="padding:0 5px 0 0;">
                        <a href="https://www.facebook.com/360summits" target="_blank" style="display:inline-block;padding:5px 14px;background:#E8DEFF;border-radius:20px;font-size:11px;font-weight:700;color:#330362;text-decoration:none;letter-spacing:0.3px;">Facebook</a>
                      </td>
                      <td style="padding:0 5px 0 0;">
                        <a href="https://www.linkedin.com/company/360summits" target="_blank" style="display:inline-block;padding:5px 14px;background:#D1ECFF;border-radius:20px;font-size:11px;font-weight:700;color:#040ECF;text-decoration:none;letter-spacing:0.3px;">LinkedIn</a>
                      </td>
                      <td style="padding:0;">
                        <a href="https://www.instagram.com/360summits/" target="_blank" style="display:inline-block;padding:5px 14px;background:#FFD9E2;border-radius:20px;font-size:11px;font-weight:700;color:#9f1239;text-decoration:none;letter-spacing:0.3px;">Instagram</a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <!-- Tagline with lime accent -->
              <tr>
                <td style="padding:0;">
                  <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
                    <tr>
                      <td style="width:3px;background:#84CC16;border-radius:2px;">&nbsp;</td>
                      <td style="padding:0 0 0 10px;">
                        <p style="margin:0;font-size:11px;font-weight:600;color:#65A30D;line-height:1.4;mso-line-height-rule:exactly;letter-spacing:0.3px;font-style:italic;">
                          For Those Who Love Learning
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>`;
}
