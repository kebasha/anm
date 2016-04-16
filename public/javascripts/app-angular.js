'use strict'

var app = angular.module('loveApp',['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise("/home");

	$stateProvider.state('home',{
		url:'/home',
		templateUrl:'views/home.ejs',
		controller: 'homeController'
	}).state('project',{
		url:'/project',
		templateUrl:'views/project.ejs'
	}).state('moving',{
		url:'/moving',
		templateUrl:'views/moving.ejs'
	}).state('me',{
		url:'/me',
		templateUrl:'views/me.ejs'
	}).state('/home',{
		url:'/home',
		templateUrl:'views/home.ejs'
	});
}]);

app.run(['$rootScope', '$location', '$log', function($rootScope, $location, $log){
	$rootScope.path = $location.path();
	$rootScope.$on('$locationChangeSuccess', function(){
		$rootScope.path = $location.path();
	});
}]);