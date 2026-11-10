(function () {
  'use strict';
  const WA = '593984678812';
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
    { id: 'comercial', nombre: 'Video comercial', precio: 80, desc: 'Producción instantánea: solo se necesita estabilización y luz.',
      items: ['Rodaje con iPhone y estabilizador', 'Iluminación propia', 'Edición vertical para reels', 'Hasta 2 cambios'], ej: 'thor-refri' },
    { id: 'voz', nombre: 'Video con voz', precio: 100, desc: 'Voz grabada con micrófonos profesionales: descriptivo, testimonial o narrativo.',
      items: ['Guion de voz', 'Micrófonos profesionales', 'Iluminación propia', 'Edición y mezcla de audio'], ej: 'iglace-hielo' },
    { id: 'dinamico', nombre: 'Video dinámico', precio: 120, desc: 'Tomas aéreas con dron y/o cámara 360.',
      items: ['Tomas aéreas con dron', 'Cámara 360', 'Edición dinámica', 'Hasta 2 cambios'], ej: 'andes-domos-aire' },
    { id: 'compuesto', nombre: 'Video compuesto', precio: 150, desc: 'Tomas aéreas y 360, con guion descriptivo y voz narrativa.',
      items: ['Guion descriptivo', 'Voz narrativa profesional', 'Dron y cámara 360', 'Edición completa con audio'], ej: 'mh-green', destacado: true }
  ];
  const DESTACADOS = ['mh-green', 'andes-terraza', 'luis-no-puedes', 'cerrolobo-aire', 'lemans-sorteo', 'iglace-hielo', 'thor-cocina', 'andes-estructura', 'davalos-ciudad', 'gt-autodromo', 'ypqn-container', 'pod-huma2'];

  const $ = s => document.querySelector(s);
  const byId = id => VIDEOS.find(v => v.id === id);
  const wa = txt => `https://wa.me/${WA}?text=${encodeURIComponent(txt)}`;
  function vistas(n) {
    if (!n) return '';
    if (n >= 1e6) return (n / 1e6).toFixed(1).replace('.', ',') + ' M';
    if (n >= 100000) return Math.round(n / 1000) + ' mil';
    if (n >= 10000) return (Math.round(n / 100) / 10).toString().replace('.', ',').replace(/,0$/, '') + ' mil';
    return n.toLocaleString('es-EC');
  }
  const reproducciones = n => n ? `${vistas(n)} reproducciones` : 'Video de evento';
  const thumb = v => `assets/reels/${v.id}.jpg`;

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
    $('#visorDesc').textContent = v.desc || '';
    $('#visorDatos').textContent = `${RUBROS[v.rubro]}, ${ESTILOS[v.estilo].toLowerCase()}. ${v.vistas ? reproducciones(v.vistas) + '.' : ''}`;
    const medio = $('#visorMedio');
    const abrirBtn = $('#visorAbrir');
    if (v.video) {
      medio.innerHTML = `<video src="${v.video}" poster="${thumb(v)}" controls autoplay playsinline></video>`;
      abrirBtn.hidden = !v.url; abrirBtn.href = v.url || '#';
      abrirBtn.textContent = v.url.includes('tiktok.com') ? 'Ver en TikTok' : 'Ver en Instagram';
    } else if (v.url) {
      const drive = v.url.includes('drive.google');
      const tiktok = v.url.includes('tiktok.com');
      const src = drive ? v.url : tiktok ? 'https://www.tiktok.com/embed/v2/' + v.url.split('/video/')[1] : v.url + 'embed/';
      medio.innerHTML = `<iframe src="${src}" title="${v.titulo}" loading="lazy" allow="autoplay; encrypted-media; fullscreen" allowfullscreen></iframe>`;
      abrirBtn.hidden = false;
      abrirBtn.href = drive ? v.url.replace('/preview', '/view') : v.url;
      abrirBtn.textContent = drive ? 'Abrir en Drive' : tiktok ? 'Abrir en TikTok' : 'Abrir en Instagram';
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
    ${v.clip ? `<video muted loop playsinline preload="${i < 2 ? 'auto' : 'none'}" poster="${v.poster || thumb(v)}" src="${v.clip}"></video>` : `<img src="${thumb(v)}" alt="" ${i > 3 ? 'loading="lazy"' : ''}>`}<span class="cf-play"><svg viewBox="0 0 24 24"><path d="M6 4l14 8-14 8z"/></svg></span></button>`).join('');
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
      const vid = c.querySelector('video');
      if (vid) { if (a === 0 && !reduceMotion) { vid.play().catch(() => {}); } else { vid.pause(); } }
    });
    puntos.forEach((p, i) => p.setAttribute('aria-selected', i === act));
    const v = dest[act];
    $('#heroIdx').textContent = act + 1;
    $('#heroMarca').textContent = G[v.grupo].nombre;
    $('#heroDetalle').textContent = v.desc || v.titulo;
    $('#heroVistas').textContent = `${RUBROS[v.rubro]}, ${reproducciones(v.vistas)}`;
    capa = 1 - capa;
    capas[capa].style.backgroundImage = `url(${thumb(v)})`;
    capas[capa].classList.add('on'); capas[1 - capa].classList.remove('on');
  }
  function ir(i) { act = (i + dest.length) % dest.length; pintarHero(); }
  function auto() { if (reduceMotion) return; clearInterval(timer); timer = setInterval(() => ir(act + 1), 9000); }
  cards.forEach(c => c.addEventListener('click', () => {
    const i = +c.dataset.i;
    if (i === act) abrir(dest[i].id, dest.map(v => v.id)); else { ir(i); auto(); }
  }));
  puntos.forEach(p => p.addEventListener('click', () => { ir(+p.dataset.i); auto(); }));
  $('#heroPrev').onclick = () => { ir(act - 1); auto(); };
  $('#heroNext').onclick = () => { ir(act + 1); auto(); };
  const escena = document.querySelector('.hero-escena');
  escena.addEventListener('mouseenter', () => clearInterval(timer));
  escena.addEventListener('mouseleave', auto);
  escena.addEventListener('focusin', () => clearInterval(timer));
  let tx = null;
  cf.addEventListener('touchstart', e => { tx = e.touches[0].clientX; }, { passive: true });
  cf.addEventListener('touchend', e => { if (tx === null) return; const d = e.changedTouches[0].clientX - tx; if (Math.abs(d) > 40) { ir(act + (d < 0 ? 1 : -1)); auto(); } tx = null; });
  pintarHero(); auto();


  /* ---------- Cobertura en tiempo real ---------- */
  const LINEA = [
    { fase: 'Antes', t: 'Previa', id: 'seb-previa' },
    { fase: 'Durante', t: 'Race 1', id: 'seb-durante' },
    { fase: 'Durante', t: 'Artes informativos', img: 'assets/posters/seb-arte.jpg', url: 'https://www.instagram.com/p/DGYJt02x-5e/', desc: 'Race week y race day: horarios, resultados y posiciones en un sistema gráfico propio para cada fecha.', dato: '1.787 me gusta' },
    { fase: 'Después', t: 'Resumen final', id: 'seb-resumen' }
  ];
  const lineaIds = LINEA.filter(x => x.id).map(x => x.id);
  $('#cobLinea').innerHTML = LINEA.map((x, i) => {
    const v = x.id ? byId(x.id) : null;
    const media = v
      ? `<video muted loop playsinline preload="none" poster="${v.poster || thumb(v)}" src="${v.clip}"></video><span class="cf-play"><svg viewBox="0 0 24 24"><path d="M6 4l14 8-14 8z"/></svg></span>`
      : `<img src="${x.img}" alt="${x.t}" loading="lazy">`;
    const abre = v ? `<button class="cob-media" type="button" data-id="${v.id}" aria-label="Ver ${x.t}">` : `<a class="cob-media" href="${x.url}" target="_blank" rel="noopener" aria-label="Ver ${x.t} en Instagram">`;
    const cierra = v ? '</button>' : '</a>';
    return `<li class="cob-paso"><span class="cob-fase"><b>${i + 1}</b>${x.fase}</span>${abre}${media}${cierra}
      <h4>${x.t}</h4><p>${v ? v.desc : x.desc}</p><span class="cob-dato">${v ? reproducciones(v.vistas) : x.dato}</span></li>`;
  }).join('');
  $('#cobLinea').addEventListener('click', e => { const b = e.target.closest('button[data-id]'); if (b) abrir(b.dataset.id, lineaIds); });
  if (!reduceMotion && 'IntersectionObserver' in window) {
    const ioV = new IntersectionObserver(en => en.forEach(x => { if (x.isIntersecting) x.target.play().catch(() => {}); else x.target.pause(); }), { threshold: .45 });
    document.querySelectorAll('#cobLinea video').forEach(vd => ioV.observe(vd));
  }

  const TABS = [
    { k: 'diego', n: 'Diego Serrano', ids: ['diego-pole', 'diego-onboard', 'diego-imbabura', 'diego-canar'] },
    { k: 'motul', n: 'Motul', ids: ['motul-gualaceo', 'motul-casa-llena', 'motul-noche', 'motul-cierre'] },
    { k: 'lemans', n: 'Le Mans', ids: ['lemans-sorteo', 'lemans-anuncio', 'lemans-12h', 'lemans-primeras-horas'] },
    { k: 'thor', n: 'Thor Kitchen', ids: ['thor-copa-previa', 'thor-copa-dia1'] },
    { k: 'luis-cross', n: 'Luis Cross', ids: ['luis-debut', 'luis-carrera', 'luis-factory', 'luis-lanzamiento'] },
    { k: 'gtchallenge', n: 'GT Challenge', ids: ['gt-guyana', 'seb-clasificacion', 'gt-casco', 'gt-podio'] },
    { k: 'recovery', n: 'Recovery', ids: ['recovery-dorsales', 'recovery-fiesta', 'recovery-anuncio', 'recovery-gracias'] }
  ];
  const TAB_TXT = {
    diego: 'Nacional de Rally y de Circuitos: la pole publicada minutos después de clasificar, el onboard del súper prime y cada victoria en el momento.',
    motul: 'Cobertura doble en el Rally de Gualaceo: la cuenta de la marca y la del piloto contaron el mismo fin de semana desde ángulos distintos.',
    lemans: 'Cobertura de autor desde las 24 Horas de Le Mans con Motul: relato en primera persona, en vivo, para la audiencia en Ecuador.',
    thor: 'Copa Audi en Costa Jama: Thor Kitchen como auspiciante, con la previa y el primer día contados por los anfitriones.',
    'luis-cross': 'MX Challenge de Factory Bike: el estreno de Luis en casa, la carrera y los eventos del equipo, en colaboración con Pro Motion.',
    gtchallenge: 'Desde adentro del campeonato: prácticas, clasificación y resultados publicados en cada fecha.',
    recovery: 'Recovery Sport Fest por sus 10 años: dorsales, festival y cierre, publicados durante el evento.'
  };
  let tabAct = 'diego';
  function pintarTab() {
    $('#cobTabs').innerHTML = TABS.map(t => `<button role="tab" type="button" data-k="${t.k}" aria-selected="${t.k === tabAct}">${t.n}</button>`).join('');
    const t = TABS.find(x => x.k === tabAct);
    const vs = t.ids.map(byId).filter(Boolean);
    const card = v => `<button class="cob-card" type="button" data-id="${v.id}">
      <span class="cob-card-media">${v.clip ? `<video muted loop playsinline preload="none" poster="${v.poster || thumb(v)}" src="${v.clip}"></video>` : `<img src="${v.poster || thumb(v)}" alt="" loading="lazy">`}</span>
      <span class="cob-card-t">${v.titulo}</span><span class="cob-card-d">${v.desc || ''}</span>${v.vistas ? `<span class="cob-card-v">${vistas(v.vistas)} reproducciones</span>` : ''}</button>`;
    $('#cobPanel').innerHTML = `<p class="cob-panel-txt">${TAB_TXT[t.k]}</p><div class="cob-cards">${vs.map(card).join('')}</div>`;
    const ids = vs.map(v => v.id);
    $('#cobPanel').querySelectorAll('.cob-card').forEach(c => {
      const vd = c.querySelector('video');
      c.addEventListener('click', () => abrir(c.dataset.id, ids));
      if (vd && !reduceMotion) { c.addEventListener('mouseenter', () => vd.play().catch(() => {})); c.addEventListener('mouseleave', () => vd.pause()); }
    });
  }
  $('#cobTabs').addEventListener('click', e => { const b = e.target.closest('[data-k]'); if (b) { tabAct = b.dataset.k; pintarTab(); } });
  pintarTab();

  const COBERTURAS = [
    { id: 'cob1', nombre: 'Cobertura de 1 día', precio: 250, nota: 'Un día completo de producción y publicación en tiempo real.' },
    { id: 'cob2', nombre: 'Cobertura de 2 días', precio: 350, nota: 'Antes, durante y después del evento, con dron y cámara 360.' }
  ];
  $('#cobPrecios').innerHTML = COBERTURAS.map(c => `<div class="cob-precio"><p class="plan-nombre">${c.nombre}</p><p class="plan-precio">$${c.precio}</p><p class="plan-desde">${c.nota}</p><button class="btn btn-claro" type="button" data-cob="${c.id}">Agregar a la cotización</button></div>`).join('')
    + `<div class="cob-precio"><p class="plan-nombre">Más de 2 días</p><p class="plan-precio">A cotizar</p><p class="plan-desde">Según el volumen de contenido que necesite tu evento.</p><a class="btn btn-linea" target="_blank" rel="noopener" href="${wa('Hola Daniel, quiero cotizar una cobertura de más de 2 días para mi evento.')}">Cotizar por WhatsApp</a></div>`;

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

  /* ---------- Resultados ---------- */
  const GT = [['Panamá', 3470000], ['500 km de Panamá', 3280000], ['Guyana', 2410000], ['Barbados', 5390000], ['Puebla, México', 4680000]];
  const maxGT = Math.max(...GT.map(g => g[1]));
  const mill = n => (n / 1e6).toFixed(2).replace('.', ',') + ' M';
  $('#barrasGT').innerHTML = GT.map(([f, n]) => `<li class="barra-fila" title="${f}: ${mill(n)} visualizaciones"><span>${f}</span><div class="barra-pista" style="--w:${(n / maxGT * 78).toFixed(1)}%"><div class="barra-relleno"></div><b class="barra-valor">${mill(n)}</b></div></li>`).join('');
  $('#tablaGT tbody').innerHTML = GT.map(([f, n]) => `<tr><td>${f}</td><td>${n.toLocaleString('es-EC')}</td></tr>`).join('');
  const PERFILES = [['GT Challenge de las Américas', 10412722], ['Thor Kitchen', 3506603], ['iGlace', 1724487], ['Luis Cross', 1218801], ['Sebastián Merchán', 756026], ['HiHeat', 725950], ['Juan Guerrero', 483257], ['Diego Serrano', 289063], ['Pro Motion', 230877], ['OX Sport Agency', 91760], ['Recovery', 70356]];
  const maxP = PERFILES[0][1];
  const corto = n => n >= 1e6 ? (n / 1e6).toFixed(1).replace('.', ',') + ' M' : Math.round(n / 1000) + ' mil';
  $('#barrasPerfiles').innerHTML = PERFILES.map(([f, n]) => `<li class="barra-fila" title="${f}: ${n.toLocaleString('es-EC')} visualizaciones"><span>${f}</span><div class="barra-pista" style="--w:${Math.max(n / maxP * 82, .6).toFixed(1)}%"><div class="barra-relleno"></div><b class="barra-valor">${corto(n)}</b></div></li>`).join('');
  $('#tablaPerfiles tbody').innerHTML = PERFILES.map(([f, n]) => `<tr><td>${f}</td><td>${n.toLocaleString('es-EC')}</td></tr>`).join('');
  $('#megaVideos').textContent = '+' + VIDEOS.length;
  $('#megaProyectos').textContent = '+' + GRUPOS.length;

  /* ---------- Planes y cotizador ---------- */
  const ITEMS = [...PLANES, ...COBERTURAS];
  const cant = Object.fromEntries(ITEMS.map(p => [p.id, 0]));
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
  $('#cotizadorFilas').innerHTML = ITEMS.map(p => `<div class="cot-fila" data-id="${p.id}">
    <div><h4>${p.nombre}</h4><p>$${p.precio} ${p.id.startsWith('cob') ? 'por cobertura' : 'por video'}</p></div>
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
    ITEMS.forEach(p => {
      const q = cant[p.id], sub = q * p.precio; total += sub; n += q;
      const fila = document.querySelector(`.cot-fila[data-id="${p.id}"]`);
      fila.querySelector('output').textContent = q;
      fila.querySelector('.cot-sub').textContent = `$${sub.toLocaleString('es-EC')}`;
      if (q) lineas.push(`- ${q} x ${p.nombre} ($${p.precio} c/u) = $${sub}`);
    });
    $('#totalValor').textContent = `$${total.toLocaleString('es-EC')}`;
    $('#totalNota').textContent = n ? `${n} ${n === 1 ? 'servicio' : 'servicios'}. El 50% inicia el servicio: $${(total / 2).toLocaleString('es-EC')}.` : 'Agrega al menos un video.';
    const btn = $('#enviarCotizacion');
    btn.setAttribute('aria-disabled', n ? 'false' : 'true');
    btn.href = n ? wa(`Hola Daniel, armé esta cotización en tu web:\n${lineas.join('\n')}\nTotal estimado: $${total}\n\nMi marca es: `) : '#';
  }
  pintarCot();
  $('#cobPrecios').addEventListener('click', e => { const b = e.target.closest('[data-cob]'); if (b) { cant[b.dataset.cob]++; pintarCot(); $('#cotizar').scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' }); } });

  /* ---------- Enlaces de WhatsApp ---------- */
  $('#waPie').href = wa('Hola Daniel, vi tu portafolio De Marca y quiero hablar de un proyecto.');
  document.querySelectorAll('[data-curso]').forEach(a => { a.href = wa(`Hola Daniel, quiero enterarme cuando abra el curso "${a.dataset.curso}".`); a.target = '_blank'; a.rel = 'noopener'; });

  /* ---------- Nav activa ---------- */
  const links = [...document.querySelectorAll('.nav-links a')];
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(en => en.forEach(x => {
      if (x.isIntersecting) links.forEach(l => l.setAttribute('aria-current', l.getAttribute('href') === '#' + x.target.id));
    }), { rootMargin: '-45% 0px -50% 0px' });
    ['cobertura', 'portafolio', 'resultados', 'planes', 'cursos'].forEach(id => io.observe(document.getElementById(id)));
  }
})();
