'use strict';

class QuestNewCtrl {
  constructor ($scope, Restangular) {

    $scope.baseUrl = 'http://localhost:3000';

    $scope.events = this;
    $scope.editable = true;

    $scope.baseUrl = 'http://localhost:3000';
    Restangular.one('quests/new').get().then( responseObject =>
      $scope.quest = responseObject
    );

  }


  updateQuest(quest) {
    quest.put();
  }


}

QuestNewCtrl.$inject = ['$scope', 'Restangular', '$stateParams'];

export default QuestNewCtrl;
