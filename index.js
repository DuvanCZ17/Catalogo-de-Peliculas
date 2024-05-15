//Arreglo de peliculas 
const peliculas = [
    {
        id: 1,
        titulo: "Godzilla X Kong: El nuevo Imperio",
        director: "Adam Wingard",
        genero: "Ciencia Ficcion",
        duracion: "1h 55m",
        año: 2024,
        sinopsis: "Godzilla y Kong, dos de las fuerzas más sobrehumanas del planeta, se enfrentan cuerpo a cuerpo en una lucha única que sacude los cimientos de la humanidad.",
        image: "GxK/GxK_Portada.png"
    },
    {
        id: 2,
        titulo: "Kung Fu Panda 4",
        director: "Mike Mitchell",
        genero: "Animacion",
        duracion:"1h 34m" ,
        año: 2024,
        sinopsis: "Después de tres aventuras en donde desafió a la muerte y derrotó a grandes villanos con su inigualable valentía, el destino llama a Po, siendo el elegido para ser el líder espiritual del Valle de la Paz.",
        image: "KungFu/KunguFuPortada.jpg"
    },
    {
        id: 3,
        titulo: "Spider Man Across the Spider Verse",
        director: " Phil Lord, Christopher Miller, Amy Pascal, Avi Arad, Christina Steinberg",
        genero: "Animacion, Pelicula de Superheroes",
        duracion:"2h 20m" ,
        año: 2023,
        sinopsis: "Después de reunirse con Gwen Stacy, el amigable vecino de tiempo completo de Brooklyn Spiderman, es lanzado a través del multiverso, donde se encuentra a un equipo de gente araña encomendada con proteger su mera existencia..",
        image: "SpiderMan/SpiderManPortada.jpg"
    },
    {
        id: 4,
        titulo: "Ghostbusters: frozen empire",
        director: "Gil Kenan",
        genero: "Ciencia Ficcion",
        duracion:"1h 56m" ,
        año: 2024,
        sinopsis: "La familia Spengler regresa a la famosa estación de bomberos de la ciudad de Nueva York con los cazafantasmas originales. Cuando un antiguo artefacto desata una fuerza maligna, los cazafantasmas nuevos y antiguos deben unirse para proteger el mundo.",
        image: "GhostBusters/GhostBustersPortada.jpg"
    },
    {
        id: 5,
        titulo: "Oppenheimer",
        director: "Christopher Nolan",
        genero: "Pieza de Epoca",
        duracion:"3h 00m" ,
        año: 2023,
        sinopsis: "Durante la Segunda Guerra Mundial, el teniente general Leslie Groves designa al físico J. Robert Oppenheimer para un grupo de trabajo que está desarrollando el Proyecto Manhattan, cuyo objetivo consiste en fabricar la primera bomba atómica.",
        image: "Oppenheimer/OppenheimerPortada.jpg"
    },
    {
        id: 6,
        titulo: "Garfield: fuera de casa",
        director: "Mark Dindal",
        genero: "Animacion",
        duracion:"1h 41m" ,
        año: 2024,
        sinopsis: "El gato casero que odia los lunes y que adora la lasaña, está a punto de vivir una aventura ¡en el salvaje mundo exterior! Tras una inesperada reunión con su perdido padre – el desaliñado gato callejero Vic – Garfield y su amigo canino Odie se ven forzados a abandonar sus perfectas vidas al unirse a Vic en un hilarante y muy arriesgado atraco.",
        image: "Garfield/GarfieldPortada.jpg"
    },
    {
        id: 7,
        titulo: "El planeta de los simios: nuevo reino",
        director: "Wes Ball",
        genero: "Ficcion",
        duracion:"2h 25m" ,
        año: 2024,
        sinopsis: "Varias generaciones en el futuro después del reinado de César, en la que los simios son la especie dominante que vive en armonía y los humanos se han visto reducidos a vivir en las sombras. Mientras un nuevo líder simio tiránico construye su imperio, un joven simio emprende un viaje desgarrador que lo hará cuestionar todo lo que sabía sobre el pasado y tomar decisiones que definirán el futuro tanto de los simios como de los humanos.",
        image: "PlanetaSimios/PlanetaSimiosPortada.jpg"
    },
    {
        id: 8,
        titulo: "Creed III",
        director: "Michael B. Jordan",
        genero: "Accion, Deporte",
        año: 2023,
        duracion:"1h 56m" ,
        sinopsis: "Adonis Creed está prosperando en su carrera y en su vida familiar. Cuando un amigo de la infancia y antiguo prodigio del boxeo reaparece tras cumplir condena en la cárcel, está ansioso por demostrar que merece su oportunidad en el ring.",
        image: "Creed/CreedPortada.jpg"
    },
    {
        id: 9,
        titulo: "Megalodón 2: El gran abismo",
        director: "Ben Wheatley",
        genero: "Accion, Ciencia Ficcion",
        duracion:"1h 56m" ,
        año: 2023,
        sinopsis: "Jonas Taylor lidera un equipo de investigación en las profundidades del océano. Acorralados por colosales tiburones prehistóricos y despiadados bandidos, los científicos intentan sobrevivir a toda costa..",
        image: "Megalodon/MegalodonPortada.jpg"
    }
]

function mostrarPeliculas(peliculasAMostrar){
    const peliList = document.getElementById("bookList");
    peliList.innerHTML = "";


if(peliculasAMostrar.length === 0){
    peliList.innerHTML = "<p>No se encontraron resultados</p>";
}else{
    peliculasAMostrar.forEach(peliculas => {
        const peliCard = `
        <div class="col-md-4 mb-4">
        <div class="card">
        <img src="${peliculas.image}" height="500px" class="card-img-top" alt"${peliculas.titulo}">
        <div class="card-body">
          <h5 class="card-title">${peliculas.titulo}</h5>
          <p class="card-text">Año de Estreno: ${peliculas.año}<p>
          <p class="card-text">Genero: ${peliculas.genero}<p>
          <button type="button" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#${peliculas.id}" >Detalles</button>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="${peliculas.id}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="staticBackdropLabel">Dettales de la pelicula</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                    <h5 class="card-title">${peliculas.titulo}</h5>
                    <p class="card-text"> <b> Director:</b> ${peliculas.director}<p>
                    <p class="card-text"> <b> Duracion:</b> ${peliculas.duracion}<p>
                    <p class="card-text"> <b> Sinopsis:</b> ${peliculas.sinopsis}<p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cerrar</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
       
      `;
       peliList.innerHTML += peliCard;
   }); 

}
}

//Funcion para buscar las peliculas
function busquedaPelicula(query){
    const claveBusqueda = query.trim().toLowerCase();
    //filtrar
    const filtroPelicula = peliculas.filter(pelicula =>{
        return(
            pelicula.titulo.toLowerCase().includes(claveBusqueda) ||
            pelicula.genero.toLowerCase().includes(claveBusqueda) ||
            String(pelicula.año).includes(claveBusqueda) 
        )
    });
    //Mostrar peliculas
    mostrarPeliculas(filtroPelicula)
}

document.addEventListener("DOMContentLoaded",() => {
    mostrarPeliculas(peliculas);
})

const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", () => {
    busquedaPelicula(searchInput.value);
})

