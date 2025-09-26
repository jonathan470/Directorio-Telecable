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
    direccion: "CR 46 40 14 LOCAL 1-09 - San Andresito del Oriente",
    ciudad: "Cali",
    departamento: "Valle del cauca",
    administrador: "Jhoiner Arturo Barbosa Otalvaro",
    pbx: "1221",
    telefono: "3242979487",
    barrios: ["Mariano Ramos", "Republica de Israel", "Brisas del Limonar"],
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
  {
    nombre: "Oficina Ceibas",
    direccion: "CR 7L BIS 66 05 - Ceibas",
    ciudad: "Cali",
    departamento: "Valle del cauca",
    administrador: "Erika Rivas",
    pbx: "1125",
    telefono: "3145881541",
    barrios: ["Las ceibas", "San Marino", "Los pinos", "Cali Bella", "Alfonso Lopez I", "Fepicol", "Las veraneras"],
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
  {
    nombre: "Oficina Villa nueva",
    direccion: "CL 50 28G 68 - 12 de Octubre",
    ciudad: "Cali",
    departamento: "Valle del cauca",
    administrador: "Diana Carolina Dorado Guauña",
    pbx: "1117",
    telefono: "3103760868",
    barrios: ["12 de Octubre", "Villa del Sur", "Idenpendecia", "Conquistadores", "Eduerdado Santos", "Paraiso", "Paraiso", "Gran Colombia", "Yira Castro", "Rodeo", "Asturias","Bello Horizonte", "San pedro"],
    planes: [
      { nombre: "100 megas", precio: "$50.000" },
      { nombre: "300 megas", precio: "$70.000" },
      { nombre: "600 megas", precio: "$95.000" },
    ],
    puntosRecaudo: [{ nombre: "Drogueria VJ", direccion: "- Dg 30 31 23 San Pedro Claver" }],
    personalAdicional: [
      {
        nombre: "NO",
        cargo: "NO",
        pbx: "",
        telefono: "",
      },
    ],
  },
  {
    nombre: "Oficina Poblado",
    direccion: "CR 28F 72J 15 - Poblado",
    ciudad: "Cali",
    departamento: "Valle del cauca",
    administrador: "Maria Eugenia Diaz",
    pbx: "1135",
    telefono: "3151907600",
    barrios: ["Robles", "Poblado I", "Poblado II"],
    planes: [
      { nombre: "100 megas", precio: "$50.000" },
      { nombre: "300 megas", precio: "$70.000" },
      { nombre: "600 megas", precio: "$95.000" },
    ],
    puntosRecaudo: [{ nombre: "Punto de recaudo Zona Virtual", direccion: "" }],
    personalAdicional: [
      {
        nombre: "NO",
        cargo: "NO",
        pbx: "",
        telefono: "",
      },
    ],
  },
  {
    nombre: "Oficina Rio Cauca",
    direccion: "CL 75B 23A 81 - Centro Comercial Rio Cauca LOCAL 73",
    ciudad: "Cali",
    departamento: "Valle del cauca",
    administrador: "Sandra Balanta",
    pbx: "1127",
    telefono: "3126436349",
    barrios: ["Puertas del sol", "Decepaz (Liderez Decepaz, Remansos De comfandi, Ciudadela del Rio, Manantial, Compartir)", "Manuela Beltran", "Invicali", "Torres de Rio Cauca", "Centro Comercial Rio Cauca"],
    planes: [
      { nombre: "100 megas", precio: "$50.000" },
      { nombre: "300 megas", precio: "$70.000" },
      { nombre: "600 megas", precio: "$95.000" },
    ],
    puntosRecaudo: [{ nombre: "Ferreteria Multicenter", direccion: "- CL 112 26B1 05" },{ nombre: "Peluqueria Marizolany", direccion: "- CL 123 26H2 19" }, { nombre: "Efecty decepaz", direccion: "- CL 120F 22 14" }, { nombre: "Zona Cell", direccion: "- CR 26D 94 122" }, { nombre: "Punto de pago Decepaz", direccion: "- CL 120I 22 49" }, { nombre: "Punto de pago Puertas del sol", direccion: "- CL 96A 26B1 101" },],

    personalAdicional: [
      {
        nombre: "Ana Yibe Fontal",
        cargo: "Rentencion - Caja",
        pbx: "NO",
        telefono: "3161561740",
      },
    ],
  },
  {
    nombre: "Oficina Cordoba Reservado",
    direccion: "CR 47 55A 37 - Cordoba Reservado",
    ciudad: "Cali",
    departamento: "Valle del cauca",
    administrador: "Vanessa Villegas G",
    pbx: "1130",
    telefono: "3155599161",
    barrios: ["Cordoba Reservado", "Llano Verde", "Morichal de comfandi"],
    planes: [
      { nombre: "100 megas", precio: "$50.000" },
      { nombre: "300 megas", precio: "$70.000" },
      { nombre: "600 megas", precio: "$95.000" },
    ],
    puntosRecaudo: [{ nombre: "NO", direccion: "" }],
      
    personalAdicional: [
      {
        nombre: "NO",
        cargo: "NO",
        pbx: "",
        telefono: "",
      },
    ],
  },
  {
    nombre: "Oficina Comuneros",
    direccion: "CL 55 29A 123 - Comuneros",
    ciudad: "Cali",
    departamento: "Valle del cauca",
    administrador: "Claudia Vargas",
    pbx: "1112",
    telefono: "3243714326",
    barrios: ["Bonilla Aragon", "Laureano Gomez", "Comuneros I", "Mojica", "Pilar Tairona", "Unidad Portal del Parque"],
    planes: [
      { nombre: "50 megas", precio: "$40.000 Migracion de TV" },
      { nombre: "100 megas", precio: "$50.000" },
      { nombre: "300 megas", precio: "$70.000" },
      { nombre: "600 megas", precio: "$95.000" },
    
    ],
    puntosRecaudo: [{ nombre: "Drogueria Nuevo Latir", direccion: "- CR 28D 80 16" }, { nombre: "Servientrega Laureano Gomez", direccion: "- CL 32A 50 13" }, { nombre: "Efecty Mojica", direccion: "- CL 72z1 28e6 81" }, { nombre: "Punto de pago Bonilla", direccion: "- CL 92 28 11" }, { nombre: " Segundo Punto de pago Bonilla ", direccion: "- CR 26P5 87 67" }],

    personalAdicional: [
      {
        nombre: "Luisa Triviño",
        cargo: "Retencion",
        pbx: "1212",
        telefono: "3178899837",
      },
      {
        nombre: "Brush Zapata",
        cargo: "Caja",
        pbx: "1116",
        telefono: "NO",
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
