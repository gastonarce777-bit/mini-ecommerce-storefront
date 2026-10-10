# Mini Storefront E-Commerce (Testbed para Agente de IA)

Este repositorio es un prototipo simplificado de un servicio de e-commerce construido en Node.js y Express. Sirve como código base de prueba para evaluar un agente orquestado en **n8n**, el cual realiza Code Reviews automáticos, detección de vulnerabilidades y control de calidad (Gatekeeper) en Pull Requests.

## Estructura del Proyecto
- `src/config.js`: Configuración general del entorno.
- `src/services/paymentService.js`: Lógica de procesamiento de pagos y verificación de inventario.
- `src/controllers/cartController.js`: Endpoints de la API para el carrito y checkout.

## Instalación y Ejecución Local
```bash
npm install
npm start

## PRUEBA FASE2
