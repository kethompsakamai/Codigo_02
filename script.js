const members = {
  itachi: { name: "Itachi Uchiha", role: "EL ESPEJO", description: "Un shinobi de talento excepcional que carga con decisiones difíciles y una historia marcada por el sacrificio. Su calma esconde una determinación inquebrantable.", ring: "朱 — Carmesí" },
  pain: { name: "Pain", role: "EL LÍDER", description: "La figura que dirige Akatsuki bajo una visión nacida del sufrimiento. Busca imponer una paz que el mundo pueda comprender a través del dolor.", ring: "零 — Cero" },
  konan: { name: "Konan", role: "EL ÁNGEL", description: "Cofundadora de Akatsuki y compañera leal desde los primeros días. Convierte el papel en un arma y mantiene firme su compromiso con la causa.", ring: "白 — Blanco" },
  kisame: { name: "Kisame Hoshigaki", role: "LA BESTIA", description: "Conocido por su enorme reserva de chakra y su espada Samehada. Un combatiente temible cuya fuerza impone respeto.", ring: "南 — Sur" },
  deidara: { name: "Deidara", role: "EL ARTISTA", description: "Un ninja que entiende la batalla como una expresión artística. Sus explosiones son su firma y su concepto del arte es tan intenso como efímero.", ring: "青 — Azul" },
  sasori: { name: "Sasori", role: "EL TITIRITERO", description: "Maestro de las marionetas que transformó su propio cuerpo para perseguir una forma de arte eterno. Su paciencia es tan peligrosa como su técnica.", ring: "玉 — Esfera" }
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
