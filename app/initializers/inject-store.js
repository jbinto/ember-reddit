import Store from 'ember-reddit/models/store';

// boilerplate
// for details on service lookup, etc. see Ember Guides:
// http://emberjs.com/guides/understanding-ember/dependency-injection-and-service-lookup/

export default {
  name: 'inject-store',
  initialize: function(container, app) {
    app.register('store:main', Store);
    app.inject('route', 'store', 'store:main');
    app.inject('controller', 'store', 'store:main');
  }
};