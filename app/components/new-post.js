import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,
  actions: {
    postFormShow() {
      this.set('addNewPost', true);
    },
    save1() {
      var params = {
        title: this.get('title'),
        body: this.get('body'),
        date: this.get('date'),
        category: this.get('category'),
      };
      this.set('addNewPost', false);
      this.sendAction('save2', params);
    }
  }
});
