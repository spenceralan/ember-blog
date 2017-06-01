import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveCategory() {
      var params = {
        title: this.get('title'),
      };
      this.sendAction('saveCategory', params);
    }
  }
});
