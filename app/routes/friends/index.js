import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    sortBy: {
      refreshModel: true
    }
  },
  model: function (params) {
    return this.store.find('friend', params);
  }
});
