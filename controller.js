	var app=angular.module('loginApp',['mainApp']);
	app.controller('loginCtrl',function($scope) {
	
	$scope.check=function() {
			
			var uname=$scope.username;
			var pass=$scope.password;
			for(var key in log) 
			{
  				if($scope.username==key)
				{   
				  	if($scope.password==log[key])
					{
				 		 alert("Welcome");
						 break; 
					}
					else
					{	
						alert("Wrong Credentials!");
					}
				}
			}
		};
	});

  
 
			

