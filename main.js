
    const list = [
        {
            id: 0,
            author: "C.Tangana",
            title: "Me Maten",
            cover: "tangana_cover.png",
            duration: 10
        },
        {
            id: 1,
            author: "Rosalía",
            title: "Despechá",
            cover: "rosalia_cover.png",
            duration: 5
        },
        {
            id: 2,
            author: "Shakira",
            title: "Te felicito",
            cover: "shakira_cover.png",
            duration: 8
        },
        {
            id: 3,
            author: "Quevedo",
            title: "Quédate",
            cover: "quevedo_cover.png",
            duration: 12
        },
        {
            id: 4,
            author: "Bad Bunny",
            title: "Tití me preguntó",
            cover: "bad_cover.png",
            duration: 20
        }
    ];

let cancionActual =3;

function cargaImagen(){
    element = document.getElementsByClassName('card__imgCover')[0]
    element.src="./assets/" + list[cancionActual].cover
};

window.onload = () => {cargaImagen()};