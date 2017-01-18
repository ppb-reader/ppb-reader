angular.module("controllers",["services"])
    .controller("sy-index",["$scope","$http",function($scope,$http){
        $http({url:"/sy-ajaxNews"}).then(function(data){
            $scope.data=data.data;
        })
    }])
    .controller("sz-shezhi",["$scope","$http",function($scope,$http){
        $http({url:"/sz-shezhi"}).then(function(data){
            $scope.data=data;
        })
    }])
    .controller("sj-shucheng",["$scope","$http",function($scope,$http){
        $http({url:"/sj-shucheng"}).then(function(data){
            $scope.data=data;
        })
    }])
    .controller("sc-bangdan",["$scope","$http",function($scope,$http){
        $http({url:"/sc-bangdan"}).then(function(data){
            $scope.data=data;
        })
    }])
    .controller("sc-fenglei",["$scope","$http",function($scope,$http){
        $http({url:"/sc-fenglei"}).then(function(data){
            $scope.data=data;
        })
    }])
    // .controller("regcheck",["$scope","$http",function($scope,$http){
    //     alert(1)
    //     $http({url:"/regcheck"}).then(function(data){//注册成功后返回的信息
    //         $scope.data=data;
    //     })
    // }])