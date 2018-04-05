let PetHotelApp = angular.module('PetHotelApp', ['ngRoute', 'ngMaterial']);

PetHotelApp.config(['$routeProvider', function ($routeProvider) {
    console.log('Route config loaded');

    $routeProvider
    .when('/owner',{
        templateUrl: '/views/owner.html',
        controller: 'OwnerController as vm'
    }).when('/pet', {
        templateUrl: '/views/pet.html',
        controller: 'PetController as vm'
    }).otherwise(
        { redirectTo: '/pet' }
    )
}]);