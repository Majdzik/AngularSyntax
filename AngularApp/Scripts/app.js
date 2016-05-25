(function () {
    'use strict';
    var controllerId = 'mainController';
    angular.module('myApp').controller(controllerId, ['$scope', mainController]);

    function mainController($scope) {
        var vm = this;
        vm.activate = activate;

        function activate() {
        }

        vm.items = [
            { id: '1158AC91-9600-428F-BC0D-EE6B15EA30DE', name: 'Filip', number: '0766554464' },
            { id: '2158AC91-9600-428F-BC0D-EE6B15EA30DE', name: 'Jan', number: '0766554465' },
            { id: '3158AC91-9600-428F-BC0D-EE6B15EA30DE', name: 'Jessica', number: '0766554466' }
        ]
        vm.filip = 'majdzik';
        vm.options1 = [
            { nid: 1, id: '1158AC11-9600-428F-BC0D-EE6B15EA30DE', text: 'option1' },
            { nid: 2, id: '1158AC21-9600-428F-BC0D-EE6B15EA30DE', text: 'option2' },
            { nid: 3, id: '1158AC31-9600-428F-BC0D-EE6B15EA30DE', text: 'option3' },
            { nid: 4, id: '1158AC41-9600-428F-BC0D-EE6B15EA30DE', text: 'option4' },
            { nid: 5, id: '1158AC51-9600-428F-BC0D-EE6B15EA30DE', text: 'option5' },
            { nid: 6, id: '1158AC61-9600-428F-BC0D-EE6B15EA30DE', text: 'option6' },
            { nid: 7, id: '1158AC71-9600-428F-BC0D-EE6B15EA30DE', text: 'option7' },
            { nid: 8, id: '1158AC81-9600-428F-BC0D-EE6B15EA30DE', text: 'option8' },
            { nid: 9, id: '1158AC91-9600-428F-BC0D-EE6B15EA30DE', text: 'option9' },
            { nid: 0, id: '1158AC01-9600-428F-BC0D-EE6B15EA30DE', text: 'option0' }
        ]

        console.log('$scope.myForm', $scope.myForm);
        //$scope.currentItem={}
        //#region Internal Methods        
        //#endregion
    };

    //delete mainController();
})();;

(function () {
    'use strict';
    var app = angular.module('myApp'),
        controllerId = '';

    app.directive('table', function($compile) {

    });

    app.directive('item', function ($compile) {
        function createTdElement(directive) {
            var table = angular.element('<table><tr><td ' + directive + '></td></tr></table>');
            return table.find('td');
        }

        function render(element, scope) {
            var column, html, i;
            for (i = 0; i < scope.columns.length; i++) {
                column = scope.columns[i];
                if (column.visible) {
                    html = $compile(createTdElement('column'))(scope);
                    element.append(html);
                }
            }
        }

        return {
            restrict: 'A',
            scope: {
                item: '=',
                columns: '='
            },
            controller: function ($scope, $element) {
                $scope.$watch(function () {
                    return $scope.columns;
                }, function (newvalue, oldvalue) {
                    if (newvalue !== oldvalue) {
                        $element.children().remove();
                        render($element, $scope);
                        $compile($element.contents())($scope);
                    }
                }, true);
            },
            compile: function () {
                return function (scope, element) {
                    render(element, scope);
                }

            }
        };

    });

    app.directive('column', function () {
        return {
            restrict: 'A',
            template: '{{item.id}}'
        }
    });
})