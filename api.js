// let characters = [];
// const btnAnterior = document.getElementById('btnAnterior');
// const btnSiguiente = document.getElementById('btnSiguiente');
// let pagina = 1;

// fetch('https://rickandmortyapi.com/api/character')
// .then((response) => response.json())
// .then((data) => {
//     console.log(data);
//     characters = data.results;
//     printCharacters();
// });

// function printCharacters(){
//     // console.log("listado despues de cargar la api")
//     // console.log(characters);

//     let totalCharacters = characters.length;

//     let contenedor = document.createElement('div');
//     contenedor.classList.add('contenedor')
//     document.querySelector('body').appendChild(contenedor)

//     for(i=0; i < totalCharacters; i++){
//         // console.log(characters[i].name)

//         let card = document.createElement('div')
//         card.classList.add('card')

//         let divImagen = document.createElement('div')
//         divImagen.classList.add('foto')
//         let foto = document.createElement('img');
//         foto.src = characters[i].image;
//         divImagen.appendChild(foto);
//         card.appendChild(divImagen)

//         let nombre = document.createElement('span');
//         nombre.classList.add('nombre');
//         nombre.innerHTML = characters[i].name;
//         card.appendChild(nombre);

//         contenedor.appendChild(card);
//     }
// }

//     btnSiguiente.addEventListener('click', () =>{
//         if (pagina < 500){
//             pagina++;
//             printCharacters();
//         }
//     });
//     btnAnterior.addEventListener('click', () =>{
//         if (pagina > 1){
//             pagina--;
//             printCharacters();
//         }
//     });



let characters = [];
const btnAnterior = document.getElementById('btnAnterior');
const btnSiguiente = document.getElementById('btnSiguiente');
let pagina = 1;
let url = `https://rickandmortyapi.com/api/character?page=${pagina}`;
const inputBuscador = document.getElementById('buscador');
let terminoBusqueda = "";

let contenedor = document.createElement('div');
contenedor.classList.add('contenedor')
document.querySelector('body').appendChild(contenedor);

fetch(url)
.then((response) => response.json())
.then((data) => {
    console.log(data);
    characters = data.results;
    printCharacters();
});

function printCharacters(){
    let url = `https://rickandmortyapi.com/api/character?page=${pagina}&name=${terminoBusqueda}`;

    if (terminoBusqueda === '') {
        url = `https://rickandmortyapi.com/api/character?page=${pagina}`;
    }

    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        characters = data.results;
        let totalCharacters = characters.length;
        contenedor.innerHTML = '';

        for(i=0; i < totalCharacters; i++){
            let card = document.createElement('div')
            card.classList.add('card')

            let divImagen = document.createElement('div')
            divImagen.classList.add('foto')
            let foto = document.createElement('img');
            foto.src = characters[i].image;
            divImagen.appendChild(foto);
            card.appendChild(divImagen)

            let nombre = document.createElement('span');
            nombre.classList.add('nombre');
            nombre.innerHTML = characters[i].name;
            card.appendChild(nombre);

            contenedor.appendChild(card);
        }
    });
}

inputBuscador.addEventListener('input', () => {
    terminoBusqueda = inputBuscador.value.trim();
    pagina = 1; // Reiniciamos la página al buscar un nuevo término
    printCharacters();
});

btnSiguiente.addEventListener('click', () =>{
    if (pagina < 100){
        pagina++;
        url = `https://rickandmortyapi.com/api/character?page=${pagina}`;
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            characters = data.results;
            printCharacters();
        });
    }
});
btnAnterior.addEventListener('click', () =>{
    if (pagina > 1){
        pagina--;
        url = `https://rickandmortyapi.com/api/character?page=${pagina}`;
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            characters = data.results;
            printCharacters();
        });
    }
});


