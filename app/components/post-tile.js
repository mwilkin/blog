import Ember from 'ember';

export default Ember.Component.extend({
  // posts: Ember.computed.sort('posts', 'sortDefinition'),
  // sortDefinition: ['date'],
  //www.codeschool.com/blog/2016/03/21/dynamic-sorting-in-emberjs/

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
