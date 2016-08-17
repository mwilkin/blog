import Ember from 'ember';

export default Ember.Component.extend({
  updatePostForm: false,
  actions: {
    updatePostForm() {
      this.set('updatePostForm', true);
    },
    update(post) {
      var params = {
        title: this.get('title'),
        body: this.get('body'),
        date: this.get('date'),
        category: this.get('category'),
      };
      this.set('updatePostForm', false);
      this.sendAction('update', post, params);
    }
  }
});
