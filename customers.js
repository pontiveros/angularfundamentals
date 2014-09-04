function getCustomer() {
	customers = "Pedro Ontiveros.";

	return customers;
}


Name:
		<input type="text" ng-model="name" placeholder="Enter a name here">
      	<hr>
      	<h1>Hello {{name}}!</h1>
      	<br>

      	<input type="text" ng-model="lastname" placeholder="Lastname here...">
      	<br>
      	<h2>Lastname: {{lastname}}</h2>
      	<br>

      	<div ng-controller="pilotController">
      		<input type="button" value="Click me!" ng-click="showAlert()">
  		</div>
  		<br>
  		<div ng-controller="customerController">
  			<h3>Filter:</h3>
  			<input type="text" ng-model="searchText">
  			<br>
  			<h3>Customers</h3>
  			<table style="border-style: solid; border-width: 1px;">
  				<tr ng-repeat="cust in customers | filter: searchText">
  					<td>{{ cust.name }}</td>
  					<td>{{ cust.total | currency }}</td>
  				</tr>
  			</table>
  		</div>