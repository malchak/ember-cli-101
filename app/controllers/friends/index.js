import Ember from 'ember';

export default Ember.ArrayController.extend({
  queryParams: ['sortby', 'sortAscending'],
  sortAscending: true,
  sortBy: 'lastName',
  sortProperties: Ember.computed('sortBy', function () {
    return [this.get('sortBy')];
  }),
  actions: {
    setSortBy: function (fieldName) {
      this.set('sortBy', fieldName);
      this.toggleProperty('sortAscending');
      
      return false;
    }
  }
});
