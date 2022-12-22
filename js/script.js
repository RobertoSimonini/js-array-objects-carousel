
/*
    Consegna:
Dato un array di oggetti letterali con:
 - url dell’immagine
 - titolo
 - descrizione
Creare un carosello come ispirandovi alla foto allegata. Se volete cambiare la grafica siete liberi di farlo.

# MILESTONE 0:
Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.

# MILESTONE 1:
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile assieme al suo titolo e testo.

# MILESTONE 2:
Aggiungere il "ciclo infinito" del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.
*/


// Prendo il carousel 
const carousel = document.getElementById('carousel');
const gallery = document.getElementById('gallery');
const prev = document.getElementById('prev');
const next = document.getElementById('next');



// Array di oggetti
const data = [
  {
    image: 'img/0.webp',
    title: 'Marvel\'s Spiderman Miles Morale',
    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
  }, {
    image: 'img/1.webp',
    title: 'Ratchet & Clank: Rift Apart',
    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
  }, {
    image: 'img/2.webp',
    title: 'Fortnite',
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  }, {
    image: 'img/3.webp',
    title: 'Stray',
    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
  }, {
    image: 'img/4.webp',
    title: "Marvel's Avengers",
    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
  }
];

for (let i = 0; i < data.length; i++){
    let currentData = data[i];

    const currentCard = 
    `
        <img src="${currentData.image}">
        <h3>${currentData.title}</h3>
        <p>
           ${currentData.text} 
        </p>   
    `
    gallery.innerHTML += currentCard;
}
// Creo tutte le costanti per poi creare il carosello 
const images = document.querySelectorAll('#gallery img')
const titles = document.querySelectorAll('#gallery h3')
const paragraphs = document.querySelectorAll('#gallery p')

// Creo l'index di incremento e decremento 
let currentActiveIndex = 0;

// Aggiungo la classe active in partenza
images[currentActiveIndex].classList.add ('active');
titles[currentActiveIndex].classList.add ('active');
paragraphs[currentActiveIndex].classList.add ('active');


// Creo la funzione che mi permetta di andare avanti 
next.addEventListener ('click', function(){

    // Rimuovo la classe active 
    images[currentActiveIndex].classList.remove ('active');
    titles[currentActiveIndex].classList.remove ('active');
    paragraphs[currentActiveIndex].classList.remove ('active');

    //Incremento per fargli cambiare immagine
     currentActiveIndex++

    if (currentActiveIndex === data.length) {
         currentActiveIndex = 0;
     }

    //Assegno la classe active alla foto successiva
     images[currentActiveIndex].classList.add ('active');
     titles[currentActiveIndex].classList.add ('active');
     paragraphs[currentActiveIndex].classList.add ('active');
})

// Creo la funzione che mi permetta di andare indietro 
prev.addEventListener ('click', function(){

    // Rimuovo la classe active 
    images[currentActiveIndex].classList.remove ('active');
    titles[currentActiveIndex].classList.remove ('active');
    paragraphs[currentActiveIndex].classList.remove ('active');

    //Incremento per fargli cambiare immagine
     currentActiveIndex--

    if (currentActiveIndex < 0) {
         currentActiveIndex = 4;
    }

    //Assegno la classe active alla foto successiva
     images[currentActiveIndex].classList.add ('active');
     titles[currentActiveIndex].classList.add ('active');
     paragraphs[currentActiveIndex].classList.add ('active');
})
