var house1 = new app.house({
    house_type: "house",
    owner: "Hong",
    zipcode: "94402"
});

var house2 = new app.house({
    owner: "Wang"
});

var house3 = new app.house({
    house_type: "house",
    owner: "Cao"
});

var house4 = new app.house({
    house_type: "house",
    owner: "Cao"
});

var houseGroup = new app.houseCollection([
    house1, house2, house3, house4
]);

console.log(houseGroup)

var houseGroupView = new app.houseCollectionView({collection: houseGroup});

$("#allHouses").html(houseGroupView.render().el);

var flowerRouter = new app.Router();

Backbone.history.start();