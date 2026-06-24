/* ==========================================================================
   app-menu.js - Lógica de la Carta Digital de "La Maravilla"
   Adaptado para integrarse en la web de Kayapa Kolorado.
   ========================================================================== */

// Número de WhatsApp del restaurante (Ecuador country code +593)
const WHATSAPP_NUMBER = "593989241938";

// Categorías del Menú
const categories = {
    'especiales': {
        name: 'Especiales Maravilla',
        desc: 'Nuestras especialidades de la casa y cortes premium seleccionados.',
        icon: 'star'
    },
    'carnes-pollos': {
        name: 'Carnes & Pollos',
        desc: 'Platos tradicionales de res, cerdo y pollo al grill y a la plancha.',
        icon: 'beef'
    },
    'mariscos': {
        name: 'Clásicos del Mar',
        desc: 'Los mejores mariscos frescos preparados con el toque de la casa.',
        icon: 'waves'
    },
    'compartir': {
        name: 'Para Compartir & Piqueos',
        desc: 'Bandejas abundantes, picaditas, alitas y acompañamientos para disfrutar en grupo.',
        icon: 'users'
    },
    'ensaladas-sanduches': {
        name: 'Sánduches & Ensaladas',
        desc: 'Hamburguesas premium, sánduches gourmet y ensaladas frescas.',
        icon: 'salad'
    },
    'bebidas-postres': {
        name: 'Bebidas & Postres',
        desc: 'Brebajes amazónicos de la selva, jugos naturales, cervezas y postres.',
        icon: 'cup-soda'
    }
};

// Datos del Menú (Platos y Bebidas)
const menuItems = [
    // --- ESPECIALES MARAVILLA ---
    {
        id: 'mar-tierra-amazonico',
        name: 'Mar y Tierra Amazónico',
        desc: 'Mix de mariscos (camarón, pulpo, calamar, almeja y mejillón) en salsa de la casa más una porción de Lomo Fino al grill. Acompañado de chimichurri, yuca frita o patacón y ensalada fresca.',
        category: 'especiales',
        price: 16.00,
        badges: ['special', 'amazon']
    },
    {
        id: 'lomo-fino-kayapa',
        name: 'Lomo Fino a lo Kayapa',
        desc: 'Corte Premium de Lomo Fino de res al grill en salsa oscura especial, más champiñones, chorizo paisa y camarones. Acompañado de puré de papa tradicional y ensalada fresca.',
        category: 'especiales',
        price: 16.95,
        badges: ['special', 'amazon']
    },
    {
        id: 'kayapasta',
        name: 'Kayapasta',
        desc: 'Jugoso corte de carne de res (Premium) a la parrilla sobre una cama de espagueti al dente bañado con la salsa especial de la casa (Salsa Kayapa - contiene camarón y champiñón).',
        category: 'especiales',
        price: 13.50,
        badges: ['special']
    },
    {
        id: 'costillas-premium-ahumadas',
        name: 'Costillas Premium Ahumadas al Barril',
        desc: 'Costillas Premium de cerdo, cocidas a fuego lento y ahumadas artesanalmente al barril. Bañadas en la salsa de su elección. Servidas con papas fritas y ensalada fresca.',
        category: 'especiales',
        price: 13.50,
        badges: ['special'],
        options: [
            {
                name: 'Selecciona tu Salsa',
                type: 'addon',
                choices: [
                    { name: 'Salsa BBQ', price: 0 },
                    { name: 'Salsa de Maracuyá', price: 0 },
                    { name: 'Salsa Búfalo', price: 0 },
                    { name: 'Salsa Americana', price: 0 },
                    { name: 'Salsa Miel-Mostaza', price: 0 },
                    { name: 'Salsa BBQ Picante', price: 0 }
                ]
            }
        ]
    },
    {
        id: 'cortes-de-carne-premium',
        name: 'Cortes de Carne Premium',
        desc: 'Contamos con una selección de cortes Premium: Tomahawk, Ribeye, T-bone, Picaña, Cuadril, Cowboy o Bife de chorizo. Consulte disponibilidad y precios de nuestras existencias del día directamente con su mesero.',
        category: 'especiales',
        price: null,
        badges: ['special'],
        isInfoOnly: true,
        infoText: 'Cortes Premium del día (Precio varía según peso)'
    },

    // --- CARNES & POLLOS ---
    {
        id: 'pollo-al-grill',
        name: 'Pollo al Grill',
        desc: 'Jugosa pechuga de pollo asada en el grill, marinada y realzada con un chimichurri amazónico de aromas frescos. Acompañada de papas fritas, salsas de la casa y ensalada fresca.',
        category: 'carnes-pollos',
        price: 7.00,
        badges: ['amazon']
    },
    {
        id: 'milanesa-dorada-pollo',
        name: 'Milanesa Dorada de Pollo',
        desc: 'Filete de pechuga de pollo apanado al estilo casero, dorado y crujiente por fuera, suave y jugoso por dentro. Acompañado de puré de papa, salsas artesanales de la casa y ensalada fresca.',
        category: 'carnes-pollos',
        price: 8.00,
        badges: []
    },
    {
        id: 'pollo-cremoso-selva',
        name: 'Pollo Cremoso de la Selva',
        desc: 'Filete de pechuga de pollo a la parrilla, bañado en una deliciosa salsa cremosa de champiñones. Acompañado con papas fritas y ensalada fresca.',
        category: 'carnes-pollos',
        price: 8.50,
        badges: ['amazon']
    },
    {
        id: 'picadita-macabea-tradicional',
        name: 'Picadita Macabea Tradicional',
        desc: 'Carne salteada de res con yuca frita crujiente, ensalada fresca de la casa y huevo frito.',
        category: 'carnes-pollos',
        price: 8.50,
        badges: ['amazon']
    },
    {
        id: 'lomo-fino-stroganoff',
        name: 'Lomo Fino Stroganoff',
        desc: 'Trocitos de lomo fino salteados con champiñones frescos y cebolla, bañados en una cremosa salsa a base de vino tinto, paprika y crema de leche. Servido con papas fritas y ensalada.',
        category: 'carnes-pollos',
        price: 8.50,
        badges: []
    },
    {
        id: 'churrasco-maravilla',
        name: 'Churrasco Maravilla',
        desc: 'Jugoso bistec de carne de res y vegetales. Se sirve acompañado con arroz, un par de huevos fritos, papas fritas, maduro frito y ensalada fresca.',
        category: 'carnes-pollos',
        price: 10.00,
        badges: ['popular']
    },
    {
        id: 'costillas-maravillosas',
        name: 'Costillas Maravillosas',
        desc: 'Costillas Premium de cerdo tiernas y jugosas en corte Americano, preparadas en el horno y bañadas en la salsa de su elección. Servidas con puré de papa y ensalada fresca.',
        category: 'carnes-pollos',
        price: 11.75,
        badges: [],
        options: [
            {
                name: 'Selecciona tu Salsa',
                type: 'addon',
                choices: [
                    { name: 'Salsa BBQ', price: 0 },
                    { name: 'Salsa de Maracuyá', price: 0 },
                    { name: 'Salsa Búfalo', price: 0 },
                    { name: 'Salsa Americana', price: 0 },
                    { name: 'Salsa Miel-Mostaza', price: 0 },
                    { name: 'Salsa BBQ Picante', price: 0 }
                ]
            }
        ]
    },
    {
        id: 'lomo-fino-tradicion',
        name: 'Lomo Fino Tradición de la Casa',
        desc: 'Corte Premium de Lomo Fino de res al grill con chimichurri casero. Se acompaña de papas fritas, salsas artesanales y ensalada fresca.',
        category: 'carnes-pollos',
        price: 15.00,
        badges: []
    },

    // --- CLÁSICOS DEL MAR ---
    {
        id: 'camarones-ajillo',
        name: 'Camarones al Ajillo',
        desc: 'Camarones frescos salteados en mantequilla con ajo dorado y un toque de limón, creando un sabor intenso y aromático. Servidos con papas fritas o patacones, salsas y ensalada fresca.',
        category: 'mariscos',
        price: 8.50,
        badges: [],
        options: [
            {
                name: 'Guarnición',
                type: 'addon',
                choices: [
                    { name: 'Con Papas Fritas', price: 0 },
                    { name: 'Con Patacones', price: 0 }
                ]
            }
        ]
    },
    {
        id: 'camarones-apanados',
        name: 'Camarones Apanados',
        desc: 'Camarones apanados crujientes, servidos con papas fritas o patacones, ensalada fresca y salsas artesanales y clásicas de la casa.',
        category: 'mariscos',
        price: 8.50,
        badges: [],
        options: [
            {
                name: 'Guarnición',
                type: 'addon',
                choices: [
                    { name: 'Con Papas Fritas', price: 0 },
                    { name: 'Con Patacones', price: 0 }
                ]
            }
        ]
    },
    {
        id: 'camarones-reventados',
        name: 'Camarones Reventados',
        desc: 'Camarones extra crocantes y dorados, servidos con papas fritas o patacones, ensalada fresca y salsas artesanales de la casa.',
        category: 'mariscos',
        price: 8.50,
        badges: [],
        options: [
            {
                name: 'Guarnición',
                type: 'addon',
                choices: [
                    { name: 'Con Papas Fritas', price: 0 },
                    { name: 'Con Patacones', price: 0 }
                ]
            }
        ]
    },
    {
        id: 'calamar-crispy',
        name: 'Calamar Crispy',
        desc: 'Calamares rebozados y dorados al punto perfecto de crocancia, acompañados de papas fritas o patacones, ensalada fresca y salsas artesanales.',
        category: 'mariscos',
        price: 8.50,
        badges: [],
        options: [
            {
                name: 'Guarnición',
                type: 'addon',
                choices: [
                    { name: 'Con Papas Fritas', price: 0 },
                    { name: 'Con Patacones', price: 0 }
                ]
            }
        ]
    },
    {
        id: 'arroz-camaron',
        name: 'Arroz con Camarón',
        desc: 'Arroz salteado con camarones frescos, vegetales aromáticos, un toque de achiote y hierbas finas. Servido con maduro frito y salsas de la casa.',
        category: 'mariscos',
        price: 8.50,
        badges: []
    },
    {
        id: 'mixto-del-mar',
        name: 'Mixto del Mar',
        desc: 'Mariscos frescos y jugosos salteados en mantequilla con un toque de vino blanco. Servidos con yuca frita o patacones, acompañados de salsas y ensalada fresca.',
        category: 'mariscos',
        price: 10.00,
        badges: ['popular'],
        options: [
            {
                name: 'Guarnición',
                type: 'addon',
                choices: [
                    { name: 'Con Yuca Frita', price: 0 },
                    { name: 'Con Patacones', price: 0 }
                ]
            }
        ]
    },
    {
        id: 'arroz-mariscos',
        name: 'Arroz con Mariscos (Tipo Marinero)',
        desc: 'Arroz salteado de mariscos frescos y vegetales seleccionados, aromatizado con hierbas finas y vino blanco. Servido con maduro frito y salsas artesanales de la casa.',
        category: 'mariscos',
        price: 12.50,
        badges: ['special']
    },

    // --- PARA COMPARTIR & PIQUEOS ---
    {
        id: 'bandeja-tradicional-pobre',
        name: 'Bandeja Tradicional a lo Pobre',
        desc: 'Selección de carnes y sabores típicos sugerida para 3 a 4 personas: pollo, res, salchicha especial, queso fresco, yuca frita, maduro frito, chimichurri y salsas de la casa.',
        category: 'compartir',
        price: 17.50,
        badges: []
    },
    {
        id: 'bandeja-suprema-maravilla',
        name: 'Bandeja Suprema Maravilla',
        desc: 'Combinación gourmet para compartir (sugerido para 3 a 4 personas): carne de res al grill, camarón, chorizo paisa, 6 alitas BBQ, queso fresco, yuca dorada, maduro frito, chimichurri y salsas.',
        category: 'compartir',
        price: 25.00,
        badges: ['special']
    },
    {
        id: 'alitas-maravilla',
        name: 'Alitas de Pollo Doradas',
        desc: 'Alitas de pollo doradas y crujientes, bañadas en la salsa de su elección. Se sirven acompañadas de papas fritas y ensalada fresca.',
        category: 'compartir',
        price: null,
        badges: [],
        options: [
            {
                name: 'Cantidad',
                type: 'size',
                choices: [
                    { name: 'Porción de 6 Alitas', price: 7.00 },
                    { name: 'Porción de 12 Alitas', price: 12.00 },
                    { name: 'Porción de 18 Alitas', price: 15.00 }
                ]
            },
            {
                name: 'Salsa',
                type: 'addon',
                choices: [
                    { name: 'Salsa BBQ', price: 0 },
                    { name: 'Salsa de Maracuyá', price: 0 },
                    { name: 'Salsa Americana', price: 0 },
                    { name: 'Salsa Miel-Mostaza', price: 0 },
                    { name: 'Salsa Dorada', price: 0 },
                    { name: 'Salsa BBQ Picante', price: 0 }
                ]
            }
        ]
    },
    {
        id: 'picadita-pollo',
        name: 'Picadita de Pollo',
        desc: 'Deliciosa picadita de pollo preparada al momento. Acompañada de papas fritas o patacones, ensalada fresca y salsas artesanales.',
        category: 'compartir',
        price: 7.00,
        badges: [],
        options: [
            {
                name: 'Guarnición',
                type: 'addon',
                choices: [
                    { name: 'Con Papas Fritas', price: 0 },
                    { name: 'Con Patacones', price: 0 }
                ]
            }
        ]
    },
    {
        id: 'picadita-carne',
        name: 'Picadita de Carne',
        desc: 'Picadita con trozos de res sazonados y salteados. Acompañada de papas fritas o patacones, ensalada fresca y salsas artesanales.',
        category: 'compartir',
        price: 8.50,
        badges: [],
        options: [
            {
                name: 'Guarnición',
                type: 'addon',
                choices: [
                    { name: 'Con Papas Fritas', price: 0 },
                    { name: 'Con Patacones', price: 0 }
                ]
            }
        ]
    },
    {
        id: 'picadita-mixta-original',
        name: 'Picadita Mixta Original',
        desc: 'Picadita con carne de res y pollo. Acompañada de papas fritas o patacones, ensalada fresca y salsas de la casa.',
        category: 'compartir',
        price: 9.00,
        badges: [],
        options: [
            {
                name: 'Guarnición',
                type: 'addon',
                choices: [
                    { name: 'Con Papas Fritas', price: 0 },
                    { name: 'Con Patacones', price: 0 }
                ]
            }
        ]
    },
    {
        id: 'picadita-mixta-especial',
        name: 'Picadita Mixta Especial',
        desc: 'Picadita premium que combina camarón y pollo. Acompañada de papas fritas o patacones, ensalada fresca y salsas artesanales.',
        category: 'compartir',
        price: 10.00,
        badges: [],
        options: [
            {
                name: 'Guarnición',
                type: 'addon',
                choices: [
                    { name: 'Con Papas Fritas', price: 0 },
                    { name: 'Con Patacones', price: 0 }
                ]
            }
        ]
    },
    {
        id: 'picadita-mixta-suprema',
        name: 'Picadita Mixta Suprema',
        desc: 'Nuestra combinación más potente: tierna carne de res y camarones frescos salteados. Servida con papas fritas o patacones, ensalada y salsas.',
        category: 'compartir',
        price: 12.00,
        badges: ['popular'],
        options: [
            {
                name: 'Guarnición',
                type: 'addon',
                choices: [
                    { name: 'Con Papas Fritas', price: 0 },
                    { name: 'Con Patacones', price: 0 }
                ]
            }
        ]
    },
    {
        id: 'yuca-frita-queso',
        name: 'Yuquita Frita con Queso',
        desc: 'Porción de yucas fritas crujientes espolvoreadas con abundante queso fresco.',
        category: 'compartir',
        price: 3.50,
        badges: []
    },
    {
        id: 'patacones-queso',
        name: 'Patacones con Queso',
        desc: 'Crujientes patacones de plátano verde preparados al instante, acompañados de queso fresco.',
        category: 'compartir',
        price: 3.50,
        badges: []
    },
    {
        id: 'maduritos-queso',
        name: 'Maduritos con Queso',
        desc: 'Plátano maduro frito, dulce y suave, servido con queso fresco rallado.',
        category: 'compartir',
        price: 3.50,
        badges: []
    },
    {
        id: 'papas-rancheras',
        name: 'Papas Rancheras',
        desc: 'Papas fritas crujientes bañadas en salsas especiales y acompañadas con trozos de chorizo y queso fundido.',
        category: 'compartir',
        price: 5.00,
        badges: []
    },

    // --- SÁNDUCHES & ENSALADAS ---
    {
        id: 'hamburguesa-clasica',
        name: 'Hamburguesa Clásica',
        desc: 'Jugosa carne al grill, queso cheddar, tocino crujiente, lechuga y tomate fresco. Acompañada con papas fritas y salsas de la casa.',
        category: 'ensaladas-sanduches',
        price: 5.00,
        badges: []
    },
    {
        id: 'hamburguesa-maravilla',
        name: 'Hamburguesa Maravilla',
        desc: 'Nuestra hamburguesa insignia: doble porción de carne al grill, doble queso cheddar, doble tocino, huevo frito, lechuga, tomate y papas fritas con salsas.',
        category: 'ensaladas-sanduches',
        price: 7.50,
        badges: ['popular']
    },
    {
        id: 'chicken-sandwich',
        name: 'Chicken Sandwich Gourmet',
        desc: 'Sánduche gourmet de pechuga de pollo al grill con una cremosa salsa de champiñones, queso mozzarella fundido, lechuga y tomate. Servido con papas fritas laminadas.',
        category: 'ensaladas-sanduches',
        price: 8.50,
        badges: []
    },
    {
        id: 'ensalada-camaron',
        name: 'Ensalada de Camarón',
        desc: 'Camarones seleccionados sobre una cama fresca de lechuga, pepinillo, tomate, cebolla y la salsa especial del chef.',
        category: 'ensaladas-sanduches',
        price: 7.50,
        badges: []
    },
    {
        id: 'ensalada-camaron-rio',
        name: 'Ensalada de Camarón del Río',
        desc: 'Variación especial con camarones del río salteados sobre lechuga crujiente, pepinillo, tomate, cebolla y aderezo artesanal.',
        category: 'ensaladas-sanduches',
        price: 7.00,
        badges: []
    },
    {
        id: 'ensalada-marco-antonio',
        name: 'Ensalada Marco Antonio',
        desc: 'Pollo al grill sobre mix de lechugas, tomate, pepinillo, zanahoria, aguacate cremoso, queso parmesano rallado y aderezos especiales de la casa.',
        category: 'ensaladas-sanduches',
        price: 6.50,
        badges: []
    },
    {
        id: 'ensalada-marco-antonio-amazonica',
        name: 'Ensalada Marco Antonio - Edición Amazónica',
        desc: 'Tiras de pollo al grill sobre lechugas frescas, tomate, pepinillo, zanahoria rallada, aguacate de la zona y queso parmesano con aderezo cítrico.',
        category: 'ensaladas-sanduches',
        price: 6.00,
        badges: ['amazon']
    },

    // --- BEBIDAS & POSTRES ---
    {
        id: 'postre-del-dia',
        name: 'Postre del Día',
        desc: 'Una dulce sorpresa preparada en casa con ingredientes frescos de la estación. Consulte a su mesero la opción disponible para hoy.',
        category: 'bebidas-postres',
        price: null,
        badges: [],
        isInfoOnly: true,
        infoText: 'Consulte la opción y precio del día'
    },
    {
        id: 'guayusa-tradicional',
        name: 'Guayusa Tradicional (Sin Alcohol)',
        desc: 'La bebida ancestral de la Amazonia, energizante natural y llena de antioxidantes. Servida bien caliente.',
        category: 'bebidas-postres',
        price: null,
        badges: ['amazon'],
        options: [
            {
                name: 'Presentación',
                type: 'size',
                choices: [
                    { name: 'Taza Individual', price: 1.00 },
                    { name: 'Jarra Mediana', price: 2.50 },
                    { name: 'Jarra Grande', price: 3.50 }
                ]
            }
        ]
    },
    {
        id: 'guayusa-con-punta',
        name: 'Guayusa con Punta',
        desc: 'Infusión caliente de guayusa reforzada con el toque tradicional del aguardiente de caña.',
        category: 'bebidas-postres',
        price: null,
        badges: ['amazon'],
        options: [
            {
                name: 'Presentación',
                type: 'size',
                choices: [
                    { name: 'Jarra Mediana', price: 10.00 },
                    { name: 'Jarra Grande', price: 12.50 }
                ]
            }
        ]
    },
    {
        id: 'hueso-chuchuguazo',
        name: 'Hueso (Guayusa con Chuchuguazo)',
        desc: 'Brebaje tradicional caliente que combina guayusa con la icónica corteza de chuchuguazo para un sabor fuerte y tonificante.',
        category: 'bebidas-postres',
        price: null,
        badges: ['amazon'],
        options: [
            {
                name: 'Presentación',
                type: 'size',
                choices: [
                    { name: 'Jarra Mediana', price: 12.50 },
                    { name: 'Jarra Grande', price: 15.00 }
                ]
            }
        ]
    },
    {
        id: 'cafe-pasado',
        name: 'Café Pasado Caliente',
        desc: 'Taza de café tradicional filtrado gota a gota con aroma intenso.',
        category: 'bebidas-postres',
        price: 1.75,
        badges: []
    },
    {
        id: 'agua-aromatica',
        name: 'Agua Aromática',
        desc: 'Infusión caliente de hierbas aromáticas de la huerta.',
        category: 'bebidas-postres',
        price: 1.75,
        badges: []
    },
    {
        id: 'vino-hervido',
        name: 'Vino Hervido Especiado',
        desc: 'Vino tinto caliente cocido con especias dulces, rodajas de frutas cítricas y un toque de canela.',
        category: 'bebidas-postres',
        price: null,
        badges: [],
        options: [
            {
                name: 'Presentación',
                type: 'size',
                choices: [
                    { name: 'Copa Individual', price: 6.00 },
                    { name: 'Jarra Mediana', price: 12.00 },
                    { name: 'Jarra Grande', price: 15.00 }
                ]
            }
        ]
    },
    {
        id: 'jugos-naturales',
        name: 'Jugos de Fruta Natural',
        desc: 'Preparados al instante con fruta fresca. Sabores a elegir: Mora, Piña, Fresa o Naranjilla.',
        category: 'bebidas-postres',
        price: null,
        badges: [],
        options: [
            {
                name: 'Presentación',
                type: 'size',
                choices: [
                    { name: 'Vaso', price: 2.00 },
                    { name: 'Jarra Grande', price: 5.00 }
                ]
            },
            {
                name: 'Sabor de Fruta',
                type: 'addon',
                choices: [
                    { name: 'Mora', price: 0 },
                    { name: 'Piña', price: 0 },
                    { name: 'Fresa', price: 0 },
                    { name: 'Naranjilla', price: 0 }
                ]
            }
        ]
    },
    {
        id: 'jugos-especiales',
        name: 'Jugos Especiales de la Casa',
        desc: 'Deliciosos y refrescantes. Sabores a elegir: Guanábana o Maracuyá.',
        category: 'bebidas-postres',
        price: null,
        badges: [],
        options: [
            {
                name: 'Presentación',
                type: 'size',
                choices: [
                    { name: 'Vaso', price: 2.50 },
                    { name: 'Jarra Grande', price: 7.50 }
                ]
            },
            {
                name: 'Sabor de Fruta',
                type: 'addon',
                choices: [
                    { name: 'Guanábana', price: 0 },
                    { name: 'Maracuyá', price: 0 }
                ]
            }
        ]
    },
    {
        id: 'batidos-fruta',
        name: 'Batidos de Fruta Natural',
        desc: 'Batidos cremosos con leche o agua. Sabores disponibles: Mora, Piña, Fresa, Naranjilla o Guanábana.',
        category: 'bebidas-postres',
        price: null,
        badges: [],
        options: [
            {
                name: 'Presentación',
                type: 'size',
                choices: [
                    { name: 'Vaso', price: 2.50 },
                    { name: 'Jarra Grande', price: 6.50 }
                ]
            },
            {
                name: 'Sabor',
                type: 'addon',
                choices: [
                    { name: 'Fresa', price: 0 },
                    { name: 'Mora', price: 0 },
                    { name: 'Piña', price: 0 },
                    { name: 'Naranjilla', price: 0 },
                    { name: 'Guanábana', price: 0 }
                ]
            }
        ]
    },
    {
        id: 'te-helado',
        name: 'Té Helado',
        desc: 'Té helado refrescante de la casa, endulzado al punto ideal.',
        category: 'bebidas-postres',
        price: null,
        badges: [],
        options: [
            {
                name: 'Presentación',
                type: 'size',
                choices: [
                    { name: 'Vaso', price: 1.50 },
                    { name: 'Jarra Mediana', price: 2.50 },
                    { name: 'Jarra Grande', price: 3.50 }
                ]
            }
        ]
    },
    {
        id: 'limonada-jamaica',
        name: 'Limonada / Jamaica Helada',
        desc: 'Bebidas refrescantes y naturales para acompañar tus platos. Escoge entre Limonada clásica o Agua de Jamaica.',
        category: 'bebidas-postres',
        price: null,
        badges: [],
        options: [
            {
                name: 'Presentación',
                type: 'size',
                choices: [
                    { name: 'Vaso', price: 1.50 },
                    { name: 'Jarra Mediana', price: 2.50 },
                    { name: 'Jarra Grande', price: 3.50 }
                ]
            },
            {
                name: 'Variedad',
                type: 'addon',
                choices: [
                    { name: 'Limonada', price: 0 },
                    { name: 'Jamaica', price: 0 }
                ]
            }
        ]
    },
    {
        id: 'gaseosas-marca',
        name: 'Gaseosas',
        desc: 'Bebidas carbonatadas. Sabores disponibles: Coca-Cola, Fanta o Sprite.',
        category: 'bebidas-postres',
        price: null,
        badges: [],
        options: [
            {
                name: 'Presentación',
                type: 'size',
                choices: [
                    { name: 'Botella de 500 ml', price: 1.00 },
                    { name: 'Botella de 1 Litro', price: 2.00 },
                    { name: 'Botella de 1.35 Litros', price: 2.50 }
                ]
            },
            {
                name: 'Sabor',
                type: 'addon',
                choices: [
                    { name: 'Coca-Cola', price: 0 },
                    { name: 'Fanta', price: 0 },
                    { name: 'Sprite', price: 0 }
                ]
            }
        ]
    },
    {
        id: 'agua-natural-sin-gas',
        name: 'Agua Natural Sin Gas',
        desc: 'Agua purificada embotellada de 600 ml.',
        category: 'bebidas-postres',
        price: 1.00,
        badges: []
    },
    {
        id: 'agua-con-gas',
        name: 'Agua con Gas',
        desc: 'Agua mineral gasificada embotellada de 500 ml.',
        category: 'bebidas-postres',
        price: 1.00,
        badges: []
    },
    {
        id: 'energizante',
        name: 'Bebida Energizante',
        desc: 'Botella de energizante de 330 ml.',
        category: 'bebidas-postres',
        price: 1.25,
        badges: []
    },
    // Cervezas
    {
        id: 'cerveza-pilsener',
        name: 'Cerveza Pilsener (600 ml)',
        desc: 'Cerveza nacional tradicional ecuatoriana.',
        category: 'bebidas-postres',
        price: 3.00,
        badges: []
    },
    {
        id: 'cerveza-club',
        name: 'Cerveza Club Verde (550 ml)',
        desc: 'Cerveza premium ecuatoriana.',
        category: 'bebidas-postres',
        price: 3.50,
        badges: []
    },
    {
        id: 'cerveza-corona',
        name: 'Cerveza Corona (330 ml)',
        desc: 'Cerveza importada mexicana de renombre mundial.',
        category: 'bebidas-postres',
        price: 3.50,
        badges: []
    },
    {
        id: 'cerveza-heineken',
        name: 'Cerveza Heineken (330 ml)',
        desc: 'Cerveza premium de origen holandés.',
        category: 'bebidas-postres',
        price: 3.00,
        badges: []
    },
    {
        id: 'cerveza-artesanal-luciana',
        name: 'Cerveza Artesanal Luciana (300 ml)',
        desc: 'Cerveza artesanal de excelente calidad y gran sabor local.',
        category: 'bebidas-postres',
        price: 3.50,
        badges: ['popular']
    },
    {
        id: 'sangria-casa',
        name: 'Sangría de la Casa',
        desc: 'Refrescante mezcla de vino tinto macerado con manzana, naranja, limón, canela y toque secreto.',
        category: 'bebidas-postres',
        price: null,
        badges: [],
        options: [
            {
                name: 'Presentación',
                type: 'size',
                choices: [
                    { name: 'Copa', price: 6.00 },
                    { name: 'Jarra Mediana', price: 12.50 },
                    { name: 'Jarra Grande', price: 15.00 }
                ]
            }
        ]
    },
    {
        id: 'michelada-maravilla',
        name: 'Michelada Tradicional / Frutal',
        desc: 'Vaso escarchado con sal, limón y picante con cerveza. Sabores disponibles: Limón clásico o Maracuyá tropical.',
        category: 'bebidas-postres',
        price: null,
        badges: [],
        options: [
            {
                name: 'Tamaño',
                type: 'size',
                choices: [
                    { name: 'Michelada Pequeña', price: 5.00 },
                    { name: 'Michelada Grande', price: 7.00 }
                ]
            },
            {
                name: 'Sabor de Michelada',
                type: 'addon',
                choices: [
                    { name: 'Sabor a Limón', price: 0 },
                    { name: 'Sabor a Maracuyá', price: 0 }
                ]
            }
        ]
    }
];

// --- ESTADO DE LA APLICACIÓN ---
let currentCategory = 'especiales';
let searchQuery = '';
let cart = [];
let activeDish = null;
let activeQty = 1;
let selectedOptions = {};

// --- ELEMENTOS DEL DOM ---
const elements = {
    categoriesTabs: document.getElementById('mobile-categories-tabs'),
    menuGrid: document.getElementById('menu-grid'),
    activeCategoryTitle: document.getElementById('active-category-title'),
    activeCategoryDesc: document.getElementById('active-category-desc'),
    searchInput: document.getElementById('search-input'),
    clearSearch: document.getElementById('clear-search'),
    
    // Modal
    dishModal: document.getElementById('dish-modal'),
    modalBackdrop: document.getElementById('modal-backdrop'),
    modalClose: document.getElementById('modal-close'),
    modalTitle: document.getElementById('modal-title'),
    modalDescription: document.getElementById('modal-description'),
    modalBadges: document.getElementById('modal-badges'),
    modalOptionsSection: document.getElementById('modal-options-section'),
    modalNotes: document.getElementById('modal-notes'),
    modalPrice: document.getElementById('modal-price'),
    modalQtyMinus: document.getElementById('modal-qty-minus'),
    modalQtyPlus: document.getElementById('modal-qty-plus'),
    modalQtyValue: document.getElementById('modal-qty-value'),
    btnAddToCart: document.getElementById('btn-add-to-cart'),
    
    // Cart / Pedido
    sidebarCart: document.getElementById('sidebar-cart'),
    closeCartBtn: document.getElementById('close-cart-btn'),
    floatingCartBtn: document.getElementById('floating-cart-btn'),
    cartBadge: document.getElementById('cart-badge'),
    cartEmpty: document.getElementById('cart-empty'),
    cartItems: document.getElementById('cart-items'),
    cartFooter: document.getElementById('cart-footer'),
    cartSubtotal: document.getElementById('cart-subtotal'),
    cartTotal: document.getElementById('cart-total'),
    clearCartBtn: document.getElementById('clear-cart-btn'),
    sendWhatsappBtn: document.getElementById('send-whatsapp-btn'),
    
    // Inputs del Cart
    orderType: document.getElementById('order-type'),
    tableNumberGroup: document.getElementById('table-number-group'),
    tableNumber: document.getElementById('table-number'),
    deliveryAddressGroup: document.getElementById('delivery-address-group'),
    deliveryAddress: document.getElementById('delivery-address')
};

// --- INICIALIZACIÓN ---
document.addEventListener('DOMContentLoaded', () => {
    loadCartFromStorage();
    renderCategoriesNav();
    updateActiveCategory(currentCategory);
    setupEventListeners();
    
    // Ejecutar Lucide Icons
    lucide.createIcons();
});

// Cargar carrito guardado
function loadCartFromStorage() {
    const savedCart = localStorage.getItem('maravilla_cart');
    if (savedCart) {
        try {
            cart = JSON.parse(savedCart);
            updateCartUI();
        } catch (e) {
            cart = [];
        }
    }
}

// Guardar carrito
function saveCartToStorage() {
    localStorage.setItem('maravilla_cart', JSON.stringify(cart));
}

// --- RENDERIZADO DE NAVEGACIÓN DE CATEGORÍAS ---
function renderCategoriesNav() {
    elements.categoriesTabs.innerHTML = '';
    
    Object.keys(categories).forEach(key => {
        const cat = categories[key];
        
        const mobileBtn = document.createElement('button');
        mobileBtn.className = `mobile-nav-btn ${key === currentCategory ? 'active' : ''}`;
        mobileBtn.setAttribute('data-cat', key);
        mobileBtn.innerHTML = `
            <i data-lucide="${cat.icon}"></i>
            <span>${cat.name}</span>
        `;
        elements.categoriesTabs.appendChild(mobileBtn);
    });
}

// --- ACTUALIZAR CATEGORÍA ACTIVA ---
function updateActiveCategory(catKey) {
    currentCategory = catKey;
    
    document.querySelectorAll('.mobile-nav-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-cat') === catKey);
    });
    
    const cat = categories[catKey];
    elements.activeCategoryTitle.textContent = cat.name;
    elements.activeCategoryDesc.textContent = cat.desc;
    
    renderMenuGrid();
}

// --- RENDERIZADO DE PLATOS EN LA CUADRÍCULA ---
function renderMenuGrid() {
    elements.menuGrid.innerHTML = '';
    
    let filteredItems = menuItems.filter(item => {
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            return (
                item.name.toLowerCase().includes(query) ||
                item.desc.toLowerCase().includes(query) ||
                (item.badges && item.badges.some(b => b.toLowerCase().includes(query)))
            );
        }
        return item.category === currentCategory;
    });

    if (filteredItems.length === 0) {
        elements.menuGrid.innerHTML = `
            <div class="dish-card dish-card-info-only" style="grid-column: 1 / -1; text-align: center; padding: 3rem;">
                <i data-lucide="search-x" style="width: 40px; height: 40px; color: var(--menu-text-secondary); margin-bottom: 1rem;"></i>
                <h3>No encontramos platos para tu búsqueda</h3>
                <p style="color: var(--menu-text-secondary); font-size: 0.9rem; margin-top: 0.5rem;">Prueba con otros ingredientes o palabras clave.</p>
            </div>
        `;
        lucide.createIcons();
        return;
    }

    filteredItems.forEach(item => {
        const card = document.createElement('div');
        card.className = `dish-card ${item.isInfoOnly ? 'dish-card-info-only' : ''}`;
        if (!item.isInfoOnly) {
            card.onclick = () => openDishModal(item);
        }

        let badgesHtml = '';
        if (item.badges) {
            item.badges.forEach(b => {
                if (b === 'special') badgesHtml += `<span class="badge badge-special">Especial Maravilla</span>`;
                if (b === 'amazon') badgesHtml += `<span class="badge badge-amazon">Amazónico 🍃</span>`;
                if (b === 'popular') badgesHtml += `<span class="badge badge-popular">Popular 🔥</span>`;
            });
        }

        let priceHtml = '';
        if (item.price !== null) {
            priceHtml = `<span class="dish-price">$${item.price.toFixed(2)}</span>`;
        } else if (item.options) {
            const sizeOption = item.options.find(o => o.type === 'size');
            if (sizeOption) {
                const minPrice = Math.min(...sizeOption.choices.map(c => c.price));
                priceHtml = `<span class="dish-price">Desde $${minPrice.toFixed(2)}</span>`;
            }
        }

        card.innerHTML = `
            <div class="dish-card-header">
                <div class="badge-row">${badgesHtml}</div>
                <h3 class="dish-title">${item.name}</h3>
                <p class="dish-desc">${item.desc}</p>
            </div>
            <div class="dish-card-footer">
                ${priceHtml}
                ${item.isInfoOnly ? 
                    `<div class="dish-info-badge">${item.infoText}</div>` : 
                    `<button class="btn-card-add" aria-label="Ver detalles"><i data-lucide="plus"></i></button>`
                }
            </div>
        `;

        elements.menuGrid.appendChild(card);
    });

    lucide.createIcons();
}

// --- BUSCADOR ---
function handleSearch(e) {
    searchQuery = e.target.value;
    elements.clearSearch.style.display = searchQuery ? 'flex' : 'none';
    
    if (searchQuery) {
        elements.activeCategoryTitle.textContent = `Resultados de: "${searchQuery}"`;
        elements.activeCategoryDesc.textContent = 'Búsqueda global en toda la carta.';
    } else {
        updateActiveCategory(currentCategory);
    }
    
    renderMenuGrid();
}

function clearSearchInput() {
    elements.searchInput.value = '';
    searchQuery = '';
    elements.clearSearch.style.display = 'none';
    updateActiveCategory(currentCategory);
}

// --- MODAL DE DETALLES DEL PLATO ---
function openDishModal(dish) {
    activeDish = dish;
    activeQty = 1;
    selectedOptions = {};
    elements.modalNotes.value = '';
    
    elements.modalTitle.textContent = dish.name;
    elements.modalDescription.textContent = dish.desc;
    elements.modalQtyValue.textContent = activeQty;

    elements.modalBadges.innerHTML = '';
    if (dish.badges) {
        dish.badges.forEach(b => {
            const badgeSpan = document.createElement('span');
            badgeSpan.className = `badge`;
            if (b === 'special') {
                badgeSpan.classList.add('badge-special');
                badgeSpan.textContent = 'Especial Maravilla';
            } else if (b === 'amazon') {
                badgeSpan.classList.add('badge-amazon');
                badgeSpan.textContent = 'Amazónico 🍃';
            } else if (b === 'popular') {
                badgeSpan.classList.add('badge-popular');
                badgeSpan.textContent = 'Popular 🔥';
            }
            elements.modalBadges.appendChild(badgeSpan);
        });
    }

    elements.modalOptionsSection.innerHTML = '';
    if (dish.options && dish.options.length > 0) {
        elements.modalOptionsSection.style.display = 'flex';
        
        dish.options.forEach((optGroup, groupIdx) => {
            const groupDiv = document.createElement('div');
            groupDiv.className = 'option-group';
            
            const title = document.createElement('div');
            title.className = 'option-group-title';
            title.textContent = optGroup.name;
            groupDiv.appendChild(title);
            
            const selectorsContainer = document.createElement('div');
            selectorsContainer.className = 'options-selector-grid';
            
            optGroup.choices.forEach((choice, choiceIdx) => {
                const btn = document.createElement('button');
                btn.className = 'option-select-btn';
                
                let priceText = '';
                if (choice.price > 0 && optGroup.type === 'addon') {
                    priceText = `<span class="option-price">+$${choice.price.toFixed(2)}</span>`;
                } else if (optGroup.type === 'size') {
                    priceText = `<span class="option-price">$${choice.price.toFixed(2)}</span>`;
                }

                btn.innerHTML = `
                    <span class="option-name">${choice.name}</span>
                    ${priceText}
                `;
                
                btn.onclick = () => {
                    groupDiv.querySelectorAll('.option-select-btn').forEach(b => b.classList.remove('selected'));
                    btn.classList.add('selected');
                    selectedOptions[optGroup.name] = choice;
                    calculateModalPrice();
                };
                
                selectorsContainer.appendChild(btn);
                
                if (choiceIdx === 0) {
                    btn.classList.add('selected');
                    selectedOptions[optGroup.name] = choice;
                }
            });
            
            groupDiv.appendChild(selectorsContainer);
            elements.modalOptionsSection.appendChild(groupDiv);
        });
    } else {
        elements.modalOptionsSection.style.display = 'none';
    }

    calculateModalPrice();
    
    elements.dishModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    
    lucide.createIcons();
}

function calculateModalPrice() {
    if (!activeDish) return;
    
    let totalPrice = activeDish.price || 0;
    
    Object.keys(selectedOptions).forEach(optName => {
        const choice = selectedOptions[optName];
        const optGroup = activeDish.options.find(o => o.name === optName);
        if (optGroup && optGroup.type === 'size') {
            totalPrice = choice.price;
        } else {
            totalPrice += choice.price;
        }
    });
    
    elements.modalPrice.textContent = `$${(totalPrice * activeQty).toFixed(2)}`;
}

function closeDishModal() {
    elements.dishModal.style.display = 'none';
    document.body.style.overflow = '';
    activeDish = null;
}

function updateModalQty(change) {
    const newQty = activeQty + change;
    if (newQty >= 1 && newQty <= 30) {
        activeQty = newQty;
        elements.modalQtyValue.textContent = activeQty;
        calculateModalPrice();
    }
}

// --- LÓGICA DEL PEDIDO / CUENTA ---

function addToCart() {
    if (!activeDish) return;
    
    let unitPrice = activeDish.price || 0;
    const finalChoices = [];
    
    Object.keys(selectedOptions).forEach(optName => {
        const choice = selectedOptions[optName];
        const optGroup = activeDish.options.find(o => o.name === optName);
        if (optGroup && optGroup.type === 'size') {
            unitPrice = choice.price;
        } else {
            unitPrice += choice.price;
        }
        finalChoices.push({
            groupName: optName,
            choiceName: choice.name,
            price: choice.price
        });
    });

    const notes = elements.modalNotes.value.trim();
    const optionStr = finalChoices.map(c => `${c.groupName}:${c.choiceName}`).join('|');
    const itemUniqueId = `${activeDish.id}-${optionStr}-${notes}`;

    const existingIndex = cart.findIndex(item => item.uniqueId === itemUniqueId);
    
    if (existingIndex > -1) {
        cart[existingIndex].quantity += activeQty;
    } else {
        cart.push({
            uniqueId: itemUniqueId,
            id: activeDish.id,
            name: activeDish.name,
            unitPrice: unitPrice,
            quantity: activeQty,
            options: finalChoices,
            notes: notes
        });
    }

    saveCartToStorage();
    updateCartUI();
    closeDishModal();
    
    // Feedback visual: animar y mostrar botón flotante
    elements.floatingCartBtn.classList.add('visible');
    elements.floatingCartBtn.style.animation = 'none';
    setTimeout(() => {
        elements.floatingCartBtn.style.animation = 'pulse-menu-badge 1s infinite';
    }, 10);
}

function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    elements.cartBadge.textContent = totalItems;
    
    if (totalItems > 0) {
        elements.floatingCartBtn.classList.add('visible');
    } else {
        elements.floatingCartBtn.classList.remove('visible');
        elements.sidebarCart.classList.remove('open');
    }

    if (cart.length === 0) {
        elements.cartEmpty.style.display = 'flex';
        elements.cartItems.style.display = 'none';
        elements.cartFooter.style.display = 'none';
        return;
    }

    elements.cartEmpty.style.display = 'none';
    elements.cartItems.style.display = 'flex';
    elements.cartFooter.style.display = 'block';

    elements.cartItems.innerHTML = '';
    let subtotal = 0;

    cart.forEach((item, index) => {
        const itemTotal = item.unitPrice * item.quantity;
        subtotal += itemTotal;

        const itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item';
        
        let optionsHtml = '';
        if (item.options && item.options.length > 0) {
            const optStrings = item.options.map(o => o.choiceName);
            optionsHtml = `<div class="cart-item-options">${optStrings.join(', ')}</div>`;
        }

        let notesHtml = '';
        if (item.notes) {
            notesHtml = `<div class="cart-item-notes">Nota: "${item.notes}"</div>`;
        }

        itemDiv.innerHTML = `
            <div class="cart-item-header">
                <span class="cart-item-title">${item.name}</span>
                <button class="btn-remove-item" onclick="removeFromCart(${index})" aria-label="Eliminar plato">
                    <i data-lucide="trash-2"></i>
                </button>
            </div>
            ${optionsHtml}
            ${notesHtml}
            <div class="cart-item-footer">
                <div class="cart-item-qty">
                    <button onclick="changeCartItemQty(${index}, -1)" aria-label="Disminuir"><i data-lucide="minus"></i></button>
                    <span>${item.quantity}</span>
                    <button onclick="changeCartItemQty(${index}, 1)" aria-label="Aumentar"><i data-lucide="plus"></i></button>
                </div>
                <span class="cart-item-price">$${itemTotal.toFixed(2)}</span>
            </div>
        `;
        
        elements.cartItems.appendChild(itemDiv);
    });

    elements.cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;
    elements.cartTotal.textContent = `$${subtotal.toFixed(2)}`;
    
    lucide.createIcons();
}

window.removeFromCart = function(index) {
    cart.splice(index, 1);
    saveCartToStorage();
    updateCartUI();
};

window.changeCartItemQty = function(index, change) {
    const newQty = cart[index].quantity + change;
    if (newQty >= 1) {
        cart[index].quantity = newQty;
    } else {
        cart.splice(index, 1);
    }
    saveCartToStorage();
    updateCartUI();
};

function clearCart() {
    if (confirm('¿Deseas vaciar todo tu pedido?')) {
        cart = [];
        saveCartToStorage();
        updateCartUI();
    }
}

function handleOrderTypeChange() {
    const val = elements.orderType.value;
    
    if (val === 'mesa') {
        elements.tableNumberGroup.style.display = 'flex';
        elements.deliveryAddressGroup.style.display = 'none';
        elements.tableNumber.required = true;
    } else if (val === 'llevar') {
        elements.tableNumberGroup.style.display = 'none';
        elements.deliveryAddressGroup.style.display = 'none';
        elements.tableNumber.required = false;
    } else if (val === 'domicilio') {
        elements.tableNumberGroup.style.display = 'none';
        elements.deliveryAddressGroup.style.display = 'flex';
        elements.deliveryAddress.required = true;
    }
}

function sendWhatsappOrder() {
    if (cart.length === 0) return;

    const type = elements.orderType.value;
    let locationDetails = '';

    if (type === 'mesa') {
        const table = elements.tableNumber.value.trim();
        if (!table) {
            alert('Por favor, ingresa el número de mesa.');
            elements.tableNumber.focus();
            return;
        }
        locationDetails = `*Mesa:* N° ${table}`;
    } else if (type === 'llevar') {
        locationDetails = `*Tipo:* Para llevar / Retiro en local`;
    } else if (type === 'domicilio') {
        const address = elements.deliveryAddress.value.trim();
        if (!address) {
            alert('Por favor, ingresa tu nombre y dirección para la entrega.');
            elements.deliveryAddress.focus();
            return;
        }
        locationDetails = `*Domicilio:* ${address}`;
    }

    let msg = `*🍽️ NUEVO PEDIDO - LA MARAVILLA 🍽️*\n`;
    msg += `-------------------------------------------\n`;
    msg += `${locationDetails}\n`;
    msg += `-------------------------------------------\n\n`;

    let total = 0;
    cart.forEach(item => {
        const itemTotal = item.unitPrice * item.quantity;
        total += itemTotal;
        msg += `*${item.quantity}x* _${item.name}_\n`;
        if (item.options && item.options.length > 0) {
            const optText = item.options.map(o => o.choiceName).join(', ');
            msg += `   └ Opt: ${optText}\n`;
        }
        if (item.notes) {
            msg += `   └ *Nota:* "${item.notes}"\n`;
        }
        msg += `   *Subtotal:* $${itemTotal.toFixed(2)}\n\n`;
    });

    msg += `-------------------------------------------\n`;
    msg += `*TOTAL ESTIMADO:* $${total.toFixed(2)}\n`;
    msg += `-------------------------------------------\n`;
    msg += `📱 Enviado desde la Web Oficial de Kayapa Kolorado.`;

    const encodedText = encodeURIComponent(msg);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`;

    window.open(whatsappUrl, '_blank');
}

// --- CONFIGURACIÓN DE EVENT LISTENERS ---
function setupEventListeners() {
    elements.searchInput.addEventListener('input', handleSearch);
    elements.clearSearch.addEventListener('click', clearSearchInput);

    // Eventos de Categoría (Pestañas horizontales)
    elements.categoriesTabs.addEventListener('click', (e) => {
        const btn = e.target.closest('.mobile-nav-btn');
        if (btn) {
            const cat = btn.getAttribute('data-cat');
            updateActiveCategory(cat);
            
            // Scroll suave hacia la zona de platos
            const menuTitle = document.getElementById('active-category-title');
            if (menuTitle) {
                const offset = menuTitle.getBoundingClientRect().top + window.scrollY - 100;
                window.scrollTo({
                    top: offset,
                    behavior: 'smooth'
                });
            }
        }
    });

    // Control del Modal
    elements.modalClose.addEventListener('click', closeDishModal);
    elements.modalBackdrop.addEventListener('click', closeDishModal);
    elements.modalQtyMinus.addEventListener('click', () => updateModalQty(-1));
    elements.modalQtyPlus.addEventListener('click', () => updateModalQty(1));
    elements.btnAddToCart.addEventListener('click', addToCart);

    // Carrito Flotante (Abrir y Cerrar Panel)
    elements.floatingCartBtn.addEventListener('click', () => {
        elements.sidebarCart.classList.add('open');
    });

    elements.closeCartBtn.addEventListener('click', () => {
        elements.sidebarCart.classList.remove('open');
    });

    elements.clearCartBtn.addEventListener('click', clearCart);
    elements.orderType.addEventListener('change', handleOrderTypeChange);
    elements.sendWhatsappBtn.addEventListener('click', sendWhatsappOrder);
}
