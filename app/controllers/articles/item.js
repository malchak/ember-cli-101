import Ember from 'ember';

export default Ember.Controller.extend({
  states: ['borrowed', 'returned'],
  autoSave: function () {
    if (!this.get('model.isNew')) {
      this.send('save', this.get('model'));
    }
  },
  isDirtyChanged: function () {
    if (this.get('model.isDirty') && !this.get('model.isSaving')) {
      Ember.run.once(this, this.autoSave);
    }
  }.on('init').observes('model.isDirty')
});
