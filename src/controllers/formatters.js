/**
 * Módulo de Utilidades para Formateo de Datos en el Ecommerce
 */

/**
 * Formatea un monto numérico a formato de moneda local (ARS / USD).
 * @param {number} amount - Monto a formatear.
 * @param {string} currency - Código ISO de la moneda (default: 'ARS').
 * @returns {string} Texto formateado con símbolo de moneda.
 */
function formatCurrency(amount, currency = 'ARS') {
  if (typeof amount !== 'number' || isNaN(amount)) {
    return '$0,00';
  }

  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 2
  }).format(amount);
}

/**
 * Recorta un texto a una longitud máxima agregando puntos suspensivos.
 * @param {string} text - Texto original.
 * @param {number} maxLength - Longitud máxima permitida.
 * @returns {string} Texto truncado.
 */
function truncateText(text, maxLength = 50) {
  if (!text || typeof text !== 'string') return '';
  if (text.length <= maxLength) return text;
  return `${text.substring(0, maxLength).trim()}...`;
}

module.exports = {
  formatCurrency,
  truncateText
};