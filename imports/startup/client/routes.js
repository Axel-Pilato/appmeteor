import { FlowRouter }  from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import needed templates
import '../../ui/layouts/body/body.js';
import '../../ui/pages/home/home.js';
import '../../ui/pages/artistes/artistes.js';
import '../../ui/pages/form/form.js';
import '../../ui/pages/not-found/not-found.js';


// Set up all routes in the app
FlowRouter.route('/', {
  name: 'App.home',
  action() {
    BlazeLayout.render('App_body', { main: 'App_home' });
  },
});

// Page de formulaire & liste des artistes
FlowRouter.route('/form', {
  name: 'App.form',
  action() {
    BlazeLayout.render('App_body', { main: 'App_form' });
  },
});

// Page descriptive pour chaque artiste
FlowRouter.route('/artistes/:id', {
  name: 'App.artistes',
  action() {
    BlazeLayout.render('App_body', { main: 'App_artistes' });
  },
});

// 404 - Not Found
FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_body', { main: 'App_notFound' });
  },
};