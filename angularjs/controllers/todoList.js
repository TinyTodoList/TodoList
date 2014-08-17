angular.module("shoppingApp")
.controller("shoppingCtrl",function ($scope)
{
    $scope.todo = {
        items : [
       
       ]
    };
    
     $scope.incompleteCount = function () {
        var count = 0;
        angular.forEach($scope.todo.items, function (item) {
            if (!item.done) { count++ }
        });
        return count;
        
    }

    $scope.warningLevel = function () {
        return $scope.incompleteCount() < 3 ? "label-success" : "label-warning";
    }

    $scope.addNewItem = function (actionText) {
        $scope.todo.items.push({ action: actionText, done: false });
    }
    $scope.ShowRemain = function() {
        var count = $scope.incompleteCount();
        return count == 0 ? "" : count + " / " + $scope.todo.items.length ;
    }
       
});
