import { Artiste } from '/imports/api/artiste/artiste.js';
import { Meteor } from 'meteor/meteor';
import './info.html';


Template.info.onCreated(function () {
  Meteor.subscribe('artiste.all');
});


Template.info.helpers({
  artistes() {
    return Artiste.find({});
  },
});