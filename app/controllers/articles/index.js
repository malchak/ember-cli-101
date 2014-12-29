import Ember from 'ember';

export default Ember.ArrayController.extend({
  conentDidChange: function () {
    console.log('called when we add or remove an article');
  }.observes('model.[]'),
  
  stateDidChange: function () {
    console.log('called when state property changes for any of the articles');
  }.observes('model.@each.state')
  
});
