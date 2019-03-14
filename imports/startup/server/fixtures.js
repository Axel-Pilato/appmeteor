// Fill the DB with example data on startup
 
import { Meteor }  from 'meteor/meteor';
import { Links }   from '../../api/links/links.js';
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
      dateBday: "15/07/1992",
        createdAt: new Date(),
      },
      {
        surnom: 'Eminem',
        prenom: 'Marshall Bruce',
           nom: 'Mathers',
          desc: "Eminem a vendu plus de 220 millions de disques dans le monde et est l'un des artistes ayant vendu le plus d'albums dans l'histoire de l'industrie musicale.",
      dateBday: "17/10/1972",
        createdAt: new Date(),
      },
      {
        surnom: 'Fianso',
        prenom: 'Sofiane',
           nom: 'Zermani',
          desc: "Sofiane présente Rentre dans le Cercle, une série de vidéos où il invite des rappeurs à performer tour à tour et des représentants de médias hip-hop et de maisons de disque à répondre à des questions concernant leurs professions.",
      dateBday: "21/07/1986",  
        createdAt: new Date(),
      },
      {
        surnom: 'Koba LaD',
        prenom: 'Marcel Junior',
           nom: 'Loutarila',
          desc: "Son nom de scène est inspiré par le personnage de Koba issu de la saga La Planète des singes, « LaD » signifie la débrouille, la détaille, la défonce",
      dateBday: "01/04/2000",
        createdAt: new Date(),
      },
    ];
    data.forEach(artiste => Artiste.insert(artiste));
  }


  // if the Links collection is empty
  if (Links.find().count() === 0) {
    const data = [
      {
        title: 'Do the Tutorial',
        url: 'https://www.meteor.com/try',
        createdAt: new Date(),
      },
      {
        title: 'Follow the Guide',
        url: 'http://guide.meteor.com',
        createdAt: new Date(),
      },
      {
        title: 'Read the Docs',
        url: 'https://docs.meteor.com',
        createdAt: new Date(),
      },
      {
        title: 'Discussions',
        url: 'https://forums.meteor.com',
        createdAt: new Date(),
      },
    ];
    data.forEach(link => Links.insert(link));
  }
});
