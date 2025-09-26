// ==========================
// Credenciales válidas
// ==========================
const credencialesValidas = [
  { email: "soporte.riocauca@cablecauca.com", password: "admin123" },
  { email: "soporte@telecable.com", password: "soporte456" },
];

// ==========================
// Cargar vistas por hash
// ==========================
function cargarVista(ruta) {
  fetch(`${ruta}.html`)
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

// ==========================
// Escuchar cambios en el hash
// ==========================
window.addEventListener("hashchange", () => {
  const ruta = location.hash.replace("#", "");
  if (ruta) cargarVista(ruta);
});

// ==========================
// Cargar vista inicial
// ==========================
document.addEventListener("DOMContentLoaded", () => {
  const rutaInicial = location.hash.replace("#", "") || "oficinas";
  cargarVista(rutaInicial);
});

// ==========================
// Validar login
// ==========================
document.addEventListener("submit", (e) => {
  const form = e.target;
  if (form.matches("form")) {
    e.preventDefault();

    // Ocultar mensaje de error si existe
    const errorDiv = document.getElementById("login-error");
    if (errorDiv) {
      errorDiv.style.display = "none";
      errorDiv.textContent = "";
    }

    const email = form.username?.value.trim();
    const password = form.password?.value.trim();

    const esValido = credencialesValidas.some(
      (cred) => cred.email === email && cred.password === password
    );

    if (esValido) {
      localStorage.setItem("usuarioAutenticado", "true");
      window.location.href = "views/home.html";
    } else {
      if (errorDiv) {
        errorDiv.textContent = "❌ Credenciales incorrectas. Intenta de nuevo.";
        errorDiv.style.display = "block";
      } else {
        alert("❌ Credenciales incorrectas. Intenta de nuevo.");
      }
    }
  }
});

// ==========================
// Datos simulados de oficinas
// ==========================
const oficinasData = [
  {
    nombre: "Oficina Mariano Ramos",
    direccion: "CR 46 40 14 LOCAL 1-09",
    ciudad: "Cali",
    departamento: "Valle del cauca",
    administrador: "JHOINER ARTURO BARBOSA OTALVARO",
    pbx: "1221",
    telefono: "3242979487",
    barrios: ["MARIANO RAMOS", "REPUBLICA DE ISRAEL", "BRISAS DEL LIMONAR"],
    planes: [
      { nombre: "100 megas", precio: "$50.000" },
      { nombre: "300 megas", precio: "$70.000" },
      { nombre: "600 megas", precio: "$95.000" },
    ],
    puntosRecaudo: [{ nombre: "NO", direccion: " " }],
    personalAdicional: [
      {
        nombre: "NO",
        cargo: "NO",
        pbx: "",
        telefono: "",
      },
    ],
  },
];

// ==========================
// Renderizar tabla de oficinas
// ==========================
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

// ==========================
// Renderizar vista detallada
// ==========================
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
          .map((p) => `<li>${p.nombre} ${p.direccion}</li>`)
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

// ==========================
// Función para cerrar sesión
// ==========================
function cerrarSesion() {
  localStorage.removeItem("usuarioAutenticado");
  window.location.href = "../login.html";
}
