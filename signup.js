var app=angular.module('signupApp',['mainApp']);
app.controller('signupCtrl',function($scope) {
	
	$scope.check=function() {
			var flag=0;
			var uname=$scope.username;
			var pass=$scope.password;
			for(var key in log) 
			{
  				if($scope.username==key)
				{
				 	flag=1; 
                     break;
                }
            }
			if(flag!=1)			
            {	
					log[$scope.username]=$scope.password;
			}
			else    
            {    
                alert("Username already exists");	
            }
        };
	});