var appPT = angular.module('routeAppPT', ['ngRoute']);

appPT.config(function($routeProvider) {
  
  $routeProvider.when("/", 
    {
      templateUrl: "pt/inicial.html"
    }
  )
  .when("/academic", 
    {
      templateUrl: "pt/academico.html"
    }
  )
  .when("/websites", 
    {
      templateUrl: "pt/websites.html"
    }
  )
  .when("/apps", 
    {
      templateUrl: "pt/apps.html"
    }
  )
  .when("/contact", 
    {
      templateUrl: "pt/contact.html"
    }
  )
  .when("/tech", 
    {
      templateUrl: "pt/tech.html"
    }
  )
  .otherwise(
    {
      redirectTo: "/"    
    }
  );

});

var appEN = angular.module('routeAppEN', ['ngRoute']);

appEN.config(function($routeProvider) {
  
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