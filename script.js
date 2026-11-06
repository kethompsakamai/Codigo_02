const members = {
  itachi: { name: "Itachi Uchiha", role: "EL ESPEJO", description: "Un shinobi de talento excepcional que carga con decisiones difíciles y una historia marcada por el sacrificio. Su calma esconde una determinación inquebrantable.", ring: "朱 — Carmesí", image: "https://i.pinimg.com/736x/4e/00/9a/4e009ad7cf2c339c46ef5d1644798755.jpg" },
  pain: { name: "Pain", role: "EL LÍDER", description: "La figura que dirige Akatsuki bajo una visión nacida del sufrimiento. Busca imponer una paz que el mundo pueda comprender a través del dolor.", ring: "零 — Cero", image: "https://images4.wikia.nocookie.net/__cb20100924231721/denaruto3/de/images/e/ee/PainA.png" },
  konan: { name: "Konan", role: "EL ÁNGEL", description: "Cofundadora de Akatsuki y compañera leal desde los primeros días. Convierte el papel en un arma y mantiene firme su compromiso con la causa.", ring: "白 — Blanco", image: "https://image.tensorartassets.com/cdn-cgi/image/w%3D600/model_showcase/841786317244440297/2814397f-440c-8fc1-c65f-0481ad54c9a9.png" },
  kisame: { name: "Kisame Hoshigaki", role: "LA BESTIA", description: "Conocido por su enorme reserva de chakra y su espada Samehada. Un combatiente temible cuya fuerza impone respeto.", ring: "南 — Sur", image: "https://2.bp.blogspot.com/-Zjjf11y1BPo/Wf3Lb4fc5zI/AAAAAAAAAAM/--fBmcuqT0kHcjkT-Ae-glbmwC6W0QuhACLcBGAs/s1600/795229b5d970fadd8ea071ceac986b5adaa78026_hq.jpg" },
  deidara: { name: "Deidara", role: "EL ARTISTA", description: "Un ninja que entiende la batalla como una expresión artística. Sus explosiones son su firma y su concepto del arte es tan intenso como efímero.", ring: "青 — Azul", image: "https://imgix.ranker.com/user_node_img/50088/1001750690/original/expressionless-face-photo-u1?auto=format&dpr=2&fit=crop&fm=pjpg&q=60&w=500" },
  sasori: { name: "Sasori", role: "EL TITIRITERO", description: "Maestro de las marionetas que transformó su propio cuerpo para perseguir una forma de arte eterno. Su paciencia es tan peligrosa como su técnica.", ring: "玉 — Esfera", image: "https://t1.blockdit.com/photos/2025/07/687730ad07472d530d43de38_800x0xcover_JyDz94DO.jpg" }
};

const modal = document.getElementById("modal");
const closeModal = () => { modal.classList.remove("open"); modal.setAttribute("aria-hidden", "true"); };
document.querySelectorAll(".member-card").forEach(card => {
  card.addEventListener("click", () => {
    const member = members[card.dataset.member];
    document.getElementById("modalName").textContent = member.name;
    document.getElementById("modalRole").textContent = member.role;
    document.getElementById("modalDescription").textContent = member.description;
    document.getElementById("modalRing").textContent = member.ring;
    const modalImage = document.getElementById("modalImage");
    modalImage.src = member.image;
    modalImage.alt = member.name;
    modalImage.onerror = () => { modalImage.style.display = "none"; };
    modalImage.style.display = "block";
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.getElementById("modalClose").focus();
  });
});
document.getElementById("modalClose").addEventListener("click", closeModal);
modal.addEventListener("click", event => { if (event.target === modal) closeModal(); });
document.addEventListener("keydown", event => { if (event.key === "Escape") closeModal(); });

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("mainNav");
menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));
document.getElementById("year").textContent = new Date().getFullYear();


// Animaciones de entrada al desplazarse por la página.
const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal, .intro-grid, .quote-strip, .philosophy-content").forEach(el => {
  el.classList.add("will-reveal");
  revealObserver.observe(el);
});

// Partículas rojas sutiles que flotan como brasas.
const emberLayer = document.getElementById("embers");
for (let i = 0; i < 24; i++) {
  const ember = document.createElement("span");
  ember.className = "ember";
  ember.style.left = `${Math.random() * 100}%`;
  ember.style.animationDuration = `${8 + Math.random() * 13}s`;
  ember.style.animationDelay = `${Math.random() * -18}s`;
  ember.style.setProperty("--drift", `${-70 + Math.random() * 140}px`);
  emberLayer.appendChild(ember);
}

// Movimiento parallax muy leve en el arte principal (solo dispositivos con puntero).
const heroArt = document.querySelector(".hero-art");
if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
  heroArt.addEventListener("mousemove", event => {
    const rect = heroArt.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    heroArt.style.setProperty("--move-x", `${x * 10}px`);
    heroArt.style.setProperty("--move-y", `${y * 10}px`);
  });
  heroArt.addEventListener("mouseleave", () => {
    heroArt.style.setProperty("--move-x", "0px");
    heroArt.style.setProperty("--move-y", "0px");
  });
}

// Si una fuente externa no responde, se conserva el diseño de la tarjeta.
document.querySelectorAll(".member-photo img, .hero-group-image").forEach(img => {
  img.addEventListener("error", () => img.classList.add("image-unavailable"));
});
