import { Artiste }  from '/imports/api/artiste/artiste.js';
import { Meteor }   from 'meteor/meteor';

import './pageArtiste.html';

Template.pageArtiste.onCreated(function(){
	var self = this;
	self.autorun(function(){
		self.subscribe('artistes');
	});
});

Template.pageArtiste.helpers({
	artiste: ()=> {
		var id = FlowRouter.getParam('id');
			return Artiste.findOne({_id: id});
	}
});