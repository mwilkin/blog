import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    commentFormShow() {
      this.set('addNewComment', true);
    },
    save1() {
      var params = {
        user: this.get('user'),
        message: this.get('message'),
        post: this.get('post'),
      };
      this.set('addNewComment', false);
      this.sendAction('save2', params);
    }
  }
});
