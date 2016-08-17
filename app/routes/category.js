import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    return this.store.query('post', {
      orderBy: 'category',
      equalTo: params.category
    });
  }
});
