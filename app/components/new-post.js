import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,
  actions: {
    postFormShow() {
      this.set('addNewPost', true);
    },
    save1() {
      var params = {
        title: this.get('title') ? this.get('title').capitalize() : "",
        body: this.get('body') ? this.get('body').capitalize() : "",
        date: this.get('date') ? this.get('date') : "",
        category: this.get('category') ? this.get('category').capitalize() : ""
      };
      this.set('addNewPost', false);
      this.sendAction('save2', params);
    }
  }
});
