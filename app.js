// ==========================
// Credenciales válidas
// ==========================
const credencialesValidas = [
  { email: "soporte.riocauca@cablecauca.com", password: "admin123" },
  { email: "sistemas1@cablecauca.com", password: "sistemas1*" },
  { email: "sistemas2@cablecauca.com", password: "sistemas2*" },
  { email: "sistemas5@cablecauca.com", password: "sistemas5*" },
  { email: "sistemas.general@cablecauca.com", password: "sistemasgeneral123" },
  { email: "asistente.subgerencia@cablecauca.com", password: "subgerencia123" },
  { email: "sistemas@cablecauca.com", password: "sistemas123*" },
  { email: "retencioncomuneros@cablecauca.com", password: "retencioncomuneros123*" },
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
      if (ruta === "extensiones") renderExtensiones();
      if (ruta === "desarrollos") renderDesarrollos();
      if (ruta === "views-desarrollos") renderVistaDesarrollo();
      if (ruta === "formulario") renderFormularios();
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
    administrador: "Sandra Balanta",
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
    barrios: [
      "Las ceibas",
      "San Marino",
      "Los pinos",
      "Cali Bella",
      "Alfonso Lopez I",
      "Fepicol",
      "Las veraneras",
    ],
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
    nombre: "Oficina Villa Nueva",
    direccion: "CL 50 28G 68 - 12 de Octubre",
    ciudad: "Cali",
    departamento: "Valle del cauca",
    administrador: "Diana Carolina Dorado Guauña",
    pbx: "1117",
    telefono: "3103760868",
    barrios: [
      "12 de Octubre",
      "Villa del Sur",
      "Idenpendecia",
      "Conquistadores",
      "Eduerdado Santos",
      "Paraiso",
      "Paraiso",
      "Gran Colombia",
      "Yira Castro",
      "Rodeo",
      "Asturias",
      "Bello Horizonte",
      "San pedro",
    ],
    planes: [
      { nombre: "100 megas", precio: "$50.000" },
      { nombre: "300 megas", precio: "$70.000" },
      { nombre: "600 megas", precio: "$95.000" },
    ],
    puntosRecaudo: [
      { nombre: "Drogueria VJ", direccion: "- Dg 30 31 23 San Pedro Claver" },
    ],
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
    administrador: "Alejandra Giraldo",
    pbx: "1127",
    telefono: "3126436349",
    barrios: [
      "Puertas del sol",
      "Decepaz (Liderez Decepaz, Remansos De comfandi, Ciudadela del Rio, Manantial, Compartir)",
      "Manuela Beltran",
      "Invicali",
      "Torres de Rio Cauca",
      "Centro Comercial Rio Cauca",
    ],
    planes: [
      { nombre: "100 megas", precio: "$50.000" },
      { nombre: "300 megas", precio: "$70.000" },
      { nombre: "600 megas", precio: "$95.000" },
    ],
    puntosRecaudo: [
      { nombre: "Ferreteria Multicenter", direccion: "- CL 112 26B1 05" },
      { nombre: "Peluqueria Marizolany", direccion: "- CL 123 26H2 19" },
      { nombre: "Efecty decepaz", direccion: "- CL 120F 22 14" },
      { nombre: "Zona Cell", direccion: "- CR 26D 94 122" },
      { nombre: "Punto de pago Decepaz", direccion: "- CL 120I 22 49" },
      {
        nombre: "Punto de pago Puertas del sol",
        direccion: "- CL 96A 26B1 101",
      },
    ],

    personalAdicional: [
      {
        nombre: "Jhan Paul Sarria",
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
    barrios: [
      "Bonilla Aragon",
      "Laureano Gomez",
      "Comuneros I",
      "Mojica",
      "Pilar Tairona",
      "Unidad Portal del Parque",
    ],
    planes: [
      { nombre: "50 megas", precio: "$40.000 Migracion de TV" },
      { nombre: "100 megas", precio: "$50.000" },
      { nombre: "300 megas", precio: "$70.000" },
      { nombre: "600 megas", precio: "$95.000" },
    ],
    puntosRecaudo: [
      { nombre: "Drogueria Nuevo Latir", direccion: "- CR 28D 80 16" },
      { nombre: "Servientrega Laureano Gomez", direccion: "- CL 32A 50 13" },
      { nombre: "Efecty Mojica", direccion: "- CL 72z1 28e6 81" },
      { nombre: "Punto de pago Bonilla", direccion: "- CL 92 28 11" },
      {
        nombre: " Segundo Punto de pago Bonilla ",
        direccion: "- CR 26P5 87 67",
      },
    ],

    personalAdicional: [
      {
        nombre: "Brush Zapata",
        cargo: "Retencion",
        pbx: "1212",
        telefono: "3178899837",
      },
      {
        nombre: "Ana Yibe Fontal",
        cargo: "Caja",
        pbx: "1116",
        telefono: "NO",
      },
    ],
  },
  {
    nombre: "Oficina Marroquin",
    direccion: "CR 26M2 87 04 - Marroquin 1",
    ciudad: "Cali",
    departamento: "Valle del cauca",
    administrador: "Leidy Johana Ospina",
    pbx: "1136",
    telefono: "3122421002",
    barrios: ["Marroquin 1", "Marroquin 2", "Alirio Mora", "Los Naranjos"],
    planes: [
      { nombre: "100 megas", precio: "$50.000" },
      { nombre: "300 megas", precio: "$70.000" },
      { nombre: "600 megas", precio: "$95.000" },
    ],
    puntosRecaudo: [
      { nombre: "Punto de pago Alirio Mora", direccion: "- CL 76 26B1 26" },
      { nombre: "Miscelanea la 74", direccion: "- CR 75B 26A 28" },
      {
        nombre: "Punto de pago Puertas del sol",
        direccion: "- CL 96A 26B1 101",
      },
      { nombre: "Punto de pago Marroquin 2", direccion: "- CR 26G9 73 39" },
      { nombre: "Punto de pago Marroquin 1", direccion: "- CR 25P5 87 67" },
    ],

    personalAdicional: [
      {
        nombre: "Maira Hernandez",
        cargo: "Retencion, caja",
        pbx: "1105",
        telefono: "3128655642",
      },
    ],
  },
  {
    nombre: "Oficina Chorros",
    direccion: "CL 1 BIS OESTE 73D 85B - Mario Correa ",
    ciudad: "Cali",
    departamento: "Valle del cauca",
    administrador: "Sharon Fuentes",
    pbx: "1110",
    telefono: "3182838808",
    barrios: [
      "Mario Correa",
      "Chorros",
      "Louders",
      "Prados del Sur",
      "La marranera",
      "Golositos",
      "Alto Napoles",
    ],
    planes: [
      { nombre: "100 megas", precio: "$50.000" },
      { nombre: "300 megas", precio: "$70.000" },
      { nombre: "600 megas", precio: "$95.000" },
    ],
    puntosRecaudo: [
      { nombre: "Sala de internet Marlin", direccion: "- CL 3C OESTE 90 15" },
      { nombre: "Miscelanea Raquel", direccion: "- CR 94A 1 60" },
    ],

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
    nombre: "Oficina Montebello",
    direccion: "CL 12 OESTE 42 12 - Centro Montebello ",
    ciudad: "Cali",
    departamento: "Valle del cauca",
    administrador: "Jhoiner Arturo Barbosa Otalvaro",
    pbx: "1211",
    telefono: "3147773428",
    barrios: ["Montebello"],
    planes: [
      { nombre: "100 megas", precio: "$50.000" },
      { nombre: "300 megas", precio: "$70.000" },
      { nombre: "600 megas", precio: "$95.000" },
    ],
    puntosRecaudo: [
      { nombre: "Tienda Kary", direccion: "- AV 47 OESTE 9A 112" },
      { nombre: "Tienda Luz Mery", direccion: "- CL 4 OESTE 43A 07" },
      { nombre: "Parasol Rojo", direccion: "- CL 12 OESTE 36 42" },
    ],

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
    nombre: "Oficina Siloe",
    direccion: "CL 1 OESTE 52 370 - Belisario Siloe ",
    ciudad: "Cali",
    departamento: "Valle del cauca",
    administrador: "Alejandro Rios",
    pbx: "1111",
    telefono: "3188073456",
    barrios: ["Siloe"],
    planes: [
      { nombre: "20 megas", precio: "$60.000" },
      { nombre: "TV", precio: "$30.000" },
    ],
    puntosRecaudo: [
      {
        nombre: "Punto de recuado Oliva vivas",
        direccion: "- CL 10 OESTE 50G 27",
      },
      {
        nombre: "Punto de recuado Maitte Silva",
        direccion: "- CL 10 OESTE 49C 40",
      },
      {
        nombre: "Punto de recuado Eimmy muñoz",
        direccion: "- CL 10 OESTE 50 53",
      },
      {
        nombre: "Punto de recuado Monica Valencia",
        direccion: "- CL 14 OESTE 48 68",
      },
      {
        nombre: "Punto de recuado Geidy Martinez",
        direccion: "- CL 13 531 42",
      },
    ],

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
    nombre: "Oficina Cerrito",
    direccion: "CL 6 6 50 - La Estrella ",
    ciudad: "Cerrito",
    departamento: "Valle del cauca",
    administrador: "Angelica Hurtado Silva",
    pbx: "1211",
    telefono: "3215931208",
    barrios: [
      "Nuevo Municipio(HFC)",
      "Nuevo Amanecer(HFC)",
      "El Saman(HFC)",
      "Villa Lina(HFC)",
      "Porvenir(HFC)",
      "La Paz (HFC)",
      "Coincer(HFC)",
      "Los Samanes(HFC)",
      "Villa Del Carmen(HFC)",
      "Asovicons(HFC)",
      "Rincones(HFC)",
      "La Esperanza(HFC)",
      "Pueblito Valluno(HFC)",
      "Prado Valle(HFC)",
      "Las Orquideas(HFC)",
      "Buenos Aires(GPON)",
      "Cincuentenario(GPON)",
      "Lares Del Paraiso(GPON)",
      "La Estrella(GPON)",
      "San Rafael(GPON)",
      "Chapinero(SOLO TV)",
      "Santa Barbara(SOLO TV)",
    ],
    planes: [
      { nombre: "TV + NET 50 MB", precio: "" },
      { nombre: "TV + NET 100 MB", precio: "" },
      { nombre: "TV + NET 200 MB", precio: "" },
      { nombre: "TV + NET 300 MB", precio: "" },
      { nombre: "TV + NET 20 MB HFC", precio: "" },
    ],
    puntosRecaudo: [
      {
        nombre: "Punto de recuado Jose Rodrigo Garcia",
        direccion: "- CL 9 13 65",
      },
    ],

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
    nombre: "Oficina Andalucia",
    direccion: "CL 12 5 49 - Centro",
    ciudad: "Andalucia",
    departamento: "Valle del cauca",
    administrador: "Maria José Arias Hernández Acevedo",
    pbx: "1215",
    telefono: "3154106483",
    barrios: [
      "Alianza",
      "Altamira",
      "Centenario",
      "Centro",
      "Colinas",
      "Estacion",
      "Floresta 1",
      "Floresta 2",
      "Paraiso",
      "Reubicacion",
      "Sol y luna",
      "Retorno",
    ],
    planes: [
      { nombre: "20 megas", precio: "$40.000" },
      { nombre: "TV", precio: "$30.000" },
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
    nombre: "Oficina Tulua",
    direccion: "TVSAL 12 25B 56 - Bolivar ",
    ciudad: "Tulua",
    departamento: "Valle del cauca",
    administrador: "Maria del Carmen Morales ",
    pbx: "1207",
    telefono: "3169621818 - 3169043288",
    barrios: [
      "Saman (TV HFC)",
      "Portales del rio (TV HFC)",
      "Alameda 1 (TV HFC)",
      "Alameda 2 (TV HFC)",
      "Palmar (TV HFC)",
      "Internacional (TV HFC)",
      "Villa colombia (TV HFC)",
      "Municipal (TV HFC)",
      "Bosquesito (TV HFC)",
      "Jorge eliecer gaitan (TV HFC)",
      "Chimangos (TV HFC)",
      "Bello horizonte (TV HFC)",
      "Refugio (TV HFC)",
      "Diablos rojos (TV HFC)",
      "Flor de la campana (TV HFC)",
      "La esperanza (TV HFC)",
      "Las delicias (TV HFC)",
      "La ceiba (TV HFC)",
      "Rojas (TV HFC)",
      "Ruben cruz (TV HFC)",
      "Los olmos (TV HFC)",
      "Playas (TV HFC)",
      "Graciela (TV HFC)",
      "El jardin (TV HFC)",
      "Maracaibo (TV HFC)",
      "Siete de agosto (TV HFC)",
      "Sintra sancarlos (TV HFC)",
      "Portales de rio paila (TV HFC)",
      "Santa ines (TV HFC)",
      "Guayacanes (TV HFC)",
      "San luis (TV HFC)",
      "Estambul (TV HFC)",
      "Farfan (TV HFC)",
      "Nuevo farfan (TV HFC)",
      "Asoagrin (TV HFC)",
      "Limonar (TV HFC)",
      "San arino (TV HFC)",
      "Laures 1 (TV HFC)",
      "Laureles 2 (TV HFC)",
      "Villa del lago (TV HFC)",
      "La nieves (TV HFC)",
      "Veraneras (TV HFC)",
      "Popular (TV HFC)",
      "Villanueva (TV HFC)",
      "Santarita et2 (TV HFC)",
      "Moralito (TV HFC)",
      "Bosque de maracaibo (NET + TV HFC)",
      "Tercer milenio (NET + TV HFC)",
      "El bosque (NET + TV HFC)",
      "La cruz (NET + TV HFC)",
      "Av cali (NET + TV HFC)",
      "Salecianos (NET + TV HFC)",
      "La bastilla (NET + TV HFC)",
    ],
    planes: [
      { nombre: "20 megas", precio: "$40.000" },
      { nombre: "TV", precio: "$30.000" },
    ],
    puntosRecaudo: [
      { nombre: "Punto de pago Diego Cell", direccion: "CL 13 49 20" },
      { nombre: "Carlos Evandro Vanegas", direccion: "CL 12 A 28B 72" },
    ],

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
    nombre: "Oficina Tarqui",
    direccion: "CL 3 5 61 LOCAL 2 - Antonio Ricaute",
    ciudad: "Tarqui",
    departamento: "Valle del cauca",
    administrador: "Claudia Patricia Jaramillo Montoya",
    pbx: "1104",
    telefono: "3204564217",
    barrios: [
      "Villas del canadá (TV HFC)",
      "Manuel de jesús (TV HFC)",
      "Villa magdalena (TV HFC)",
      "San antonio (TV HFC)",
      "Villa del rio (TV HFC)",
      "Antonio ricaute (TV HFC)",
      "Centro (TV HFC)",
      "La veguita (TV HFC)",
      "Vereda san joaquín (TV HFC)",
      "La loma (TV HFC)",
      "La bodega (TV HFC)",
      "Villa aurora (TV HFC)",
      "Ciudadela otoniel rojas correa (TV HFC)",
      "Hato nuevo (TV HFC)",
      "Minuto de dios (TV HFC)",
      "Portal del sur (TV HFC)",
      "Portal del sur 2da etapa (TV HFC)",
      "El estadio (TV HFC)",
      "El jardín (TV HFC)",
      "Circunvalar (TV HFC)",
      "Las brisas (TV HFC)",
      "Las brisas 2da etapa (TV HFC)",
      "Llano del hato o san josé obrero (TV HFC)",
      "Circunvalar (TV HFC)",
      "San joaquin (TV HFC)",
      "Villas del canada (NET + TV HFC)",
      "Antonio ricaute (NET + TV HFC)",
      "Las brisas (NET + TV HFC)",
      "Centro (NET + TV HFC)",
      "La loma (NET + TV HFC)",
      "Villa aurora (NET + TV HFC)",
      "Hato nuevo (NET + TV HFC)",
      "Minuto de dios (NET + TV HFC)",
      "Portal del sur 2 etapa (NET + TV HFC)",
    ],
    planes: [
      { nombre: "20 megas", precio: "$50.000" },
      { nombre: "TV", precio: "$30.000" },
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
    nombre: "Oficina Florida",
    direccion: "CL 9 16 74 - Florida",
    ciudad: "Florida",
    departamento: "Valle del cauca",
    administrador: "Maylhen Melo",
    pbx: "1107",
    telefono: "3188139581-3207591526",
    barrios: ["Florida"],
    planes: [
      { nombre: "100 megas", precio: "$50.000" },
      { nombre: "300 megas", precio: "$70.000" },
      { nombre: "600 megas", precio: "$95.000" },
    ],
    puntosRecaudo: [
      {
        nombre: "Tu amigo comunicaciones",
        direccion: "- CL 10 12 33 San antonio",
      },
      { nombre: "Aqui es eliza irleym", direccion: "- CR 13 7 37 La cabaña" },
      { nombre: "Miscelanea@tramites", direccion: "- CL 9 21 44 La esperanza" },
      { nombre: "Multiservicios", direccion: "- CR 14 5 04 La cabaña" },
      { nombre: "Variedades pao", direccion: "- CR 20 13 34 San jorge" },
      { nombre: "Autoservicio ja en la 10", direccion: "- CL 10 3 64" },
      { nombre: "Tienda llanito", direccion: "- Llanito" },
    ],

    personalAdicional: [
      {
        nombre: "Lizeth Johanna",
        cargo: "Retencion",
        pbx: "1118",
        telefono: "NO",
      },
      {
        nombre: "Cintya Cuaran",
        cargo: "Caja",
        pbx: "NO",
        telefono: "NO",
      },
      {
        nombre: "Sebastian Prada",
        cargo: "Cartera",
        pbx: "1114",
        telefono: "NO",
      },
    ],
  },
  {
    nombre: "Oficina Pradera",
    direccion: "CL 6 11 25 - Centro",
    ciudad: "Pradera",
    departamento: "Valle del cauca",
    administrador: "Mayra Alejandra Rivera",
    pbx: "1220",
    telefono: "3218117199",
    barrios: ["Pradera"],
    planes: [
      { nombre: "100 megas", precio: "$50.000" },
      { nombre: "300 megas", precio: "$70.000" },
      { nombre: "600 megas", precio: "$95.000" },
    ],
    puntosRecaudo: [
      {
        nombre: "Papeleria Panda",
        direccion: "- MZ C CS 1 La Lorena",
      },
      { nombre: "Aqui es eliza irleym", direccion: "- CL 10 8 48 San Roque " },
      {
        nombre: "Interrapidisimo - Multiservicios",
        direccion: "- CL 8 13 53 Ant. Ricaute",
      },
    ],

    personalAdicional: [
      {
        nombre: "Jackeline Rondon",
        cargo: "Caja",
        pbx: "1108",
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

  // Render basado en un array (permite pasar versiones filtradas)
  function renderList(list) {
    tbody.innerHTML = "";
    list.forEach((oficina, index) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
      <td>${oficina.nombre}</td>
      <td>${oficina.pbx}</td>
      <td>${oficina.direccion}</td>
      <td>${oficina.administrador}</td>
      <td>
        <button class="view-button" data-index="${oficinasData.indexOf(
          oficina
        )}"> Views </button>
      </td>
    `;
      tbody.appendChild(tr);
    });

    // Attach view listeners
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

  // Función que filtra por texto y ciudad
  function filterAndRender() {
    const text = (document.getElementById("filter-input")?.value || "")
      .toLowerCase()
      .trim();
    const citySelect = document.getElementById("filter-city");
    const city = (citySelect?.value || "Todos").toLowerCase();

    let filtered = oficinasData.filter((o) => {
      const matchesText =
        !text ||
        o.nombre.toLowerCase().includes(text) ||
        o.direccion.toLowerCase().includes(text) ||
        (o.administrador || "").toLowerCase().includes(text) ||
        (o.pbx || "").toLowerCase().includes(text);

      const matchesCity =
        city === "todos" ||
        city === "" ||
        (o.ciudad || "").toLowerCase() === city;

      return matchesText && matchesCity;
    });

    renderList(filtered);
  }

  // Inicial render
  renderList(oficinasData);

  // Añadir listeners a inputs de filtro (si existen)
  const filterInput = document.getElementById("filter-input");
  const filterCity = document.getElementById("filter-city");

  if (filterInput) {
    filterInput.addEventListener("input", () => {
      filterAndRender();
    });
  }

  if (filterCity) {
    filterCity.addEventListener("change", () => {
      filterAndRender();
    });
  }
}

// ==========================
// Renderizar vista detallada
// ==========================
function renderVistaOficina() {
  const oficina = JSON.parse(localStorage.getItem("oficinaSeleccionada"));
  if (!oficina) return;

  // Nombre de la oficina
  const nombreOficina = document.getElementById("nombre-oficina");
  if (nombreOficina) {
    nombreOficina.textContent = oficina.nombre;
  }

  // Información general
  const infoGeneral = document.getElementById("info-general");
  if (infoGeneral) {
    infoGeneral.innerHTML = `
      <p><strong>Administrador:</strong> ${oficina.administrador}</p>
      <p><strong>PBX:</strong> ${oficina.pbx}</p>
      <p><strong>Teléfono:</strong> ${oficina.telefono}</p>
      <p><strong>Dirección:</strong> ${oficina.direccion}</p>
      <p><strong>Ciudad:</strong> ${oficina.ciudad}</p>
      <p><strong>Departamento:</strong> ${oficina.departamento}</p>
      <p><strong>Barrios:</strong> ${oficina.barrios.join(", ")}</p>
    `;
  }

  // Planes
  const infoPlan = document.getElementById("info-plan");
  if (infoPlan) {
    infoPlan.innerHTML = oficina.planes
      .map((plan) => `<p>${plan.nombre}: ${plan.precio}</p>`)
      .join("");
  }

  // Puntos de recaudo
  const infoPuntos = document.getElementById("info-puntos");
  if (infoPuntos) {
    infoPuntos.innerHTML = oficina.puntosRecaudo
      .map((punto) => `<p>${punto.nombre} ${punto.direccion}</p>`)
      .join("");
  }

  // Información adicional
  const infoAdicional = document.getElementById("info-adicional");
  if (infoAdicional) {
    infoAdicional.innerHTML = oficina.personalAdicional
      .map((persona) => {
        return `
          <div class="persona-adicional">
            <p><strong>Nombre:</strong> ${persona.nombre}</p>
            <p><strong>Cargo:</strong> ${persona.cargo}</p>
            ${persona.pbx ? `<p><strong>PBX:</strong> ${persona.pbx}</p>` : ""}
            ${
              persona.telefono
                ? `<p><strong>Teléfono:</strong> ${persona.telefono}</p>`
                : ""
            }
          </div>
        `;
      })
      .join("");
  }
}
// ==========================
// Datos simulados de extensiones
// ==========================

const pbxData = [
  {
    nombre_personal: "Erika Rivas",
    cargo: "Administrador Oficina Ceibas",
    extension: "1125",
  },
  {
    nombre_personal: "Sandra Balanta",
    cargo: "Administrador Oficina Mariano Ramos",
    extension: "1221",
  },
  {
    nombre_personal: "Diana Carolina Dorado Guauña",
    cargo: "Administrador Oficina Villa Nueva",
    extension: "1117",
  },
  {
    nombre_personal: "Maria Eugenia Diaz",
    cargo: "Administrador Oficina Poblado",
    extension: "1135",
  },
  {
    nombre_personal: "Alejandra Giraldo",
    cargo: "Administrador Oficina Rio Cauca",
    extension: "1127",
  },
  {
    nombre_personal: "Vanessa Villegas G",
    cargo: "Administrador Oficina Cordoba Reservado",
    extension: "1130",
  },

  {
    nombre_personal: "Claudia Vargas",
    cargo: "Administrador Oficina Comuneros",
    extension: "1112",
  },
  {
    nombre_personal: "Brush Zapata",
    cargo: "Retencion Comuneros",
    extension: "1212",
  },
  {
    nombre_personal: "Ana Yibe Fontal",
    cargo: "Caja Comuneros",
    extension: "1116",
  },

  {
    nombre_personal: "Leidy Johana Ospina",
    cargo: "Administrador Oficina Marroquin",
    extension: "1136",
  },
  {
    nombre_personal: "Maira Hernandez",
    cargo: "Retencion y Caja Marroquin",
    extension: "1105",
  },

  {
    nombre_personal: "Sharon Fuentes",
    cargo: "Administrador Oficina Chorros",
    extension: "1110",
  },
  {
    nombre_personal: "Jhoiner Arturo Barbosa Otalvaro",
    cargo: "Administrador Oficina Montebello",
    extension: "1211",
  },
  {
    nombre_personal: "Alejandro Rios",
    cargo: "Administrador Oficina Siloe",
    extension: "1111",
  },
  {
    nombre_personal: "Angelica Hurtado Silva",
    cargo: "Administrador Oficina Cerrito",
    extension: "1211",
  },
  {
    nombre_personal: "Maria José Arias Hernández Acevedo",
    cargo: "Administrador Oficina Andalucia",
    extension: "1215",
  },
  {
    nombre_personal: "Maria del Carmen Morales",
    cargo: "Administrador Oficina Tulua",
    extension: "1207",
  },
  {
    nombre_personal: "Claudia Patricia Jaramillo Montoya",
    cargo: "Administrador Oficina Tarqui",
    extension: "1104",
  },

  {
    nombre_personal: "Maylhen Melo",
    cargo: "Administrador Oficina Florida",
    extension: "1107",
  },
  {
    nombre_personal: "Lizeth Johanna",
    cargo: "Retencion Florida",
    extension: "1118",
  },
  {
    nombre_personal: "Sebastian Prada",
    cargo: "Cartera Florida y Oficinas fuera de cali",
    extension: "1114",
  },

  {
    nombre_personal: "Mayra Alejandra Rivera",
    cargo: "Administrador Oficina Pradera",
    extension: "1220",
  },
  {
    nombre_personal: "Jackeline Rondon",
    cargo: "Caja Pradera",
    extension: "1108",
  },
  {
    nombre_personal: "Nasly Johanna Hernández",
    cargo: "Subgerencia",
    extension: "1102",
  },
  {
    nombre_personal: "Valentina Tamayo Ortega",
    cargo: "Asistente de gerencia",
    extension: "1204",
  },
  {
    nombre_personal: "Katherine Muñoz",
    cargo: "Recursos Humanos",
    extension: "1217",
  },
  {
    nombre_personal: "Anyela Viera",
    cargo: "Almacén - Sistemas",
    extension: "1133",
  },
  {
    nombre_personal: "David Solano",
    cargo: "Proyectos",
    extension: "1126",
  },
  {
    nombre_personal: "Carlos Bejarano",
    cargo: "Portería",
    extension: "1120",
  },
  {
    nombre_personal: "Karina Mariño",
    cargo: "Jefe Cartera",
    extension: "1201",
  },
  {
    nombre_personal: "Valeria Varona",
    cargo: "Auxiliar Cartera",
    extension: "1101",
  },
  {
    nombre_personal: "Luna Mora",
    cargo: "Auxiliar Cartera",
    extension: "1203",
  },
  {
    nombre_personal: "Natalia Valencia",
    cargo: "Contabilidad Telecable",
    extension: "1103",
  },
  {
    nombre_personal: "Monica Marcela Albaran Castaño",
    cargo: "Contabilidad Home tv",
    extension: "1218",
  },
  {
    nombre_personal: "Eliana Erazo",
    cargo: "Contabilidad Telecable",
    extension: "1100",
  },
  {
    nombre_personal: "Lina Marcela",
    cargo: "Contabilidad Cable Cauca",
    extension: "1100",
  },
  {
    nombre_personal: "Pedro Felipe Lopez",
    cargo: "Sistemas - Administrativo",
    extension: "1124",
  },
  {
    nombre_personal: "Sergio Gomez",
    cargo: "Sistemas - Call Center",
    extension: "1119",
  },
  {
    nombre_personal: "Jerson Brand",
    cargo: "Sistemas - Call Center",
    extension: "1301",
  },
  {
    nombre_personal: "Sandra Patricia Escobar",
    cargo: "Sistemas - Call Center",
    extension: "1132",
  },
];

// ==========================
// Renderizar tabla de extensiones
// ==========================

function renderExtensiones() {
  const tbody = document.getElementById("pbx-tbody");
  if (!tbody) return;

  tbody.innerHTML = "";
  pbxData.forEach((extension) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${extension.nombre_personal}</td>
      <td>${extension.cargo}</td>
      <td>${extension.extension}</td>
    `;
    tbody.appendChild(tr);
  });
}
// ==========================
// Datos simulados de desarrollos
// ==========================

const desarrollosData = [
  {
    nombre_desarrollo: "Desarrollo Andres Sanin",
    direccion_desarrollo: "CR 14 74 04 - Andres Sanin",
    ciudad_desarrollo: "Cali",
    departamento_desarrollo: "Valle del cauca",
    Encargado_desarrollo: "Jhon Breyman Loboa Villaquiran",
    telefono_desarrollo: "3153238184",
    barrios_desarrollo: ["Andres Sanin", "Puerto Mallarino"],
    planes_desarrollo: [
      { nombre_plan: "100 Megas", precio_plan: "$75.000" },
      { nombre_plan: "200 Megas", precio_plan: "$85.000" },
    ],
    correo_desarrollo: "telecableandressanin@gmail.com",
  },
  {
    nombre_desarrollo: "Desarrollo Ciudad del Campo",
    direccion_desarrollo: "CL 103 16 122 LOCAL 1 - Ciudad del Campo",
    ciudad_desarrollo: "Cali",  
    departamento_desarrollo: "Valle del cauca",
    Encargado_desarrollo: "Jennifer Cerezo",
    telefono_desarrollo: "3172964236",
    barrios_desarrollo: ["Ciudad del Campo"],
    planes_desarrollo: [
      { nombre_plan: "100 Megas", precio_plan: "$50.000" },
      { nombre_plan: "200 Megas", precio_plan: "$70.000" },
      { nombre_plan: "400 Megas", precio_plan: "$90.000" }
    ],
    correo_desarrollo: "ciudad.campo@cablecauca.com",
  },
  {
    nombre_desarrollo: "Desarrollo Arce Ciudad Cordoba",
    direccion_desarrollo: "CR 46 49 38 - Ciudad Cordoba",
    ciudad_desarrollo: "Cali",  
    departamento_desarrollo: "Valle del cauca",
    Encargado_desarrollo: "Andres Alberto Arce Rojas",
    telefono_desarrollo: "3126829740",
    barrios_desarrollo: ["Ciudad Cordoba"],
    planes_desarrollo: [
      { nombre_plan: "100 Megas", precio_plan: "$50.000" },
      { nombre_plan: "300 Megas", precio_plan: "$70.000" },
      { nombre_plan: "600 Megas", precio_plan: "$95.000" }
    ],
    correo_desarrollo: "arcenet945@gmail.com",
  },
  {
    nombre_desarrollo: "Desarrollo Jorge Herrera",
    direccion_desarrollo: "CL 86 26B 82 - Puertas del Sol 1",
    ciudad_desarrollo: "Cali",  
    departamento_desarrollo: "Valle del cauca",
    Encargado_desarrollo: "Jorge Enrique Herrera Peña",
    telefono_desarrollo: "3137475842",
    barrios_desarrollo: ["Puertas del Sol 1", "San Marcos", "Tercer Milenio", "Ulpiano Lloreda"],
    planes_desarrollo: [
      { nombre_plan: "100 Megas", precio_plan: "$55.000" },
      { nombre_plan: "300 Megas", precio_plan: "$75.000" },
      { nombre_plan: "600 Megas", precio_plan: "$95.000" }
    ],
    correo_desarrollo: "jorge.herrera.jjk@hotmail.com",
  },
  {
    nombre_desarrollo: "Desarrollo Charco Azul",
    direccion_desarrollo: "CL 73 25U 34 - Charco Azul",
    ciudad_desarrollo: "Cali",  
    departamento_desarrollo: "Valle del cauca",
    Encargado_desarrollo: "Andres Julian Cerezo Villaquiran",
    telefono_desarrollo: "3225958868",
    barrios_desarrollo: ["Charco Azul", "Lleras Restrepo", "Sector Vivero", "7 De agosto parcial"],
    planes_desarrollo: [
      { nombre_plan: "50 Megas", precio_plan: "$50.000" },
      { nombre_plan: "100 Megas", precio_plan: "$60.000" },
      { nombre_plan: "200 Megas", precio_plan: "$70.000" },
      { nombre_plan: "300 Megas", precio_plan: "$80.000" }
    ],
    correo_desarrollo: "menar-799@hotmail.com",
  },
  {
    nombre_desarrollo: "Desarrollo Manuela Beltran",
    direccion_desarrollo: "CR 27A 105 150 LOCAL 03 - Manuela Beltran",
    ciudad_desarrollo: "Cali",  
    departamento_desarrollo: "Valle del cauca",
    Encargado_desarrollo: "Cristian Largache",
    telefono_desarrollo: "3158024117",
    barrios_desarrollo: ["Manuela Beltran"],
    planes_desarrollo: [
      { nombre_plan: "50 Megas", precio_plan: "$50.000" },
      { nombre_plan: "100 Megas", precio_plan: "$60.000" },
      { nombre_plan: "200 Megas", precio_plan: "$70.000" },
      { nombre_plan: "300 Megas", precio_plan: "$80.000" }
    ],
    correo_desarrollo: "telecablemanuela@gmail.com",
  },
  {
    nombre_desarrollo: "Desarrollo Potrero Grande",
    direccion_desarrollo: "CR 28D 121 BIS 97 SECTOR 8 ESQUINA - Potrero Grande",
    ciudad_desarrollo: "Cali",  
    departamento_desarrollo: "Valle del cauca",
    Encargado_desarrollo: "Cristian Largache - Olmedo Cerezo",
    telefono_desarrollo: "3157940974",
    barrios_desarrollo: ["Potrero Grande"],
    planes_desarrollo: [
      { nombre_plan: "50 Megas", precio_plan: "$50.000" },
      { nombre_plan: "100 Megas", precio_plan: "$60.000" },
      { nombre_plan: "200 Megas", precio_plan: "$70.000" },
      { nombre_plan: "300 Megas", precio_plan: "$80.000" }
    ],
    correo_desarrollo: "oficinapotrerogrande@gmail.com",
  },
  {
    nombre_desarrollo: "Desarrollo El Retiro",
    direccion_desarrollo: "CL 52 39D 71 - El Retiro",
    ciudad_desarrollo: "Cali",  
    departamento_desarrollo: "Valle del cauca",
    Encargado_desarrollo: "Hermes Noguera",
    telefono_desarrollo: "3002917947",
    barrios_desarrollo: ["El Retiro", "Vallado", "El Valladito"],
    planes_desarrollo: [
      { nombre_plan: "50 Megas", precio_plan: "$50.000" },
      { nombre_plan: "100 Megas", precio_plan: "$60.000" },
      { nombre_plan: "200 Megas", precio_plan: "$70.000" },
      { nombre_plan: "300 Megas", precio_plan: "$80.000" }
    ],
    correo_desarrollo: "retirogpon@gmail.com",  
  },
  {
    nombre_desarrollo: "Desarrollo Villa Luz",
    direccion_desarrollo: "CR 28D1 120A 51 - Pizamos 3",
    ciudad_desarrollo: "Cali",  
    departamento_desarrollo: "Valle del cauca",
    Encargado_desarrollo: "Roberto Carlos Jimenez Alvarez",
    telefono_desarrollo: "3161315052",
    barrios_desarrollo: ["Pizamos 3", "Villa Luz", "Villa Mercado" , "Asentamiento las Vegas y Lideres"],
    planes_desarrollo: [
      { nombre_plan: "50 Megas", precio_plan: "$50.000" },
      { nombre_plan: "100 Megas", precio_plan: "$60.000" },
      { nombre_plan: "300 Megas", precio_plan: "$70.000" }
    ],
    correo_desarrollo: "telecablevillaluz@gmail.com",  
  },
  {
    nombre_desarrollo: "Desarrollo Floralia",
    direccion_desarrollo: "CL 73 3AN 08 - Floralia",
    ciudad_desarrollo: "Cali",  
    departamento_desarrollo: "Valle del cauca",
    Encargado_desarrollo: "Jhonny Cobo",
    telefono_desarrollo: "3178734860",
    barrios_desarrollo: ["Floralia"],
    planes_desarrollo: [
      { nombre_plan: "50 Megas", precio_plan: "$50.000" },
      { nombre_plan: "100 Megas", precio_plan: "$60.000" },
      { nombre_plan: "300 Megas", precio_plan: "$70.000" }
    ],
    correo_desarrollo: "telecablevillaluz@gmail.com",  
  },


];

// ==========================
// Renderizar tabla de desarrollos
// ==========================

function renderDesarrollos() {
  const tbody = document.getElementById("desarrollos-tbody");
  if (!tbody) return;

  function renderListDesarrollos(list) {
    tbody.innerHTML = "";
    list.forEach((desarrollos, index) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
      <td>${desarrollos.nombre_desarrollo}</td>
      <td>${desarrollos.telefono_desarrollo}</td>
      <td>${desarrollos.direccion_desarrollo}</td>
      <td>${desarrollos.Encargado_desarrollo}</td>
      <td>
        <button class="view-button" data-index="${desarrollosData.indexOf(
          desarrollos
        )}"> Views </button>
      </td>
    `;
      tbody.appendChild(tr);
    });
    document.querySelectorAll(".view-button").forEach((button) => {
      button.addEventListener("click", (e) => {
        const index = e.target.dataset.index;
        const desarrolloSeleccionado = desarrollosData[index];
        localStorage.setItem(
          "desarrolloSeleccionado",
          JSON.stringify(desarrolloSeleccionado)
        );
        location.hash = "views-desarrollos";
      });
    });
  }

  // Función que filtra por texto
  function filterAndRenderDesarrollos() {
    const text = (
      document.getElementById("filter-input-desarrollos")?.value || ""
    )
      .toLowerCase()
      .trim();
    let filtered = desarrollosData.filter((d) => {
      const matchesText =
        !text ||
        d.nombre_desarrollo.toLowerCase().includes(text) ||
        d.direccion_desarrollo.toLowerCase().includes(text) ||
        (d.Encargado_desarrollo || "").toLowerCase().includes(text) ||
        (d.telefono_desarrollo || "").toLowerCase().includes(text);
      return matchesText;
    });
    renderListDesarrollos(filtered);
  }
  // Inicial render
  renderListDesarrollos(desarrollosData);

  // Añadir listeners a inputs de filtro (si existen)
  const filterInputDesarrollos = document.getElementById(
    "filter-input-desarrollos"
  );
  if (filterInputDesarrollos) {
    filterInputDesarrollos.addEventListener("input", () => {
      filterAndRenderDesarrollos();
    });
  }
}
// ==========================
// Renderizar vista detallada de desarrollos
// ==========================

function renderVistaDesarrollo() {
  const desarrollo = JSON.parse(localStorage.getItem("desarrolloSeleccionado"));
  if (!desarrollo) return;

  // Nombre del desarrollo
  const nombreDesarrollo = document.getElementById("nombre-desarrollo");
  if (nombreDesarrollo) {
    nombreDesarrollo.textContent = desarrollo.nombre_desarrollo;
  }

  // Información general
  const infoGeneralDesarrollo = document.getElementById(
    "info-general-desarrollo"
  );
  if (infoGeneralDesarrollo) {
    infoGeneralDesarrollo.innerHTML = `
      <p><strong>Encargado:</strong> ${desarrollo.Encargado_desarrollo}</p>
      <p><strong>Teléfono:</strong> ${desarrollo.telefono_desarrollo}</p>
      <p><strong>Dirección:</strong> ${desarrollo.direccion_desarrollo}</p>
      <p><strong>Ciudad:</strong> ${desarrollo.ciudad_desarrollo}</p>
      <p><strong>Departamento:</strong> ${
        desarrollo.departamento_desarrollo
      }</p>
      <p><strong>Barrios:</strong> ${desarrollo.barrios_desarrollo.join(
        ", "
      )}</p>
    `;
  }
  // Planes
  // The template uses id="info-plan-desarrollo" for the container, so select that.
  const infoPlanesDesarrollo = document.getElementById("info-plan-desarrollo");
  if (infoPlanesDesarrollo) {
    infoPlanesDesarrollo.innerHTML = desarrollo.planes_desarrollo
      .map((plan) => `<p>${plan.nombre_plan}: ${plan.precio_plan}</p>`)
      .join("");
  }

  //correo
  const infoCorreoDesarrollo = document.getElementById(
    "info-correo-desarrollo"
  );
  if (infoCorreoDesarrollo) {
    infoCorreoDesarrollo.innerHTML = `
      <p><strong>Correo:</strong> ${desarrollo.correo_desarrollo}</p>
    `;
  }
}
// ==========================
// Datos simulados de formularios
// ==========================

const formulariosData = [
  {
    nombre_formulario: "Formulario de ventas Comuneros",
    enlace_formulario:
      "https://docs.google.com/forms/d/e/1FAIpQLSdVANncsap2oOAAaN86OD_zlejuOY1n5VN5739H5Qqpbq1Png/viewform",
  },
  {
    nombre_formulario: "Formulario de ventas Rio Cauca",
    enlace_formulario:
      "https://docs.google.com/forms/d/e/1FAIpQLScbDDd-6MJbAVd4S9MFLWsoZhJfa2W1Rc6ZRIQWf8bImoT7aQ/viewform",
  },
  {
    nombre_formulario: "Formulario de ventas Marroquin",
    enlace_formulario:
      "https://docs.google.com/forms/d/e/1FAIpQLScbb4OK4tuKYc7B_EW1nK3vPYTTqqEZVTmAWSww2n0FvXtNew/viewform",
  },
  {
    nombre_formulario: "Formulario de ventas Ceibas",
    enlace_formulario:
      "https://docs.google.com/forms/d/e/1FAIpQLSetAURPhFQnpJWg8fbU894ZeVvGUmOXmDbhaazeSOS_kPBSkQ/viewform",
  },
  {
    nombre_formulario: "Formulario de ventas Cordoba Reservado - Antonio Nariño",
    enlace_formulario:
      "https://docs.google.com/forms/d/e/1FAIpQLSc6FRvX9jXrpmh8HOzUUcR9h3pqjAVVi0iAMLgLb1nsckM2zA/viewform",
  },
  {
    nombre_formulario: "Formulario de ventas Poblado",
    enlace_formulario:
      "https://docs.google.com/forms/d/e/1FAIpQLSdczG_eYkGnkVQeAbD6yqEayA1xf6J06_DrETVwKx8fM7Vryg/viewform",
  },
  {
    nombre_formulario: "Formulario de ventas Villa Nueva",
    enlace_formulario:
      "https://docs.google.com/forms/d/e/1FAIpQLSfOjhU9_vcKWzg6hWCxvBr1T8Kldp9Ar8xXO1Wzq97I3ZrPvQ/viewform",
  },
  {
    nombre_formulario: "Formulario de ventas Chorros - Melendez",
    enlace_formulario:
      "https://docs.google.com/forms/d/e/1FAIpQLSf9s2z5CNpdAeyZJYi4av827rYU8VXz6iSPc8fT_DjGZmciMQ/viewform",
  },
  {
    nombre_formulario: "Formulario de ventas Montebello",
    enlace_formulario:
      "https://docs.google.com/forms/d/e/1FAIpQLSflyRoGp8ZViYMdMV8cMGNiRpSybZ2lBChPY5j95tYDXYvYug/viewform",
  },
  {
    nombre_formulario: "Formulario de ventas Siloe",
    enlace_formulario:
      "https://docs.google.com/forms/d/e/1FAIpQLSeVv5Xct_WuQUPXkaXAZjFolJuwLCw4JIP0b7XPRXtW8VCNpw/viewform",
  },
  {
    nombre_formulario: "Formulario de ventas Florida",
    enlace_formulario:
      "https://docs.google.com/forms/d/e/1FAIpQLSdDsypy6ANvhb7f_leAsGVK_VNIX9v3mNtvBOCGhJF0TuBKEw/viewform",
  },
  {
    nombre_formulario: "Formulario de ventas Pradera",
    enlace_formulario:
      "https://docs.google.com/forms/d/e/1FAIpQLSdytMnOmKLFoNpFUk-dnFwozxw4TbGzVGwcOjjXSpDs4Wctbw/viewform",
  },
  {
    nombre_formulario: "Formulario de ventas Tulua - Andalucia - Cerrito",
    enlace_formulario:
      "https://docs.google.com/forms/d/e/1FAIpQLSf5cR6dwwfNPxNdOHqwvZgTLWCESaaLspF5aNDX8qnlPlDRYg/viewform",
  },
  {
    nombre_formulario: "Formulario de ventas Tarqui - Huila - Altamira",
    enlace_formulario:
      "https://docs.google.com/forms/d/e/1FAIpQLSfwvswIcLy8qZSX8qw32D1p5yTgUwsXXbj4Gr-VKi8BvZfPmQ/viewform",
  }
  
];

function renderFormularios() {
  const tbody = document.getElementById("formularios-tbody");
  if (!tbody) return;

  tbody.innerHTML = "";
  formulariosData.forEach((formulario) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${formulario.nombre_formulario}</td>
      <td><a class="btn-primary" href="${formulario.enlace_formulario}" target="_blank" rel="noopener noreferrer">Abrir Formulario</a></td>
    `;
    tbody.appendChild(tr);
  });
}



// ==========================
// Función para cerrar sesión
// ==========================
