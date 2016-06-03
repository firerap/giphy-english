(function() {
	'use strict';
	angular
		.module('app.ngEnter')
		.directive('ngEnter', ngEnter);

	function ngEnter() {
		return function(scope, element, attrs) {
			element.bind('keydown keypress', function(event) {
				if (event.which === 13) {
					scope.$apply(function() {
						scope.$evalAsync(attrs.ngEnter, {
							$event: event
						});
					});
					event.preventDefault();
				}
			});
		};
	}
}());
