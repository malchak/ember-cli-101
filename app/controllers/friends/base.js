import Ember from 'ember';

export default Ember.Controller.extend({
  hasEmail: Ember.computed.notEmpty('model.email'),
  hasFirstName: Ember.computed.notEmpty('model.firstName'),
  hasLastName: Ember.computed.notEmpty('model.lastName'),
  hasTwitter: Ember.computed.notEmpty('model.twitter'),
  isValid: Ember.computed.and(
    'hasEmail',
    'hasFirstName',
    'hasLastName',
    'hasTwitter'
  ),
  actions: {
    save: function () {
      if (this.get('isValid')) {
        var _this = this;
        this.get('model').save().then(function (friend) {
          _this.transitionToRoute('articles', friend);
        });
      } else {
        this.set('errorMessage', 'You must fill in all fields');
      }

      return false;
    },
    cancel: function () {
      return true;
    }
  }
});
