App = Ember.Application.create();

App.Router.map(function() {
  this.resource('menu');
  this.resource('cart');
});

App.MenuRoute = Ember.Route.extend({
  model: function() {
    return ['breakfast', 'lunch', 'dinner'];
  }
});

App.CartRoute = Ember.Route.extend({
  model: function() {
    return 'Cart!';
  }
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return restaurants;
  }
});

var restaurants = [
  { id: 1, name: "Joe's"},
  { id: 2, name: "Graze"},
  { id: 3, name: "Taco Bell"},
];
