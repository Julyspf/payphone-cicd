const fs = require("fs");
const path = require("path");

const indexPath = path.join(__dirname, "..", "index.html");
const confirmacionPath = path.join(__dirname, "..", "confirmacion.html");

function verificar(condicion, mensaje) {
  if (!condicion) {
    console.error("❌ PRUEBA FALLIDA: " + mensaje);
    process.exit(1);
  }

  console.log("✅ " + mensaje);
}

console.log("\n========================================");
console.log(" PRUEBAS DEL PROYECTO PAYPHONE");
console.log("========================================\n");

verificar(
  fs.existsSync(indexPath),
  "El archivo index.html existe"
);

verificar(
  fs.existsSync(confirmacionPath),
  "El archivo confirmacion.html existe"
);

const indexHtml = fs.readFileSync(indexPath, "utf8");
const confirmacionHtml = fs.readFileSync(confirmacionPath, "utf8");

verificar(
  indexHtml.includes("TechHub Store"),
  "La tienda TechHub Store está configurada"
);

verificar(
  indexHtml.includes("PPaymentButtonBox"),
  "La Cajita de Pagos de Payphone está configurada"
);

verificar(
  indexHtml.includes("__PAYPHONE_TOKEN__"),
  "index.html utiliza el marcador seguro del token"
);

verificar(
  !indexHtml.includes("fM0e"),
  "index.html no contiene el token real original"
);

verificar(
  indexHtml.includes("storeId"),
  "El Store ID de Payphone está configurado"
);

verificar(
  indexHtml.includes("agregarAlCarrito"),
  "La función para agregar productos al carrito existe"
);

verificar(
  indexHtml.includes("inicializarPagoPayPhone"),
  "La función para iniciar el pago existe"
);

verificar(
  confirmacionHtml.includes("Resultado del Pago"),
  "La página de confirmación está configurada"
);

verificar(
  confirmacionHtml.includes("clientTransactionId"),
  "La página de confirmación lee el ID de referencia"
);

verificar(
  confirmacionHtml.includes("index.html"),
  "El botón de retorno apunta a index.html"
);

console.log("\n========================================");
console.log(" 🎉 TODAS LAS PRUEBAS FUERON APROBADAS");
console.log("========================================\n");