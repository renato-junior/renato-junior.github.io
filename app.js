var app = angular.module('routeApp', ['ngRoute']);

app.config(function($routeProvider) {
  
  $routeProvider.when("/", 
    {
      templateUrl: "inicial.html"
    }
  )
  .when("/academic", 
    {
      templateUrl: "academico.html"
    }
  )
  .when("/websites", 
    {
      templateUrl: "websites.html"
    }
  )
  .when("/apps", 
    {
      templateUrl: "apps.html"
    }
  )
  .when("/contact", 
    {
      templateUrl: "contact.html"
    }
  )
  .otherwise(
    {
      redirectTo: "/"    
    }
  );
});