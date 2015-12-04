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
        ]
        vm.filip='majdzik';
        vm.options1=[
            {nid:1,id:'1158AC11-9600-428F-BC0D-EE6B15EA30DE',text:'option1'},
            {nid:2,id:'1158AC21-9600-428F-BC0D-EE6B15EA30DE',text:'option2'},
            {nid:3,id:'1158AC31-9600-428F-BC0D-EE6B15EA30DE',text:'option3'},
            {nid:4,id:'1158AC41-9600-428F-BC0D-EE6B15EA30DE',text:'option4'},
            {nid:5,id:'1158AC51-9600-428F-BC0D-EE6B15EA30DE',text:'option5'},
            {nid:6,id:'1158AC61-9600-428F-BC0D-EE6B15EA30DE',text:'option6'},
            {nid:7,id:'1158AC71-9600-428F-BC0D-EE6B15EA30DE',text:'option7'},
            {nid:8,id:'1158AC81-9600-428F-BC0D-EE6B15EA30DE',text:'option8'},
            {nid:9,id:'1158AC91-9600-428F-BC0D-EE6B15EA30DE',text:'option9'},
            {nid:0,id:'1158AC01-9600-428F-BC0D-EE6B15EA30DE',text:'option0'}
        ]
        //$scope.currentItem={}
        //#region Internal Methods        
        //#endregion
    }
})();