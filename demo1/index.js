/**
 * Created by hcnucai on 2016/10/21.
 */
var app = angular.module('app',[]);
//自定义服务
app.factory('httpGet',function ($http) {
    return {
        get:function (url,param) {
            return $http({
                method:"POST",
                url:url,
                params:param
            });
        }
    }
});

app.controller('ctrl',['$scope','httpGet',function ($scope,httpGet) {
$scope.http1 = function () {
    var url = "http://localhost:3000/users";
    var param = {name:1000};
 var promise = httpGet.get(url,param);
    promise.success(function (res) {

        $scope.name = res["name"];
        console.log(res);
    })
    promise.error(function () {
        $scope.name = "c";
    })
};
}
])
