import { Artiste }  from '/imports/api/artiste/artiste.js';
import { Meteor }   from 'meteor/meteor';
import { FilesCollection } from 'meteor/ostrio:files';
import './listeArtiste.html';


Template.listeArtiste.onCreated(function () {
  Meteor.subscribe('artiste.all');
});


// Liste des Artiste
Template.listeArtiste.helpers({
  artiste() {
  	return Artiste.find({});
   },
});


// Click Button "Ajouter"
Template.listeArtiste.events({
  'submit #new-artiste'(event) {
	event.preventDefault();
	  const target = event.target;
    const surnom = target.surnom;
    const prenom = target.prenom;
       const nom = target.nom;
      const desc = event.target.desc.value;
  const dateBday = target.dateBday;
   const spotify = target.spotify;
    const deezer = target.deezer;
  const facebook = target.facebook;


    Meteor.call('artiste.insert', surnom.value, prenom.value, nom.value,  desc, dateBday.value, spotify.value, deezer.value, facebook.value, (error) => {
      if (error) {
        alert(error.error);
      } else {
          surnom.value = '';
          prenom.value = '';
             nom.value = '';
            desc.value = '';
        dateBday.value = '';
         spotify.value = '';
          deezer.value = '';
        facebook.value = '';
      }
    });
  },
});
