import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    console.log(this.store.findAll('category'));
    return this.store.findAll('post')
  },

  actions: {
    destroyPost(post) {
     post.destroyRecord();
     this.transitionTo('index');
   },
    savePost(params) {
      let newPost = this.store.createRecord("post", params);
      newPost.save();
      this.transitionTo("index");
    }
  }
});
