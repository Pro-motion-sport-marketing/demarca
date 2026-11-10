// El Código De Marca: un sol hecho de barras sobre el horizonte.
// Cada una de las 7 barras es un pilar de la comunicación de una marca.
// Su grosor cambia según la marca: por eso ningún código se repite.
(function () {
  const PILARES = [
    { nombre: 'Esencia', texto: 'Quién eres y por qué existes. Lo que no cambia aunque cambie todo lo demás.' },
    { nombre: 'Audiencia', texto: 'A quién le hablas, qué le importa y en qué momento te va a escuchar.' },
    { nombre: 'Mensaje', texto: 'La idea que necesitas que recuerden cuando el video termina.' },
    { nombre: 'Estilo', texto: 'Cómo se ve y se siente tu producción: el centro del sol, lo que te hace reconocible.' },
    { nombre: 'Canal', texto: 'Dónde vive cada pieza: reel, historia, anuncio, web o pantalla de evento.' },
    { nombre: 'Ritmo', texto: 'La constancia con la que apareces. Una marca se construye por repetición.' },
    { nombre: 'Impacto', texto: 'Lo que queda después: confianza, recordación, una visita, una venta.' }
  ];

  // Código propio de De Marca
  const BASE = { w: [3, 1.4, 2.2, 5, 1.4, 3, 2], g: [1.4, 1, 1.8, 1.8, 1, 1.4] };

  function hash(str) {
    let h = 2166136261;
    for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
    return h >>> 0;
  }
  function rng(seed) {
    return function () { seed |= 0; seed = (seed + 0x6D2B79F5) | 0; let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  }
  function codigoDe(nombre) {
    const clean = (nombre || '').trim().toLowerCase();
    if (!clean || clean === 'de marca' || clean === 'demarca') return { w: BASE.w.slice(), g: BASE.g.slice() };
    const r = rng(hash(clean));
    const w = PILARES.map(() => Math.round((1 + r() * 4) * 2) / 2);
    const g = Array.from({ length: 6 }, () => Math.round((0.8 + r() * 1.4) * 10) / 10);
    return { w, g };
  }

  // Devuelve el SVG del sol de barras. opts: {color, horizonte, reflejo, id, animar}
  function svgSol(cod, opts = {}) {
    const color = opts.color || 'currentColor';
    const id = opts.id || ('c' + Math.random().toString(36).slice(2, 8));
    const cx = 60, cy = 58, R = 50;
    const total = cod.w.reduce((a, b) => a + b, 0) + cod.g.reduce((a, b) => a + b, 0);
    const k = (2 * R) / total;
    let x = cx - R, bars = '';
    cod.w.forEach((w, i) => {
      const bw = w * k;
      bars += `<rect class="barra" data-i="${i}" x="${x.toFixed(2)}" y="${cy - R}" width="${bw.toFixed(2)}" height="${R}" style="--i:${i}"/>`;
      x += bw + (cod.g[i] || 0) * k;
    });
    const horizonte = opts.horizonte === false ? '' :
      `<rect x="4" y="${cy + 4}" width="112" height="3.2" rx="1.6"/>` +
      (opts.reflejo === false ? '' : `<rect x="26" y="${cy + 11}" width="68" height="2.4" rx="1.2" opacity=".55"/><rect x="44" y="${cy + 17}" width="32" height="1.8" rx=".9" opacity=".3"/>`);
    return `<svg viewBox="0 0 120 ${opts.reflejo === false ? 66 : 80}" fill="${color}" role="img" aria-label="${opts.label || 'Código De Marca'}"${opts.animar ? ' class="sol animable"' : ' class="sol"'}>
      <defs><clipPath id="${id}"><path d="M${cx - R} ${cy}A${R} ${R} 0 0 1 ${cx + R} ${cy}Z"/></clipPath></defs>
      <g clip-path="url(#${id})">${bars}</g>${horizonte}</svg>`;
  }

  function lectura(cod) {
    const orden = cod.w.map((w, i) => ({ w, i })).sort((a, b) => b.w - a.w);
    const fuerte = orden.slice(0, 2).map(o => PILARES[o.i].nombre.toLowerCase());
    const leve = PILARES[orden[orden.length - 1].i].nombre.toLowerCase();
    return `Tu código pesa en ${fuerte[0]} y ${fuerte[1]}. La barra más delgada es ${leve}: ahí está tu oportunidad.`;
  }
  function serie(cod) { return 'DM-' + cod.w.map(w => Math.min(9, Math.max(0, Math.round(w * 2) - 1))).join(''); }

  window.Codigo = { PILARES, BASE, codigoDe, svgSol, lectura, serie };
})();
