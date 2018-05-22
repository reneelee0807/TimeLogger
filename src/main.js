window.angular
  .module('myApp', [])
  .controller('MainController', MainController)
  .directive('onReadFile', OnReadFile.directiveFactory)
  .directive('alternativeDynamicTable', AlternativeDynamicTable.directiveFactory)