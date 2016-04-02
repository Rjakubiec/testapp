'use strict';

/**
 * @ngdoc overview
 * @name testApp
 * @description
 * # testApp
 *
 * Main module of the application.
 */
angular
  .module('testApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'ui.bootstrap.modal'
    
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/galeria', {
        templateUrl: 'views/galeria.html',
        controller: 'GaleriaCtrl',
        controllerAs: 'galeria'
      })
      .when('/plan_lekcji', {
        templateUrl: 'views/planlekcji.html',
        controller: 'PlanlekcjiCtrl',
        controllerAs: 'planlekcji'
      })
      .when('/dzwonki', {
        templateUrl: 'views/dzwonki.html',
        controller: 'DzwonkiCtrl',
        controllerAs: 'dzwonki'
      })
      .when('/nauczyciele', {
        templateUrl: 'views/nauczyciele.html',
        controller: 'NauczycieleCtrl',
        controllerAs: 'nauczyciele'
      })
      .when('/o_szkole', {
        templateUrl: 'views/oszkole.html',
        controller: 'OszkoleCtrl',
        controllerAs: 'oszkole'
      })
      .when('/biblioteka', {
        templateUrl: 'views/biblioteka.html',
        controller: 'BibliotekaCtrl',
        controllerAs: 'biblioteka'
      })
      .when('/kontakt', {
        templateUrl: 'views/kontakt.html',
        controller: 'KontaktCtrl',
        controllerAs: 'kontakt'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).run(function ($rootScope){
      
      $rootScope.menus =[
          {'nazwa' : 'AKTUALNOŚCI', 'link':'/'},
          {'nazwa' : 'GALERIA','link':'galeria'},
          {'nazwa' : 'PLAN LEKCJI','link':'plan_lekcji'},
          {'nazwa' : 'DZWONKI','link':'dzwonki'},
          {'nazwa' : 'NAUCZYCIELE','link':'nauczyciele'},
          {'nazwa' : 'O SZKOLE','link':'o_szkole'},
          {'nazwa' : 'BIBLIOTEKA','link':'biblioteka'},
          {'nazwa' : 'KONTAKT','link':'kontakt'}
      ];
      
  });
