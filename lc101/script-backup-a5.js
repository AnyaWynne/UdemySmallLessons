// Write your JavaScript code here!

window.addEventListener("load", function(){
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
      response.json().then(function(json){
      const missionDestination = document.getElementById("missionTarget");
      let index = Math.floor(Math.random()*json.length);
      missionDestination.innerHTML = `
      <h2>Mission Destination</h2>
<ol>
   <li>Name: ${json[index].name}</li>
   <li>Diameter: ${json[index].diameter}</li>
   <li>Star: ${json[index].star}</li>
   <li>Distance from Earth: ${json[index].distance}</li>
   <li>Number of Moons: ${json[index].moons}</li>
</ol>
<img src="${json[index].image}">
      `
      });
            });

      let formSubmitted = false; //the invisible text will only appear after the form was fully and properly filled out.
      let launchStatus = document.getElementById("launchStatus");
      let form = document.getElementById("launchForm");  
      //this function will revert to hiddent text without refreshing the page (if the user changed the input in the form)
      let revertToHiddenText = function(){
         document.getElementById("faultyItems").style.visibility = "hidden";
         launchStatus.innerHTML = "Awaiting Information Before Launch";
         launchStatus.style.color = "orange"; // I could have made the color black, but I thought it was more fun to make it orange.
      };

      //I've set up all the changes made to the hidden text so that the user could see updated status without refreshing the page (if they change the input).
   form.addEventListener("submit", function(event){
      let enteredPilotName = document.getElementById("pilotName").value;
      let enteredCopilotName = document.querySelector("input[name=copilotName]").value;
      let enteredFuelLevel = document.querySelector("input[name=fuelLevel]").value;
      let enteredCargoMass = document.querySelector("input[name=cargoMass]").value;
      if (enteredPilotName==="" || enteredCopilotName===""
      || enteredFuelLevel==="" || enteredCargoMass===""){
         window.alert("All feilds are required!");
         event.preventDefault();
         revertToHiddenText(); // will revert to hidden text without refreshing, if there are multiple changes to the form
      }
      else if(!isNaN(enteredPilotName)){
         window.alert("Invalid entry! Please enter a pilot's name, letters only.");
         event.preventDefault();
         revertToHiddenText();
      }
      else if(!isNaN(enteredCopilotName)){
         window.alert("Invalid entry! Please enter a co-pilot's name, letters only.");
         event.preventDefault();
         revertToHiddenText();
      }
      else if(isNaN(enteredFuelLevel)){
         window.alert("Invalid entry! Please enter numbers only for Fuel Level field.")
         event.preventDefault();
         revertToHiddenText();
      }
      else if(isNaN(enteredCargoMass)){
         window.alert("Invalid entry! Please enter numbers only for Cargo Mass field.")
         event.preventDefault();
         revertToHiddenText();
      }else{
      formSubmitted = true;
      let makeFaultyItemsVisible = function(){
         let pilotStatus = document.getElementById("pilotStatus");
         let copilotStatus = document.getElementById("copilotStatus");
         let fuelStatus = document.getElementById("fuelStatus");
         let cargoStatus = document.getElementById("cargoStatus");
         if(enteredFuelLevel<10000 && enteredCargoMass<=10000){
            launchStatus.innerHTML = "Shuttle not ready for launch!";
            launchStatus.style.color = "red";
            document.getElementById("faultyItems").style.visibility = "visible";
            pilotStatus.innerHTML = `Pilot ${enteredPilotName} is ready.`;
            copilotStatus.innerHTML = `Co-pilot ${enteredCopilotName} is ready.`;
            fuelStatus.innerHTML = `Fuel level: ${enteredFuelLevel}(L). There is not enough fuel for the journey.`
            cargoStatus.innerHTML = "Cargo mass low enough for launch"
               }
            else if(enteredFuelLevel<10000 && enteredCargoMass>10000){
               launchStatus.innerHTML = "Shuttle not ready for launch!";
               launchStatus.style.color = "red";
               document.getElementById("faultyItems").style.visibility = "visible";
               pilotStatus.innerHTML = `Pilot ${enteredPilotName} is ready.`;
               copilotStatus.innerHTML = `Co-pilot ${enteredCopilotName} is ready.`;
               fuelStatus.innerHTML = `Fuel level: ${enteredFuelLevel}(L). There is not enough fuel for the journey.`
               cargoStatus.innerHTML = `Cargo Mass: ${enteredCargoMass}. There is too much mass for the shuttle to take off.`
               }
            else if(enteredCargoMass>10000){
               launchStatus.innerHTML = "Shuttle not ready for launch!";
               launchStatus.style.color = "red";
               document.getElementById("faultyItems").style.visibility = "visible";
               pilotStatus.innerHTML = `Pilot ${enteredPilotName} is ready.`;
               copilotStatus.innerHTML = `Co-pilot ${enteredCopilotName} is ready.`;
               fuelStatus.innerHTML = `Fuel level high enough for launch`
               cargoStatus.innerHTML = `Cargo Mass: ${enteredCargoMass}. There is too much mass for the shuttle to take off.`

            }else{
            launchStatus.innerHTML = "Shuttle is ready for launch!";
            launchStatus.style.color = "green";
            document.getElementById("faultyItems").style.visibility = "hidden";
            }
      }
         if(formSubmitted){
            event.preventDefault();
            makeFaultyItemsVisible();
            
         }
      }
   });

});


/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
