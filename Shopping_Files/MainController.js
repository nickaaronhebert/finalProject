app.controller('MainController', ['$scope', function($scope) {
    $scope.dinerName = "Hebert Family Shopping List";
    $scope.today = new Date();
    $scope.ShoppingList = [];
    $scope.AddToShoppingList = function(newname) {
        console.log(newname);
       $scope.ShoppingList.push(
           {
               name:newname
           }
           )
    };
     $scope.removeItem = function(nameToDelete){
         console.log(nameToDelete);
         var i = 0;
         var index = 0;
         for(var i = $scope.ShoppingList.length; i--;){
             console.log(i)
	        if ($scope.ShoppingList[i].name === nameToDelete) $scope.ShoppingList.splice(i, 1);
}
     }


    $scope.category = [
        {
            title1: "fruits",
            items: [
                {
                    name: 'Bananas',
                    ImgURL: "http://www.esbtrib.com/wp-content/uploads/2015/09/bananas1.jpeg"
                },
                {
                    name: 'Apples',
                    ImgURL: "http://www.macdentalcare.com/pub/photo/2014-09-apple.jpg"
                },
                {
                    name: 'Grapes',
                    ImgURL: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Table_grapes_on_white.jpg'
                },
                 {
                    name: 'Bananas',
                    ImgURL: "http://www.esbtrib.com/wp-content/uploads/2015/09/bananas1.jpeg"
                },
                {
                    name: 'Apples',
                    ImgURL: "http://www.macdentalcare.com/pub/photo/2014-09-apple.jpg"
                },
                {
                    name: 'Grapes',
                    ImgURL: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Table_grapes_on_white.jpg'
                },
                {
                    name: 'Bananas',
                    ImgURL: "http://www.esbtrib.com/wp-content/uploads/2015/09/bananas1.jpeg"
                },
                {
                    name: 'Apples',
                    ImgURL: "http://www.macdentalcare.com/pub/photo/2014-09-apple.jpg"
                },
                {
                    name: 'Grapes',
                    ImgURL: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Table_grapes_on_white.jpg'
                },
                 {
                    name: 'Bananas',
                    ImgURL: "http://www.esbtrib.com/wp-content/uploads/2015/09/bananas1.jpeg"
                },
                {
                    name: 'Apples',
                    ImgURL: "http://www.macdentalcare.com/pub/photo/2014-09-apple.jpg"
                },
                {
                    name: 'Grapes',
                    ImgURL: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Table_grapes_on_white.jpg'
                }
            ],
            title1: "vegetables",
            items: [
                {
                    name: 'Bananas',
                    ImgURL: "http://www.esbtrib.com/wp-content/uploads/2015/09/bananas1.jpeg"
                },
                {
                    name: 'Apples',
                    ImgURL: "http://www.macdentalcare.com/pub/photo/2014-09-apple.jpg"
                },
                {
                    name: 'Grapes',
                    ImgURL: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Table_grapes_on_white.jpg'
                },
                 {
                    name: 'Bananas',
                    ImgURL: "http://www.esbtrib.com/wp-content/uploads/2015/09/bananas1.jpeg"
                },
                {
                    name: 'Apples',
                    ImgURL: "http://www.macdentalcare.com/pub/photo/2014-09-apple.jpg"
                },
                {
                    name: 'Grapes',
                    ImgURL: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Table_grapes_on_white.jpg'
                },
                {
                    name: 'Bananas',
                    ImgURL: "http://www.esbtrib.com/wp-content/uploads/2015/09/bananas1.jpeg"
                },
                {
                    name: 'Apples',
                    ImgURL: "http://www.macdentalcare.com/pub/photo/2014-09-apple.jpg"
                },
                {
                    name: 'Grapes',
                    ImgURL: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Table_grapes_on_white.jpg'
                },
                 {
                    name: 'Bananas',
                    ImgURL: "http://www.esbtrib.com/wp-content/uploads/2015/09/bananas1.jpeg"
                },
                {
                    name: 'Apples',
                    ImgURL: "http://www.macdentalcare.com/pub/photo/2014-09-apple.jpg"
                },
                {
                    name: 'Grapes',
                    ImgURL: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Table_grapes_on_white.jpg'
                }
            ]
            }
        ];
        
        
}]);
