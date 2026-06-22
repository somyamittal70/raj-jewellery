import { WHATSAPP_NUMBER } from '../data/Product'

/**
 * Generates a WhatsApp inquiry URL pre-filled with product details.
 * @param {Object} product - Product object from products.js
 * @returns {string} Full wa.me URL with encoded message
 */
export function getWhatsAppUrl(product) {
  const message = [
    'Hello,',
    'I am interested in the following jewellery item:',
    '',
    `*Product Name:* ${product.name}`,
    `*Category:* ${product.category}`,
    `*Material:* ${product.metal.charAt(0).toUpperCase() + product.metal.slice(1)}`,
    '',
    product.shortDescription,
    '',
    'Could you please share more details including availability and pricing?',
    '',
    'Thank you.',
  ].join('\n')

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

/**
 * Generates a WhatsApp URL for a general inquiry with no specific product.
 */
export function getWhatsAppGeneralUrl(topic = '') {
  const message = [
    'Hello,',
    topic
      ? `I would like to know more about: ${topic}`
      : 'I would like to enquire about your jewellery collection.',
    '',
    'Please get in touch at your earliest convenience.',
    '',
    'Thank you.',
  ].join('\n')

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

/**
 * Opens WhatsApp in a new tab for a given product.
 */
export function openWhatsAppInquiry(product) {
  window.open(getWhatsAppUrl(product), '_blank', 'noopener,noreferrer')
}