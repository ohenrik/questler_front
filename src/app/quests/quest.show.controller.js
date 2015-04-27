'use strict';

class QuestShowCtrl {
  constructor ($scope, Restangular, $stateParams) {

    $scope.baseUrl = 'http://localhost:3000';

    Restangular.one('quests',  $stateParams.id).get().then( responseObject =>
      $scope.quest = responseObject
    );

  }
}

QuestShowCtrl.$inject = ['$scope', 'Restangular', '$stateParams'];

export default QuestShowCtrl;
