import Ember from 'ember';
import ajax from 'ic-ajax';

export default Ember.Object.extend({
  find: function(name, id) {
    // subreddit
    // aww
    var url = "https://www.reddit.com/r/" + id + ".json";
    return ajax(url).then(function(result) {
      return result.data.children.map(function(c) {
        return {
           id: c.id,
           title: c.data.title,
           domain: c.data.domain,
           url: c.data.url
        };
      });
    });
  }
});