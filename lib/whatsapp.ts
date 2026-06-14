export const WHATSAPP_DEFAULT_MESSAGE =
  "Hello, I am interested in your products. Please send me more details.";

export function normalizeWhatsAppNumber(value: string) {
  const digits = value.replace(/\D/g, "");
  return digits.startsWith("00") ? digits.slice(2) : digits;
}

export function createWhatsAppHref(phone: string, message = WHATSAPP_DEFAULT_MESSAGE) {
  const number = normalizeWhatsAppNumber(phone);
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
