window.addEventListener('load', function (e) {
	console.log("script.js is loaded. Let's get to work!");
	init();

});


function init() {
	loadWorkouts()
	//TODO - setup event listeners for forms, etc. 
	let addWorkoutSubmitButton = document.getElementById('addWorkout');
	addWorkoutSubmitButton.addEventListener(('click'), function (e) {
		e.preventDefault();
		let addWorkoutForm = document.getElementById('addWorkoutForm');
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
	var workoutListDiv = document.getElementById("workoutListDiv");
	workoutListDiv.innerHTML = "";
	for (const workout of workouts) {
		console.log(workout);
		let h1 = document.createElement('h1');
		h1.textContent = workout.workoutType;
		workoutListDiv.appendChild(h1);

		if (workout.workoutStart) {
			let startTimeHeader = document.createElement('h2');
			startTimeHeader.textContent = "Workout Start Time: " + workout.workoutStart.replace('T', ' ');
			workoutListDiv.appendChild(startTimeHeader);
		}

		if (workout.workoutEnd) {
			let endTimeHeader = document.createElement('h2');
			endTimeHeader.textContent = "Workout End Time: " + workout.workoutEnd.replace('T', ' ');
			workoutListDiv.appendChild(endTimeHeader);
		}

		let ulTitle = document.createElement('ul');
		ulTitle.textContent = "Workout Information";
		workoutListDiv.appendChild(ulTitle);

		if (workout.milesRan) {
			let milesRanListItem = document.createElement('li');
			milesRanListItem.textContent = "Miles Ran: " + workout.milesRan;
			ulTitle.appendChild(milesRanListItem);
		}

		if (workout.exercises) {
			let exerciseInfoListItem = document.createElement('li');
			exerciseInfoListItem.textContent = "Exercises: " + workout.exercises;
			ulTitle.appendChild(exerciseInfoListItem);
		}

		if (workout.setsPerWorkout) {
			let setsPerWorkoutListItem = document.createElement('li');
			setsPerWorkoutListItem.textContent = "Sets: " + workout.setsPerWorkout;
			ulTitle.appendChild(setsPerWorkoutListItem);
		}

		if (workout.repsPerWorkout) {
			let repsPerWorkoutListItem = document.createElement('li');
			repsPerWorkoutListItem.textContent = "Reps: " + workout.repsPerWorkout;
			ulTitle.appendChild(repsPerWorkoutListItem);
		}

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
				loadWorkouts(workout);
			}
		}


	}
	xhr.setRequestHeader('Content-type', 'application/json');
	xhr.send(JSON.stringify(newWorkout));

}



