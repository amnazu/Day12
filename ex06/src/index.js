function myNes() {

    var myStorage = {
        "car": {
            "inside": {
                "glove box": "maps",
                "passenger seat": "crumbs"
            },
            "outside": {
                "trunk": "jack"
            }
        }
    };

    var gloveBogContents = myStorage.car.inside["glove box"];
    return gloveBogContents;

}
console.log(myNes());

module.exports = myNes;