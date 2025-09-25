// Detectar navegación por hash y cargar vista correspondiente
function cargarVista(ruta) {
  fetch(`views/${ruta}.html`)
    .then((res) => res.text())
    .then((html) => {
      document.getElementById("app-content").innerHTML = html;
      if (ruta === "oficinas") renderOficinas();
      if (ruta === "views-oficinas") renderVistaOficina();
    })
    .catch((err) => {
      document.getElementById("app-content").innerHTML =
        "<p>Error al cargar la vista.</p>";
      console.error("Error al cargar vista:", err);
    });
}

// Escuchar cambios en el hash
window.addEventListener("hashchange", () => {
  const ruta = location.hash.replace("#", "");
  if (ruta) cargarVista(ruta);
});

// Cargar vista inicial
document.addEventListener("DOMContentLoaded", () => {
  const rutaInicial = location.hash.replace("#", "") || "oficinas";
  cargarVista(rutaInicial);
});

// Datos simulados de oficinas
const oficinasData = [
  {
    nombre: "Oficina Centro",
    direccion: "123 Main Street, Anytown",
    ciudad: "Anytown",
    departamento: "State",
    administrador: "Olivia Bennett",
    pbx: "101",
    telefono: "(555) 123-4567",
    barrios: ["Centro", "San Nicolás", "La Merced"],
    planes: [
      { nombre: "300 megas", precio: "$70.00" },
      { nombre: "600 megas", precio: "$95.00" },
    ],
    puntosRecaudo: [
      { nombre: "Efecty Centro", direccion: "Calle 123 #45-67" },
      { nombre: "GanaGana Principal", direccion: "Calle 89 #12-34" },
    ],
    personalAdicional: [
      {
        nombre: "Ana María Rodríguez",
        cargo: "Retención",
        pbx: "",
        telefono: "",
      },
      { nombre: "Carlos Pérez", cargo: "Caja", pbx: "", telefono: "987654321" },
      {
        nombre: "Sofía Gómez",
        cargo: "Soporte Técnico",
        pbx: "",
        telefono: "123456789",
      },
    ],
  },
];

// Renderizar tabla de oficinas
function renderOficinas() {
  const tbody = document.getElementById("oficinas-tbody");
  if (!tbody) return;

  tbody.innerHTML = "";
  oficinasData.forEach((oficina, index) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${oficina.nombre}</td>
      <td>${oficina.direccion}</td>
      <td>${oficina.administrador}</td>
      <td>
        <button class="view-button" data-index="${index}"> Views </button>
      </td>
    `;
    tbody.appendChild(tr);
  });

  document.querySelectorAll(".view-button").forEach((button) => {
    button.addEventListener("click", (e) => {
      const index = e.target.dataset.index;
      const oficinaSeleccionada = oficinasData[index];
      localStorage.setItem(
        "oficinaSeleccionada",
        JSON.stringify(oficinaSeleccionada)
      );
      location.hash = "views-oficinas";
    });
  });
}

// Renderizar vista detallada
function renderVistaOficina() {
  const section = document.getElementById("oficinas-section");
  if (!section) return;

  const oficina = JSON.parse(localStorage.getItem("oficinaSeleccionada"));
  if (!oficina) {
    section.innerHTML = "<p>No se encontró información de la oficina.</p>";
    return;
  }

  section.innerHTML = `
    <div class="vista-oficina">
      <a href="#oficinas">← Volver a Oficinas</a>
      <h1>${oficina.nombre}</h1>

      <h2>Información General</h2>
      <ul>
        <li><strong>Administradora:</strong> ${oficina.administrador}</li>
        <li><strong>Extensión PBX:</strong> ${oficina.pbx}</li>
        <li><strong>Teléfono Principal:</strong> ${oficina.telefono}</li>
        <li><strong>Dirección:</strong> ${oficina.direccion}</li>
        <li><strong>Ciudad:</strong> ${oficina.ciudad}</li>
        <li><strong>Departamento:</strong> ${oficina.departamento}</li>
      </ul>

      <h2>Barrios que competen</h2>
      <ul>
        ${oficina.barrios.map((b) => `<li>${b}</li>`).join("")}
      </ul>

      <h2>Planes Disponibles</h2>
      <ul>
        ${oficina.planes
          .map((p) => `<li>${p.nombre}: ${p.precio}</li>`)
          .join("")}
      </ul>

      <h2>Puntos de Recaudo</h2>
      <ul>
        ${oficina.puntosRecaudo
          .map((p) => `<li>${p.nombre} – ${p.direccion}</li>`)
          .join("")}
      </ul>

      <h2>Información Adicional</h2>
      <ul>
        ${oficina.personalAdicional
          .map(
            (p) => `
          <li>
            <strong>Nombre:</strong> ${p.nombre} <br>
            <strong>Cargo:</strong> ${p.cargo} <br>
            ${p.pbx ? `<strong>PBX:</strong> ${p.pbx}<br>` : ""}
            ${p.telefono ? `<strong>Teléfono:</strong> ${p.telefono}` : ""}
          </li>
        `
          )
          .join("<br><br>")}
      </ul>
    </div>
  `;
}
