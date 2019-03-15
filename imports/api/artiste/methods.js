// Methods related to artiste

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Artiste } from './artiste.js';

Meteor.methods({
  'artiste.insert'(surnom, prenom, nom, desc, dateBday) {
    check(surnom, String);
    check(prenom, String);
    check(nom, String);
    check(desc, String);
    check(dateBday, String);

    return Artiste.insert({
      surnom,
      prenom,
      nom,
      desc,
      dateBday,
      createdAt: new Date(),
    });
  },
});
