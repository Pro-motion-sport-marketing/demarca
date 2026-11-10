// Catálogo del portafolio. Para sumar un video: agrega un objeto a VIDEOS
// (id único, grupo, rubro, estilo, titulo, vistas, url) y su miniatura en assets/reels/<id>.jpg
window.GRUPOS = [
 {
  "id": "andes",
  "nombre": "Andes Structures",
  "rubro": "inmobiliario",
  "texto": "Estrategia de comunicación secuencial: un micro-embudo de venta que capta la atención, persuade, provoca una acción y fideliza a quien llega."
 },
 {
  "id": "mhcorp",
  "nombre": "MH Corp",
  "rubro": "inmobiliario",
  "texto": "Micro-embudo de venta para proyectos inmobiliarios: del inicio de obra al departamento terminado."
 },
 {
  "id": "davalos",
  "nombre": "Dávalos Constructora",
  "rubro": "inmobiliario",
  "texto": "Obra, ubicación y equipo contados desde el aire y desde adentro, en una secuencia pensada para vender."
 },
 {
  "id": "cerrolobo",
  "nombre": "Cerro Lobo",
  "rubro": "inmobiliario",
  "texto": "Un proyecto frente al mar presentado con tomas aéreas y planos contemplativos."
 },
 {
  "id": "thor",
  "nombre": "Thor Kitchen",
  "rubro": "producto",
  "texto": "Estrategia de comunicación continua: contenido genuino y comercial a la vez, medido mes a mes para reajustar lo que haga falta."
 },
 {
  "id": "iglace",
  "nombre": "iGlace",
  "rubro": "producto",
  "texto": "Producción de producto con voz grabada con micrófonos profesionales e iluminación propia."
 },
 {
  "id": "vcomer",
  "nombre": "Vcomer",
  "rubro": "gastronomia",
  "texto": "Videos testimoniales y descriptivos con voz para showroom, parrillas y cocina al aire libre."
 },
 {
  "id": "colineal",
  "nombre": "Colineal",
  "rubro": "producto",
  "texto": "Video descriptivo con voz profesional e iluminación propia."
 },
 {
  "id": "lifeincolours",
  "nombre": "Life in Colours",
  "rubro": "moda",
  "texto": "Gestión de contenido y videos descriptivos con voz propia: 7 posts y 2 reels al mes."
 },
 {
  "id": "alanna",
  "nombre": "Alanna Home",
  "rubro": "interiorismo",
  "texto": "Video contemplativo con planos de detalle y tomas aéreas para destacar cada rincón."
 },
 {
  "id": "tre",
  "nombre": "Studio Tre",
  "rubro": "interiorismo",
  "texto": "El resultado de cada obra: estilos, materiales y espacios contados por quienes los diseñan y los usan."
 },
 {
  "id": "ypqn",
  "nombre": "¿Y por qué no?",
  "rubro": "turismo",
  "texto": "Contenido dinámico de alto impacto con storytelling y perspectivas cinematográficas."
 },
 {
  "id": "buganey",
  "nombre": "Buganey Estancia",
  "rubro": "turismo",
  "texto": "Turismo de montaña contado desde la experiencia de quien llega."
 },
 {
  "id": "cuenca",
  "nombre": "Cuenca desde el aire",
  "rubro": "turismo",
  "texto": "Dron shooting contemplativo: contraste y estética arquitectónica de la ciudad."
 },
 {
  "id": "blanc",
  "nombre": "Blanc Odontología Digital",
  "rubro": "salud",
  "texto": "Producción y estrategia de comunicación con contenido de entretenimiento, informativo y dinámico."
 },
 {
  "id": "latino",
  "nombre": "Clínica Latino",
  "rubro": "salud",
  "texto": "Video descriptivo con voz para presentar una nueva área de oftalmología."
 },
 {
  "id": "delicatto",
  "nombre": "Delicatto Piggis",
  "rubro": "gastronomia",
  "texto": "Video y contenido en tiempo real para eventos privados y masivos."
 },
 {
  "id": "ox",
  "nombre": "OX Sport Agency",
  "rubro": "eventos",
  "texto": "Cobertura de lanzamientos, conferencias y eventos deportivos."
 },
 {
  "id": "automovilismo",
  "nombre": "Automovilismo",
  "rubro": "deporte",
  "texto": "Gestión de marca personal y cobertura en tiempo real para pilotos como Juan Guerrero (G128 Rally Racer) en rally, GT y autódromo."
 },
 {
  "id": "motocross",
  "nombre": "Motocross",
  "rubro": "deporte",
  "texto": "Contenido en el paddock y en la pista, con entrevistas durante cada fecha."
 },
 {
  "id": "karting",
  "nombre": "Karting",
  "rubro": "deporte",
  "texto": "Cámara a bordo, pista y piloto en primera persona."
 },
 {
  "id": "ecuestre",
  "nombre": "Ecuestre",
  "rubro": "deporte",
  "texto": "Cobertura de salto ecuestre en pista y desde el aire."
 },
 {
  "id": "ciclismo",
  "nombre": "Ciclismo",
  "rubro": "deporte",
  "texto": "Descensos y rutas en campo abierto."
 },
 {
  "id": "martin-ortiz",
  "nombre": "Martín Ortiz",
  "rubro": "deporte",
  "texto": "Producción testimonial de alto impacto visual para un rider."
 }
];
window.VIDEOS = [
 {
  "id": "rally-cenital",
  "grupo": "automovilismo",
  "rubro": "deporte",
  "estilo": "dron",
  "titulo": "Grilla de salida desde el aire",
  "vistas": 8363,
  "url": "https://www.instagram.com/reel/CxeTV8YJT0C/"
 },
 {
  "id": "mtb-campo",
  "grupo": "ciclismo",
  "rubro": "deporte",
  "estilo": "dinamico",
  "titulo": "Descenso en campo abierto",
  "vistas": 23000,
  "url": "https://www.instagram.com/reel/C9L3nizNtwi/"
 },
 {
  "id": "gt-firma",
  "grupo": "automovilismo",
  "rubro": "deporte",
  "estilo": "cobertura",
  "titulo": "Firma en el auto antes de la carrera",
  "vistas": 24600,
  "url": "https://www.instagram.com/reel/DC7tcyyRfpL/"
 },
 {
  "id": "gt-podio",
  "grupo": "automovilismo",
  "rubro": "deporte",
  "estilo": "cobertura",
  "titulo": "Celebración en el podio",
  "vistas": 13200,
  "url": "https://www.instagram.com/reel/DDLU4aPJPYy/"
 },
 {
  "id": "gt-casco",
  "grupo": "automovilismo",
  "rubro": "deporte",
  "estilo": "storytelling",
  "titulo": "Piloto antes de la largada",
  "vistas": 33800,
  "url": "https://www.instagram.com/reel/DB-CJsNp318/"
 },
 {
  "id": "gt-autodromo",
  "grupo": "automovilismo",
  "rubro": "deporte",
  "estilo": "dinamico",
  "titulo": "Recta del autódromo",
  "vistas": 36800,
  "url": "https://www.instagram.com/reel/DBkX22bJ0oi/"
 },
 {
  "id": "rally-polvo",
  "grupo": "automovilismo",
  "rubro": "deporte",
  "estilo": "dinamico",
  "titulo": "Curva de tierra",
  "vistas": 11800,
  "url": "https://www.instagram.com/reel/CzlpKr7OgIp/"
 },
 {
  "id": "rally-tierra",
  "grupo": "automovilismo",
  "rubro": "deporte",
  "estilo": "dinamico",
  "titulo": "Derrape en tierra",
  "vistas": 6154,
  "url": "https://www.instagram.com/reel/ClD6uDVgICC/"
 },
 {
  "id": "rally-noche",
  "grupo": "automovilismo",
  "rubro": "deporte",
  "estilo": "cobertura",
  "titulo": "Rally nocturno y fuegos",
  "vistas": 9402,
  "url": "https://www.instagram.com/reel/CzyjZcyulri/"
 },
 {
  "id": "rally-asistencia",
  "grupo": "automovilismo",
  "rubro": "deporte",
  "estilo": "storytelling",
  "titulo": "Asistencia mecánica",
  "vistas": 4397,
  "url": "https://www.instagram.com/p/Cl61wkXJDd4/"
 },
 {
  "id": "rally-bosque",
  "grupo": "automovilismo",
  "rubro": "deporte",
  "estilo": "dinamico",
  "titulo": "Tramo en el bosque",
  "vistas": 4101,
  "url": "https://www.instagram.com/reel/CuzezzLxtxk/"
 },
 {
  "id": "rally-estadio",
  "grupo": "automovilismo",
  "rubro": "deporte",
  "estilo": "dinamico",
  "titulo": "Llegada al estadio",
  "vistas": 1620,
  "url": "https://www.instagram.com/reel/CxiV5CKO4Gb/"
 },
 {
  "id": "rally-rampa",
  "grupo": "automovilismo",
  "rubro": "deporte",
  "estilo": "cobertura",
  "titulo": "Rampa de largada nocturna",
  "vistas": 3181,
  "url": "https://www.instagram.com/reel/Cury6wTunZB/"
 },
 {
  "id": "rally-piloto",
  "grupo": "automovilismo",
  "rubro": "deporte",
  "estilo": "storytelling",
  "titulo": "Piloto en la asistencia",
  "vistas": 6617,
  "url": "https://www.instagram.com/reel/ClAcQitgYeC/"
 },
 {
  "id": "mx-moto",
  "grupo": "motocross",
  "rubro": "deporte",
  "estilo": "dinamico",
  "titulo": "Moto lista para salir",
  "vistas": 2953,
  "url": "https://www.instagram.com/reel/Cv8PkWXp1Eu/"
 },
 {
  "id": "mx-paddock",
  "grupo": "motocross",
  "rubro": "deporte",
  "estilo": "dinamico",
  "titulo": "Paddock en el páramo",
  "vistas": 2407,
  "url": "https://www.instagram.com/reel/CwTN_BhJh9U/"
 },
 {
  "id": "mx-entrevista",
  "grupo": "motocross",
  "rubro": "deporte",
  "estilo": "testimonial",
  "titulo": "Entrevista en boxes",
  "vistas": 5017,
  "url": "https://www.instagram.com/reel/Cw-R0Uxuy1Q/"
 },
 {
  "id": "kart-piloto",
  "grupo": "karting",
  "rubro": "deporte",
  "estilo": "testimonial",
  "titulo": "Piloto en primera persona",
  "vistas": 2026,
  "url": "https://www.instagram.com/reel/CwQ88NoAQbN/"
 },
 {
  "id": "kart-curva",
  "grupo": "karting",
  "rubro": "deporte",
  "estilo": "dinamico",
  "titulo": "Kart en curva",
  "vistas": 571,
  "url": "https://www.instagram.com/reel/Cwpu6clO5u6/"
 },
 {
  "id": "kart-347",
  "grupo": "karting",
  "rubro": "deporte",
  "estilo": "dinamico",
  "titulo": "Kart 347 en pista",
  "vistas": 8101,
  "url": "https://www.instagram.com/reel/CxyuTZbLH-d/"
 },
 {
  "id": "ecuestre-salto",
  "grupo": "ecuestre",
  "rubro": "deporte",
  "estilo": "cobertura",
  "titulo": "Salto ecuestre",
  "vistas": 21200,
  "url": "https://www.instagram.com/reel/Cs9zUecpIPu/"
 },
 {
  "id": "ecuestre-pista",
  "grupo": "ecuestre",
  "rubro": "deporte",
  "estilo": "dron",
  "titulo": "Pista de salto desde el aire",
  "vistas": 1377,
  "url": "https://www.instagram.com/reel/CvAe4F-g3Tc/"
 },
 {
  "id": "ecuestre-fede",
  "grupo": "ecuestre",
  "rubro": "deporte",
  "estilo": "cobertura",
  "titulo": "Federación ecuestre",
  "vistas": 1542,
  "url": "https://www.instagram.com/reel/CqLiX1-gJ2G/"
 },
 {
  "id": "martin-ortiz",
  "grupo": "martin-ortiz",
  "rubro": "deporte",
  "estilo": "testimonial",
  "titulo": "Testimonial del rider",
  "vistas": 22000,
  "url": "https://www.instagram.com/p/C0uEk92O131/"
 },
 {
  "id": "ox-lanzamiento",
  "grupo": "ox",
  "rubro": "eventos",
  "estilo": "cobertura",
  "titulo": "Lanzamiento y conferencia",
  "vistas": 0,
  "url": "https://www.instagram.com/reel/CqstP1dLCSO/"
 },
 {
  "id": "delicatto-evento",
  "grupo": "delicatto",
  "rubro": "gastronomia",
  "estilo": "cobertura",
  "titulo": "Evento gastronómico en tiempo real",
  "vistas": 3157,
  "url": "https://www.instagram.com/reel/Cbap6XvpQKx/"
 },
 {
  "id": "buganey-camino",
  "grupo": "buganey",
  "rubro": "turismo",
  "estilo": "contemplativo",
  "titulo": "Llegada a la cabaña",
  "vistas": 5295,
  "url": "https://www.instagram.com/reel/Cixkz_SgpKd/"
 },
 {
  "id": "buganey-ventana",
  "grupo": "buganey",
  "rubro": "turismo",
  "estilo": "storytelling",
  "titulo": "Despertar frente a la montaña",
  "vistas": 1713,
  "url": "https://www.instagram.com/reel/CjIjFQ_gPbZ/"
 },
 {
  "id": "buganey-caballos",
  "grupo": "buganey",
  "rubro": "turismo",
  "estilo": "contemplativo",
  "titulo": "Cabalgata en el páramo",
  "vistas": 941,
  "url": "https://www.instagram.com/reel/Ci-hOYuA-mI/"
 },
 {
  "id": "vcomer-showroom",
  "grupo": "vcomer",
  "rubro": "producto",
  "estilo": "voz",
  "titulo": "Showroom con voz",
  "vistas": 43200,
  "url": "https://www.instagram.com/reel/CpaeX1Kj2W4/"
 },
 {
  "id": "colineal-tienda",
  "grupo": "colineal",
  "rubro": "producto",
  "estilo": "voz",
  "titulo": "Tienda con voz",
  "vistas": 0,
  "url": "https://drive.google.com/file/d/1RGhfpQ2Xm8FBoMqm2UHsU_tOpi89ri33/preview"
 },
 {
  "id": "blanc-2",
  "grupo": "blanc",
  "rubro": "salud",
  "estilo": "testimonial",
  "titulo": "Después del tratamiento",
  "vistas": 1265,
  "url": "https://www.instagram.com/reel/CtKIoGuO3Id/"
 },
 {
  "id": "blanc-3",
  "grupo": "blanc",
  "rubro": "salud",
  "estilo": "dinamico",
  "titulo": "Consulta en movimiento",
  "vistas": 5838,
  "url": "https://www.instagram.com/reel/CsXMvGFJcIn/"
 },
 {
  "id": "blanc-6",
  "grupo": "blanc",
  "rubro": "salud",
  "estilo": "storytelling",
  "titulo": "Odontología digital",
  "vistas": 12500,
  "url": "https://www.instagram.com/reel/CqjNQ2uJs8M/"
 },
 {
  "id": "latino-oftalmo",
  "grupo": "latino",
  "rubro": "salud",
  "estilo": "voz",
  "titulo": "Una nueva era en oftalmología",
  "vistas": 0,
  "url": "https://drive.google.com/file/d/1Iv-cZa-iGmZbNIB5zjDee5Y1gNxpS5-X/preview"
 },
 {
  "id": "andes-domos-aire",
  "grupo": "andes",
  "rubro": "inmobiliario",
  "estilo": "dron",
  "titulo": "Domos desde el aire",
  "vistas": 217000,
  "url": "https://www.instagram.com/reel/CygRH6iLicH/"
 },
 {
  "id": "andes-terraza",
  "grupo": "andes",
  "rubro": "inmobiliario",
  "estilo": "dinamico",
  "titulo": "Recorrido por la terraza",
  "vistas": 263000,
  "url": "https://www.instagram.com/reel/Cy9hRN_pHDt/"
 },
 {
  "id": "andes-quito",
  "grupo": "andes",
  "rubro": "inmobiliario",
  "estilo": "dron",
  "titulo": "Domo con vista a la ciudad",
  "vistas": 81800,
  "url": "https://www.instagram.com/p/C1Au5uwrIIT/"
 },
 {
  "id": "thor-cocina",
  "grupo": "thor",
  "rubro": "producto",
  "estilo": "producto",
  "titulo": "Cocinar en Thor",
  "vistas": 106000,
  "url": "https://www.instagram.com/reel/DD_FodFMDF9/"
 },
 {
  "id": "thor-g1",
  "grupo": "thor",
  "rubro": "producto",
  "estilo": "voz",
  "titulo": "Presentadora en showroom",
  "vistas": 13200,
  "url": "https://www.instagram.com/reel/C2U5_1Ws52T/"
 },
 {
  "id": "thor-g2",
  "grupo": "thor",
  "rubro": "producto",
  "estilo": "producto",
  "titulo": "Función air fryer",
  "vistas": 40600,
  "url": "https://www.instagram.com/reel/C1zbmJfLDb2/"
 },
 {
  "id": "thor-vinos",
  "grupo": "thor",
  "rubro": "producto",
  "estilo": "producto",
  "titulo": "Cava de vinos",
  "vistas": 52900,
  "url": "https://www.instagram.com/reel/DA86izNxf0U/"
 },
 {
  "id": "thor-kitchen",
  "grupo": "thor",
  "rubro": "producto",
  "estilo": "voz",
  "titulo": "Cocina completa",
  "vistas": 58700,
  "url": "https://www.instagram.com/reel/DCpigwORyDS/"
 },
 {
  "id": "thor-refri",
  "grupo": "thor",
  "rubro": "producto",
  "estilo": "producto",
  "titulo": "Refrigeradora francesa",
  "vistas": 82200,
  "url": "https://www.instagram.com/reel/DCZaHMeRbcI/"
 },
 {
  "id": "vcomer-chef",
  "grupo": "vcomer",
  "rubro": "gastronomia",
  "estilo": "testimonial",
  "titulo": "El chef y su parrilla",
  "vistas": 15000,
  "url": "https://www.instagram.com/reel/CwOf-lKMKsZ/"
 },
 {
  "id": "vcomer-egg",
  "grupo": "vcomer",
  "rubro": "gastronomia",
  "estilo": "producto",
  "titulo": "Parrilla en acción",
  "vistas": 16200,
  "url": "https://www.instagram.com/reel/CwykTwMMDID/"
 },
 {
  "id": "vcomer-pizza",
  "grupo": "vcomer",
  "rubro": "gastronomia",
  "estilo": "testimonial",
  "titulo": "Pizza a la leña",
  "vistas": 25400,
  "url": "https://www.instagram.com/p/CzL8UkrL_O1/"
 },
 {
  "id": "iglace-cafe",
  "grupo": "iglace",
  "rubro": "producto",
  "estilo": "producto",
  "titulo": "Café al instante",
  "vistas": 35700,
  "url": "https://www.instagram.com/reel/DDYPEQcxEmc/"
 },
 {
  "id": "iglace-redefine",
  "grupo": "iglace",
  "rubro": "producto",
  "estilo": "voz",
  "titulo": "Redefine tu cocina",
  "vistas": 17600,
  "url": "https://www.instagram.com/reel/DE09TRfMlBA/"
 },
 {
  "id": "iglace-espresso",
  "grupo": "iglace",
  "rubro": "producto",
  "estilo": "producto",
  "titulo": "Espresso en cámara lenta",
  "vistas": 15500,
  "url": "https://www.instagram.com/reel/DBaDBK3sHFo/"
 },
 {
  "id": "iglace-hielo",
  "grupo": "iglace",
  "rubro": "producto",
  "estilo": "voz",
  "titulo": "Máquina de hielo",
  "vistas": 110000,
  "url": "https://www.instagram.com/reel/DCKNdjexZj_/"
 },
 {
  "id": "iglace-cubos",
  "grupo": "iglace",
  "rubro": "producto",
  "estilo": "producto",
  "titulo": "Cubos de hielo",
  "vistas": 17500,
  "url": "https://www.instagram.com/reel/DDx4yLjxGOk/"
 },
 {
  "id": "iglace-agua",
  "grupo": "iglace",
  "rubro": "producto",
  "estilo": "producto",
  "titulo": "Agua fría al aire libre",
  "vistas": 12400,
  "url": "https://www.instagram.com/reel/DC_1khMxmiQ/"
 },
 {
  "id": "alanna-detalle",
  "grupo": "alanna",
  "rubro": "interiorismo",
  "estilo": "contemplativo",
  "titulo": "Planos de detalle",
  "vistas": 14200,
  "url": "https://www.instagram.com/p/CxN6nI_O66T/"
 },
 {
  "id": "lic-tenis",
  "grupo": "lifeincolours",
  "rubro": "moda",
  "estilo": "voz",
  "titulo": "Medias con estilo",
  "vistas": 25100,
  "url": "https://www.instagram.com/reel/Ct8E019sMsI/"
 },
 {
  "id": "lic-adidas",
  "grupo": "lifeincolours",
  "rubro": "moda",
  "estilo": "dinamico",
  "titulo": "Paso a paso",
  "vistas": 26600,
  "url": "https://www.instagram.com/reel/Cl37EdDp2nl/"
 },
 {
  "id": "cuenca-catedral",
  "grupo": "cuenca",
  "rubro": "turismo",
  "estilo": "dron",
  "titulo": "Catedral de Cuenca",
  "vistas": 23700,
  "url": "https://www.instagram.com/reel/CsAAUFlp0vk/"
 },
 {
  "id": "tre-pasillo",
  "grupo": "tre",
  "rubro": "interiorismo",
  "estilo": "contemplativo",
  "titulo": "Pasillo con luz lineal",
  "vistas": 10700,
  "url": "https://www.instagram.com/reel/C24tj8-uJ-E/"
 },
 {
  "id": "tre-sala",
  "grupo": "tre",
  "rubro": "interiorismo",
  "estilo": "contemplativo",
  "titulo": "Sala terminada",
  "vistas": 9739,
  "url": "https://www.instagram.com/reel/C3nYfjGOAyu/"
 },
 {
  "id": "tre-milano",
  "grupo": "tre",
  "rubro": "interiorismo",
  "estilo": "dinamico",
  "titulo": "Tienda Milano",
  "vistas": 10600,
  "url": "https://www.instagram.com/reel/C4bZz4sJVu4/"
 },
 {
  "id": "tre-pizarra",
  "grupo": "tre",
  "rubro": "interiorismo",
  "estilo": "storytelling",
  "titulo": "Del boceto a la obra",
  "vistas": 10100,
  "url": "https://www.instagram.com/reel/DDedJ8EOL7W/"
 },
 {
  "id": "tre-hospital",
  "grupo": "tre",
  "rubro": "interiorismo",
  "estilo": "testimonial",
  "titulo": "Testimonio en el hospital",
  "vistas": 10500,
  "url": "https://www.instagram.com/reel/C9pMu8-tS1w/"
 },
 {
  "id": "tre-comedor",
  "grupo": "tre",
  "rubro": "interiorismo",
  "estilo": "contemplativo",
  "titulo": "Comedor y detalles",
  "vistas": 11400,
  "url": "https://www.instagram.com/reel/C-u1_ZVpmwU/"
 },
 {
  "id": "davalos-aire",
  "grupo": "davalos",
  "rubro": "inmobiliario",
  "estilo": "dron",
  "titulo": "La obra desde el aire",
  "vistas": 21900,
  "url": "https://www.instagram.com/reel/C_i_u4zJR8p/"
 },
 {
  "id": "davalos-planos",
  "grupo": "davalos",
  "rubro": "inmobiliario",
  "estilo": "storytelling",
  "titulo": "Revisión de planos en obra",
  "vistas": 26200,
  "url": "https://www.instagram.com/reel/C_Tu1ybJrGX/"
 },
 {
  "id": "davalos-cenital",
  "grupo": "davalos",
  "rubro": "inmobiliario",
  "estilo": "dron",
  "titulo": "Vista cenital del terreno",
  "vistas": 3673,
  "url": "https://www.instagram.com/reel/C5mVuKKJNMO/"
 },
 {
  "id": "mh-luzan",
  "grupo": "mhcorp",
  "rubro": "inmobiliario",
  "estilo": "dron",
  "titulo": "Edificio Luzán",
  "vistas": 2576,
  "url": "https://www.instagram.com/reel/C0jxmMqu3BM/"
 },
 {
  "id": "mh-obra",
  "grupo": "mhcorp",
  "rubro": "inmobiliario",
  "estilo": "storytelling",
  "titulo": "Inicio de obra",
  "vistas": 1944,
  "url": "https://www.instagram.com/reel/C8m8qXXqJd2/"
 },
 {
  "id": "mh-green",
  "grupo": "mhcorp",
  "rubro": "inmobiliario",
  "estilo": "voz",
  "titulo": "Taste in Green",
  "vistas": 362000,
  "url": "https://www.instagram.com/p/C1FiA-OpvYy/"
 },
 {
  "id": "ypqn-buceo",
  "grupo": "ypqn",
  "rubro": "turismo",
  "estilo": "dinamico",
  "titulo": "Buceo",
  "vistas": 4830,
  "url": "https://www.instagram.com/reel/DDVb5GrJ1mV/"
 },
 {
  "id": "ypqn-neke",
  "grupo": "ypqn",
  "rubro": "turismo",
  "estilo": "storytelling",
  "titulo": "Desayunar rico y teletrabajar",
  "vistas": 22300,
  "url": "https://www.instagram.com/reel/C1ZtYUvu3Is/"
 },
 {
  "id": "ypqn-container",
  "grupo": "ypqn",
  "rubro": "turismo",
  "estilo": "contemplativo",
  "titulo": "Dormir en un container",
  "vistas": 84000,
  "url": "https://www.instagram.com/p/CzAMiPasLBq/"
 },
 {
  "id": "cerrolobo-mar",
  "grupo": "cerrolobo",
  "rubro": "inmobiliario",
  "estilo": "contemplativo",
  "titulo": "Frente al mar",
  "vistas": 72000,
  "url": "https://www.instagram.com/p/C6mLUJvrAty/"
 },
 {
  "id": "cerrolobo-aire",
  "grupo": "cerrolobo",
  "rubro": "inmobiliario",
  "estilo": "dron",
  "titulo": "El proyecto desde el aire",
  "vistas": 123000,
  "url": "https://www.instagram.com/p/C6CTmtzPqHE/"
 },
 {
  "id": "davalos-ciudad",
  "grupo": "davalos",
  "rubro": "inmobiliario",
  "estilo": "dron",
  "titulo": "Ubicación en la ciudad",
  "vistas": 128000,
  "url": "https://www.instagram.com/reel/C5UPJPHJbLA/"
 },
 {
  "id": "andes-montaje",
  "grupo": "andes",
  "rubro": "inmobiliario",
  "estilo": "storytelling",
  "titulo": "Montaje del domo",
  "vistas": 134000,
  "url": "https://www.instagram.com/reel/C_RkJ5KRSse/"
 },
 {
  "id": "andes-estructura",
  "grupo": "andes",
  "rubro": "inmobiliario",
  "estilo": "storytelling",
  "titulo": "La estructura por dentro",
  "vistas": 177000,
  "url": "https://www.instagram.com/reel/C-qHvewP7rl/"
 },
 {
  "id": "ox-auditorio",
  "grupo": "ox",
  "rubro": "eventos",
  "estilo": "cobertura",
  "titulo": "Conferencia en auditorio",
  "vistas": 0,
  "url": "https://www.instagram.com/reel/Cnrmtr6I-hE/"
 },
 {
  "id": "ciclismo-ruta",
  "grupo": "delicatto",
  "rubro": "eventos",
  "estilo": "cobertura",
  "titulo": "Ruta ciclística",
  "vistas": 0,
  "url": "https://www.instagram.com/p/Cc3qr_9JCNP/"
 },
 {
  "id": "rally-carretera",
  "grupo": "automovilismo",
  "rubro": "deporte",
  "estilo": "dron",
  "titulo": "Persecución en carretera",
  "vistas": 0,
  "url": "https://www.instagram.com/reel/CnD2V5RgKNo/"
 }
];
