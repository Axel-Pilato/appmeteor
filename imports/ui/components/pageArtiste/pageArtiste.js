import { Artiste }  from '/imports/api/artiste/artiste.js';
import { Meteor }   from 'meteor/meteor';

import './pageArtiste.html';

Template.pageArtiste.onCreated(function(){
	var self = this;
	self.autorun(function(){
		var id = FlowRouter.getParam('id');
		self.subscribe('artistes', id);
	});
});

Template.pageArtiste.helpers({
	artiste: ()=> {
		var id = FlowRouter.getParam('id');
			return Artiste.findOne({_id: id});
	}
});

Template.pageArtiste.events({
    'click #modification': function (e) {
      e.preventDefault();
	  var static = document.getElementById('statics');
	  var modif = document.getElementById('modif');
	  if (static.style.display === "block") {
	    static.style.display = "none";
	    modif.style.display = "block"
	  }
    },
    'click #close': function (e) {
      e.preventDefault();
	  var static = document.getElementById("statics");
	  var modif = document.getElementById("modif");
	  if (static.style.display === "none") {
	    static.style.display = "block";
	    modif.style.display = "none"
  	}
    },

  });

Template.pageArtiste.events({
  'submit #modif-artiste'(event) {
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

  	var id = FlowRouter.getParam('id');
    Meteor.call('artiste.update',id, surnom.value, prenom.value, nom.value,  desc, dateBday.value, spotify.value, deezer.value, facebook.value, (error) => {
      if (error) {
        alert(error.error);
      } else {
      	  var static = document.getElementById("statics");
		  var modif = document.getElementById("modif");
		  if (static.style.display === "none") {
		    static.style.display = "block";
		    modif.style.display = "none"
	  	}
      }
    });
  },
});