// Catálogo del portafolio. Para sumar un video: agrega un objeto a VIDEOS
// (id único, grupo, rubro, estilo, titulo, vistas, url) y su miniatura en assets/reels/<id>.jpg
window.GRUPOS = [
 {
  "id": "andes",
  "nombre": "Star Wild (antes Andes Structures)",
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
  "texto": "Estrategia de comunicación continua, contenido genuino y comercial medido mes a mes, y cobertura en vivo de la Copa Audi en Costa Jama."
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
  "texto": "Cobertura de lanzamientos y conferencias, y el OX Podcast: historias de deportistas que van más allá de lo competitivo."
 },
 {
  "id": "luis-cross",
  "nombre": "Luis Cross",
  "rubro": "deporte",
  "texto": "Marca personal de un motociclista que compite con un solo brazo, en colaboración con Factory Bike: cobertura en tiempo real, activaciones y su historia de superación."
 },
 {
  "id": "lemans",
  "nombre": "24 Horas de Le Mans con Motul",
  "rubro": "eventos",
  "texto": "La primera cobertura intercontinental: el relato en tiempo real desde dentro de una de las carreras más importantes del mundo."
 },
 {
  "id": "recovery",
  "nombre": "Recovery: 10 años",
  "rubro": "salud",
  "texto": "Antes, durante y después del festival por sus diez años: 5K, CrossFit y comunidad, contados en tiempo real."
 },
 {
  "id": "promotion",
  "nombre": "Pro Motion Sport Marketing",
  "rubro": "deporte",
  "texto": "Comunicación en primera persona: explicamos y damos contexto a los hitos del deporte, con voz propia."
 },
 {
  "id": "sebastian",
  "nombre": "Sebastián Merchán",
  "rubro": "deporte",
  "texto": "Marca personal y cobertura en tiempo real de un piloto GT: campeón V8 del GT Challenge de las Américas 2024 y ganador de la general en Panamá 2025."
 },
 {
  "id": "diego",
  "nombre": "Diego Serrano",
  "rubro": "deporte",
  "texto": "Cobertura en tiempo real del Nacional de Rally y de Circuitos: la pole, el onboard y cada victoria contados mientras pasaban."
 },
 {
  "id": "motul",
  "nombre": "Motul Ecuador",
  "rubro": "eventos",
  "texto": "Cobertura en vivo para la marca en el Rally de Gualaceo, en paralelo con la cuenta del piloto, y la experiencia de las 24 Horas de Le Mans."
 },
 {
  "id": "gtchallenge",
  "nombre": "GT Challenge de las Américas",
  "rubro": "eventos",
  "texto": "Comunicación y cobertura desde adentro del campeonato en Panamá, Guyana, Barbados y México."
 },
 {
  "id": "automovilismo",
  "nombre": "Rally y circuitos",
  "rubro": "deporte",
  "texto": "Cobertura de pilotos como Juan Guerrero (G128 Rally Racer) en la Vuelta al Ecuador, los 1001 km de Yahuarcocha y el Nacional de Rally."
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
  "url": "https://www.instagram.com/reel/CxeTV8YJT0C/",
  "desc": "Resumen de la victoria en los 1001 km del Autódromo de Yahuarcocha, contada desde el aire."
 },
 {
  "id": "mtb-campo",
  "grupo": "ciclismo",
  "rubro": "deporte",
  "estilo": "dinamico",
  "titulo": "Descenso en campo abierto",
  "vistas": 23000,
  "url": "https://www.instagram.com/reel/C9L3nizNtwi/",
  "desc": "Pieza motivacional de entrenamiento: llevar las capacidades al límite antes de competir."
 },
 {
  "id": "gt-firma",
  "grupo": "sebastian",
  "rubro": "deporte",
  "estilo": "cobertura",
  "titulo": "Firma en el auto antes de la carrera",
  "vistas": 24600,
  "url": "https://www.instagram.com/reel/DC7tcyyRfpL/",
  "desc": "A dos días del cierre del GT Challenge 2024: la previa del equipo TCR Motorsport."
 },
 {
  "id": "gt-podio",
  "grupo": "sebastian",
  "rubro": "deporte",
  "estilo": "cobertura",
  "titulo": "Celebración en el podio",
  "vistas": 13200,
  "url": "https://www.instagram.com/reel/DDLU4aPJPYy/",
  "desc": "Final del campeonato 2024: 7 fechas, 6 países y el título de la categoría V8."
 },
 {
  "id": "gt-casco",
  "grupo": "sebastian",
  "rubro": "deporte",
  "estilo": "storytelling",
  "titulo": "Piloto antes de la largada",
  "vistas": 33800,
  "url": "https://www.instagram.com/reel/DB-CJsNp318/",
  "desc": "Victoria en la categoría V8 en El Salvador y liderato del campeonato por 2 puntos."
 },
 {
  "id": "gt-autodromo",
  "grupo": "sebastian",
  "rubro": "deporte",
  "estilo": "dinamico",
  "titulo": "Recta del autódromo",
  "vistas": 36800,
  "url": "https://www.instagram.com/reel/DBkX22bJ0oi/",
  "clip": "assets/clips/gt-autodromo.mp4",
  "poster": "assets/posters/gt-autodromo.jpg",
  "desc": "Últimas prácticas cronometradas en el Autódromo El Jabalí antes de la carrera."
 },
 {
  "id": "rally-polvo",
  "grupo": "automovilismo",
  "rubro": "deporte",
  "estilo": "dinamico",
  "titulo": "Curva de tierra",
  "vistas": 11800,
  "url": "https://www.instagram.com/reel/CzlpKr7OgIp/",
  "desc": "Resumen de la primera etapa de la Vuelta al Ecuador 2023, publicado el mismo día."
 },
 {
  "id": "rally-tierra",
  "grupo": "automovilismo",
  "rubro": "deporte",
  "estilo": "dinamico",
  "titulo": "Derrape en tierra",
  "vistas": 6154,
  "url": "https://www.instagram.com/reel/ClD6uDVgICC/",
  "desc": "Resumen de la etapa 3 de la Vuelta al Ecuador: nada está dicho todavía."
 },
 {
  "id": "rally-noche",
  "grupo": "automovilismo",
  "rubro": "deporte",
  "estilo": "cobertura",
  "titulo": "Rally nocturno y fuegos",
  "vistas": 9402,
  "url": "https://www.instagram.com/reel/CzyjZcyulri/",
  "desc": "Cuarta etapa de la Vuelta al Ecuador: enlaces extensos, altura y el último día por delante."
 },
 {
  "id": "rally-asistencia",
  "grupo": "automovilismo",
  "rubro": "deporte",
  "estilo": "storytelling",
  "titulo": "Asistencia mecánica",
  "vistas": 4397,
  "url": "https://www.instagram.com/p/Cl61wkXJDd4/",
  "desc": "Los días de asistencia mecánica entre etapas, el lado que no se ve del rally."
 },
 {
  "id": "rally-bosque",
  "grupo": "automovilismo",
  "rubro": "deporte",
  "estilo": "dinamico",
  "titulo": "Tramo en el bosque",
  "vistas": 4101,
  "url": "https://www.instagram.com/reel/CuzezzLxtxk/",
  "desc": "Resultados de la 4ta válida del Nacional de Rally en Cotopaxi."
 },
 {
  "id": "rally-estadio",
  "grupo": "automovilismo",
  "rubro": "deporte",
  "estilo": "dinamico",
  "titulo": "Llegada al estadio",
  "vistas": 1620,
  "url": "https://www.instagram.com/reel/CxiV5CKO4Gb/",
  "desc": "Rally Loja día 1: primer lugar de categoría tras el súper prime y dos tramos nocturnos."
 },
 {
  "id": "rally-rampa",
  "grupo": "automovilismo",
  "rubro": "deporte",
  "estilo": "cobertura",
  "titulo": "Rampa de largada nocturna",
  "vistas": 3181,
  "url": "https://www.instagram.com/reel/Cury6wTunZB/",
  "desc": "Llegada a Latacunga y recibimiento de la afición antes de la 4ta válida nacional."
 },
 {
  "id": "rally-piloto",
  "grupo": "automovilismo",
  "rubro": "deporte",
  "estilo": "storytelling",
  "titulo": "Piloto en la asistencia",
  "vistas": 6617,
  "url": "https://www.instagram.com/reel/ClAcQitgYeC/",
  "desc": "Resumen de la etapa 2 de la Vuelta al Ecuador 2022, de El Oro a Cuenca."
 },
 {
  "id": "mx-moto",
  "grupo": "motocross",
  "rubro": "deporte",
  "estilo": "dinamico",
  "titulo": "Moto lista para salir",
  "vistas": 2953,
  "url": "https://www.instagram.com/reel/Cv8PkWXp1Eu/",
  "desc": "Agradecimiento a auspiciantes camino al Desafío Ruta 40, el rally mundial en Argentina."
 },
 {
  "id": "mx-paddock",
  "grupo": "motocross",
  "rubro": "deporte",
  "estilo": "dinamico",
  "titulo": "Paddock en el páramo",
  "vistas": 2407,
  "url": "https://www.instagram.com/reel/CwTN_BhJh9U/",
  "desc": "A cinco días de representar a Ecuador en el Desafío Ruta 40."
 },
 {
  "id": "mx-entrevista",
  "grupo": "motocross",
  "rubro": "deporte",
  "estilo": "testimonial",
  "titulo": "Entrevista en boxes",
  "vistas": 5017,
  "url": "https://www.instagram.com/reel/Cw-R0Uxuy1Q/",
  "desc": "Recibimiento y entrevista en boxes rumbo al rally mundial."
 },
 {
  "id": "kart-piloto",
  "grupo": "karting",
  "rubro": "deporte",
  "estilo": "testimonial",
  "titulo": "Piloto en primera persona",
  "vistas": 2026,
  "url": "https://www.instagram.com/reel/CwQ88NoAQbN/",
  "desc": "Regreso al karting en la Copa Rotax 2023, contado en primera persona."
 },
 {
  "id": "kart-curva",
  "grupo": "karting",
  "rubro": "deporte",
  "estilo": "dinamico",
  "titulo": "Kart en curva",
  "vistas": 571,
  "url": "https://www.instagram.com/reel/Cwpu6clO5u6/",
  "desc": "Resumen de la 1ra y 2da válida de la Copa Rotax tras diez meses sin competir."
 },
 {
  "id": "kart-347",
  "grupo": "karting",
  "rubro": "deporte",
  "estilo": "dinamico",
  "titulo": "Kart 347 en pista",
  "vistas": 8101,
  "url": "https://www.instagram.com/reel/CxyuTZbLH-d/",
  "desc": "Previa de las últimas válidas del campeonato Rotax 2023."
 },
 {
  "id": "ecuestre-salto",
  "grupo": "ecuestre",
  "rubro": "deporte",
  "estilo": "cobertura",
  "titulo": "Salto ecuestre",
  "vistas": 21200,
  "url": "https://www.instagram.com/reel/Cs9zUecpIPu/",
  "desc": "V CHOP: primer lugar en la abierta de 1,35 m con Coral Z."
 },
 {
  "id": "ecuestre-pista",
  "grupo": "ecuestre",
  "rubro": "deporte",
  "estilo": "dron",
  "titulo": "Pista de salto desde el aire",
  "vistas": 1377,
  "url": "https://www.instagram.com/reel/CvAe4F-g3Tc/",
  "desc": "VII Concurso Hípico Nacional: segundo lugar juvenil en 1,30 m, con tomas aéreas."
 },
 {
  "id": "ecuestre-fede",
  "grupo": "ecuestre",
  "rubro": "deporte",
  "estilo": "cobertura",
  "titulo": "Federación ecuestre",
  "vistas": 1542,
  "url": "https://www.instagram.com/reel/CqLiX1-gJ2G/",
  "desc": "Primer día de la Copa Ecuestre Mitad del Mundo de la Federación Ecuatoriana."
 },
 {
  "id": "martin-ortiz",
  "grupo": "martin-ortiz",
  "rubro": "deporte",
  "estilo": "testimonial",
  "titulo": "Testimonial del rider",
  "vistas": 22000,
  "url": "https://www.instagram.com/p/C0uEk92O131/",
  "desc": "Testimonial para Ride: el nuevo dirt jumper presentado por un rider."
 },
 {
  "id": "ox-lanzamiento",
  "grupo": "ox",
  "rubro": "eventos",
  "estilo": "cobertura",
  "titulo": "Lanzamiento y conferencia",
  "vistas": 0,
  "url": "https://www.instagram.com/reel/CqstP1dLCSO/",
  "desc": "Primer Congreso de la Mujer Automotriz: cobertura del evento con OX Sport Agency."
 },
 {
  "id": "delicatto-evento",
  "grupo": "delicatto",
  "rubro": "gastronomia",
  "estilo": "cobertura",
  "titulo": "Evento gastronómico en tiempo real",
  "vistas": 3157,
  "url": "https://www.instagram.com/reel/Cbap6XvpQKx/",
  "desc": "Taller de tablitas con Mammia en Delicatto Piggis, contado en tiempo real."
 },
 {
  "id": "buganey-camino",
  "grupo": "buganey",
  "rubro": "turismo",
  "estilo": "contemplativo",
  "titulo": "Llegada a la cabaña",
  "vistas": 5295,
  "url": "https://www.instagram.com/reel/Cixkz_SgpKd/",
  "desc": "Presentación de Buganey: glamping, restaurante y senderismo a 40 minutos de Cuenca."
 },
 {
  "id": "buganey-ventana",
  "grupo": "buganey",
  "rubro": "turismo",
  "estilo": "storytelling",
  "titulo": "Despertar frente a la montaña",
  "vistas": 1713,
  "url": "https://www.instagram.com/reel/CjIjFQ_gPbZ/",
  "desc": "Despertar frente al paisaje: expectativa antes de la apertura."
 },
 {
  "id": "buganey-caballos",
  "grupo": "buganey",
  "rubro": "turismo",
  "estilo": "contemplativo",
  "titulo": "Cabalgata en el páramo",
  "vistas": 941,
  "url": "https://www.instagram.com/reel/Ci-hOYuA-mI/",
  "desc": "Cabalgatas, pesca deportiva y senderismo en la Estancia Buganey."
 },
 {
  "id": "vcomer-showroom",
  "grupo": "vcomer",
  "rubro": "producto",
  "estilo": "voz",
  "titulo": "Showroom con voz",
  "vistas": 43200,
  "url": "https://www.instagram.com/reel/CpaeX1Kj2W4/",
  "desc": "Recorrido por el showroom de Vcomer con voz: una nueva forma de comprar electrodomésticos."
 },
 {
  "id": "colineal-tienda",
  "grupo": "colineal",
  "rubro": "producto",
  "estilo": "voz",
  "titulo": "Tienda con voz",
  "vistas": 0,
  "url": "https://drive.google.com/file/d/1RGhfpQ2Xm8FBoMqm2UHsU_tOpi89ri33/preview",
  "desc": "Video descriptivo con voz de la tienda Colineal."
 },
 {
  "id": "blanc-2",
  "grupo": "blanc",
  "rubro": "salud",
  "estilo": "testimonial",
  "titulo": "Después del tratamiento",
  "vistas": 1265,
  "url": "https://www.instagram.com/reel/CtKIoGuO3Id/",
  "desc": "Testimonio de una paciente sobre su nuevo diseño de sonrisa en Blanc."
 },
 {
  "id": "blanc-3",
  "grupo": "blanc",
  "rubro": "salud",
  "estilo": "dinamico",
  "titulo": "Consulta en movimiento",
  "vistas": 5838,
  "url": "https://www.instagram.com/reel/CsXMvGFJcIn/",
  "desc": "La primera cita en Blanc: evaluación integral con equipos de alta tecnología."
 },
 {
  "id": "blanc-6",
  "grupo": "blanc",
  "rubro": "salud",
  "estilo": "storytelling",
  "titulo": "Odontología digital",
  "vistas": 12500,
  "url": "https://www.instagram.com/reel/CqjNQ2uJs8M/",
  "desc": "Un paciente prueba el escáner iTero Element 5D de Blanc."
 },
 {
  "id": "latino-oftalmo",
  "grupo": "latino",
  "rubro": "salud",
  "estilo": "voz",
  "titulo": "Una nueva era en oftalmología",
  "vistas": 0,
  "url": "https://drive.google.com/file/d/1Iv-cZa-iGmZbNIB5zjDee5Y1gNxpS5-X/preview",
  "desc": "Presentación con voz del área de oftalmología de Clínica Latino."
 },
 {
  "id": "andes-domos-aire",
  "grupo": "andes",
  "rubro": "inmobiliario",
  "estilo": "dron",
  "titulo": "Domos desde el aire",
  "vistas": 217000,
  "url": "https://www.instagram.com/reel/CygRH6iLicH/",
  "clip": "assets/clips/andes-domos-aire.mp4",
  "poster": "assets/posters/andes-domos-aire.jpg",
  "desc": "Domos geodésicos en una escuela privada: innovación y naturaleza desde el aire."
 },
 {
  "id": "andes-terraza",
  "grupo": "andes",
  "rubro": "inmobiliario",
  "estilo": "dinamico",
  "titulo": "Recorrido por la terraza",
  "vistas": 263000,
  "url": "https://www.instagram.com/reel/Cy9hRN_pHDt/",
  "clip": "assets/clips/andes-terraza.mp4",
  "poster": "assets/posters/andes-terraza.jpg",
  "desc": "Glamping con vista a Cuenca a 20 minutos del centro: la pieza más vista de la marca."
 },
 {
  "id": "andes-quito",
  "grupo": "andes",
  "rubro": "inmobiliario",
  "estilo": "dron",
  "titulo": "Domo con vista a la ciudad",
  "vistas": 81800,
  "url": "https://www.instagram.com/p/C1Au5uwrIIT/",
  "desc": "El domo más grande del Ecuador: 314 m² instalados en tres días."
 },
 {
  "id": "thor-cocina",
  "grupo": "thor",
  "rubro": "producto",
  "estilo": "producto",
  "titulo": "Cocinar en Thor",
  "vistas": 106000,
  "url": "https://www.instagram.com/reel/DD_FodFMDF9/",
  "clip": "assets/clips/thor-cocina.mp4",
  "poster": "assets/posters/thor-cocina.jpg",
  "desc": "Receta navideña con Dos Sucres y el Chef Daniel Contreras: guiso de cordero en Thor."
 },
 {
  "id": "thor-g1",
  "grupo": "thor",
  "rubro": "producto",
  "estilo": "voz",
  "titulo": "Presentadora en showroom",
  "vistas": 13200,
  "url": "https://www.instagram.com/reel/C2U5_1Ws52T/",
  "desc": "El nuevo lavavajillas Thor Kitchen presentado en showroom."
 },
 {
  "id": "thor-g2",
  "grupo": "thor",
  "rubro": "producto",
  "estilo": "producto",
  "titulo": "Función air fryer",
  "vistas": 40600,
  "url": "https://www.instagram.com/reel/C1zbmJfLDb2/",
  "desc": "La cocina a gas de 36 pulgadas: potencia, precisión y estilo."
 },
 {
  "id": "thor-vinos",
  "grupo": "thor",
  "rubro": "producto",
  "estilo": "producto",
  "titulo": "Cava de vinos",
  "vistas": 52900,
  "url": "https://www.instagram.com/reel/DA86izNxf0U/",
  "desc": "La vinera TWC-1501 de Thor Kitchen para el feriado."
 },
 {
  "id": "thor-kitchen",
  "grupo": "thor",
  "rubro": "producto",
  "estilo": "voz",
  "titulo": "Cocina completa",
  "vistas": 58700,
  "url": "https://www.instagram.com/reel/DCpigwORyDS/",
  "desc": "La torre de hornos: microondas 9 en 1 y horno empotrable en promoción."
 },
 {
  "id": "thor-refri",
  "grupo": "thor",
  "rubro": "producto",
  "estilo": "producto",
  "titulo": "Refrigeradora francesa",
  "vistas": 82200,
  "url": "https://www.instagram.com/reel/DCZaHMeRbcI/",
  "desc": "Aniversario: refrigerador Thor con vinera de regalo."
 },
 {
  "id": "vcomer-chef",
  "grupo": "vcomer",
  "rubro": "gastronomia",
  "estilo": "testimonial",
  "titulo": "El chef y su parrilla",
  "vistas": 15000,
  "url": "https://www.instagram.com/reel/CwOf-lKMKsZ/",
  "desc": "Inicio de la colaboración con el Chef Daniel Contreras de Dos Sucres en el mundo Kamado."
 },
 {
  "id": "vcomer-egg",
  "grupo": "vcomer",
  "rubro": "gastronomia",
  "estilo": "producto",
  "titulo": "Parrilla en acción",
  "vistas": 16200,
  "url": "https://www.instagram.com/reel/CwykTwMMDID/",
  "desc": "Cómo curar tu Kamado, paso a paso."
 },
 {
  "id": "vcomer-pizza",
  "grupo": "vcomer",
  "rubro": "gastronomia",
  "estilo": "testimonial",
  "titulo": "Pizza a la leña",
  "vistas": 25400,
  "url": "https://www.instagram.com/p/CzL8UkrL_O1/",
  "desc": "Tutorial de pizza en el Kamado de 18 pulgadas con el Chef Daniel Contreras."
 },
 {
  "id": "iglace-cafe",
  "grupo": "iglace",
  "rubro": "producto",
  "estilo": "producto",
  "titulo": "Café al instante",
  "vistas": 35700,
  "url": "https://www.instagram.com/reel/DDYPEQcxEmc/",
  "desc": "Cafeteras S7 y S9 de iGlace con café Lavazza de regalo."
 },
 {
  "id": "iglace-redefine",
  "grupo": "iglace",
  "rubro": "producto",
  "estilo": "voz",
  "titulo": "Redefine tu cocina",
  "vistas": 17600,
  "url": "https://www.instagram.com/reel/DE09TRfMlBA/",
  "desc": "El refrigerador IGDO: diseño, tecnología y acero inoxidable."
 },
 {
  "id": "iglace-espresso",
  "grupo": "iglace",
  "rubro": "producto",
  "estilo": "producto",
  "titulo": "Espresso en cámara lenta",
  "vistas": 15500,
  "url": "https://www.instagram.com/reel/DBaDBK3sHFo/",
  "clip": "assets/clips/iglace-espresso.mp4",
  "poster": "assets/posters/iglace-espresso.jpg",
  "desc": "El arte del café empieza con un sonido: la S7 en cámara lenta."
 },
 {
  "id": "iglace-hielo",
  "grupo": "iglace",
  "rubro": "producto",
  "estilo": "voz",
  "titulo": "Máquina de hielo",
  "vistas": 110000,
  "url": "https://www.instagram.com/reel/DCKNdjexZj_/",
  "clip": "assets/clips/iglace-hielo.mp4",
  "poster": "assets/posters/iglace-hielo.jpg",
  "desc": "Agua pura en tiempos de sequía: la máquina de hielo y agua iGlace."
 },
 {
  "id": "iglace-cubos",
  "grupo": "iglace",
  "rubro": "producto",
  "estilo": "producto",
  "titulo": "Cubos de hielo",
  "vistas": 17500,
  "url": "https://www.instagram.com/reel/DDx4yLjxGOk/",
  "desc": "IceMaker IG-20: 20 kg de hielo cristalino cada 24 horas."
 },
 {
  "id": "iglace-agua",
  "grupo": "iglace",
  "rubro": "producto",
  "estilo": "producto",
  "titulo": "Agua fría al aire libre",
  "vistas": 12400,
  "url": "https://www.instagram.com/reel/DC_1khMxmiQ/",
  "desc": "Filtro purificador con agua alcalina y cinco etapas de filtración."
 },
 {
  "id": "alanna-detalle",
  "grupo": "alanna",
  "rubro": "interiorismo",
  "estilo": "contemplativo",
  "titulo": "Planos de detalle",
  "vistas": 14200,
  "url": "https://www.instagram.com/p/CxN6nI_O66T/",
  "desc": "Video contemplativo de interiores con planos de detalle."
 },
 {
  "id": "lic-tenis",
  "grupo": "lifeincolours",
  "rubro": "moda",
  "estilo": "voz",
  "titulo": "Medias con estilo",
  "vistas": 25100,
  "url": "https://www.instagram.com/reel/Ct8E019sMsI/",
  "desc": "Medias Life in Colours con voz propia."
 },
 {
  "id": "lic-adidas",
  "grupo": "lifeincolours",
  "rubro": "moda",
  "estilo": "dinamico",
  "titulo": "Paso a paso",
  "vistas": 26600,
  "url": "https://www.instagram.com/reel/Cl37EdDp2nl/",
  "desc": "Paso a paso con medias Life in Colours."
 },
 {
  "id": "cuenca-catedral",
  "grupo": "cuenca",
  "rubro": "turismo",
  "estilo": "dron",
  "titulo": "Catedral de Cuenca",
  "vistas": 23700,
  "url": "https://www.instagram.com/reel/CsAAUFlp0vk/",
  "desc": "Primeras tomas aéreas de la Catedral de Cuenca."
 },
 {
  "id": "tre-pasillo",
  "grupo": "tre",
  "rubro": "interiorismo",
  "estilo": "contemplativo",
  "titulo": "Pasillo con luz lineal",
  "vistas": 10700,
  "url": "https://www.instagram.com/reel/C24tj8-uJ-E/",
  "desc": "Remodelación completa: demolición, divisiones de madera, vidrio e iluminación lineal."
 },
 {
  "id": "tre-sala",
  "grupo": "tre",
  "rubro": "interiorismo",
  "estilo": "contemplativo",
  "titulo": "Sala terminada",
  "vistas": 9739,
  "url": "https://www.instagram.com/reel/C3nYfjGOAyu/",
  "desc": "Diseño interior personalizado de una residencia en Cuenca."
 },
 {
  "id": "tre-milano",
  "grupo": "tre",
  "rubro": "interiorismo",
  "estilo": "dinamico",
  "titulo": "Tienda Milano",
  "vistas": 10600,
  "url": "https://www.instagram.com/reel/C4bZz4sJVu4/",
  "desc": "Proyecto comercial para Milano Emporio: clásico y moderno."
 },
 {
  "id": "tre-pizarra",
  "grupo": "tre",
  "rubro": "interiorismo",
  "estilo": "storytelling",
  "titulo": "Del boceto a la obra",
  "vistas": 10100,
  "url": "https://www.instagram.com/reel/DDedJ8EOL7W/",
  "desc": "Del boceto a la obra: proyecto Auyani."
 },
 {
  "id": "tre-hospital",
  "grupo": "tre",
  "rubro": "interiorismo",
  "estilo": "testimonial",
  "titulo": "Testimonio en el hospital",
  "vistas": 10500,
  "url": "https://www.instagram.com/reel/C9pMu8-tS1w/",
  "desc": "Espacios del Hospital del Río transformados por Studio Tre."
 },
 {
  "id": "tre-comedor",
  "grupo": "tre",
  "rubro": "interiorismo",
  "estilo": "contemplativo",
  "titulo": "Comedor y detalles",
  "vistas": 11400,
  "url": "https://www.instagram.com/reel/C-u1_ZVpmwU/",
  "desc": "Resultado de un comedor residencial terminado."
 },
 {
  "id": "davalos-aire",
  "grupo": "davalos",
  "rubro": "inmobiliario",
  "estilo": "dron",
  "titulo": "La obra desde el aire",
  "vistas": 21900,
  "url": "https://www.instagram.com/reel/C_i_u4zJR8p/",
  "desc": "Última oportunidad en Proyecto Milán: departamento de 2 dormitorios con rooftop."
 },
 {
  "id": "davalos-planos",
  "grupo": "davalos",
  "rubro": "inmobiliario",
  "estilo": "storytelling",
  "titulo": "Revisión de planos en obra",
  "vistas": 26200,
  "url": "https://www.instagram.com/reel/C_Tu1ybJrGX/",
  "desc": "Avance de obra: calidad y compromiso en cada detalle de la construcción."
 },
 {
  "id": "davalos-cenital",
  "grupo": "davalos",
  "rubro": "inmobiliario",
  "estilo": "dron",
  "titulo": "Vista cenital del terreno",
  "vistas": 3673,
  "url": "https://www.instagram.com/reel/C5mVuKKJNMO/",
  "desc": "Vista cenital del terreno y buenas prácticas constructivas."
 },
 {
  "id": "mh-luzan",
  "grupo": "mhcorp",
  "rubro": "inmobiliario",
  "estilo": "dron",
  "titulo": "Edificio Luzán",
  "vistas": 2576,
  "url": "https://www.instagram.com/reel/C0jxmMqu3BM/",
  "desc": "Edificio Luzán: arquitectura paisajista con doble fachada."
 },
 {
  "id": "mh-obra",
  "grupo": "mhcorp",
  "rubro": "inmobiliario",
  "estilo": "storytelling",
  "titulo": "Inicio de obra",
  "vistas": 1944,
  "url": "https://www.instagram.com/reel/C8m8qXXqJd2/",
  "desc": "Inicio de cimientos del proyecto Velázquez."
 },
 {
  "id": "mh-green",
  "grupo": "mhcorp",
  "rubro": "inmobiliario",
  "estilo": "voz",
  "titulo": "Taste in Green",
  "vistas": 362000,
  "url": "https://www.instagram.com/p/C1FiA-OpvYy/",
  "clip": "assets/clips/mh-green.mp4",
  "poster": "assets/posters/mh-green.jpg",
  "desc": "SEIVA Rooftop en el centro histórico de Cuenca, con vista a la Catedral."
 },
 {
  "id": "ypqn-buceo",
  "grupo": "ypqn",
  "rubro": "turismo",
  "estilo": "dinamico",
  "titulo": "Buceo",
  "vistas": 4830,
  "url": "https://www.instagram.com/reel/DDVb5GrJ1mV/",
  "desc": "Bucear en Ayangue por 120 dólares: 11 metros bajo el agua."
 },
 {
  "id": "ypqn-neke",
  "grupo": "ypqn",
  "rubro": "turismo",
  "estilo": "storytelling",
  "titulo": "Desayunar rico y teletrabajar",
  "vistas": 22300,
  "url": "https://www.instagram.com/reel/C1ZtYUvu3Is/",
  "desc": "Teletrabajar con buen desayuno en Neke, Cuenca."
 },
 {
  "id": "ypqn-container",
  "grupo": "ypqn",
  "rubro": "turismo",
  "estilo": "contemplativo",
  "titulo": "Dormir en un container",
  "vistas": 84000,
  "url": "https://www.instagram.com/p/CzAMiPasLBq/",
  "clip": "assets/clips/ypqn-container.mp4",
  "poster": "assets/posters/ypqn-container.jpg",
  "desc": "Dormir en un container a la orilla de la Laguna de Yambo, en Salcedo."
 },
 {
  "id": "cerrolobo-mar",
  "grupo": "cerrolobo",
  "rubro": "inmobiliario",
  "estilo": "contemplativo",
  "titulo": "Frente al mar",
  "vistas": 72000,
  "url": "https://www.instagram.com/p/C6mLUJvrAty/",
  "desc": "Cerro Lobo frente al mar: una experiencia diferente."
 },
 {
  "id": "cerrolobo-aire",
  "grupo": "cerrolobo",
  "rubro": "inmobiliario",
  "estilo": "dron",
  "titulo": "El proyecto desde el aire",
  "vistas": 123000,
  "url": "https://www.instagram.com/p/C6CTmtzPqHE/",
  "clip": "assets/clips/cerrolobo-aire.mp4",
  "poster": "assets/posters/cerrolobo-aire.jpg",
  "desc": "El proyecto desde el aire: un lugar para desconectarse y descansar."
 },
 {
  "id": "davalos-ciudad",
  "grupo": "davalos",
  "rubro": "inmobiliario",
  "estilo": "dron",
  "titulo": "Ubicación en la ciudad",
  "vistas": 128000,
  "url": "https://www.instagram.com/reel/C5UPJPHJbLA/",
  "clip": "assets/clips/davalos-ciudad.mp4",
  "poster": "assets/posters/davalos-ciudad.jpg",
  "desc": "Proyecto Milán: ubicación privilegiada junto a bancos, farmacias y la Universidad de Cuenca."
 },
 {
  "id": "andes-montaje",
  "grupo": "andes",
  "rubro": "inmobiliario",
  "estilo": "storytelling",
  "titulo": "Montaje del domo",
  "vistas": 134000,
  "url": "https://www.instagram.com/reel/C_RkJ5KRSse/",
  "desc": "Montaje del domo de 314 m² en San Joaquín, Cuenca, paso a paso."
 },
 {
  "id": "andes-estructura",
  "grupo": "andes",
  "rubro": "inmobiliario",
  "estilo": "storytelling",
  "titulo": "La estructura por dentro",
  "vistas": 177000,
  "url": "https://www.instagram.com/reel/C-qHvewP7rl/",
  "clip": "assets/clips/andes-estructura.mp4",
  "poster": "assets/posters/andes-estructura.jpg",
  "desc": "La estructura por dentro: acero galvanizado y doble revestimiento en siete días de obra."
 },
 {
  "id": "ox-auditorio",
  "grupo": "ox",
  "rubro": "eventos",
  "estilo": "cobertura",
  "titulo": "Conferencia en auditorio",
  "vistas": 0,
  "url": "https://www.instagram.com/reel/Cnrmtr6I-hE/",
  "desc": "Lanzamiento de temporada 2023 de OX Sport Agency con deportistas."
 },
 {
  "id": "ciclismo-ruta",
  "grupo": "delicatto",
  "rubro": "eventos",
  "estilo": "cobertura",
  "titulo": "Ruta ciclística",
  "vistas": 0,
  "url": "https://www.instagram.com/p/Cc3qr_9JCNP/",
  "desc": "La Ruta del Sabor: experiencia ciclística y gastronómica de Delicatto."
 },
 {
  "id": "rally-carretera",
  "grupo": "automovilismo",
  "rubro": "deporte",
  "estilo": "dron",
  "titulo": "Persecución en carretera",
  "vistas": 0,
  "url": "https://www.instagram.com/reel/CnD2V5RgKNo/",
  "desc": "Persecución en carretera durante la Vuelta al Ecuador 2022."
 },
 {
  "id": "lemans-sorteo",
  "grupo": "lemans",
  "rubro": "eventos",
  "estilo": "cobertura",
  "titulo": "Desde el camión de Motul",
  "vistas": 20070,
  "url": "https://www.instagram.com/reel/DZiF-pDtKV-/",
  "clip": "assets/clips/lemans-sorteo.mp4",
  "poster": "assets/posters/lemans-sorteo.jpg",
  "desc": "Desde el camión de Motul en las 24 Horas de Le Mans, con sorteo para la audiencia en Ecuador."
 },
 {
  "id": "lemans-anuncio",
  "grupo": "lemans",
  "rubro": "eventos",
  "estilo": "voz",
  "titulo": "Lo que empezó como un sueño",
  "vistas": 3606,
  "url": "https://www.instagram.com/reel/DZdpnq0NXsl/",
  "clip": "assets/clips/lemans-anuncio.mp4",
  "poster": "assets/posters/lemans-anuncio.jpg",
  "desc": "Cinco años de contenido y el anuncio de la primera cobertura intercontinental."
 },
 {
  "id": "lemans-12h",
  "grupo": "lemans",
  "rubro": "eventos",
  "estilo": "cobertura",
  "titulo": "Ni 12 de las 24 horas",
  "vistas": 1324,
  "url": "https://www.instagram.com/reel/DZqfexLNGX-/",
  "desc": "Ni 12 de las 24 horas: lo que se vive dentro del circuito de Le Mans.",
  "clip": "assets/clips/lemans-12h.mp4",
  "poster": "assets/posters/lemans-12h.jpg"
 },
 {
  "id": "lemans-primeras-horas",
  "grupo": "lemans",
  "rubro": "eventos",
  "estilo": "contemplativo",
  "titulo": "Las primeras horas",
  "vistas": 1231,
  "url": "https://www.instagram.com/reel/DZkLBWyNoTB/",
  "desc": "Primeras horas de carrera: el cambio de luz, los equipos y la afición."
 },
 {
  "id": "recovery-anuncio",
  "grupo": "recovery",
  "rubro": "salud",
  "estilo": "voz",
  "titulo": "Ahora sí es oficial",
  "vistas": 3718,
  "url": "https://www.instagram.com/reel/DTyz5l4jafP/",
  "clip": "assets/clips/recovery-anuncio.mp4",
  "poster": "assets/posters/recovery-anuncio.jpg",
  "desc": "¡Lo logramos! 10 años de Recovery y el anuncio del Sport Fest."
 },
 {
  "id": "recovery-teaser",
  "grupo": "recovery",
  "rubro": "salud",
  "estilo": "storytelling",
  "titulo": "Donde empezó todo",
  "vistas": 2716,
  "url": "https://www.instagram.com/reel/DTrFmYPDXuQ/",
  "desc": "Historias que se miden en procesos: la fundadora vuelve a su primer consultorio."
 },
 {
  "id": "recovery-gracias",
  "grupo": "recovery",
  "rubro": "salud",
  "estilo": "voz",
  "titulo": "Gracias por diez años",
  "vistas": 2671,
  "url": "https://www.instagram.com/reel/DUZR311Aeni/",
  "desc": "Gracias por 10 años: resumen del Sport Fest con la voz de la fundadora."
 },
 {
  "id": "recovery-8anios",
  "grupo": "recovery",
  "rubro": "salud",
  "estilo": "testimonial",
  "titulo": "Glenda Morejón, atleta olímpica",
  "vistas": 2227,
  "url": "https://www.instagram.com/reel/DT_uny2DXQJ/",
  "desc": "Glenda Morejón, atleta olímpica: ocho años acompañando su ciclo olímpico."
 },
 {
  "id": "recovery-fiesta",
  "grupo": "recovery",
  "rubro": "salud",
  "estilo": "cobertura",
  "titulo": "El festival en vivo",
  "vistas": 2212,
  "url": "https://www.instagram.com/reel/DUOcFLHEWQ8/",
  "desc": "El festival en vivo: 5K, bailo maratón y exhibiciones contadas mientras pasaban.",
  "clip": "assets/clips/recovery-fiesta.mp4",
  "poster": "assets/posters/recovery-fiesta.jpg"
 },
 {
  "id": "recovery-dorsales",
  "grupo": "recovery",
  "rubro": "salud",
  "estilo": "cobertura",
  "titulo": "Dorsales y muro de firmas",
  "vistas": 1787,
  "url": "https://www.instagram.com/reel/DUMnlUUjRc3/",
  "desc": "Entrega de dorsales y calentamiento previo al Recovery Sport Fest."
 },
 {
  "id": "thor-copa-dia1",
  "grupo": "thor",
  "rubro": "producto",
  "estilo": "cobertura",
  "titulo": "Copa Audi: la voz de los anfitriones",
  "vistas": 3611,
  "url": "https://www.instagram.com/reel/DX1xjOiO0uv/",
  "clip": "assets/clips/thor-copa-dia1.mp4",
  "poster": "assets/posters/thor-copa-dia1.jpg",
  "desc": "Día 1 de la Copa Audi: golf y alta cocina contados por los anfitriones en tiempo real."
 },
 {
  "id": "thor-copa-previa",
  "grupo": "thor",
  "rubro": "producto",
  "estilo": "cobertura",
  "titulo": "Copa Audi: el poder y la precisión",
  "vistas": 2785,
  "url": "https://www.instagram.com/reel/DXx32ebusNy/",
  "desc": "Previa de la Copa Audi en Costa Jama: Thor Kitchen llega como auspiciante oficial.",
  "clip": "assets/clips/thor-copa-previa.mp4",
  "poster": "assets/posters/thor-copa-previa.jpg"
 },
 {
  "id": "pod-huma2",
  "grupo": "ox",
  "rubro": "eventos",
  "estilo": "testimonial",
  "titulo": "OX Podcast: “Me aburrí del fútbol…”",
  "vistas": 21257,
  "url": "https://www.instagram.com/reel/DVHE3aXjn-r/",
  "clip": "assets/clips/pod-huma2.mp4",
  "poster": "assets/posters/pod-huma2.jpg",
  "desc": "OX Podcast: de las canchas de tierra en Quito a las grandes ligas en Mónaco."
 },
 {
  "id": "pod-huma1",
  "grupo": "ox",
  "rubro": "eventos",
  "estilo": "storytelling",
  "titulo": "OX Podcast: de Ecuador a Mónaco",
  "vistas": 5294,
  "url": "https://www.instagram.com/reel/DUvj2w5Dtsv/",
  "desc": "OX Podcast: la única selección sudamericana de rugby infantil en Mónaco."
 },
 {
  "id": "pod-pablo-v1",
  "grupo": "ox",
  "rubro": "eventos",
  "estilo": "testimonial",
  "titulo": "OX Podcast: Pablo Vargas",
  "vistas": 4073,
  "url": "https://www.instagram.com/reel/Db39_FeB0_C/",
  "desc": "OX Podcast con Pablo Vargas: qué pasa cuando la vida te lo quita todo."
 },
 {
  "id": "pod-pablo-v2",
  "grupo": "ox",
  "rubro": "eventos",
  "estilo": "storytelling",
  "titulo": "OX Podcast: no corre solo",
  "vistas": 2614,
  "url": "https://www.instagram.com/reel/DcPpb8fONg1/",
  "desc": "OX Podcast: Max, el perro guía que acompaña a Pablo Vargas."
 },
 {
  "id": "promotion-camara",
  "grupo": "promotion",
  "rubro": "deporte",
  "estilo": "voz",
  "titulo": "Daniel a cámara: contexto del deporte",
  "vistas": 7358,
  "url": "https://www.instagram.com/p/DRnFM1HD5La/",
  "clip": "assets/clips/promotion-camara.mp4",
  "poster": "assets/posters/promotion-camara.jpg",
  "desc": "Daniel a cámara: por qué este evento es un hito para el deporte ecuatoriano."
 },
 {
  "id": "luis-no-puedes",
  "grupo": "luis-cross",
  "rubro": "deporte",
  "estilo": "testimonial",
  "titulo": "“No puedes manejar moto”",
  "vistas": 71684,
  "url": "https://www.instagram.com/p/DQLNP9xjbqc/",
  "clip": "assets/clips/luis-no-puedes.mp4",
  "poster": "assets/posters/luis-no-puedes.jpg",
  "desc": "“No puedes manejar moto”: la historia de superación de Luis Cross."
 },
 {
  "id": "luis-factory",
  "grupo": "luis-cross",
  "rubro": "deporte",
  "estilo": "cobertura",
  "titulo": "¡Esto es Factory!",
  "vistas": 47992,
  "url": "https://www.instagram.com/p/DK7Ed1vOVB8/",
  "clip": "assets/clips/luis-factory.mp4",
  "poster": "assets/posters/luis-factory.jpg",
  "desc": "¡Esto es Factory!: la fecha del MX Challenge vivida con el equipo Factory Bike."
 },
 {
  "id": "luis-pawkar",
  "grupo": "luis-cross",
  "rubro": "deporte",
  "estilo": "storytelling",
  "titulo": "Pawkar Raymi en Cañar",
  "vistas": 21271,
  "url": "https://www.instagram.com/p/DU0Yc9xkc4y/",
  "desc": "Pawkar Raymi en Cañar: la comunidad y el carnaval de Luis."
 },
 {
  "id": "luis-lanzamiento",
  "grupo": "luis-cross",
  "rubro": "deporte",
  "estilo": "cobertura",
  "titulo": "Lanzamiento del Team Factory Bike",
  "vistas": 15593,
  "url": "https://www.instagram.com/p/DJX9DxZJdc2/",
  "desc": "Lanzamiento del Team Factory Bike 2025, con toro mecánico incluido."
 },
 {
  "id": "luis-carrera",
  "grupo": "luis-cross",
  "rubro": "deporte",
  "estilo": "dinamico",
  "titulo": "¡¡Qué carrera!!",
  "vistas": 10433,
  "url": "https://www.instagram.com/p/DLgVywBJICe/",
  "desc": "1ra válida del MX Challenge: imprevistos en la primera manga y clasificación.",
  "clip": "assets/clips/luis-carrera.mp4",
  "poster": "assets/posters/luis-carrera.jpg"
 },
 {
  "id": "luis-debut",
  "grupo": "luis-cross",
  "rubro": "deporte",
  "estilo": "cobertura",
  "titulo": "Compite en casa",
  "vistas": 9869,
  "url": "https://www.instagram.com/p/DLffe9Tx94d/",
  "desc": "Luis compite en casa en su estreno en el MX Challenge de Factory.",
  "clip": "assets/clips/luis-debut.mp4",
  "poster": "assets/posters/luis-debut.jpg"
 },
 {
  "id": "luis-fin-semana",
  "grupo": "luis-cross",
  "rubro": "deporte",
  "estilo": "storytelling",
  "titulo": "Un fin de semana con Factory Bike",
  "vistas": 7293,
  "url": "https://www.instagram.com/p/DOPcOiuCbaY/",
  "desc": "Así se vive un fin de semana de motocross con la familia Factory."
 },
 {
  "id": "luis-reconocimiento",
  "grupo": "luis-cross",
  "rubro": "deporte",
  "estilo": "cobertura",
  "titulo": "Mejor deportista del año",
  "vistas": 7165,
  "url": "https://www.instagram.com/p/DLWOZnENEOU/",
  "desc": "Reconocimiento del Municipio de Cañar como mejor deportista."
 },
 {
  "id": "seb-previa",
  "grupo": "sebastian",
  "rubro": "deporte",
  "estilo": "cobertura",
  "titulo": "Prácticas oficiales en Panamá",
  "vistas": 21809,
  "url": "https://www.instagram.com/p/DGWY7zkpM_d/",
  "desc": "Nueva temporada, nuevo auto: prácticas oficiales en el Autódromo Panamá.",
  "clip": "assets/clips/seb-previa.mp4",
  "poster": "assets/posters/seb-previa.jpg"
 },
 {
  "id": "seb-durante",
  "grupo": "sebastian",
  "rubro": "deporte",
  "estilo": "cobertura",
  "titulo": "Race 1, en tiempo real",
  "vistas": 15214,
  "url": "https://www.instagram.com/p/DGbVmi1pJ_n/",
  "desc": "Race 1: primero en categoría y segundo en la general, publicado entre carreras.",
  "clip": "assets/clips/seb-durante.mp4",
  "poster": "assets/posters/seb-durante.jpg"
 },
 {
  "id": "seb-resumen",
  "grupo": "sebastian",
  "rubro": "deporte",
  "estilo": "storytelling",
  "titulo": "Resumen: victoria en Panamá",
  "vistas": 67143,
  "url": "https://www.instagram.com/p/DH4s1cupW34/",
  "desc": "Resumen del fin de semana: victoria en la general en Panamá con AP Racing.",
  "clip": "assets/clips/seb-resumen.mp4",
  "poster": "assets/posters/seb-resumen.jpg"
 },
 {
  "id": "seb-clasificacion",
  "grupo": "sebastian",
  "rubro": "deporte",
  "estilo": "cobertura",
  "titulo": "P1 en clasificación",
  "vistas": 26254,
  "url": "https://www.instagram.com/p/DP-Bhm-iVSR/",
  "desc": "P1 en clasificación en El Salvador, publicado minutos después.",
  "clip": "assets/clips/seb-clasificacion.mp4",
  "poster": "assets/posters/seb-clasificacion.jpg"
 },
 {
  "id": "gt-guyana",
  "grupo": "gtchallenge",
  "rubro": "eventos",
  "estilo": "cobertura",
  "titulo": "Día 1 en Guyana",
  "vistas": 30430,
  "url": "https://www.instagram.com/p/DanYf7vOeZk/",
  "desc": "Primer día de prácticas en el South Dakota Circuit de Guyana.",
  "clip": "assets/clips/gt-guyana.mp4",
  "poster": "assets/posters/gt-guyana.jpg"
 },
 {
  "id": "diego-pole",
  "grupo": "diego",
  "rubro": "deporte",
  "estilo": "cobertura",
  "titulo": "La pole, en tiempo real",
  "vistas": 0,
  "url": "https://www.instagram.com/p/DaGZfTAx0BG/",
  "desc": "La pole en Cañar con 1:52.188 y la cámara a bordo de la clasificación.",
  "clip": "assets/clips/diego-pole.mp4",
  "poster": "assets/posters/diego-pole.jpg"
 },
 {
  "id": "diego-onboard",
  "grupo": "diego",
  "rubro": "deporte",
  "estilo": "dinamico",
  "titulo": "Súper prime a bordo",
  "vistas": 8352,
  "url": "https://www.instagram.com/p/DXshD5fjSKi/",
  "desc": "Súper prime de Gualaceo 2026 a bordo con su copiloto.",
  "clip": "assets/clips/diego-onboard.mp4",
  "poster": "assets/posters/diego-onboard.jpg"
 },
 {
  "id": "diego-imbabura",
  "grupo": "diego",
  "rubro": "deporte",
  "estilo": "cobertura",
  "titulo": "P1 en Imbabura",
  "vistas": 6985,
  "url": "https://www.instagram.com/p/DZBeB31NWF_/",
  "desc": "P1 en categoría en Imbabura, celebrado con familia y afición.",
  "clip": "assets/clips/diego-imbabura.mp4",
  "poster": "assets/posters/diego-imbabura.jpg"
 },
 {
  "id": "diego-canar",
  "grupo": "diego",
  "rubro": "deporte",
  "estilo": "cobertura",
  "titulo": "Victoria en Cañar",
  "vistas": 5383,
  "url": "https://www.instagram.com/p/DaIn8dHx_dl/",
  "desc": "Victoria total en la 3ra válida del Nacional de Circuitos en Cañar.",
  "clip": "assets/clips/diego-canar.mp4",
  "poster": "assets/posters/diego-canar.jpg"
 },
 {
  "id": "motul-gualaceo",
  "grupo": "motul",
  "rubro": "eventos",
  "estilo": "cobertura",
  "titulo": "Cobertura en vivo del Rally Gualaceo",
  "vistas": 13582,
  "url": "https://www.instagram.com/p/DXhbfChje_M/",
  "desc": "Comienza el Rally de Gualaceo: 58 tripulaciones y la familia Motul en pista.",
  "clip": "assets/clips/motul-gualaceo.mp4",
  "poster": "assets/posters/motul-gualaceo.jpg"
 },
 {
  "id": "motul-casa-llena",
  "grupo": "motul",
  "rubro": "eventos",
  "estilo": "cobertura",
  "titulo": "Llegada con casa llena",
  "vistas": 13479,
  "url": "https://www.instagram.com/p/DXfoQ11DV9Q/",
  "desc": "Llegada a Gualaceo con casa llena: el primer día del rally para Motul.",
  "clip": "assets/clips/motul-casa-llena.mp4",
  "poster": "assets/posters/motul-casa-llena.jpg"
 },
 {
  "id": "motul-noche",
  "grupo": "motul",
  "rubro": "eventos",
  "estilo": "cobertura",
  "titulo": "Presentación nocturna",
  "vistas": 10192,
  "url": "https://www.instagram.com/p/DXkcmR9kVQy/",
  "desc": "Presentación nocturna de pilotos en Gualaceo.",
  "clip": "assets/clips/motul-noche.mp4",
  "poster": "assets/posters/motul-noche.jpg"
 },
 {
  "id": "motul-cierre",
  "grupo": "motul",
  "rubro": "eventos",
  "estilo": "storytelling",
  "titulo": "Cierre y agradecimiento",
  "vistas": 3645,
  "url": "https://www.instagram.com/p/DXp_1TKDb4f/",
  "desc": "Gracias Gualaceo: el fin de semana completo del Nacional de Rally.",
  "clip": "assets/clips/motul-cierre.mp4",
  "poster": "assets/posters/motul-cierre.jpg"
 }
];
