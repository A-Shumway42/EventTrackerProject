window.addEventListener('load', function (e) {
	console.log("script.js is loaded. Let's get to work!");
	init();

});


function init() {
	var workoutListDiv = document.getElementById("workoutListDiv");
	var singleWorkoutDiv = document.getElementById('singleWorkoutDiv');
	var addWorkoutForm = document.getElementById('addWorkoutForm');
	var updateWorkoutForm = document.getElementById('updateWorkoutForm');
	var updateWorkoutDiv = document.getElementById('updateWorkoutDiv');
	var addWorkoutDiv = document.getElementById('addWorkoutDiv');
	var deleteWorkoutButton = document.getElementById('deleteSingleWorkoutButton');
	var targetMe = document.getElementById('targetMe');
	var deleteId = 0;
	var updatedWorkout = {};
	loadWorkouts()

	let addWorkoutSubmitButton = document.getElementById('addWorkout');
	addWorkoutSubmitButton.addEventListener(('click'), function (e) {
		e.preventDefault();
		var addWorkoutForm = document.getElementById('addWorkoutForm');
		let newWorkout = {
			workoutType: addWorkoutForm.workoutType.value,
			workoutStart: addWorkoutForm.workoutTimeStart.value,
			workoutEnd: addWorkoutForm.workoutTimeEnd.value,
			milesRan: Number(addWorkoutForm.milesRan.value),
			exercises: addWorkoutForm.exercises.value,
			setsPerWorkout: Number(addWorkoutForm.setsPerWorkout.value),
			repsPerWorkout: Number(addWorkoutForm.repsPerWorkout.value)
		};
		createWorkout(newWorkout);
	});

	let updateWorkoutButton = document.getElementById('updateWorkout');
	updateWorkoutButton.addEventListener('click', function (e) {
		e.preventDefault();
		let updatedWorkout = {
			id: Number(updateWorkoutForm.id.value),
			workoutType: updateWorkoutForm.workoutType.value,
			workoutStart: updateWorkoutForm.workoutTimeStart.value,
			workoutEnd: updateWorkoutForm.workoutTimeEnd.value,
			milesRan: Number(updateWorkoutForm.milesRan.value),
			exercises: updateWorkoutForm.exercises.value,
			setsPerWorkout: Number(updateWorkoutForm.setsPerWorkout.value),
			repsPerWorkout: Number(updateWorkoutForm.repsPerWorkout.value)
		};
		workoutListDiv.classList.toggle('d-none');
		singleWorkoutDiv.classList.toggle('d-none');
		addWorkoutDiv.classList.toggle('d-none');
		updateWorkoutDiv.classList.toggle('d-none');
		let xhr = new XMLHttpRequest();
		xhr.open('PUT', 'api/workouts');
		xhr.onreadystatechange = function () {
			if (xhr.readyState === 4) {
				if (xhr.status === 201) {

					loadWorkouts()

				}
			}
		}
		xhr.setRequestHeader('Content-type', 'application/json');
		xhr.send(JSON.stringify(updatedWorkout));
	});

	deleteWorkoutButton.addEventListener('click', function (e) {
		e.preventDefault();
		workoutListDiv.classList.toggle('d-none');
		singleWorkoutDiv.classList.toggle('d-none');
		addWorkoutDiv.classList.toggle('d-none');
		updateWorkoutDiv.classList.toggle('d-none');
		let xhr = new XMLHttpRequest();
		xhr.open('DELETE', 'api/workouts' + '/' + updateWorkoutForm.id.value);
		xhr.onreadystatechange = function () {
			if (xhr.readyState === 4) {
				if (xhr.status === 204) {

					loadWorkouts()

				}
			}
		}
		// xhr.setRequestHeader('Content-type', 'application/json');
		xhr.send();
	});

	let goToWorkoutListView = document.getElementById('toListView');
	goToWorkoutListView.addEventListener('click', function (e) {
		e.preventDefault();
		workoutListDiv.classList.toggle('d-none');
		singleWorkoutDiv.classList.toggle('d-none');
		addWorkoutDiv.classList.toggle('d-none');
		updateWorkoutDiv.classList.toggle('d-none');
		loadWorkouts();
	});
};

function loadWorkouts() {
	console.log("is this updating");
	let xhr = new XMLHttpRequest();
	xhr.open("GET", "api/workouts");
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let workouts = JSON.parse(xhr.responseText);
				console.log(workouts);
				showWorkouts(workouts)

			}
		}
	};
	xhr.send();
}

function showWorkouts(workouts) {
	createStatistics(workouts);
	workoutListDiv.innerHTML = "";
	for (const workout of workouts) {
		var thisWorkout = workout;
		console.log(workout);
		let table = document.createElement('table');
		workoutListDiv.appendChild(table);
		let tr = document.createElement('tr');
		tr.addEventListener('click', function (e) {
			initializeUpdateFormAndObject(workout);
			showSingleWorkout(workout);
		});
		tr.textContent = workout.workoutType;
		table.appendChild(tr);
		let td = document.createElement('td');
		tr.appendChild(td);



		if (workout.workoutStart) {
			let tr2 = document.createElement('tr');
			tr2.addEventListener('click', function (e) {
				initializeUpdateFormAndObject(workout);
				showSingleWorkout(workout);
			});
			let startTimeHeader = document.createElement('td');
			startTimeHeader.textContent = "Workout Start Time: " + workout.workoutStart.replace('T', ' ');
			tr2.appendChild(startTimeHeader);
			table.appendChild(tr2);
		}

		if (workout.workoutEnd) {
			let tr3 = document.createElement('tr');
			tr3.addEventListener('click', function (e) {
				initializeUpdateFormAndObject(workout);
				showSingleWorkout(workout);
			});
			let endTimeHeader = document.createElement('td');
			endTimeHeader.textContent = "Workout End Time: " + workout.workoutEnd.replace('T', ' ');
			tr3.appendChild(endTimeHeader);
			table.appendChild(tr3);
		}

		if (workout.milesRan) {
			let tr4 = document.createElement('tr');
			tr4.addEventListener('click', function (e) {
				initializeUpdateFormAndObject(workout);
				showSingleWorkout(workout);
			});
			let milesRanListItem = document.createElement('td');
			milesRanListItem.textContent = "Miles Ran: " + workout.milesRan;
			tr4.appendChild(milesRanListItem);
			table.appendChild(tr4);
		}

		if (workout.exercises) {
			let tr5 = document.createElement('tr');
			tr5.addEventListener('click', function (e) {
				initializeUpdateFormAndObject(workout);
				showSingleWorkout(workout);
			});
			let exerciseInfoListItem = document.createElement('td');
			exerciseInfoListItem.textContent = "Exercises: " + workout.exercises;
			tr5.appendChild(exerciseInfoListItem);
			table.appendChild(tr5);
		}

		if (workout.setsPerWorkout) {
			let tr6 = document.createElement('tr');
			tr6.addEventListener('click', function (e) {
				initializeUpdateFormAndObject(workout);
				showSingleWorkout(workout);
			});
			let setsPerWorkoutListItem = document.createElement('td');
			setsPerWorkoutListItem.textContent = "Sets: " + workout.setsPerWorkout;
			tr6.appendChild(setsPerWorkoutListItem);
			table.appendChild(tr6);
		}

		if (workout.repsPerWorkout) {
			let tr7 = document.createElement('tr');
			tr7.addEventListener('click', function (e) {
				initializeUpdateFormAndObject(workout);
				showSingleWorkout(workout);
			});
			let repsPerWorkoutListItem = document.createElement('td');
			repsPerWorkoutListItem.textContent = "Reps: " + workout.repsPerWorkout;
			tr7.appendChild(repsPerWorkoutListItem);
			table.appendChild(tr7);
		}
		workoutListDiv.appendChild(document.createElement('hr'));

	}


};

function createWorkout(newWorkout) {
	console.log(newWorkout);
	let xhr = new XMLHttpRequest();
	xhr.open('POST', 'api/workouts');
	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4) {
			if (xhr.status === 200 || xhr.status === 201) {
				let workout = JSON.parse(xhr.responseText);
				console.log(xhr.getResponseHeader('Location'));
				console.log(workout);
				loadWorkouts();
			}
		}


	}
	xhr.setRequestHeader('Content-type', 'application/json');
	xhr.send(JSON.stringify(newWorkout));

}

function showSingleWorkout(workout) {
	let clearPreviousWorkout = document.getElementById('clearPreviousWorkout');
	clearPreviousWorkout.innerHTML = '';

	workoutListDiv.classList.toggle('d-none');
	singleWorkoutDiv.classList.toggle('d-none');
	addWorkoutDiv.classList.toggle('d-none');
	updateWorkoutDiv.classList.toggle('d-none');

	let table = document.createElement('table');
	clearPreviousWorkout.appendChild(table);
	let tr = document.createElement('tr');
	tr.textContent = workout.workoutType;
	table.appendChild(tr);
	let td = document.createElement('td');
	tr.appendChild(td);



	if (workout.workoutStart) {
		let tr2 = document.createElement('tr');
		let startTimeHeader = document.createElement('td');
		startTimeHeader.textContent = "Workout Start Time: " + workout.workoutStart.replace('T', ' ');
		tr2.appendChild(startTimeHeader);
		table.appendChild(tr2);
	}

	if (workout.workoutEnd) {
		let tr3 = document.createElement('tr');
		let endTimeHeader = document.createElement('td');
		endTimeHeader.textContent = "Workout End Time: " + workout.workoutEnd.replace('T', ' ');
		tr3.appendChild(endTimeHeader);
		table.appendChild(tr3);
	}

	if (workout.milesRan) {
		let tr4 = document.createElement('tr');
		let milesRanListItem = document.createElement('td');
		milesRanListItem.textContent = "Miles Ran: " + workout.milesRan;
		tr4.appendChild(milesRanListItem);
		table.appendChild(tr4);
	}

	if (workout.exercises) {
		let tr5 = document.createElement('tr');
		let exerciseInfoListItem = document.createElement('td');
		exerciseInfoListItem.textContent = "Exercises: " + workout.exercises;
		tr5.appendChild(exerciseInfoListItem);
		table.appendChild(tr5);
	}

	if (workout.setsPerWorkout) {
		let tr6 = document.createElement('tr');
		let setsPerWorkoutListItem = document.createElement('td');
		setsPerWorkoutListItem.textContent = "Sets: " + workout.setsPerWorkout;
		tr6.appendChild(setsPerWorkoutListItem);
		table.appendChild(tr6);
	}

	if (workout.repsPerWorkout) {
		let tr7 = document.createElement('tr');
		let repsPerWorkoutListItem = document.createElement('td');
		repsPerWorkoutListItem.textContent = "Reps: " + workout.repsPerWorkout;
		tr7.appendChild(repsPerWorkoutListItem);
		table.appendChild(tr7);
	}

}

function initializeUpdateFormAndObject(workout) {
	updateWorkoutForm.id.value = workout.id;
	updateWorkoutForm.workoutType.value = workout.workoutType;
	updateWorkoutForm.workoutTimeStart.value = workout.workoutStart;
	updateWorkoutForm.workoutTimeEnd.value = workout.workoutEnd;
	updateWorkoutForm.milesRan.value = workout.milesRan;
	updateWorkoutForm.exercises.value = workout.exercises;
	updateWorkoutForm.setsPerWorkout.value = workout.setsPerWorkout;
	updateWorkoutForm.repsPerWorkout.value = workout.repsPerWorkout;

}

function createStatistics(workouts) {
	let count = workouts.length || 0;
	targetMe.textContent = `Fitness Forever! - ${count} workouts so far!`;
	
}



