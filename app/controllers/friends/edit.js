import FriendsBaseController from './base';

export default FriendsBaseController.extend({
  actions: {
    cancel: function () {
      this.transitionToRoute('articles', this.get('model'));
      return false;
    }
  }
});
