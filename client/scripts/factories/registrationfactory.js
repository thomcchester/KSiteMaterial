MakeUppRegistration.factory('RegisterFactory', ['$http', function($http){

  var data = {};

  var postData = function(username, password){
    var registerObject = {};
    registerObject.username = username;
    registerObject.password = password;
    $http.post('/reg', registerObject).success(function(response){
      console.log("here it is");
    });
  }

  return {
    postData : postData
  };
}]);
