# Sitio Oficial de Kayapa Kolorado con Carta Digital Independiente 🎭 & 🍽️

¡Bienvenido! Este repositorio contiene la **Página Web Oficial de Kayapa Kolorado** (Humorista de Morona Santiago, Ecuador) junto con la **Carta Digital Interactiva** de su restaurante **La Maravilla** configurada para abrirse en una pestaña separada.

---

## 📂 Archivos del Proyecto a Subir a GitHub

Asegúrate de tener y subir todos los siguientes archivos a la raíz de tu repositorio:

1. **`index.html`**: La página oficial de Kayapa Kolorado. Su Navbar contiene un enlace directo que abre la carta digital en una nueva pestaña:
   ```html
   <li><a href="menu.html" target="_blank" class="nav-link">Menú Maravilla</a></li>
   ```
2. **`menu.html`**: La carta digital de La Maravilla. Tiene un diseño completo independiente con selector de platos, calculadora y sidebar de información.
3. **`style.css`**: Los estilos visuales de la página de Kayapa (debes asegurarte de tener este archivo en tu carpeta).
4. **`styles-menu.css`**: Los estilos exclusivos de la carta digital (verde selva y oro, vidrio esmerilado, modal de plato y el carrito).
5. **`script.js`**: El código interactivo original del portafolio de Kayapa (galería, modal lightbox, etc. - debes asegurarte de tener este archivo).
6. **`app-menu.js`**: El script de control de la carta digital (buscador, pestañas, cantidades, calculadora del pedido y enlace para pedir por WhatsApp).
7. **Imágenes**: Sube también tus portadas y fotos (`portada_kayapa_fiesta.png`, fotos de la galería, etc.).

---

## 🚀 Cómo Publicar tu Sitio Gratis en GitHub Pages

1. **Crea un repositorio en GitHub** llamado como desees (ej: `web-kayapa-maravilla`).
2. **Sube todos los archivos** mencionados arriba (arrastrando y soltando la carpeta completa o el contenido).
3. **Activa GitHub Pages**:
   - Ve a la pestaña **Settings** (Configuración) de tu repositorio.
   - Entra en la sección **Pages** del menú izquierdo.
   - En **Branch**, selecciona **main** (o *master*) y haz clic en **Save** (Guardar).
4. Espera 1 minuto y tu web estará lista en: `https://tu-usuario.github.io/tu-repositorio/index.html`.
5. Si un cliente escanea el código QR que crees de tu web o de `menu.html`, entrará directo a la carta digital interactiva en pantalla completa.

---

## ⚙️ Configuración de WhatsApp en la Carta

Para modificar el teléfono donde recibes los pedidos de comida:
1. Abre `app-menu.js` y ve a la línea 7:
   ```javascript
   const WHATSAPP_NUMBER = "593989241938";
   ```
2. Reemplaza el número manteniendo el código internacional de Ecuador `593` y quitando el primer cero del celular.
3. Guarda el archivo y actualízalo en GitHub.
