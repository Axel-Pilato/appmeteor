// All links-related publications

import { Meteor } from 'meteor/meteor';
import { Artiste } from '../artiste.js';

Meteor.publish('artiste.all', function () {
  return Artiste.find({});
});