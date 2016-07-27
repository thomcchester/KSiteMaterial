MakeUpp.controller('InputController',  ['$scope', '$log', '$http', '$window', '$mdSidenav', "$mdDialog", "$mdMedia", 'ClientService',function($scope, $log, $http, $window, $mdSidenav, $mdDialog, $mdMedia, ClientService) {
    //Independent Variables
    var clientService = ClientService;

    $scope.toggleMenu = function() {
        $mdSidenav('left').toggle();
    };




$scope.inputData = {};

$scope.minMax = {};

$scope.getDefaults = function() {
  $http.get("/defaults").then(function(response){
      defaultVariables = response.data[0];
      $scope.minMax = defaultVariables;

      $scope.inputData.TopHeaderText= defaultVariables.TopHeaderText;
      $scope.inputData.monthlyRentTenant= defaultVariables.monthlyRentTenantDef;
      $scope.inputData.targetPrice= defaultVariables.targetPriceDef;
      $scope.inputData.downPaymentPercentage= defaultVariables.downPaymentPercentageDef;
      $scope.inputData.mortgageRate= defaultVariables.mortgageRateDef;
      $scope.inputData.yearsAmmoritized= defaultVariables.yearsAmmoritizedDef;
      $scope.inputData.income= defaultVariables.incomeDef;
      $scope.inputData.mortgageYears= defaultVariables.mortgageYearsDef;
      $scope.inputData.vacancy= defaultVariables.vacancyDef;
      $scope.inputData.propertyTax= defaultVariables.propertyTaxDef;
      $scope.inputData.assocDues= defaultVariables.assocDuesDef;
      $scope.inputData.management= defaultVariables.managementDef;
      $scope.inputData.misc= defaultVariables.miscDef;
      $scope.inputData.insuranceAnnual= defaultVariables.insuranceAnnualDef;
      $scope.inputData.utils= defaultVariables.utilsDef;
      $scope.inputData.legalAccounting= defaultVariables.legalAccountingDef;
      $scope.inputData.taxBracket= defaultVariables.taxBracketDef;
      $scope.inputData.repairValue= defaultVariables.repairValueDef;
      $scope.inputData.years= defaultVariables.yearsDef;
      $scope.inputData.maritalStatus = false;
      $scope.inputData.zipCode = defaultVariables.zipCode;
      $scope.inputData.appreciationRate =defaultVariables.appreciationRateDef;
      $scope.inputData.appreciationRateHome =defaultVariables.appreciationRateHomeDef;
      $scope.inputData.renterInsurance = defaultVariables.renterInsuranceDef;
      $scope.inputData.duplexBuy = defaultVariables.duplexBuyDef;

  });
};
$scope.getDefaults();
console.log("duplexBuy", $scope.inputData.duplexBuy)

var service = ClientService;

$scope.$watchCollection('inputData', function(newVal, oldVal){
    console.log(newVal, "newval");
    console.log("duplexBuy", $scope.inputData.duplexBuy);

});

    $scope.submitEmail = function() {
        data = {
            email: $scope.submit.email,
            maritalStatus: $scope.inputData.maritalStatus,
            zipCode: $scope.inputData.zipCode,
            income: $scope.inputData.income,
            targetPropertyPrice: $scope.inputData.targetPropertyPrice,
            followup: ""
        };
        clientService.submitEmail(data);
        $scope.submit.email = "";
    }


}]);
