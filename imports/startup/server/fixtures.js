// Fill the DB with example data on startup
 
import { Meteor }  from 'meteor/meteor';
import { Artiste } from '../../api/artiste/artiste.js';

// Demarrage Serveur
Meteor.startup(() => {

  // if the Artiste collection is empty
  if (Artiste.find().count() === 0) {
    const data = [
      {
        surnom: 'Vald',
        prenom: 'Valentin',
           nom: 'Le Du',
          desc: "Après deux mixtapes et deux EPs, il sort son premier album studio intitulé Agartha, aujourd'hui disque de platine",
      dateBday: "1992-07-15",
         image: "/img/vald.jpeg",
       spotify: "https://open.spotify.com/artist/3CnCGFxXbOA8bAK54jR8js",
        deezer:"https://www.deezer.com/fr/artist/5175734",
      facebook:"https://fr-fr.facebook.com/VALDNQNT/",
        createdAt: new Date(),
      },
      {
        surnom: 'Eminem',
        prenom: 'Marshall Bruce',
           nom: 'Mathers',
          desc: "Eminem a vendu plus de 220 millions de disques dans le monde et est l'un des artistes ayant vendu le plus d'albums dans l'histoire de l'industrie musicale.",
      dateBday: "1972-10-17",
         image: "/img/eminem.jpg",
       spotify: "https://open.spotify.com/artist/7dGJo4pcD2V6oG8kP0tJRR",
        deezer: "https://www.deezer.com/fr/artist/13",
      facebook: "https://fr-fr.facebook.com/eminem/",
        createdAt: new Date(),
      },
      {
        surnom: 'Fianso',
        prenom: 'Sofiane',
           nom: 'Zermani',
          desc: "Sofiane présente Rentre dans le Cercle, une série de vidéos où il invite des rappeurs à performer tour à tour et des représentants de médias hip-hop et de maisons de disque à répondre à des questions concernant leurs professions.",
      dateBday: "1986-07-21",  
         image: "/img/fianso.jpg",
       spotify: "https://open.spotify.com/artist/5mtaU1uKbVJpkeaBWK8JfQ",
        deezer: "https://www.deezer.com/fr/artist/89657",
      facebook: "https://fr-fr.facebook.com/fiansoofficiel/",
     createdAt: new Date(),
      },
      {
        surnom: 'Koba LaD',
        prenom: 'Marcel Junior',
           nom: 'Loutarila',
          desc: "Son nom de scène est inspiré par le personnage de Koba issu de la saga La Planète des singes, « LaD » signifie la débrouille, la détaille, la défonce",
      dateBday: "2000-04-01",
         image: "/img/koba.jpg",
       spotify: "https://open.spotify.com/artist/1WCNFpmZl8iGcW4IjVzrLV",
        deezer: "https://www.deezer.com/fr/artist/14621667",
      facebook: "https://fr-fr.facebook.com/KobaOfficiel/",
        createdAt: new Date(),
      },
    ];
    data.forEach(artiste => Artiste.insert(artiste));
  }
});
