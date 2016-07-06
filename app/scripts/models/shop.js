var Backbone = require('backbone');

var ShirtModel = Backbone.Model.extend({

});

var ShirtCollection = Backbone.Collection.extend({
  model: ShirtModel
});

module.exports = {
  'ShirtModel': ShirtModel,
  'ShirtCollection': ShirtCollection
};
