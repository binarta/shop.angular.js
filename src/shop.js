angular.module('shop', [
    'professional.app',
    'purchase.orders',
    'customer.address',
    'customer.address.templates',
    'customer.profile',
    'checkpoint.recaptcha',
    'shop.templates'
]).config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/address/add', {templateUrl: 'partials/address/add-address.html'})
        .when('/address/:label', {templateUrl: 'partials/address/edit-address.html'})
        .when('/account', {templateUrl: 'partials/account.html'})
        .when('/profile', {redirectTo: '/account'})
        .when('/order-history', {templateUrl: 'partials/shop/order-history.html', controller: 'BinartaSearchController as searchCtrl'})
        .when('/order/:owner/:id', {templateUrl: 'partials/shop/order-details.html', controller: 'ViewPurchaseOrderController as viewOrderCtrl'})
        .when('/:locale/address/add', {templateUrl: 'partials/address/add-address.html'})
        .when('/:locale/address/:label', {templateUrl: 'partials/address/edit-address.html'})
        .when('/:locale/account', {templateUrl: 'partials/account.html'})
        .when('/:locale/profile', {redirectTo: '/account'})
        .when('/:locale/order-history', {templateUrl: 'partials/shop/order-history.html', controller: 'BinartaSearchController as searchCtrl'})
        .when('/:locale/order/:owner/:id', {templateUrl: 'partials/shop/order-details.html', controller: 'ViewPurchaseOrderController as viewOrderCtrl'})
}]);