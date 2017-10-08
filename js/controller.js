app
	.controller("HomeController", function($scope, $firebaseArray) {
		console.log("This is Home Controller");

		$scope.save_todo = function(todo) {
			var title = todo.title;
			var desc = todo.desc;

			console.log("Title: " + title);
			console.log("Description: " + desc);

			// Save to Firebase
			// 1. Point to root of the database
			var ref = firebase.database().ref();

			// 2. make the database into firebaseArray
			$scope.save_data = $firebaseArray(ref);

			// 3. Add the data to firebaseArray
			$scope.save_data.$add(todo)
			// $scope.save_data.$add({ title: title, description: desc});

			// Clear the form
			$scope.todo.title = "";
			$scope.todo.desc = "";
		}

	})

	.controller("ViewListController", ["$scope", "$firebaseArray", function($scope, $firebaseArray) {
		console.log("This is ViewList Controller");

		// Read from Firebase
		// 1. Point to root of the database
		var ref = firebase.database().ref();
		$scope.todo_list = $firebaseArray(ref);

	}])