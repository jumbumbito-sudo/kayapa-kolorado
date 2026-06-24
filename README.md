# Sitio Oficial de Kayapa Kolorado con Carta Digital Integrada 🎭🍽️

¡Bienvenido! Este repositorio contiene la **Página Web Oficial de Kayapa Kolorado** (Humorista de Morona Santiago, Ecuador) junto con la **Carta Digital Interactiva** integrada de su restaurante **La Maravilla**.

El diseño es modular, lo que significa que el portafolio personal del artista y el sistema interactivo de pedidos de comida conviven en armonía sin interferir el uno con el otro.

---

## 📂 Estructura de Archivos del Proyecto

Para que el sitio funcione correctamente, debes asegurarte de subir a tu repositorio de GitHub los siguientes archivos:

1. **`index.html`**: El archivo principal que une el portafolio original de Kayapa Kolorado y la sección del **Menú Maravilla** integrada.
2. **`style.css`**: Los estilos visuales originales de la página personal de Kayapa (mantiene su tipografía y colores).
3. **`styles-menu.css`**: Los estilos visuales aislados (*scoped*) de la carta del restaurante (verde selva y oro, vidrio esmerilado, modal de plato y carrito lateral).
4. **`script.js`**: El código interactivo original de la página de Kayapa (para la galería de fotos, modal lightbox y menú de navegación móvil).
5. **`app-menu.js`**: La lógica interactiva de la carta digital (buscador, pestañas, cantidades, calculadora del pedido y enlace directo para pedir por WhatsApp).
6. **Imágenes del sitio**: Asegúrate de subir tus fotos y portadas (`portada_kayapa_fiesta.png`, `120326393_3412416592178677_6561728807973833797_n.jpg`, etc.) en la misma carpeta para que se muestren en la galería y el hero.

---

## 🚀 Funcionalidades Integradas de la Carta

* **Enlace Rápido en Navbar**: Un nuevo link en el menú superior que lleva suavemente al usuario directo a la sección `#menu` (Menú Maravilla).
* **Buscador & Filtros**: Los clientes pueden filtrar platos por pestañas y buscar ingredientes al instante.
* **Calculadora con Carrito Flotante**: Cuando el cliente agrega platos desde el modal de detalles, un botón flotante con una bolsa de compras aparece en la esquina de la pantalla. Al hacer clic, se abre el panel lateral (*drawer*) de la cuenta estimativa sin sacarlo de la navegación principal de la página.
* **Envío Directo a WhatsApp**: El pedido se envía estructurado al WhatsApp del restaurante **(+593 989241938)** con el número de mesa, indicando si es para retirar o a domicilio.

---

## 🛠️ Cómo Publicar tu Sitio Gratis en GitHub Pages

1. **Inicia Sesión en GitHub**: Ve a [github.com](https://github.com/) e ingresa a tu cuenta.
2. **Crea un Repositorio**: Haz clic en **New** (Nuevo), ponle un nombre (ej. `sitio-oficial` o `kayapa-maravilla`), selecciona **Public** y pulsa **Create repository**.
3. **Sube tus archivos**:
   - Pulsa en **"uploading an existing file"** (subir un archivo existente).
   - Arrastra **todos** los archivos de esta carpeta (incluyendo tus archivos `style.css` y `script.js` originales y tus imágenes de galería).
   - Haz clic en **Commit changes** (Confirmar cambios).
4. **Activa las GitHub Pages**:
   - Ve a la pestaña **Settings** (Configuración) en la parte superior derecha de tu repositorio.
   - En el menú izquierdo, haz clic en **Pages**.
   - Bajo **Build and deployment** -> **Branch**, cambia de *None* a **main** (o *master*) y pulsa **Save** (Guardar).
5. ¡Listo! En 1 minuto tu web estará publicada en el enlace que te indica allí (ej. `https://tu-usuario.github.io/nombre-del-repositorio/`).

---

## ⚙️ Modificar el Teléfono del Pedido

Si necesitas cambiar el número donde se reciben los pedidos del restaurante:
1. Abre `app-menu.js` en tu editor de texto.
2. Busca la línea 7: `const WHATSAPP_NUMBER = "593989241938";`
3. Reemplaza `"593989241938"` por tu nuevo número (debe incluir el prefijo del país, ej: `593` para Ecuador, seguido del número celular sin el primer cero).
4. Guarda y vuelve a subir el archivo a GitHub.
