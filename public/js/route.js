angular.module("routes",["ngRoute"])
    .config(["$routeProvider",function($routeProvider){
        $routeProvider.when("/",{//更目录
            templateUrl:"/tpl/bookjia.html",
            controller:"sy-index"
        }).when("/shezhi",{//设置
            templateUrl:"/tpl/shezhi.html",
            controller:"sz-shezhi"
        }).when("/shucheng",{//书城
            templateUrl:"/tpl/bangdanlist.html",
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
        }).when("/booksearch",{//书架搜索
            templateUrl:"/tpl/booksearch.html",
            controller:"wd-booksearch"
        }).when("/show",{//书本简介
            templateUrl:"/tpl/show.html",
            controller:"wd-booksearch"
        })
    }])