$( document ).ready(function() {
    inicio();
});
function inicio(){
    document.querySelector('body').style.overflow="hidden";
    var landing = document.querySelector('#landing');
    var portafolio = document.querySelector('#portafolio');
    var bg = document.querySelector('.background');
    document.querySelector('.navbar').classList.remove('navbar-light');
    document.querySelector('.navbar').classList.add('navbar-dark');
    landing.classList.add('animate__animated', 'animate__fadeInDown'); 
    document.getElementById("nav_inicio").classList.add('active');
    document.getElementById("nav_portafolio").classList.remove('active');
    portafolio.style.display="none";
    landing.style.display="block";
    bg.style.display="block";
}

function irAPortafolio(){
    var portafolio = document.querySelector('#portafolio');
    portafolio.classList.add('animate__animated', 'animate__slideInUp');
    portafolio.style.display="block";
    /*Cambiar de color el navbar*/
    document.querySelector('.navbar').classList.remove('navbar-dark');
    document.querySelector('.navbar').classList.add('navbar-light');
    /*Cambiar de color el navbar*/
    /*Cambiar el item seleccionado en el navbar*/
    document.getElementById("nav_portafolio").classList.add('active');
    document.getElementById("nav_inicio").classList.remove('active');
    /*Cambiar el item seleccionado en el navbar*/
    document.querySelector('body').style.overflow="auto"; //Mostrar el scroll
    document.querySelector('#landing').style.display= "none";
    document.querySelector('.background').style.display= "none";
}

$("#portafolio div ul li").click(
    function(e){
        cards(e.target.id);
    }
);

/* JSON PROYECTOS */
let data = [
    {
        id: "1",
        titulo: "Auxcar",
        tipo: "_2",
        imgportada: "img/web/auxcar/inicio.png",
        description: `Sistema responsive de asistencia vehicular con base de datos en MySql. Frontend desarrollado con React y backend con Node.js
        El sistema incluye: <br>
        -Vistas cliente: Registro de incidencias vehiculares. <br> -Vistas admin: Gestión de usuarios, distritos, fallas vehiculares y solicitudes de auxilio.
        `,
        imggallery: ["img/web/auxcar/producto-gif.gif","img/web/auxcar/inicio.png","img/web/auxcar/ubicacion.png","img/web/auxcar/auxilio.png","img/web/auxcar/reporte.png","img/web/auxcar/asistencia.png","img/web/auxcar/vistas-movil.png"],
        tags: ["JavaScript","React", "NodeJs", "MySql", "Express", "API REST"],
    },
    {
        id: "2",
        titulo: "Web estática",
        tipo: "_2",
        imgportada: "img/web/lacteos/inicio.png",
        description: `Web estática informativa.`,
        imggallery: ["img/web/lacteos/lacteos.gif","img/web/lacteos/inicio.png"],
        tags: ["HTML", "CSS", "JavaScript"],
    },
    {
        id: "3",
        titulo: "TutoChooser",
        tipo: "_2",
        imgportada: "img/web/TutoChooser/inicio.png",
        description: `Web para ofrecer servicios de tutor o solicitarlos. Realizado con tecnologías php, html, jquery y javascript con base de datos en MySql. Validaciones con captcha para registro e inicio de sesión. Este sistema permite a los usuarios registrar peticiones para tutores o publicaciones para ofrecer servicios de tutor.`,
        imggallery: ["img/web/TutoChooser/landing.gif","img/web/TutoChooser/perfil.gif","img/web/TutoChooser/inicio.png","img/web/TutoChooser/busqueda.jpg","img/web/TutoChooser/registro.png","img/web/TutoChooser/inicio_sesion.png","img/web/TutoChooser/profile.png"],
        tags: ["JavaScript","MySql","jQuery", "AJAX","PHP","HTML","CSS"],
    },
    {
        id: "4",
        titulo: "Kardex",
        tipo: "_3",
        imgportada: "img/escritorio/kardex/inicio.png",
        description: `Sistema de escritorio para un almacén con uso de método UEPS (último en entrar, primero en salir) desarrollado con C# y base de datos en SQL.
        El sistema incluye los módulos: <br>
        -Productos (gestión de productos). <br>
        -Almacén (listado de productos en almacén). <br>
        -Movimientos (registro de entradas y salidas de productos). <br>
        -Utilidad bruta (Ventas y utilidades). <br>
        -Otros gastos (registro de otros  ingresos y egresos). <br>
        -Utilidades y pérdidas.
        `,
        imggallery: ["img/escritorio/kardex/inicio.png","img/escritorio/kardex/2.png","img/escritorio/kardex/3.png","img/escritorio/kardex/4.png","img/escritorio/kardex/5.png","img/escritorio/kardex/6.png"],
        tags: ["C#","SQL"],
    },
    {
        id: "5",
        titulo: "MarcIlustra",
        tipo: "_3",
        imgportada: "img/escritorio/marcilustra/inicio.png",
        description: `Sistema de escritorio desarrollado con VB.NET con base de datos en SQL y uso de CrystalReport para el reporte de ventas. 
        Incluye los módulos: <br>
        -Usuarios (gestión de usuarios). <br>
        -Mantenimiento (gestión de vendedores, categorías y producto). <br>
        -Ventas (gestión de clientes, registro de ventas y consulta de historial de ventas con sus respectivos detalles).<br>
        -Reporte (reportes de ventas).<br>
        `,
        imggallery: ["img/escritorio/marcilustra/inicio.png","img/escritorio/marcilustra/admin_usuario.png","img/escritorio/marcilustra/admin_usuario.png","img/escritorio/marcilustra/actualizar_clave.png","img/escritorio/marcilustra/mantenimiento_vendedor.png","img/escritorio/marcilustra/mantenimiento_categoria.png","img/escritorio/marcilustra/mantenimiento_producto.png","img/escritorio/marcilustra/ventas_cliente.png","img/escritorio/marcilustra/venta.png","img/escritorio/marcilustra/venta_consulta.png","img/escritorio/marcilustra/reporte_ventas.png"
    ],
        tags: ["VB.NET","SQL","CrystalReport"],
    },
    {
        id: "6",
        titulo: "Kaypi",
        tipo: "_4",
        imgportada: "img/movil/kaypi/inicio.jpg",
        description: `App híbrida creada con html y php; y compilada dentro de un contenedor en android.<br>
        Esta app hace uso de los siguientes servicios de firebase: <br>
        -Notificaciones android con firebase Cloud Messaging.<br>
        -Autenticación para el inicio de sesión con Firebase Authentication. <br>
        -Registro de productos almacenados en Firebase Realtime Database.
        `,
        imggallery: ["img/movil/kaypi/inicio.jpg","img/movil/kaypi/autenticacion_google.jpg","img/movil/kaypi/autenticacion_correo.png","img/movil/kaypi/lista.jpg","img/movil/kaypi/registro.jpg",,"img/movil/kaypi/notificacion.jpg"],
        tags: ["Firebase","NoSql","JSON","HTML","PHP"],
    },
    {
        id: "7",
        titulo: "Consesionaria autos",
        tipo: "_4",
        imgportada: "img/movil/concesionaria_autos/lista.jpg",
        description: `Aplicación nativa de registro y listado de autos para android con persistencia de datos en SQLite.`,
        imggallery: ["img/movil/concesionaria_autos/app_bar.jpg","img/movil/concesionaria_autos/lista.jpg","img/movil/concesionaria_autos/registro.jpg"],
        tags: ["SQLite","Android","Java"],
    },
    {
        id: "8",
        titulo: "App de abarrotes",
        tipo: "_4",
        imgportada: "img/movil/productos_agregar_editar/lista.jpg",
        description: `Aplicación nativa android de registro de pedidos. <br>
        Esta app hace uso de web services desarrolladas en php con autenticación JWT y consumidas en java android para el registro.
        `,
        imggallery: ["img/movil/productos_agregar_editar/inicio.gif","img/movil/productos_agregar_editar/sesion.jpg","img/movil/productos_agregar_editar/app_bar.jpg","img/movil/productos_agregar_editar/lista.jpg","img/movil/productos_agregar_editar/pedido.jpg"],
        tags: ["Web services","Android","Java","PHP","JSON Web Token"],
    },
    {
        id: "9",
        titulo: "Gestión de horarios",
        tipo: "_3",
        imgportada: "img/escritorio/horario_docentes/gestion_horario.png",
        description: `Aplicacion de escritorio para la gestión de docentes y gestión de horario de docentes en distintos años académicos.
        Esta aplicación fue desarrollada con Java y base de datos en Postgresql. Permite la generación de reportes con jasperReports`,
        imggallery: ["img/escritorio/horario_docentes/gestion_docente.png","img/escritorio/horario_docentes/busqueda.png","img/escritorio/horario_docentes/horario_docente.png","img/escritorio/horario_docentes/imprimir_horario.png",,"img/escritorio/horario_docentes/gestion_horario.png",,"img/escritorio/horario_docentes/asignacion_cursos.png",,"img/escritorio/horario_docentes/horario_grado.png"],
        tags: ["Java","Postgresql","JasperReports"],
    }
];

/* CARDS */
function cards(tipo) {
    document.getElementById("cards-container").innerHTML = `
    ${data
        .filter(a=> tipo == "_1" ? a.tipo!=tipo : a.tipo==tipo )
        .map((project) => `<div class="col mb-4">
            <div class="card">
                <div class="card-image">
                    <img src="${project.imgportada}" class="card-img" alt="...">
                    <a class="overlay" href="#" id="${project.id}">
                        <div class="text">
                            <h4>${project.titulo}</h4>
                            <p class="lead">${project.description}</p>
                        </div>
                    </a>
                </div>
                <div class="card-body text-center">
                    <h5 class="card-title">${project.tipo == "_2" ? "Desarrollo web" : project.tipo == "_3" ? "Desarrollo de escritorio" : "Desarrollo móvil"}</h5>
                    ${project.tags.map((tag) => `<span class="badge badge-pill badge-primary mb-1">${tag}</span>`).join(" ")}
                </div>
                </div>
            </div>`)
        .join("")}`;

        /*ABRIR MODAL*/
        $(".card-image a").click(
            function(e){
                var project_clicked = data.find(a=>a.id==e.currentTarget.id);
                document.querySelector('.titulo-detalle').innerHTML= `
                ${project_clicked.titulo} <small class="text-muted">${project_clicked.tipo == "_2" ? "Desarrollo web" : project_clicked.tipo == "_3" ? "Desarrollo de escritorio" : "Desarrollo móvil"}</small> `;
                document.querySelector('.description-detalle').innerHTML=project_clicked.description;
                document.querySelector('.carousel-inner').innerHTML="";
                document.querySelector('.carousel-indicators').innerHTML=""; 
                project_clicked.imggallery.map((src,index)=>{
                document.querySelector('.carousel-inner').innerHTML +=`
                    <div class="carousel-item ${index==0 ? "active" : ""}">
                        <img src="${src}" class="w-100 carousel-img" style="object-fit: contain" alt="${src}">
                    </div>`;
                document.querySelector('.carousel-indicators').innerHTML +=
                    `<li data-target="#carousel" data-slide-to="${index}"  ${index==0 ? "class='active'" : ""}></li>`;
                });

                document.querySelector('.tags-detalle').innerHTML = project_clicked.tags.map(tag=>
               `<span class="badge badge-pill badge-primary mb-1">${tag}</span> `
                ).join("");
                $('#more_info').modal('toggle');
            }
        );
}
cards("_1");

