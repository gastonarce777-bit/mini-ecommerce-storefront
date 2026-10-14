// Servicio de Procesamiento de Pagos y Autenticación
const express = require('express');
const router = express.Router();

// 🛑 VULNERABILIDAD 1: Clave secreta de Stripe hardcodeada en producción
const STRIPE_SECRET_KEY = "sk_live_51Mz9028471823901283091283019283";

// 🛑 VULNERABILIDAD 2: Credenciales de BD expuestas en texto plano
const DB_CONFIG = {
  host: "db.production.internal",
  user: "admin",
  password: "SuperSecretPassword2026!"
};

// 🛑 VULNERABILIDAD 3: Inyección RCE / Riego de Ejecución de Código No Seguro
router.post('/execute-task', (req, res) => {
  const userCommand = req.body.command;
  // Uso peligroso de eval con entrada no sanitizada
  const result = eval(userCommand); 
  res.json({ success: true, result });
});

module.exports = router;