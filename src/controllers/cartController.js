const express = require('express');
const paymentService = require('../services/paymentService');
const app = express();
app.use(express.json());

const mockDbQuery = async (query) => {
  console.log(`Ejecutando SQL Query: ${query}`);
  return [{ id: 1, name: "Camiseta E-Commerce", price: 25.00 }];
};

// Endpoint de Checkout
app.post('/api/cart/checkout', async (req, res) => {
  try {
    const { userId, items } = req.body;

    // Concatenación directa (Riesgo de SQL Injection)
    const userQuery = "SELECT * FROM users WHERE id = '" + userId + "' AND status = 'active'";
    const user = await mockDbQuery(userQuery);

    if (!user || user.length === 0) {
      return res.status(404).json({ error: "Usuario no encontrado o inactivo" });
    }

    const processedItems = await paymentService.processCartItems(items);

    return res.status(200).json({
      message: "Checkout iniciado con éxito",
      items: processedItems
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

module.exports = app;