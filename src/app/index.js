'use strict';

import MainCtrl from './main/main.controller';

import QuestIndexCtrl from './quests/quest.index.controller';
import QuestShowCtrl from './quests/quest.show.controller';
import QuestEditCtrl from './quests/quest.edit.controller';
import QuestNewCtrl from './quests/quest.new.controller';

import NavbarCtrl from '../app/components/navbar/navbar.controller';


angular.module('questler', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'restangular', 'ui.router', 'xeditable', 'monospaced.elastic'])
  .controller('MainCtrl', MainCtrl)
  .controller('NavbarCtrl', NavbarCtrl)
  .controller('QuestIndexCtrl', QuestIndexCtrl)
  .controller('QuestShowCtrl', QuestShowCtrl)
  .controller('QuestNewCtrl', QuestNewCtrl)
  .controller('QuestEditCtrl', QuestEditCtrl)

  .config(function ($stateProvider, $urlRouterProvider, RestangularProvider) {
    RestangularProvider.setBaseUrl('http://localhost:3000');
    RestangularProvider.setRequestSuffix('.json');
    RestangularProvider.setDefaultHeaders({'X-CSRF-Token': 'QDRkhWX5M76LIbcw38Mt9Q', 'X-CSRF-Param': 'mI1h7eI0CHUKuDpO2qcYyW164874yedGe4epZ0dHol9JWf1nqbOx2ICtN%2FpOtIei52mYcDKHEE07A%2BiKUh77Lw%3D%3D'});

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('quests', {
        url: '/quests',
        templateUrl: 'app/quests/index.html',
        controller: 'QuestIndexCtrl'
      })
      .state('edit_quest', {
        url: '/quests/:id/edit',
        templateUrl: 'app/quests/edit.html',
        controller: 'QuestEditCtrl'
      })
      .state('new_quest', {
        url: '/quests/new',
        templateUrl: 'app/quests/edit.html',
        controller: 'QuestNewCtrl'
      })
      .state('quest', {
        url: '/quests/:id',
        templateUrl: 'app/quests/show.html',
        controller: 'QuestShowCtrl'
      });

    //$urlRouterProvider.otherwise('quests');
  })


  .run(function(editableOptions, editableThemes) {
    // set `default` theme
    editableOptions.theme = 'default';
    // overwrite submit button template
    editableThemes['default'].submitTpl = '<button type="submit">ok</button>';
  });
;
