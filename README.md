# De Marca · Portafolio de Daniel Espinoza

## Páginas
Inicio, Cobertura, Portafolio, Resultados, Sobre mí, Planes y Cursos. Se generan con
`python3 fuente/build.py` a partir de las piezas en `fuente/partes/` (menú y pie compartidos).
Edita las piezas, no los index.html generados.

Sitio estático (HTML, CSS y JS sin dependencias) publicado en GitHub Pages.

## Agregar un video al portafolio
1. Guarda la miniatura vertical (9:16, unos 432×768 px) en `assets/reels/<id>.jpg`.
2. En `assets/js/data.js`, agrega un objeto a `VIDEOS`:
   `{ "id": "<id>", "grupo": "<id de marca>", "rubro": "deporte", "estilo": "dinamico", "titulo": "...", "vistas": 12000, "url": "https://www.instagram.com/reel/XXXX/" }`
3. Si es una marca nueva, agrégala a `GRUPOS` con su `id`, `nombre`, `rubro` y `texto`.

Rubros: deporte, inmobiliario, producto, turismo, interiorismo, gastronomia, salud, eventos, moda.
Estilos: dinamico, dron, storytelling, cobertura, voz, producto, contemplativo, testimonial.

## Precios del cotizador
Están en `assets/js/main.js`, en la lista `PLANES`.

## El código (logo)
`assets/js/codigo.js` dibuja el sol de 7 barras. `Codigo.BASE` es el código propio de De Marca.
