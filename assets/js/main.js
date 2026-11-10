(function () {
  'use strict';
  const WA = '593984678812';
  const C = window.Codigo;
  const VIDEOS = window.VIDEOS;
  const GRUPOS = window.GRUPOS;
  const G = Object.fromEntries(GRUPOS.map(g => [g.id, g]));
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

  const RUBROS = {
    deporte: 'Deporte', inmobiliario: 'Inmobiliario y construcción', producto: 'Producto y retail', turismo: 'Turismo',
    interiorismo: 'Interiorismo', gastronomia: 'Gastronomía', salud: 'Salud', eventos: 'Eventos', moda: 'Moda'
  };
  const ESTILOS = {
    dinamico: 'Dinámico', dron: 'Dron', storytelling: 'Storytelling', cobertura: 'Cobertura', voz: 'Con voz',
    producto: 'Producto', contemplativo: 'Contemplativo', testimonial: 'Testimonial'
  };
  // Precios referenciales por video (propuesta De Marca). Edita aquí.
  const PLANES = [
    { id: 'comercial', nombre: 'Video comercial', precio: 60, desc: 'Producción instantánea: solo se necesita estabilización y luz.',
      items: ['Rodaje con iPhone y estabilizador', 'Iluminación propia', 'Edición vertical para reels', 'Hasta 2 cambios'], ej: 'thor-refri' },
    { id: 'voz', nombre: 'Video con voz', precio: 80, desc: 'Voz grabada con micrófonos profesionales: descriptivo, testimonial o narrativo.',
      items: ['Guion de voz', 'Micrófonos profesionales', 'Iluminación propia', 'Edición y mezcla de audio'], ej: 'iglace-hielo' },
    { id: 'dinamico', nombre: 'Video dinámico', precio: 100, desc: 'Tomas aéreas con dron y/o cámara 360.',
      items: ['Tomas aéreas con dron', 'Cámara 360', 'Edición dinámica', 'Hasta 2 cambios'], ej: 'andes-domos-aire' },
    { id: 'compuesto', nombre: 'Video compuesto', precio: 120, desc: 'Tomas aéreas y 360, con guion descriptivo y voz narrativa.',
      items: ['Guion descriptivo', 'Voz narrativa profesional', 'Dron y cámara 360', 'Edición completa con audio'], ej: 'mh-green', destacado: true }
  ];
  const DESTACADOS = ['mh-green', 'andes-terraza', 'cerrolobo-aire', 'iglace-hielo', 'thor-cocina', 'ypqn-container', 'gt-autodromo', 'vcomer-showroom', 'cuenca-catedral'];

  const $ = s => document.querySelector(s);
  const byId = id => VIDEOS.find(v => v.id === id);
  const wa = txt => `https://wa.me/${WA}?text=${encodeURIComponent(txt)}`;
  function vistas(n) {
    if (!n) return '';
    if (n >= 1e6) return (n / 1e6).toFixed(1).replace('.', ',') + ' M';
    if (n >= 10000) return (Math.round(n / 100) / 10).toString().replace('.', ',').replace(/,0$/, '') + ' mil';
    return n.toLocaleString('es-EC');
  }
  const reproducciones = n => n ? `${vistas(n)} reproducciones` : 'Video de evento';
  const thumb = v => `assets/reels/${v.id}.jpg`;

  /* ---------- Soles (logo) ---------- */
  document.querySelectorAll('[data-sol]').forEach(el => {
    const k = el.dataset.sol;
    const cod = k.startsWith('curso') ? C.codigoDe(['', 'celular instantaneo', 'estrategia escalable', 'inteligencia artificial'][+k.slice(-1)]) : C.BASE;
    el.innerHTML = C.svgSol(cod, { reflejo: k === 'pie', label: k === 'nav' ? 'Logo De Marca' : 'Sol De Marca' });
  });

  /* ---------- Cifras ---------- */
  $('#cifraVistas').textContent = vistas(VIDEOS.reduce((a, v) => a + v.vistas, 0));
  $('#cifraVideos').textContent = VIDEOS.length;
  $('#cifraMarcas').textContent = GRUPOS.length;

  /* ---------- Visor ---------- */
  const visor = $('#visor');
  let lista = [], pos = 0;
  function abrir(id, ctx) {
    lista = ctx && ctx.length ? ctx : VIDEOS.map(v => v.id);
    pos = Math.max(0, lista.indexOf(id));
    pintarVisor();
    if (!visor.open) visor.showModal();
  }
  function pintarVisor() {
    const v = byId(lista[pos]); const g = G[v.grupo];
    $('#visorFondo').style.backgroundImage = `url(${thumb(v)})`;
    $('#visorMarca').textContent = g.nombre;
    $('#visorTitulo').textContent = v.titulo;
    $('#visorDatos').textContent = `${RUBROS[v.rubro]}, ${ESTILOS[v.estilo].toLowerCase()}. ${v.vistas ? reproducciones(v.vistas) + '.' : ''}`;
    const medio = $('#visorMedio');
    const abrirBtn = $('#visorAbrir');
    if (v.url) {
      const drive = v.url.includes('drive.google');
      const src = drive ? v.url : v.url + 'embed/';
      medio.innerHTML = `<iframe src="${src}" title="${v.titulo}" loading="lazy" allow="autoplay; encrypted-media; fullscreen" allowfullscreen></iframe>`;
      abrirBtn.hidden = false;
      abrirBtn.href = drive ? v.url.replace('/preview', '/view') : v.url;
      abrirBtn.textContent = drive ? 'Abrir en Drive' : 'Abrir en Instagram';
    } else {
      medio.innerHTML = `<div class="visor-sin"><img src="${thumb(v)}" alt=""><p>Este video está en la cuenta de ${g.nombre}. Escríbeme y te lo envío.</p></div>`;
      abrirBtn.hidden = true;
    }
    $('#visorPedir').href = wa(`Hola Daniel, vi el video "${v.titulo}" de ${g.nombre} en tu portafolio y quiero algo así para mi marca.`);
  }
  function mover(d) { pos = (pos + d + lista.length) % lista.length; pintarVisor(); }
  $('#visorPrev').onclick = () => mover(-1);
  $('#visorNext').onclick = () => mover(1);
  $('#visorCerrar').onclick = () => visor.close();
  visor.addEventListener('close', () => { $('#visorMedio').innerHTML = ''; });
  visor.addEventListener('click', e => { if (e.target === visor || e.target.classList.contains('visor-caja')) visor.close(); });
  visor.addEventListener('keydown', e => { if (e.key === 'ArrowRight') mover(1); if (e.key === 'ArrowLeft') mover(-1); });

  /* ---------- Hero coverflow ---------- */
  const cf = $('#coverflow');
  const dest = DESTACADOS.map(byId).filter(Boolean);
  let act = 0, timer = null, capa = 0;
  const capas = [document.querySelector('.hf-a'), document.querySelector('.hf-b')];
  cf.innerHTML = dest.map((v, i) => `<button class="cf-card" data-i="${i}" aria-label="${G[v.grupo].nombre}: ${v.titulo}">
    <img src="${thumb(v)}" alt="" ${i > 3 ? 'loading="lazy"' : ''}><span class="cf-play"><svg viewBox="0 0 24 24"><path d="M6 4l14 8-14 8z"/></svg></span></button>`).join('');
  $('#heroPuntos').innerHTML = dest.map((v, i) => `<button role="tab" aria-label="Video ${i + 1}" data-i="${i}"></button>`).join('');
  $('#heroTotal').textContent = dest.length;
  const cards = [...cf.children], puntos = [...$('#heroPuntos').children];
  function pintarHero() {
    const n = dest.length;
    cards.forEach((c, i) => {
      let o = i - act; if (o > n / 2) o -= n; if (o < -n / 2) o += n;
      const a = Math.abs(o);
      c.style.setProperty('--o', o); c.style.setProperty('--a', a);
      c.hidden = a > 3; c.tabIndex = a === 0 ? 0 : -1;
      c.classList.toggle('activa', a === 0);
    });
    puntos.forEach((p, i) => p.setAttribute('aria-selected', i === act));
    const v = dest[act];
    $('#heroIdx').textContent = act + 1;
    $('#heroMarca').textContent = G[v.grupo].nombre;
    $('#heroDetalle').textContent = `${RUBROS[v.rubro]}, ${reproducciones(v.vistas)}`;
    capa = 1 - capa;
    capas[capa].style.backgroundImage = `url(${thumb(v)})`;
    capas[capa].classList.add('on'); capas[1 - capa].classList.remove('on');
  }
  function ir(i) { act = (i + dest.length) % dest.length; pintarHero(); }
  function auto() { if (reduceMotion) return; clearInterval(timer); timer = setInterval(() => ir(act + 1), 4800); }
  cards.forEach(c => c.addEventListener('click', () => {
    const i = +c.dataset.i;
    if (i === act) abrir(dest[i].id, dest.map(v => v.id)); else { ir(i); auto(); }
  }));
  puntos.forEach(p => p.addEventListener('click', () => { ir(+p.dataset.i); auto(); }));
  $('#heroPrev').onclick = () => { ir(act - 1); auto(); };
  $('#heroNext').onclick = () => { ir(act + 1); auto(); };
  const escena = document.querySelector('.hero-marco');
  escena.addEventListener('mouseenter', () => clearInterval(timer));
  escena.addEventListener('mouseleave', auto);
  escena.addEventListener('focusin', () => clearInterval(timer));
  let tx = null;
  cf.addEventListener('touchstart', e => { tx = e.touches[0].clientX; }, { passive: true });
  cf.addEventListener('touchend', e => { if (tx === null) return; const d = e.changedTouches[0].clientX - tx; if (Math.abs(d) > 40) { ir(act + (d < 0 ? 1 : -1)); auto(); } tx = null; });
  pintarHero(); auto();

  /* ---------- Portafolio ---------- */
  const filtro = { rubro: 'todos', estilo: 'todos' };
  function chips(cont, tipo, mapa) {
    const el = $(cont);
    const keys = ['todos', ...Object.keys(mapa)];
    el.innerHTML = keys.map(k => `<button class="chip" data-k="${k}" aria-pressed="${k === 'todos'}">${k === 'todos' ? 'Todos' : mapa[k]} <span></span></button>`).join('');
    el.addEventListener('click', e => {
      const b = e.target.closest('.chip'); if (!b || b.disabled) return;
      filtro[tipo] = b.dataset.k; pintarPortafolio();
    });
  }
  chips('#chipsRubro', 'rubro', RUBROS);
  chips('#chipsEstilo', 'estilo', ESTILOS);
  const pasa = (v, f = filtro) => (f.rubro === 'todos' || v.rubro === f.rubro) && (f.estilo === 'todos' || v.estilo === f.estilo);
  function pintarPortafolio() {
    // conteos cruzados
    document.querySelectorAll('#chipsRubro .chip').forEach(b => {
      const k = b.dataset.k; const n = VIDEOS.filter(v => pasa(v, { rubro: k, estilo: filtro.estilo })).length;
      b.querySelector('span').textContent = n; b.setAttribute('aria-pressed', filtro.rubro === k); b.disabled = !n && filtro.rubro !== k;
    });
    document.querySelectorAll('#chipsEstilo .chip').forEach(b => {
      const k = b.dataset.k; const n = VIDEOS.filter(v => pasa(v, { rubro: filtro.rubro, estilo: k })).length;
      b.querySelector('span').textContent = n; b.setAttribute('aria-pressed', filtro.estilo === k); b.disabled = !n && filtro.estilo !== k;
    });
    const vis = VIDEOS.filter(v => pasa(v));
    const grupos = GRUPOS.map(g => ({ g, vs: vis.filter(v => v.grupo === g.id).sort((a, b) => b.vistas - a.vistas) }))
      .filter(x => x.vs.length).sort((a, b) => b.vs.reduce((s, v) => s + v.vistas, 0) - a.vs.reduce((s, v) => s + v.vistas, 0));
    const total = vis.reduce((a, v) => a + v.vistas, 0);
    $('#resultado').textContent = vis.length ? `${vis.length} ${vis.length === 1 ? 'video' : 'videos'} de ${grupos.length} ${grupos.length === 1 ? 'marca' : 'marcas'}${total ? `, ${vistas(total)} reproducciones` : ''}.` : '';
    const ctx = grupos.flatMap(x => x.vs.map(v => v.id));
    $('#grupos').innerHTML = grupos.length ? grupos.map(({ g, vs }) => {
      const t = vs.reduce((a, v) => a + v.vistas, 0);
      return `<article class="grupo">
        <div class="grupo-info">
          <p class="grupo-rubro">${RUBROS[g.rubro]}</p>
          <h3>${g.nombre}</h3>
          <p class="grupo-texto">${g.texto}</p>
          <p class="grupo-datos"><b>${vs.length}</b> ${vs.length === 1 ? 'video' : 'videos'}${t ? `, <b>${vistas(t)}</b> reproducciones` : ''}</p>
        </div>
        <div class="fila">${vs.map(v => `<button class="tarjeta" data-id="${v.id}">
          <span class="tarjeta-img"><span class="tarjeta-estilo">${ESTILOS[v.estilo]}</span><img src="${thumb(v)}" alt="" loading="lazy"></span>
          <span class="tarjeta-titulo">${v.titulo}</span><span class="tarjeta-vistas">${v.vistas ? vistas(v.vistas) + ' reproducciones' : 'Evento'}</span></button>`).join('')}</div>
      </article>`;
    }).join('') : `<p class="vacio">No hay videos con esa combinación. Prueba con otro estilo o vuelve a Todos.</p>`;
    $('#grupos').onclick = e => { const t = e.target.closest('.tarjeta'); if (t) abrir(t.dataset.id, ctx); };
  }
  pintarPortafolio();

  /* ---------- El código ---------- */
  const solGrande = $('#codigoSol');
  solGrande.innerHTML = C.svgSol(C.BASE, { animar: !reduceMotion, id: 'solgrande', label: 'Código De Marca: siete barras forman un sol sobre el horizonte' });
  const svgG = solGrande.querySelector('svg');
  if (!reduceMotion && 'IntersectionObserver' in window) {
    new IntersectionObserver((en, ob) => { en.forEach(x => { if (x.isIntersecting) { svgG.classList.add('visible'); ob.disconnect(); } }); }, { threshold: .4 }).observe(svgG);
  }
  const maxW = Math.max(...C.BASE.w);
  $('#pilares').innerHTML = C.PILARES.map((p, i) => `<li class="pilar" data-i="${i}" tabindex="0">
    <div class="pilar-barra" style="width:${Math.round(C.BASE.w[i] / maxW * 100)}%"></div><h3>${p.nombre}</h3><p>${p.texto}</p></li>`).join('');
  const barras = [...svgG.querySelectorAll('.barra')];
  function foco(i) {
    svgG.classList.toggle('foco', i !== null);
    barras.forEach((b, j) => b.classList.toggle('on', j === i));
    document.querySelectorAll('.pilar').forEach((p, j) => p.classList.toggle('on', j === i));
  }
  document.querySelectorAll('.pilar').forEach(p => {
    const i = +p.dataset.i;
    p.addEventListener('mouseenter', () => foco(i)); p.addEventListener('focus', () => foco(i));
    p.addEventListener('mouseleave', () => foco(null)); p.addEventListener('blur', () => foco(null));
  });

  const inp = $('#nombreMarca');
  function generar() {
    const nombre = inp.value.trim();
    const cod = C.codigoDe(nombre);
    $('#solGenerado').innerHTML = C.svgSol(cod, { id: 'solgen', label: 'Código generado para ' + (nombre || 'De Marca') });
    $('#nombreGenerado').textContent = nombre || 'De Marca';
    $('#serieGenerada').textContent = C.serie(cod);
    $('#lectura').textContent = nombre ? C.lectura(cod) : 'Escribe un nombre y mira cómo cambia el sol.';
    $('#pedirCodigo').href = wa(`Hola Daniel, generé el código de ${nombre || 'mi marca'} (${C.serie(cod)}) en tu web y quiero que lo leamos juntos.`);
  }
  inp.addEventListener('input', generar);
  generar();
  $('#descargarCodigo').onclick = () => {
    const svg = $('#solGenerado svg').outerHTML.replace('fill="currentColor"', 'fill="#F7931E"').replace('<svg', '<svg xmlns="http://www.w3.org/2000/svg"');
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([svg], { type: 'image/svg+xml' }));
    a.download = 'codigo-' + ((inp.value.trim() || 'de-marca').toLowerCase().normalize('NFD').replace(/[^\w]+/g, '-')) + '.svg';
    a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  };

  /* ---------- Planes y cotizador ---------- */
  const cant = Object.fromEntries(PLANES.map(p => [p.id, 0]));
  $('#tarjetasPlan').innerHTML = PLANES.map(p => {
    const ej = byId(p.ej);
    return `<article class="plan${p.destacado ? ' destacado' : ''}">
      <h3 class="plan-nombre">${p.nombre}</h3>
      <p class="plan-precio">$${p.precio}<small> por video</small></p>
      <p class="plan-desde">${p.desc}</p>
      <ul>${p.items.map(i => `<li>${i}</li>`).join('')}</ul>
      ${ej ? `<p class="plan-ej">Ejemplo: <a href="#" data-ej="${ej.id}">${G[ej.grupo].nombre}</a></p>` : ''}
      <button class="btn btn-linea" data-sumar="${p.id}">Agregar a la cotización</button>
    </article>`;
  }).join('');
  $('#tarjetasPlan').addEventListener('click', e => {
    const s = e.target.closest('[data-sumar]');
    if (s) { cant[s.dataset.sumar]++; pintarCot(); $('#cotizar').scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' }); }
    const ej = e.target.closest('[data-ej]');
    if (ej) { e.preventDefault(); abrir(ej.dataset.ej, PLANES.map(p => p.ej)); }
  });
  $('#cotizadorFilas').innerHTML = PLANES.map(p => `<div class="cot-fila" data-id="${p.id}">
    <div><h4>${p.nombre}</h4><p>$${p.precio} por video</p></div>
    <div class="contador"><button type="button" data-d="-1" aria-label="Quitar un ${p.nombre.toLowerCase()}">−</button>
      <output aria-live="polite">0</output><button type="button" data-d="1" aria-label="Agregar un ${p.nombre.toLowerCase()}">+</button></div>
    <p class="cot-sub">$0</p></div>`).join('');
  $('#cotizadorFilas').addEventListener('click', e => {
    const b = e.target.closest('[data-d]'); if (!b) return;
    const id = b.closest('.cot-fila').dataset.id;
    cant[id] = Math.max(0, Math.min(60, cant[id] + +b.dataset.d)); pintarCot();
  });
  function pintarCot() {
    let total = 0, n = 0; const lineas = [];
    PLANES.forEach(p => {
      const q = cant[p.id], sub = q * p.precio; total += sub; n += q;
      const fila = document.querySelector(`.cot-fila[data-id="${p.id}"]`);
      fila.querySelector('output').textContent = q;
      fila.querySelector('.cot-sub').textContent = `$${sub.toLocaleString('es-EC')}`;
      if (q) lineas.push(`- ${q} x ${p.nombre} ($${p.precio} c/u) = $${sub}`);
    });
    $('#totalValor').textContent = `$${total.toLocaleString('es-EC')}`;
    $('#totalNota').textContent = n ? `${n} ${n === 1 ? 'video' : 'videos'}. El 50% inicia el servicio: $${(total / 2).toLocaleString('es-EC')}.` : 'Agrega al menos un video.';
    const btn = $('#enviarCotizacion');
    btn.setAttribute('aria-disabled', n ? 'false' : 'true');
    btn.href = n ? wa(`Hola Daniel, armé esta cotización en tu web:\n${lineas.join('\n')}\nTotal estimado: $${total}\n\nMi marca es: `) : '#';
  }
  pintarCot();

  /* ---------- Enlaces de WhatsApp ---------- */
  $('#waPie').href = wa('Hola Daniel, vi tu portafolio De Marca y quiero hablar de un proyecto.');
  document.querySelectorAll('[data-curso]').forEach(a => { a.href = wa(`Hola Daniel, quiero enterarme cuando abra el curso "${a.dataset.curso}".`); a.target = '_blank'; a.rel = 'noopener'; });

  /* ---------- Nav activa ---------- */
  const links = [...document.querySelectorAll('.nav-links a')];
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(en => en.forEach(x => {
      if (x.isIntersecting) links.forEach(l => l.setAttribute('aria-current', l.getAttribute('href') === '#' + x.target.id));
    }), { rootMargin: '-45% 0px -50% 0px' });
    ['portafolio', 'codigo', 'planes', 'cursos'].forEach(id => io.observe(document.getElementById(id)));
  }
})();
