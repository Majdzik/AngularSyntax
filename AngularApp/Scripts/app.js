(function () {
    'use strict';
    var controllerId = 'mainController';
    angular.module('myApp').controller(controllerId, ['$scope', mainController]);
    function mainController($scope) {
        var vm = this;
        vm.activate = activate;
        function activate() {
        }

        vm.items=[
            {id:'1158AC91-9600-428F-BC0D-EE6B15EA30DE',name:'Filip',number:'0766554464'},
            { id: '2158AC91-9600-428F-BC0D-EE6B15EA30DE', name: 'Jan', number: '0766554465' },
            { id: '3158AC91-9600-428F-BC0D-EE6B15EA30DE', name: 'Jessica', number: '0766554466' }
        ];
        //$scope.currentItem={}
        //#region Internal Methods        
        //#endregion
    }
})();