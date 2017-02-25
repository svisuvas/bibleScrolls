var bibleScrollsApp = angular.module('bibleScrollsApp', ['ngRoute','ngResource', 'ui.bootstrap']);

bibleScrollsApp.controller('bibleScrollsController', function($scope) {
	$scope.headingTitle = "Living Word Bible Ministry Carousel";
	$scope.myInterval = 10000;
	$scope.slides = [
		{image: './resources/static/images/images.jpeg', 
		verse:'We know that in everything God works for good with those who love him, who are called according to his purpose. (Romans 8:28)'},
		{image: './resources/static/images/images001.jpg', 
		verse:'As a father pities his children, so the Lord pities those who fear him. (Psalms 103:13)'}
	];
});		 