$(() => {
    let color;
    
    $(".form-control").keyup(() => {
        color = $("#color").text();
        $("body").css("background", color);
    });
});
const Colors = angular.module("Colors", []);

Colors.controller("Color", function($scope) {
    $scope.dec = [255,255,255];
    $scope.checkHex = hex => {
        if(hex.length < 2) {
            return ("0" + hex).toUpperCase();
        } else if(/-/.test(hex)) {
            return "00";
        } else if(hex.length == 3 && !(/[.]/.test(hex))) {
            return "FF";
        } else if(/[.]/.test(hex)) {
            return hex.split(".")[0].length < 2 ? "0" + hex.split(".")[0].toUpperCase() : hex.split(".")[0].toUpperCase();
        } else {
            return hex.toUpperCase();
        }
    }
});

let check = elem => {
    if(elem.value > 255) {
        alert("Value should be less than 255!");
        elem.value = 255;
    } else if(elem.value < 0) {
        alert("Value should be a positive number");
        elem.value = 0;
    } else if(/[.]/.test(elem.value)) {
        elem.value = parseInt(elem.value);
        alert("Value should be an integer!")
    }
}
//alert((5.8).toString(16))
alert("Improvements:\n* User interface.\n* Fixed bugs.");
