

/*
   Descrizione:
   !Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.

   Vi ricordo le funzionalità minime
   Deve vedersi un'immagine grande che è l'immagine principale
   Devono vedersi i thumbnails
   Il thumbnails che corrisponde all'immagine grande deve essere graficamente messo in risalto con una classe active
   Deve essere possibile cambiare l'immagine principale con le freccette prev e next
   Bisogna fare in modo che il carosello sia "infinito": se clicco sul next e sono all'ultima immagine, ricomincio dalla prima; se sono alla prima immagine e clicco sul prev vado all'ultima.

   #Bonus:
   -1 al click su una thumb, visualizzare in grande l'immagine corrispondente

   -2 applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente

   -3 quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce

*/


// Creo l'app di VUe 
const app = Vue.createApp({

  data() {
    return {
      currentIndex: 0,
      pictures: [
        {
         image: 'img/0.webp',
         title: 'Marvel\'s Spiderman Miles Morale',
         text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
      }, 
      {
         image: 'img/1.webp',
         title: 'Ratchet & Clank: Rift Apart',
         text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
      }, 
      {
         image: 'img/2.webp',
         title: 'Fortnite',
         text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
      }, 
      {
         image: 'img/3.webp',
         title: 'Stray',
         text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
      }, 
      {
         image: 'img/4.webp',
         title: "Marvel's Avengers",
         text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
      }
      ],
      
    }
  },
  computed: {
   prevInfinite() {
      if (this.currentIndex < 0) {
         return this.currentIndex = this.pictures.length - 1;
      }
   },
   
   nextInfinite() {
      if (this.currentIndex === this.pictures.length) {
         return this.currentIndex = 0;
      }
   }
  }
});

// Monto l'app di Vue 
app.mount('#root');



