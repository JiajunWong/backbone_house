/**
 * Created by jiajunwang on 3/24/15.
 */
var app = app || {};

// Our basic **house** model has `house_type`, `owner`, and `zipcode` attributes.
app.house = Backbone.Model.extend({
    defaults: {
        house_type: 'apartment',
        owner: 'undefined',
        address: "",
        zipcode: "",
        image: ""
    },

    initialize: function () {
        this.validators = {};

        this.validators.zipcode = function (value) {
            return value.length > 0 ? {isValid: true} : {isValid: false, message: "You must enter a grape variety"};
        };

        this.validators.country = function (value) {
            return value.length > 0 ? {isValid: true} : {isValid: false, message: "You must enter a country"};
        };
    },
});
