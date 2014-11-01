import Ember from "ember";
import SubredditAdapter from 'ember-reddit/adapters/subreddit';

export default Ember.Route.extend({

  // Note: The following no longer necessary.
  // "Ember is smart enoguh to know, when you have a path that ends 
  //  in something_id, and there's no model hook defined on it, it 
  //  will call that `find` method we defined on that store automatically."
  

  // model: function(params) {
  //   var adapter = SubredditAdapter.create();
  //   return adapter.find('subreddit', params.subreddit_id);
  // }
});