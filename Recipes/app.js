var app = window.angular.module('app', [])

app.controller('mainCtrl', mainCtrl)


function mainCtrl ($scope, recipeBook) {

$scope.AddMenuItem = function() {
    console.log("fdsa");
    $scope.recipe.push({name:$scope.DishInput, ImageUrl:$scope.ImageInput, directions[0]:$scope.InstructionInput, ingredients:$scope.IngredientsInput});
};

  $scope.recipe = []

  recipeBook.get()
    .then(function (data) {
      $scope.recipe = data
    })
}