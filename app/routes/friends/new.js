import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return this.store.createRecord('friend');
  },
  deactivate: function () {
    var model = this.modelFor('friends/new');
    if (model.get('isNew')) {
      model.destroyRecord();
    }
  },
  actions: {
    save: function () {
      console.log('+-- save action bubbled up to friends new route');
      return true;
    },
    cancel: function () {
      console.log('+-- cancel action bubbled up to friens new route');
      return true;
    }
  }
});
