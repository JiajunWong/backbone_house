/**
 * Created by jiajunwang on 3/24/15.
 */
// Namespace our flowerApp
var app = app || {};

// A group (array) of Flower models
app.houseCollection = Backbone.Collection.extend({

    // What type of models are in this collection?
    model: app.house

});