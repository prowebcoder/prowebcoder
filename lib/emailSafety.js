/** Escape text for interpolation into HTML email bodies. */
export function escapeHtml(value) {
  if (value == null) return "";
  return String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

/** Reduce header injection risk (SMTP / mail headers accept CRLF in some parsers). */
export function sanitizeMailHeaderChunk(value, maxLen = 256) {
  if (value == null) return "";
  return String(value)
    .replace(/[\x00-\x08\x0b\x0c\x0e-\x1f\x7f]/g, " ")
    .replace(/\r?\n|\r|\u2028|\u2029/g, " ")
    .trim()
    .slice(0, maxLen);
}

const EMAIL_RE = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

export function isValidEmail(email) {
  if (!email || typeof email !== "string") return false;
  const trimmed = email.trim();
  return trimmed.length <= 254 && EMAIL_RE.test(trimmed);
}
