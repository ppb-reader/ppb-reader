
angular.module("routes",["ngRoute"])
    .config(["$routeProvider",function($routeProvider){
        $routeProvider.when("/",{//更目录
            templateUrl:"/tpl/index.html",
            controller:"sy-index"
        }).when("/shezhi",{//设置
            templateUrl:"/tpl/shezhi.html",
            controller:"sz-shezhi"
        }).when("/shucheng",{//书城
            templateUrl:"/tpl/shujia.html",
            controller:"sy-index"
        }).when("/bangdan",{//书城里榜单
                templateUrl:"/tpl/bangdan.html",
                controller:"sc-bangdan"
        }).when("/fenglei", {//书城中的分类
            templateUrl: "/tpl/fenglei.html",
            controller: "sc-fenglei"
        }).when("/wode",{//书城中的分类
            templateUrl:"/tpl/personal.html",
            controller:"wd-personal"
        })
    }])