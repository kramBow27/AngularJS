var app = angular.module('myApp', []);
app.controller('myController', function ($scope) {
  $scope.gmail = {
    username: '',
    email: '',
  };

  $scope.onGoogleLogin = function () {
    gapi.load('auth2', function () {
      gapi.auth2
        .init({
          client_id:
            '954969099855-7rkvm6c0mu0t16dqtcme743mcu0td1ck.apps.googleusercontent.com',
          scope: 'profile email',
        })
        .then(
          function () {
            gapi.auth2.getAuthInstance().signIn();
          },
          function (error) {
            console.log(error);
          }
        );
    });
  };
});
