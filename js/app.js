App = Ember.Application.create();

App.Router.map(function() {
  this.resource('cart');
  this.resource('menus');
  this.resource('menu', { path: '/:id' });
});

App.MenuRoute = Ember.Route.extend({
  model: function(params) {
    return menus.findBy('id', parseInt(params.id));
  }
});

App.MenusRoute = Ember.Route.extend({
  model: function() {
    return menus;
  }
});

App.CartRoute = Ember.Route.extend({
  model: function() {
    return 'Cart!';
  }
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return menus;
  }
});

var menus = [
  { id: 1, name: "Joe's", items: ["Eggs", "Bacon", "Biscuit"] },
  { id: 2, name: "Graze", items: ["Cheese curds", "Beet burger", "Soup"] },
  { id: 3, name: "Taco Bell", items: ["Sloppy taco", "Gross burrito", "Fried thing"] },
];
