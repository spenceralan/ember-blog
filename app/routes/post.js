import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      post: this.store.findRecord('post', params.post_id),
      categories: this.store.findAll('category')
    });
  },
  actions: {
    destroyPost(post) {
      post.destroyRecord();
      this.transitionTo('index');
    },
    update(post, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          post.set(key, params[key]);
        }
      });
    post.save();
    this.transitionTo('index');
    },
    // saveCategory(params) {
    //   let newCategory = this.store.createRecord('category', params);
    //   let post = params.post;
    //   post.get('category').addObject(newCategory);
    //   newCategory.save().then(function() {
    //     return post.save();
    //   });
    //   this.transitionTo('post', post);
    // },
  }
});
