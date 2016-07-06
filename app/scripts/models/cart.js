var Backbone = require('backbone');

var ShirtModel = require('./shop').ShirtModel;

var CartCollection = Backbone.Collection.extend({
  model: ShirtModel
});


module.exports = {
  'CartCollection': CartCollection
};
