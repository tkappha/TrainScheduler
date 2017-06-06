//*********** Initialize Firebase ************//

var config = {
  apiKey: "AIzaSyDUUMii4jppRvCoEjLON8b-ZXZ8696S0eo",
  authDomain: "trainscheduler-70615.firebaseapp.com",
  databaseURL: "https://trainscheduler-70615.firebaseio.com",
  projectId: "trainscheduler-70615",
  storageBucket: "trainscheduler-70615.appspot.com",
  messagingSenderId: "549345623502"
};

firebase.initializeApp(config);

//********** Variables **********//
var trainName = "";
var destination = "";
var firstArrival = ""; // change to time format?
var arrivalFrequency = 0;


//********** Functions ************//

$("#addTrain").on("click", function(){
	trainName = $("#trainName").val().trim();
	destination = $("#destination").val().trim();
	firstArrival = $("#firstTrainArrivalTime").val().trim();
	arrivalFrequency = $("#trainFrequency").val().trim();

	firebase.database().ref().set({
		trainName: trainName,
		destination: destination,
		firstArrival: firstArrival,
		arrivalFrequency: arrivalFrequency
	})
})

//********** Main Process *********//

