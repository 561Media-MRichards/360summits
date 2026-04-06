import { Employee } from "../_data/employees";

const SITE_URL = "https://www.360summits.com";
const LOGO_URL = `${SITE_URL}/images/logo-horizontal.png`;

const BRAND_PURPLE = "#330362";
const BRAND_BLUE = "#040ECF";
const BRAND_LIME_DARK = "#65A30D";
const TEXT_GRAY = "#555555";
const DIVIDER_LIGHT = "#e0e0e0";

export function generateSignatureHtml(employee: Employee): string {
  return `<table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;font-family:Arial,Helvetica,sans-serif;max-width:480px;">
  <tr>
    <td style="padding:0 0 12px 0;">
      <a href="${SITE_URL}" target="_blank" style="text-decoration:none;">
        <img src="${LOGO_URL}" alt="360Summits" width="180" height="29" style="display:block;width:180px;height:auto;border:0;outline:none;" />
      </a>
    </td>
  </tr>
  <tr>
    <td style="padding:0 0 12px 0;">
      <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
        <tr>
          <td style="border-left:3px solid ${BRAND_PURPLE};padding:0 0 0 14px;">
            <p style="margin:0 0 2px 0;font-size:18px;font-weight:700;color:${BRAND_PURPLE};line-height:1.3;mso-line-height-rule:exactly;">
              ${employee.name}
            </p>
            <p style="margin:0;font-size:14px;font-weight:400;color:${TEXT_GRAY};line-height:1.3;mso-line-height-rule:exactly;">
              ${employee.title}
            </p>
          </td>
        </tr>
      </table>
    </td>
  </tr>
  <tr>
    <td style="padding:0 0 12px 0;">
      <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;font-size:13px;color:${TEXT_GRAY};line-height:1.6;mso-line-height-rule:exactly;">
        <tr>
          <td style="padding:0 0 2px 0;">
            <span style="color:${BRAND_PURPLE};font-weight:600;">p:</span>&nbsp;
            <a href="tel:${employee.phone.replace(/\./g, "")}" style="color:${TEXT_GRAY};text-decoration:none;">${employee.phone}</a>
          </td>
        </tr>
        <tr>
          <td style="padding:0 0 2px 0;">
            <span style="color:${BRAND_PURPLE};font-weight:600;">e:</span>&nbsp;
            <a href="mailto:${employee.email}" style="color:${BRAND_BLUE};text-decoration:none;">${employee.email}</a>
          </td>
        </tr>
        <tr>
          <td style="padding:0;">
            <span style="color:${BRAND_PURPLE};font-weight:600;">w:</span>&nbsp;
            <a href="${SITE_URL}" style="color:${BRAND_BLUE};text-decoration:none;">www.360summits.com</a>
          </td>
        </tr>
      </table>
    </td>
  </tr>
  <tr>
    <td style="padding:0 0 10px 0;">
      <div style="border-top:1px solid ${DIVIDER_LIGHT};height:0;font-size:0;line-height:0;">&nbsp;</div>
    </td>
  </tr>
  <tr>
    <td style="padding:0 0 10px 0;font-size:12px;line-height:1.4;">
      <a href="https://www.facebook.com/360summits" target="_blank" style="color:${BRAND_BLUE};text-decoration:none;font-weight:500;">Facebook</a>
      <span style="color:${DIVIDER_LIGHT};padding:0 6px;">|</span>
      <a href="https://www.linkedin.com/company/360summits" target="_blank" style="color:${BRAND_BLUE};text-decoration:none;font-weight:500;">LinkedIn</a>
      <span style="color:${DIVIDER_LIGHT};padding:0 6px;">|</span>
      <a href="https://www.instagram.com/360summits/" target="_blank" style="color:${BRAND_BLUE};text-decoration:none;font-weight:500;">Instagram</a>
    </td>
  </tr>
  <tr>
    <td style="padding:0;">
      <p style="margin:0;font-size:11px;font-style:italic;color:${BRAND_LIME_DARK};line-height:1.4;mso-line-height-rule:exactly;">
        For Those Who Love Learning
      </p>
    </td>
  </tr>
</table>`;
}
