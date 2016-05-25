app.controller('MainController', ['$scope', '$window', function($scope, $window) {

	$scope.formData = {
		maxIndex: 0
	};

	$scope.indices = function(){
		var indices = [];
		for(var i = 0; i <= $scope.formData.maxIndex; i++) indices.push(i);
		return indices;
	};

	$scope.addPerson = function(){
		$scope.formData.maxIndex++;
	}

    $scope.submit = function(form) {
        $window.alert("bedrijfsnaam: " + this.form.nameCompany.$modelValue + ", KvK: " + this.form.kvk.$modelValue + ", BTW: " + this.form.btw.$modelValue);
    };

	$scope.details = { 
		nameFirst: "Voornaam",
		nameLast: "Achternaam",
		email: "Email",
		nameCompany: "Bedrijfsnaam",
		kvkCompany: "KVK",
		btwCompany: "BTW"
	};
				
	$scope.buttons = {		
		addPerson: "Persoon toevoegen",
		addCompany: "Ik wil mijn bedrijf inschrijven",
		save: "Inschrijven"	
	};

	$scope.errors = {
		nameFirstEmpty: "* U heeft nog geen naam ingevuld",
		nameLastEmpty: "* U heeft nog geen achternaam ingevuld",
		emailEmpty: "* U heeft nog geen email ingevuld",
		emailInvalid: "* Dit is een ongeldige emailadres",
		nameCompanyEmpty: "* U heeft nog geen bedrijfsnaam ingevuld",
		kvkCompanyEmpty: "* U heeft nog geen KVK nummer ingevuld",
		kvkCompanyInvalid: "* Dit is een ongeldige KVK nummer",
		btwCompanyEmpty: "* U heeft nog geen BTW nummer ingevuld",
		btwCompanyInvalid: "* Dit is een ongeldige BTW nummer"
	};
	
}]);