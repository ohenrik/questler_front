'use strict';

class QuestEditCtrl {
  constructor ($scope, Restangular, $stateParams) {

    $scope.baseUrl = 'http://localhost:3000';

    $scope.events = this;
    $scope.editable = true;

    $scope.baseUrl = 'http://localhost:3000';
    Restangular.one('quests',  $stateParams.id).get().then( responseObject =>
      $scope.quest = responseObject
    );

  }


  updateQuest(quest) {
    quest.put();
  }


}

QuestEditCtrl.$inject = ['$scope', 'Restangular', '$stateParams'];

export default QuestEditCtrl;
