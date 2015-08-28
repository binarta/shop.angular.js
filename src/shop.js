angular.module('shop', [
    'ngRoute',
    'basket',
    'purchase.orders',
    'customer.address',
    'customer.address.templates',
    'customer.profile',
    'checkpoint.recaptcha',
    'vcRecaptcha',
    'shop.templates'
]).config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/basket', {templateUrl: 'partials/shop/basket.html'})
        .when('/checkout/address', {templateUrl: 'partials/shop/order-address.html'})
        .when('/address/add', {templateUrl: 'partials/address/add-address.html'})
        .when('/address/:label', {templateUrl: 'partials/address/edit-address.html'})
        .when('/account', {templateUrl: 'partials/account.html'})
        .when('/profile', {redirectTo: '/account'})
        .when('/summary', {templateUrl: 'partials/shop/summary.html'})
        .when('/order-confirmation', {templateUrl: 'partials/shop/order-confirmation.html'})
        .when('/order-history', {templateUrl: 'partials/shop/history.html', controller: 'ListPurchaseOrderController'})
        .when('/admin/orders', {templateUrl: 'partials/shop/clerk/history.html', controller: 'ListPurchaseOrderController'})
        .when('/admin/order/:owner/:id', {templateUrl: 'partials/shop/order-details.html', controller: 'ViewPurchaseOrderController'})
        .when('/:locale/basket', {templateUrl: 'partials/shop/basket.html'})
        .when('/:locale/checkout/address', {templateUrl: 'partials/shop/order-address.html'})
        .when('/:locale/address/add', {templateUrl: 'partials/address/add-address.html'})
        .when('/:locale/address/:label', {templateUrl: 'partials/address/edit-address.html'})
        .when('/:locale/account', {templateUrl: 'partials/account.html'})
        .when('/:locale/profile', {redirectTo: '/account'})
        .when('/:locale/summary', {templateUrl: 'partials/shop/summary.html'})
        .when('/:locale/order-confirmation', {templateUrl: 'partials/shop/order-confirmation.html'})
        .when('/:locale/order-history', {templateUrl: 'partials/shop/history.html', controller: 'ListPurchaseOrderController'})
        .when('/:locale/admin/orders', {templateUrl: 'partials/shop/clerk/history.html', controller: 'ListPurchaseOrderController'})
        .when('/:locale/admin/order/:owner/:id', {templateUrl: 'partials/shop/order-details.html', controller: 'ViewPurchaseOrderController'})
}]);