'use strict';

class QuestIndexCtrl {
  constructor ($scope, Restangular) {

    $scope.baseUrl = 'http://localhost:3000';

    Restangular.all('quests').getList().then( responseObject =>
      $scope.quests = responseObject
    );

  }
}

QuestIndexCtrl.$inject = ['$scope', 'Restangular'];

export default QuestIndexCtrl;
