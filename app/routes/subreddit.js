import Ember from "ember";

export default Ember.Route.extend({
  model: function(params) {
    return { id: params.subreddit_id, hello: 'world' };
  }
});