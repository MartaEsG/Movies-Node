const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const User = require("../api/models/user.models");
const Movie = require("../api/models/movie.models");
const Director = require ("../api/models/director.models")
const Actor = require ("../api/models/actor.model")

const arrayUsers = [    
    // {
    //     "email": "marta@miweb.com",
    //     "password": "aA123456", 
    //     "role": "admin"
    // },
    // {
    //     "email": "miguel@miweb.com",
    //     "password": "aA123456", 
    //     "role": "admin"
    // },
    // {
    //     "email": "oliver@miweb.com",
    //     "password": "aA123456", 
    //     "role": "admin"
    // },
    // {
    //     "email": "pepe@miweb.com",
    //     "password": "aA123456"
    // },
    // {
    //     "email": "luis@miweb.com",
    //     "password": "aA123456" 
    // }
];

const arrayMovies = [    
    {
        "title": "Akira",
        "country": "Japon",
        "img": "https://pics.filmaffinity.com/akira-557684565-large.jpg"
    }, 
    {
        "title": "El club de los poetas muertos",
        "country": "EEUU",
        "img": "https://es.web.img3.acsta.net/pictures/14/03/25/12/43/550099.jpg"
    }, 
    {
        "title": "Los Goonies",
        "country": "EEUU",
        "img": "https://pics.filmaffinity.com/Los_Goonies-301424062-large.jpg"
    }, 
    {
        "title": "Parásitos",
        "country": "Corea",
        "img": "https://www.moviementarios.com/wp-content/uploads/2019/09/Par%C3%A1sitos-Cartel.jpg"
    }, 

]

const arrayDirectors = [ {
    "name": "Quentin Tarantino",
    "country": "EEUU",
    "img": "https://upload.wikimedia.org/wikipedia/commons/0/0b/Quentin_Tarantino_by_Gage_Skidmore.jpg"
}, 
{
    "name": "Pedro Almodovar",
    "country": "Spain",
    "img": "https://static.elcorreo.com/www/multimedia/201903/16/media/pedro-almodovar.jpg"
}, 
{
    "name": "Christopher Nolan",
    "country": "EEUU",
    "img": "https://es.web.img3.acsta.net/pictures/14/10/30/10/59/215487.jpg"
}, 
{
    "name": "Taika Waititi",
    "country": "EEUU",
    "img": "https://es.web.img2.acsta.net/pictures/19/10/16/00/10/5197437.jpg"
}, 

]

const arrayActors = [ {
    "name": "Daniel Day-Lewis",
    "country": "EEUU",
    "img": "https://upload.wikimedia.org/wikipedia/commons/e/e0/Daniel_Day-Lewis%2C_Jaguar%2C_Mille_Miglia_2013_cropped.jpg"
}, 
{
    "name": "Tom Cruise",
    "country": "EEUU",
    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Tom_Cruise_by_Gage_Skidmore_2.jpg/800px-Tom_Cruise_by_Gage_Skidmore_2.jpg"
}, 
{
    "name": "Jean Reno",
    "country": "France",
    "img": "https://www.buscabiografias.com/img/people/Jean_Reno.jpg"
}, 
{
    "name": "Penelope Cruz",
    "country": "USA",
    "img": "https://cdn.semana.es/wp-content/uploads/2021/09/dl_u494065_028-1.jpg"
}, 

]
const DB_URL= process.env.DB_URL;

console.log(DB_URL)
mongoose.connect(DB_URL)

// la parte de user 
.then(async()=> {
    const allUser = await User.find();
    if (allUser.length > 0) {
        await User.collection.drop();
        console.log("Usuarios borrados");
    }
})
.catch((error)=> console.log("Error al borrar los usuarios",error))
.then(async ()=> {
    const usersMap = arrayUsers.map((user) => new User(user));
    await User.insertMany(usersMap);
    console.log("Usuarios insertados correctamente");
})
.catch((error) => console.log("Error al insertar los usuarios", error))

// la parte de movie 

.then(async()=> {
    const allMovies = await Movie.find();
    if (allMovies.length > 0) {
        await Movie.collection.drop();
        console.log("Películas borradas");
    }
})
.catch((error)=> console.log("Error al borrar las películas",error))
.then(async ()=> {
    const moviesMap = arrayMovies.map((movie) => new Movie(movie));
    await Movie.insertMany(moviesMap);
    console.log("Películas insertadas correctamente");
})
.catch((error) => console.log("Error al insertar las películas", error))


// la parte de directores

.then(async()=> {
    const allDirectors = await Director.find();
    if (allDirectors.length > 0) {
        await Director.collection.drop();
        console.log("Directores borrados");
    }
})
.catch((error)=> console.log("Error al borrar los directores",error))
.then(async ()=> {
    const directorsMap = arrayDirectors.map((director) => new Director(director));
    await Director.insertMany(directorsMap);
    console.log("Directores insertados correctamente");
})
.catch((error) => console.log("Error al insertar los directores", error))

// la parte de actores

.then(async()=> {
    const allActors = await Actor.find();
    if (allActors.length > 0) {
        await Actor.collection.drop();
        console.log("Actores borrados");
    }
})
.catch((error)=> console.log("Error al borrar los actores",error))
.then(async ()=> {
    const actorsMap = arrayActors.map((actor) => new Actor(actor));
    await Actor.insertMany(actorsMap);
    console.log("Actores insertados correctamente");
})
.catch((error) => console.log("Error al insertar los actores", error))

// desconectar 

.finally(()=> mongoose.disconnect());