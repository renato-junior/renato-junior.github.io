var app = angular.module('routeApp', ['ngRoute']);

app.config(function($routeProvider) {
  
  $routeProvider.when("/", 
    {
      templateUrl: "en/inicial.html"
    }
  )
  .when("/academic", 
    {
      templateUrl: "en/academico.html"
    }
  )
  .when("/websites", 
    {
      templateUrl: "en/websites.html"
    }
  )
  .when("/apps", 
    {
      templateUrl: "en/apps.html"
    }
  )
  .when("/contact", 
    {
      templateUrl: "en/contact.html"
    }
  )
  .when("/tech", 
    {
      templateUrl: "en/tech.html"
    }
  )
  .otherwise(
    {
      redirectTo: "/"    
    }
  );

});