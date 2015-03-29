/**
 * Created by jiajunwang on 3/24/15.
 */
var app = app || {};

// Our basic **house** model has `house_type`, `owner`, and `zipcode` attributes.
app.house = Backbone.Model.extend({
    defaults: {
        house_type: 'apartment',
        owner: 'undefined',
        zipcode: '94403',
        image: 'http://7vijse.com1.z0.glb.clouddn.com/FiLtX7rYr4VWV0T_Rpe7s84TM2qV'
    }

});
