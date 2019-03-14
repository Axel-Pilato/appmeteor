import { Artiste }  from '/imports/api/artiste/artiste.js';
import { Meteor }   from 'meteor/meteor';
import { FilesCollection } from 'meteor/ostrio:files';
import './listeArtiste.html';


const Images = new FilesCollection({
  Artiste: 'Images',
  onBeforeUpload(file) {

    // Allow upload files under 10MB, and only in png/jpg/jpeg formats
    if (file.size <= 10485760 && /png|jpg|jpeg/i.test(file.extension)) {
      return true;
    }
    return 'Please upload image, with size equal or less than 10MB';
  }
});

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
  'submit .new-artiste'(event) {
	event.preventDefault();

	  const target = event.target;
    const surnom = target.surnom;
    const prenom = target.prenom;
       const nom = target.nom;
      const desc = target.desc;
  const dateBday = target.dateBday;

    Meteor.call('artiste.insert', surnom.value, prenom.value, nom.value,  desc.value, dateBday.value, (error) => {
      if (error) {
        alert(error.error);
      } else {
          surnom.value = '';
          prenom.value = '';
             nom.value = '';
            desc.value = '';
        dateBday.value = '';
      }
    });
  },
});
