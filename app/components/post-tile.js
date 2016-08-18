import Ember from 'ember';

export default Ember.Component.extend({

  sortBy: ['date:desc'],
  sortedPosts: Ember.computed.sort('posts', 'sortBy'),
  actions: {
    update(post, params) {
      this.sendAction('update', post, params);
    },

    delete(post) {
      if (confirm('Are you sure you want to delete this post?')) {
        this.sendAction('destroyPost', post);
      }
    }
  }
});
