angular.module('shop', [
    'ngRoute',
    'ngSanitize',
    'ngAnimate',
    'ngTouch',
    'basket',
    'purchase.orders',
    'customer.address',
    'customer.profile'
]).config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/basket', {templateUrl: 'partials/shop/basket.html'})
        .when('/checkout/address', {templateUrl: 'partials/shop/order-address.html'})
        .when('/address/add', {templateUrl: 'partials/address/add-address.html', controller: 'CustomerAddressController'})
        .when('/address/:label', {templateUrl: 'partials/address/edit-address.html', controller: 'EditCustomerAddressController'})
        .when('/account', {templateUrl: 'partials/account.html'})
        .when('/profile', {redirectTo: '/account'})
        .when('/summary', {templateUrl: 'partials/shop/summary.html'})
}]);