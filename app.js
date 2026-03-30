// ===== BASE DE DATOS DE CANALES =====
const channelsDatabase = [
    // DEPORTES


    // VARIADOS

{ 
  id: 40, 
  name: "RNE Para Todos", 
  category: "Variados", 
  thumbnail: "https://graph.facebook.com/radionacionalrne/picture?width=200&height=200", 
  streamUrl: "https://ztnr.rtve.es/ztnr/6688753.m3u8", 
  restrictedCountries: [] 
},

  { 
  id: 31, 
  name: "Litus TV Documentales", 
  category: "Variados", 
  thumbnail: "https://www.lt10.com.ar/multimedia/in1459538917708.jpeg", 
  streamUrl: "https://stream.arcast.com.ar/litustv/ngrp:litustv_all/playlist.m3u8", 
  restrictedCountries: [] 
},
    { 
  id: 32, 
  name: "MDS Stream Música", 
  category: "Variados", 
  thumbnail: "https://th.bing.com/th/id/OIP.YKvgJ2NLL2lN89xu7bN6ZAHaHa?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3", 
  streamUrl: "https://mdstrm.com/video/631f6f0fe4eba7082bc551ad.m3u8?PlaylistM3UCL", 
  restrictedCountries: [] 
},
   { 
  id: 33, 
  name: "Channel 01 Mexico Novelas", 
  category: "Variados", 
  thumbnail: "https://tse1.mm.bing.net/th/id/OIP.iRsPYYS9ehOQWiz6iitJWAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
  streamUrl: "https://channel01-onlymex.akamaized.net/hls/live/2022749/event01/index.m3u8", 
  restrictedCountries: [] 
},
    { 
  id: 34, 
  name: "Channel 08 Mexico Noticias", 
  category: "Variados", 
  thumbnail: "https://th.bing.com/th/id/OIP.liUMtBXuG49WdUR0O2HUNwHaEK?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
  streamUrl: "https://channel08-onlymex.akamaized.net/hls/live/2037034/event01/index.m3u8", 
  restrictedCountries: [] 
},
   { 
  id: 35, 
  name: "Power Turk TV", 
  category: "Variados", 
  thumbnail: "https://mir-s3-cdn-cf.behance.net/project_modules/hd/70609240417911.5606d96bd100e.jpg",
  streamUrl: "https://livetv.powerapp.com.tr/powerturkTV/powerturkhd.smil/playlist.m3u8", 
  restrictedCountries: [] 
},
    { 
  id: 36, 
  name: "RBMN Live", 
  category: "Variados", 
  thumbnail: "https://th.bing.com/th/id/OIP.wIvNcIkzUTTD4YCcVTgEOwHaHa?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3", 
  streamUrl: "https://rbmn-live.akamaized.net/hls/live/590964/BoRB-AT/master.m3u8?null=0", 
  restrictedCountries: [] 
},
    { 
  id: 37, 
  name: "RBMN Live 2", 
  category: "Variados", 
  thumbnail: "https://tse4.mm.bing.net/th/id/OIP.zPV3vyk91eABTnakPzJwDAAAAA?rs=1&pid=ImgDetMain&o=7&rm=3",
  streamUrl: "https://rbmn-live.akamaized.net/hls/live/590964/BoRB-AT/master.m3u8", 
  restrictedCountries: [] 
},
    { 
  id: 38, 
  name: "OTtera 3053 Clásicos", 
  category: "Variados", 
  thumbnail: "https://tse2.mm.bing.net/th/id/OIP.W0vkyru5n4aL2cEVFFGSSgHaEi?rs=1&pid=ImgDetMain&o=7&rm=3",
  streamUrl: "https://stream.ads.ottera.tv/playlist.m3u8?network_id=3053", 
  restrictedCountries: [] 
},
    { 
  id: 39, 
  name: "OTtera 3527", 
  category: "Variados", 
  thumbnail: "https://techround.co.uk/wp-content/uploads/2022/10/logo.png",
  streamUrl: "https://stream.ads.ottera.tv/playlist.m3u8?network_id=3527", 
  restrictedCountries: [] 
},

{ 
  id: 44, 
  name: "RTVE Stream", 
  category: "Variados", 
  thumbnail: "https://tse3.mm.bing.net/th/id/OIP.SB1H9m3K2sdMXHnZsxiUmwHaD4?rs=1&pid=ImgDetMain&o=7&rm=3",
  streamUrl: "https://ztnr.rtve.es/ztnr/1688877.m3u8", 
  restrictedCountries: [] 
},

    
       // NOTICIAS
    { id: 7, name: "Maussan Televisión", category: "Noticias", thumbnail: "https://i.ytimg.com/vi/N2T8lnfMSLo/hqdefault.jpg", streamUrl: "https://www.youtube.com/embed/N2T8lnfMSLo", restrictedCountries: [] },
    { id: 8, name: "C5N EN VIVO", category: "Noticias", thumbnail: "https://img.youtube.com/vi/SF06Qy1Ct6Y/maxresdefault.jpg", streamUrl: "https://www.youtube.com/embed/SF06Qy1Ct6Y", restrictedCountries: [] },
    { id: 10, name: "Noticias Telemundo", category: "Noticias", thumbnail: "https://img.youtube.com/vi/c660thEPeeY/maxresdefault.jpg", streamUrl: "https://www.youtube.com/embed/c660thEPeeY", restrictedCountries: [] },
    { id: 12, name: "CNN en Español", category: "Noticias", thumbnail: "https://i.ytimg.com/vi/MnaHrXkbkAM/hqdefault.jpg", streamUrl: "https://www.youtube.com/embed/MnaHrXkbkAM", restrictedCountries: [] },
    { id: 20, name: "N+ Univision 24/7", category: "Noticias", thumbnail: "https://img.youtube.com/vi/V4C7VNfRATA/maxresdefault.jpg", streamUrl: "https://www.youtube.com/embed/V4C7VNfRATA", restrictedCountries: [] },
    { id: 30, name: "Canal Siete", category: "Noticias", thumbnail: "https://img.youtube.com/vi/Vh8xmLBJtR8/maxresdefault.jpg", streamUrl: "https://www.youtube.com/embed/Vh8xmLBJtR8", restrictedCountries: [] },

{ 
  id: 42, 
  name: "Aragón TV", 
  category: "Noticias", 
  thumbnail: "https://graph.facebook.com/AragonTV/picture?width=200&height=200", 
  streamUrl: "https://cartv.streaming.aranova.es/hls/live/aragontv_canal1.m3u8/", 
  restrictedCountries: [] 
},

    
// MÚSICA
   { id: 2, name: "LoFi 24/7", category: "Música", thumbnail: "https://img.youtube.com/vi/jfKfPfyJRdk/maxresdefault.jpg", streamUrl: "https://www.youtube.com/embed/jfKfPfyJRdk", restrictedCountries: [] },
    { id: 16, name: "LA POPU Radio", category: "Música", thumbnail: "https://img.youtube.com/vi/Bi7vMAqkYCg/maxresdefault.jpg", streamUrl: "https://www.youtube.com/embed/Bi7vMAqkYCg", restrictedCountries: [] },
    { id: 17, name: "Radio Vale FM", category: "Música", thumbnail: "https://img.youtube.com/vi/x5fbS_4RrFU/maxresdefault.jpg", streamUrl: "https://www.youtube.com/embed/x5fbS_4RrFU", restrictedCountries: [] },
    { id: 22, name: "Deep House Radio", category: "Música", thumbnail: "https://img.youtube.com/vi/IkmLXvBfVv0/maxresdefault.jpg", streamUrl: "https://www.youtube.com/embed/IkmLXvBfVv0", restrictedCountries: [] },
    { id: 24, name: "Verano 2026", category: "Música", thumbnail: "https://img.youtube.com/vi/kxW-HJNjs8w/maxresdefault.jpg", streamUrl: "https://www.youtube.com/embed/kxW-HJNjs8w", restrictedCountries: [] },

    
    // SERIES
    { id: 21, name: "Relatos de Terror", category: "Series", thumbnail: "https://img.youtube.com/vi/fsdnbsnLW3I/maxresdefault.jpg", streamUrl: "https://www.youtube.com/embed/fsdnbsnLW3I", restrictedCountries: [] },
    { id: 25, name: "El Circo de las Montini", category: "Series", thumbnail: "https://img.youtube.com/vi/cknu7LGp7gM/maxresdefault.jpg", streamUrl: "https://www.youtube.com/embed/cknu7LGp7gM", restrictedCountries: [] },
   
    // REALITY

{ 
  id: 43, 
  name: "La 2 RTVE", 
  category: "Reality", 
  thumbnail: "https://graph.facebook.com/la2detve/picture?width=200&height=200", 
  streamUrl: "https://ztnr.rtve.es/ztnr/5190066.m3u8/", 
  restrictedCountries: [] 
},

    { id: 9, name: "La Casa de los Famosos Colombia", category: "Reality", thumbnail: "https://img.youtube.com/vi/bCJ5foMXVOw/maxresdefault.jpg", streamUrl: "https://www.youtube.com/embed/bCJ5foMXVOw", restrictedCountries: [] },
    { id: 11, name: "Caso Cerrado 24/7", category: "Reality", thumbnail: "https://img.youtube.com/vi/CG7UYN5OrQA/maxresdefault.jpg", streamUrl: "https://www.youtube.com/embed/CG7UYN5OrQA", restrictedCountries: [] },
    { id: 26, name: "Qué hay pa' dañar", category: "Reality", thumbnail: "https://img.youtube.com/vi/0QkyevFkqfM/maxresdefault.jpg", streamUrl: "https://www.youtube.com/embed/0QkyevFkqfM", restrictedCountries: [] },
    { id: 28, name: "Calle 7", category: "Reality", thumbnail: "https://img.youtube.com/vi/9DxjRnl59WA/maxresdefault.jpg", streamUrl: "https://www.youtube.com/embed/9DxjRnl59WA", restrictedCountries: [] }
];


// ===== ESTADO GLOBAL =====
let currentCategory = "Todos";
let currentHls = null;
let userCountry = null;

// ===== ELEMENTOS DEL DOM =====
const channelsGrid = document.getElementById("channelsGrid");
const playerContainer = document.getElementById("playerContainer");
const currentChannelNameSpan = document.getElementById("currentChannelName");
const sectionTitle = document.getElementById("sectionTitle");
const errorModal = document.getElementById("errorModal");
const modalTitle = document.getElementById("modalTitle");
const modalMessage = document.getElementById("modalMessage");
const closeModalBtn = document.getElementById("closeModal");
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const closeMenuBtn = document.getElementById("closeMenu");
const menuOverlay = document.getElementById("menuOverlay");

// ===== FUNCIÓN: DETECTAR PAÍS =====
async function detectUserCountry() {
    try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        userCountry = data.country_code;
        console.log(`País detectado: ${userCountry}`);
    } catch (error) {
        console.warn('No se pudo detectar el país:', error);
        userCountry = null;
    }
}

// ===== FUNCIÓN: MOSTRAR MODAL =====
function showErrorModal(isGeoRestricted = false, channelName = "") {
    if (isGeoRestricted) {
        modalTitle.textContent = "Canal bloqueado en Cuba";
        modalMessage.textContent = `"${channelName}" no está disponible en Cuba. Prueba usando una VPN.`;
    } else {
        modalTitle.textContent = "Canal no disponible";
        modalMessage.textContent = "El canal no está disponible o requiere VPN.";
    }
    errorModal.classList.add("active");
}

function closeErrorModal() {
    errorModal.classList.remove("active");
}

// ===== FUNCIÓN: REPRODUCIR CANAL =====
function playChannel(streamUrl, channelName, isRestrictedForCuba = false) {
    if (isRestrictedForCuba && userCountry === "CU") {
// 🚧 BLOQUEAR DEPORTES Y PELICULAS (PRÓXIMAMENTE)
const canal = channelsDatabase.find(ch => ch.name === channelName);

if (canal && (canal.category === "Deportes" || canal.category === "Peliculas")) {

    playerContainer.innerHTML = `
        <div class="coming-soon-overlay">
            <div class="coming-soon-box">
                <div class="lock-icon">🔒</div>
                <h2>Próximamente</h2>
                <p>Estamos trabajando en esta sección</p>
            </div>
        </div>
    `;


    return;
}
        showErrorModal(true, channelName);
        return;
    }

    playerContainer.innerHTML = "";
    if (currentHls) {
        currentHls.destroy();
        currentHls = null;
    }

    currentChannelNameSpan.textContent = channelName;

    // DETECTAR YOUTUBE
    const isYouTube = streamUrl.includes("youtube.com/embed/") || 
                      streamUrl.includes("youtube.com/watch") || 
                      streamUrl.includes("youtu.be/");

    if (isYouTube) {
        let videoId = "";
        
        if (streamUrl.includes("youtube.com/embed/")) {
            videoId = streamUrl.split("embed/")[1].split("?")[0];
        } else if (streamUrl.includes("youtube.com/watch")) {
            const urlParams = new URLSearchParams(streamUrl.split('?')[1]);
            videoId = urlParams.get('v');
        } else if (streamUrl.includes("youtu.be/")) {
            videoId = streamUrl.split("youtu.be/")[1].split("?")[0];
        }
        
        const iframe = document.createElement("iframe");
        iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1&rel=0`;
        iframe.style.width = "100%";
        iframe.style.height = "100%";
        iframe.style.border = "none";
        iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
        iframe.allowFullscreen = true;
        
        playerContainer.appendChild(iframe);
        return;
    }

    // HLS
    const video = document.createElement("video");
    video.controls = true;
    video.autoplay = true;
    video.style.width = "100%";
    video.style.height = "100%";

    if (video.canPlayType("application/vnd.apple.mpegurl")) {
        video.src = streamUrl;
        playerContainer.appendChild(video);
        video.addEventListener("error", () => showErrorModal(false));
    } else if (Hls && Hls.isSupported()) {
        currentHls = new Hls({ enableWorker: true, lowLatencyMode: true });
        currentHls.loadSource(streamUrl);
        currentHls.attachMedia(video);
        currentHls.on(Hls.Events.MANIFEST_PARSED, () => {
            video.play().catch(e => console.log("Error:", e));
        });
        currentHls.on(Hls.Events.ERROR, (event, data) => {
            if (data.fatal) showErrorModal(false);
        });
        playerContainer.appendChild(video);
    } else {
        showErrorModal(false);
    }
}

// ===== FUNCIÓN: RENDERIZAR CANALES =====
function renderChannels(category) {
    let filteredChannels;
    
    if (category === "Todos") {
        filteredChannels = channelsDatabase;
    } else {
        filteredChannels = channelsDatabase.filter(ch => ch.category === category);
    }

    if (filteredChannels.length === 0) {

    // 🚧 Mostrar "Próximamente" en el reproductor
    if (category === "Deportes" || category === "Peliculas") {

        playerContainer.innerHTML = `
            <div class="coming-soon-overlay">
                <div class="coming-soon-box">
                    <div class="lock-icon">🔒</div>
                    <h2>Próximamente</h2>
                    <p>Estamos trabajando en esta sección</p>
                </div>
            </div>
        `;

        
        

        // Limpiar grid (opcional)
        channelsGrid.innerHTML = "";

        return;
    }

    channelsGrid.innerHTML = '<p style="text-align: center; grid-column: 1/-1;">No hay canales en esta categoría</p>';
    return;
}

       channelsGrid.innerHTML = filteredChannels.map((channel, index) => `
        <div class="channel-card" data-channel-index="${index}" data-tooltip="${channel.name} · ${channel.category} · 24/7">
            <div class="channel-thumbnail">
                <img src="${channel.thumbnail}" alt="${channel.name}" loading="lazy">
                <span class="live-badge">EN VIVO</span>
            </div>
            <div class="channel-info">
                <div class="channel-name-card">${channel.name}</div>
                <div class="channel-category">${channel.category}</div>
            </div>
        </div>
    `).join("");

    document.querySelectorAll(".channel-card").forEach((card, idx) => {
        card.addEventListener("click", () => {
            const channelIndex = parseInt(card.dataset.channelIndex);
            const channel = filteredChannels[channelIndex];
            if (channel) {
                const isRestricted = channel.restrictedCountries?.includes("CU") || false;
                playChannel(channel.streamUrl, channel.name, isRestricted);
            }
        });
    });

    // Actualizar contador de canales en el hero
    const totalCount = document.getElementById('totalChannelsCount');
    if (totalCount) {
        totalCount.textContent = filteredChannels.length;
    }
}

// ===== FUNCIONES DE UI =====
function setActiveCategory(categoryName) {
    document.querySelectorAll(".category-btn, .mobile-category-btn").forEach(btn => {
        if (btn.dataset.category === categoryName) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });
    
    sectionTitle.textContent = categoryName === "Todos" ? "Todos los canales" : `${categoryName} - Canales en vivo`;
}

function changeCategory(categoryName) {
    currentCategory = categoryName;
    setActiveCategory(categoryName);
    renderChannels(categoryName);
    closeMobileMenu();
}

function openMobileMenu() {
    mobileMenu.classList.add("active");
    menuOverlay.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeMobileMenu() {
    mobileMenu.classList.remove("active");
    menuOverlay.classList.remove("active");
    document.body.style.overflow = "";
}

// ===== CARRUSEL DESTACADOS =====
function loadFeaturedChannels() {
    const featuredContainer = document.getElementById('featuredCarousel');
    if (!featuredContainer) return;
    
    const featuredChannels = channelsDatabase.slice(0, 6);
    
    featuredContainer.innerHTML = featuredChannels.map(channel => `
        <div class="featured-card" data-channel-id="${channel.id}">
            <div class="featured-thumbnail">
                <img src="${channel.thumbnail}" alt="${channel.name}">
            </div>
            <div class="featured-info">
                <div class="featured-name">${channel.name}</div>
                <div class="featured-category">${channel.category}</div>
            </div>
        </div>
    `).join('');
    
    document.querySelectorAll('.featured-card').forEach(card => {
        card.addEventListener('click', () => {
            const channelId = parseInt(card.dataset.channelId);
            const channel = channelsDatabase.find(ch => ch.id === channelId);
            if (channel) {
                playChannel(channel.streamUrl, channel.name, false);
            }
        });
    });
}

function initCarouselControls() {
    const prev = document.getElementById('featuredPrev');
    const next = document.getElementById('featuredNext');
    const carousel = document.getElementById('featuredCarousel');
    if (!prev || !next || !carousel) return;
    
    prev.onclick = () => carousel.scrollBy({ left: -200, behavior: 'smooth' });
    next.onclick = () => carousel.scrollBy({ left: 200, behavior: 'smooth' });
}


// ===== FUNCIÓN: BUSCAR CANALES =====
function initSearch() {
    const searchInput = document.getElementById('searchInput');
    const clearBtn = document.getElementById('clearSearch');
    if (!searchInput) return;
    
    function filterChannels() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        const category = currentCategory;
        
        let channels;
        if (category === "Todos") {
            channels = channelsDatabase;
        } else {
            channels = channelsDatabase.filter(ch => ch.category === category);
        }
        
        const filtered = channels.filter(channel => 
            channel.name.toLowerCase().includes(searchTerm)
        );
        
        // Mostrar u ocultar botón de limpiar
        if (clearBtn) {
            clearBtn.style.display = searchTerm ? 'block' : 'none';
        }
        
        // Renderizar resultados
        if (filtered.length === 0) {
            channelsGrid.innerHTML = '<p style="text-align: center; grid-column: 1/-1;">No se encontraron canales</p>';
            return;
        }
        
        channelsGrid.innerHTML = filtered.map((channel, index) => `
            <div class="channel-card" data-channel-index="${index}">
                <div class="channel-thumbnail">
                    <img src="${channel.thumbnail}" alt="${channel.name}" loading="lazy">
                    <span class="live-badge">EN VIVO</span>
                </div>
                <div class="channel-info">
                    <div class="channel-name-card">${channel.name}</div>
                    <div class="channel-category">${channel.category}</div>
                </div>
            </div>
        `).join("");
        
        // Agregar event listeners a las cards filtradas
        document.querySelectorAll(".channel-card").forEach((card, idx) => {
            card.addEventListener("click", () => {
                const channelIndex = parseInt(card.dataset.channelIndex);
                const channel = filtered[channelIndex];
                if (channel) {
                    const isRestricted = channel.restrictedCountries?.includes("CU") || false;
                    playChannel(channel.streamUrl, channel.name, isRestricted);
                }
            });
        });
    }
    
    searchInput.addEventListener('input', filterChannels);
    
    if (clearBtn) {
        clearBtn.addEventListener('click', () => {
            searchInput.value = '';
            filterChannels();
            searchInput.focus();
        });
    }
}

// ===== INICIALIZAR =====
function initializeEventListeners() {
    document.querySelectorAll(".category-btn, .mobile-category-btn").forEach(btn => {
        btn.addEventListener("click", () => changeCategory(btn.dataset.category));
    });
    menuToggle.addEventListener("click", openMobileMenu);
    closeMenuBtn.addEventListener("click", closeMobileMenu);
    menuOverlay.addEventListener("click", closeMobileMenu);
    closeModalBtn.addEventListener("click", closeErrorModal);
    errorModal.addEventListener("click", (e) => {
        if (e.target === errorModal) closeErrorModal();
    });
    
    initSearch();  // <--- AGREGAR ESTO
}

async function init() {
    await detectUserCountry();
    initializeEventListeners();
    renderChannels(currentCategory);
    setActiveCategory(currentCategory);
    loadFeaturedChannels();
    initCarouselControls();

    initHelp();
    initChat(); // 👈 AQUI ES DONDE DEBE IR
}

document.addEventListener("DOMContentLoaded", init);

// ===== HELP PRO =====
function initHelp() {
    const helpBtn = document.getElementById("helpBtn");
    const helpModal = document.getElementById("helpModal");
    const closeHelp = document.getElementById("closeHelp");

    if (helpBtn) {
        helpBtn.addEventListener("click", () => {
            helpModal.classList.add("active");
        });
    }

    if (closeHelp) {
        closeHelp.addEventListener("click", () => {
            helpModal.classList.remove("active");
        });
    }

    if (helpModal) {
        helpModal.addEventListener("click", (e) => {
            if (e.target === helpModal) {
                helpModal.classList.remove("active");
            }
        });
    }

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            helpModal.classList.remove("active");
        }
    });
}

function initChat() {
    let chatHistory = [];

    const chatBtn = document.getElementById("chatBtn");
    const chatBox = document.getElementById("chatBox");
    const closeChat = document.getElementById("closeChat");
    const sendBtn = document.getElementById("sendChat");
    const input = document.getElementById("chatInput");
    const messages = document.getElementById("chatMessages");

    if (!chatBtn) return;

    // Abrir chat
    chatBtn.onclick = () => {
        chatBox.style.display = "flex";
    };

    // Cerrar chat
    if (closeChat) {
        closeChat.onclick = () => {
            chatBox.style.display = "none";
        };
    }

    // ===== IA CON MEMORIA =====
   function getResponse(text) {
    const original = text;
    text = text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();

    chatHistory.push(text);

    let respuestas = [];

    // ===== NORMALIZAR =====
    const palabras = text.split(" ");

    // ===== SALUDO =====
    if (/(hola|buenas|hey|saludos)/.test(text)) {
        respuestas.push("👋 Hola, dime qué estás buscando y te ayudo.");
    }

    // ===== INTENCIÓN: VER / BUSCAR =====
    if (/(ver|buscar|quiero|poner|abrir)/.test(text)) {
        respuestas.push("📺 Puedes seleccionar cualquier canal desde la lista o usar las categorías.");
    }

    // ===== INTENCIÓN: NO ENCUENTRA =====
    if (/(no encuentro|no veo|no aparece)/.test(text)) {
        respuestas.push("🔎 Prueba cambiar de categoría o revisar la sección de destacados.");
    }

    // ===== CANALES =====
    if (text.includes("canal")) {
        respuestas.push(`📡 Actualmente hay ${channelsDatabase.length} canales disponibles.`);
    }

    // ===== CATEGORÍAS DINÁMICAS =====
    if (text.includes("noticias")) {
        respuestas.push("📰 En Noticias tienes CNN, Telemundo, C5N y más.");
    }

    if (text.includes("deportes")) {
    respuestas.push("⚽ La sección Deportes estará disponible próximamente 🚧");
}

    if (text.includes("musica")) {
        respuestas.push("🎵 En Música tienes radios en vivo 24/7.");
    }

   if (text.includes("series")) {
    respuestas.push("📺 Puedes ver contenido en la categoría Series.");
}

if (text.includes("peliculas")) {
    respuestas.push("🎬 La sección Películas estará disponible próximamente 🚧");
}

    // ===== PROBLEMAS =====
    if (/(no funciona|no carga|error|no abre|no sirve)/.test(text)) {
        respuestas.push("⚠️ Ese canal puede estar caído o bloqueado. Prueba otro o usa VPN.");
    }

    // ===== VPN =====
    if (/(vpn|bloqueado|pais|region)/.test(text)) {
        respuestas.push("🌍 Algunos canales están restringidos por país. Usa VPN.");
    }

    // ===== CONTACTO INTELIGENTE =====
    if (/(contacto|dueña|soporte|numero|hablar)/.test(text)) {
        return "📞 Puedes contactar soporte aquí 👉 https://wa.me/5355877689";
    }

    // ===== RECOMENDACIÓN =====
    if (/(recomienda|que ver|algo bueno)/.test(text)) {
        respuestas.push("🔥 Te recomiendo revisar los canales destacados o la categoría Variados.");
    }

    // ===== SI NO DETECTA NADA =====
    if (respuestas.length === 0) {
        return generarRespuestaAvanzada(text);
    }

    // ===== RESPUESTA FINAL =====
    return respuestas.join(" ");
}

function intentarAbrirCanal(text) {
    const query = text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

    const cleaned = query
        .replace("abre", "")
        .replace("pon", "")
        .replace("ver", "")
        .replace("quiero", "")
        .replace("tv", "")
        .trim();

    // 🔹 Buscar canal por nombre
    let canalEncontrado = channelsDatabase.find(channel => {
    const nombre = channel.name
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

    return nombre.includes(cleaned);
});

    if (canalEncontrado) {
        playChannel(canalEncontrado.streamUrl, canalEncontrado.name);
        return `📺 Abriendo ${canalEncontrado.name}...`;
    }

    // 🔹 Detectar categorías
    const categorias = ["deportes", "noticias", "musica", "peliculas", "infantil"];

    let categoriaDetectada = categorias.find(cat =>
    query.includes(cat)
);

    if (categoriaDetectada) {
        let canales = channelsDatabase.filter(channel =>
    channel.category &&
    channel.category.toLowerCase().includes(categoriaDetectada)
);

if (canales.length > 0) {
    let listaHTML = `<div class="chat-list">📺 Canales de ${categoriaDetectada}:<br>`;

    canales.slice(0, 5).forEach(canal => {
        listaHTML += `
            <div class="chat-card" onclick="playChannel('${canal.streamUrl}', '${canal.name}')">
    <div class="chat-card-title">${canal.name}</div>
    <div class="chat-card-play">▶ Ver canal</div>
</div>
        `;
    });

    listaHTML += `</div>`;

    return listaHTML;
}
    }

    return null;
}

function generarRespuestaAvanzada(text) {

    if (text.includes("ver")) {
        return "📺 Puedes ver canales seleccionando cualquiera de la lista o usando las categorías.";
    }

    if (text.length < 5) {
        return "🤔 ¿Puedes explicarlo un poco más?";
    }

    const respuestas = [
        "Hmm… no estoy seguro 🤔 pero dime más detalles y te ayudo.",
        "Interesante 🤔 cuéntame un poco más.",
        "No lo entendí del todo, pero podemos resolverlo juntos 💪",
        "Puede ser varias cosas… ¿qué exactamente quieres hacer?",
        "Explícame mejor y te ayudo paso a paso 👍"
    ];

    return respuestas[Math.floor(Math.random() * respuestas.length)];
}

    function sendMessage() {
    const text = input.value.trim();
    if (!text) return;

    messages.innerHTML += `<div class="user-msg">${text}</div>`;
    input.value = "";

    setTimeout(() => {
       let reply = intentarAbrirCanal(text);

// 🔥 Si hay intento de canal (aunque sea categoría), NO usar bot normal
if (reply) {
    // ya resolvió (canal abierto)
} else {
    reply = getResponse(text);
}

        messages.innerHTML += `<div class="bot-msg">${reply}</div>`;
        messages.scrollTop = messages.scrollHeight;
    }, 600);
}

    if (sendBtn) sendBtn.onclick = sendMessage;

    if (input) {
        input.addEventListener("keypress", (e) => {
            if (e.key === "Enter") sendMessage();
        });
    }
}
   