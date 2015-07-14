angular.module('shop', [
    'ngRoute',
    'ngSanitize',
    'ngAnimate',
    'ngTouch',
    'basket',
    'purchase.orders',
    'customer.address',
    'customer.profile',
    'checkpoint.recaptcha',
    'vcRecaptcha'
]).config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/basket', {templateUrl: 'partials/shop/basket.html'})
        .when('/checkout/address', {templateUrl: 'partials/shop/order-address.html'})
        .when('/address/add', {templateUrl: 'partials/address/add-address.html', controller: 'CustomerAddressController'})
        .when('/address/:label', {templateUrl: 'partials/address/edit-address.html', controller: 'EditCustomerAddressController'})
        .when('/account', {templateUrl: 'partials/account.html'})
        .when('/profile', {redirectTo: '/account'})
        .when('/summary', {templateUrl: 'partials/shop/summary.html'})
        .when('/order-confirmation', {templateUrl: 'partials/shop/order-confirmation.html'})
        .when('/order-history', {templateUrl: 'partials/shop/history.html', controller: 'ListPurchaseOrderController'})
        .when('/admin/orders', {templateUrl: 'partials/shop/clerk/history.html', controller: 'ListPurchaseOrderController'})
        .when('/admin/order/:owner/:id', {templateUrl: 'partials/shop/order-details.html', controller: 'ViewPurchaseOrderController'})
        .when('/:locale/basket', {templateUrl: 'partials/shop/basket.html'})
        .when('/:locale/checkout/address', {templateUrl: 'partials/shop/order-address.html'})
        .when('/:locale/address/add', {templateUrl: 'partials/address/add-address.html', controller: 'CustomerAddressController'})
        .when('/:locale/address/:label', {templateUrl: 'partials/address/edit-address.html', controller: 'EditCustomerAddressController'})
        .when('/:locale/account', {templateUrl: 'partials/account.html'})
        .when('/:locale/profile', {redirectTo: '/account'})
        .when('/:locale/summary', {templateUrl: 'partials/shop/summary.html'})
        .when('/:locale/order-confirmation', {templateUrl: 'partials/shop/order-confirmation.html'})
        .when('/:locale/order-history', {templateUrl: 'partials/shop/history.html', controller: 'ListPurchaseOrderController'})
        .when('/:locale/admin/orders', {templateUrl: 'partials/shop/clerk/history.html', controller: 'ListPurchaseOrderController'})
        .when('/:locale/admin/order/:owner/:id', {templateUrl: 'partials/shop/order-details.html', controller: 'ViewPurchaseOrderController'})
}]);