let PetHotelApp = angular.module('PetHotelApp', ['ngRoute', 'ngMaterial']);

PetHotelApp.config(['$routeProvider', function ($routeProvider) {
    console.log('Route config loaded');

}]);