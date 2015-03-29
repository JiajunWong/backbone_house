/**
 * Created by jiajunwang on 3/24/15.
 */
var app = app || {};

app.houseCollectionView = Backbone.View.extend({

    tagName: "section",

    render: function () {
        $(this.el).append("<ul></ul>");
        this.collection.each(this.addHouse, this);
        return this;
    },

    addHouse: function (house) {
        var houseView = new app.houseView({model: house});
        this.$el.append(houseView.render().el);
    }
});