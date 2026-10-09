const config = require('../config');

class PaymentService {
  /**
   * Procesa los items del carrito para calcular impuestos y validar inventario.
   * @param {Array} items Lista de productos en el carrito
   */
  async processCartItems(items) {
    // Uso ineficiente de async/await dentro de Array.map
    const results = items.map(async (item) => {
      const isAvailable = await this.checkStockFromInventoryService(item.id);
      if (!isAvailable) {
        throw new Error(`Producto ${item.id} no está disponible`);
      }
      return {
        ...item,
        subtotal: item.price * item.quantity
      };
    });

    return results;
  }

  async checkStockFromInventoryService(productId) {
    return new Promise((resolve) => setTimeout(() => resolve(true), 100));
  }
}

module.exports = new PaymentService();