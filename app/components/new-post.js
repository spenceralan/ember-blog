import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,
  actions: {
    postShowForm() {
      this.set("addNewPost", true);
    },

    savePost() {
      let params = {
        title: this.get("title") ? this.get("title") : "",
        date: this.get("date") ? this.get("date") : "",
        content: this.get("content") ? this.get("content") : "",
        image: this.get("image") ? this.get("image") : "",
      };
      this.set("addNewPost", false);
      this.sendAction("savePost", params);
    }
  }
});
