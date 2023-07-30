// Write your JavaScript code here!

window.addEventListener("load", function () {
  let form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    let pilotNameInput = document.querySelector("input[name=pilotName]");
    let copilotNameInput = document.querySelector("input[name=copilotName]");
    let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
    let cargoMassInput = document.querySelector("input[name=cargoMass");
    if (
      pilotNameInput.value === "" ||
      copilotNameInput.value === "" ||
      fuelLevelInput.value === "" ||
      cargoMassInput.value === ""
    ) {
      alert("All fields are required");
      event.preventDefault();
    } else if (
      validateInput(pilotNameInput.value) === "Is a Number" ||
      validateInput(copilotNameInput.value) === "Is a Number" ||
      validateInput(fuelLevelInput.value) === "Not a Number" ||
      validateInput(cargoMassInput.value) === "Not a Number"
    ) {
      console.log(pilotNameInput.value);
      console.log(copilotNameInput.value);
      console.log(fuelLevelInput.value);
      console.log(cargoMassInput.value);
      alert("Invalid input!");
      event.preventDefault();
    } else {
      formSubmission(
        pilotNameInput,
        copilotNameInput,
        fuelLevelInput,
        cargoMassInput
      );
      event.preventDefault();
    }
  });
  let listedPlanets;
  // Set listedPlanetsResponse equal to the value returned by calling myFetch()
  let listedPlanetsResponse;
  listedPlanetsResponse
    .then(function (result) {
      listedPlanets = result;
      console.log(listedPlanets);
    })
    .then(function () {
      console.log(listedPlanets);
      // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    });
});
