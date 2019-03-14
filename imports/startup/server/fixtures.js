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
      dateBday: "15/07/1992",
        createdAt: new Date(),
      },
      {
        surnom: 'Eminem',
        prenom: 'Marshall Bruce',
           nom: 'Mathers',
      dateBday: "17/10/1972",
        createdAt: new Date(),
      },
      {
        surnom: 'Fianso',
        prenom: 'Sofiane',
           nom: 'Zermani',
      dateBday: "21/07/1986",  
        createdAt: new Date(),
      },
      {
        surnom: 'Koba LaD',
        prenom: 'Marcel Junior',
           nom: 'Loutarila',
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
