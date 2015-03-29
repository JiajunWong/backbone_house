/**
 * Created by jiajunwang on 3/24/15.
 */
// Namespace our flowerApp
var app = app || {};

app.houseView = Backbone.View.extend({

    tagName: "article",
    className: "houseListItem",

    template: _.template($("#houseElement").html()),

    render: function () {
        var houseTemplate = this.template(this.model.toJSON());
        this.$el.html(houseTemplate);
        return this;
    },

    events: {
        'mouseover': 'addBgColor',
        'mouseout': 'removeBgColor'
    },

    addBgColor: function () {
        this.$el.addClass("bgColorImage");
    },

    removeBgColor: function () {
        this.$el.removeClass("bgColorImage");
    }
});