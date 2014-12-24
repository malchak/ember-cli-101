import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    save: function () {
      console.log('+--- save action bubbled up to friends route');
      return true;
    },
    cancel: function () {
      console.log('+--- cacel action bubbled up to friends route');
      return true;
    },
    delete: function (friend) {
      friend.destroyRecord();
      this.transitionTo('friends.index');
    }
  }
});
