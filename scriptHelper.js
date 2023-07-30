// Write your helper functions here!
require("isomorphic-fetch");

function addDestinationInfo(
  document,
  name,
  diameter,
  star,
  distance,
  moons,
  imageUrl
) {
  let missionTarget = document.querySelector("#missionTarget");
  missionTarget.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">
                `;
}

function validateInput(testInput) {
  if (testInput === "") {
    return "Empty";
  } else if (isNaN(testInput) === true) {
    return "Not a Number";
  } else if (isNaN(testInput) === false) {
    return "Is a Number";
  }
}

function formSubmission(pilot, copilot, fuelLevel, cargoLevel) {
  let launchStatus = document.querySelector("#launchStatus");
  let faultyItems = document.querySelector("#faultyItems");
  let pilotStatus = document.querySelector("#pilotStatus");
  let copilotStatus = document.querySelector("#copilotStatus");
  let fuelStatus = document.querySelector("#fuelStatus");
  let cargoStatus = document.querySelector("#cargoStatus");

  pilotStatus.innerHTML = `Pilot ${pilot.value} is ready for launch`;
  copilotStatus.innerHTML = `Co-pilot ${copilot.value} is ready for launch`;
  if (fuelLevel.value < 10000) {
    faultyItems.style.visibility = "visible";
    fuelStatus.innerHTML = "Fuel level too low for launch";
  } else {
    fuelStatus.innerHTML = "Fuel level high enough for launch";
  }
  if (cargoLevel.value > 10000) {
    faultyItems.style.visibility = "visible";
    cargoStatus.innerHTML = "Cargo mass too heavy for launch";
  } else {
    cargoStatus.innerHTML = "Cargo mass low enough for launch";
  }
  if (
    fuelStatus.innerHTML === "Fuel level too low for launch" ||
    cargoStatus.innerHTML === "Cargo mass too heavy for launch"
  ) {
    launchStatus.innerHTML = "Shuttle Not Ready for Launch";
    launchStatus.style.color = "rgb(199, 37, 78)";
  } else {
    faultyItems.style.visibility = "visible";
    launchStatus.innerHTML = "Shuttle is Ready for Launch";
    launchStatus.style.color = "rgb(65, 159, 106)";
  }
}

async function myFetch() {
  let planetsReturned;

  planetsReturned = await fetch(
    "https://handlers.education.launchcode.org/static/planets.json"
  ).then(function (response) {
    return response.json();
  });

  return planetsReturned;
}

function pickPlanet(planets) {
  let randomPlanetIndex = Math.floor(Math.random() * planets.length);
  return planets[randomPlanetIndex];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
