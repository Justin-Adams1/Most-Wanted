"use strict"
/*
Build all of your functions for displaying and gathering information below (GUI).
*/

// app is the function called to start the entire application
function app(people){
  let searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
  let searchResults;
  switch(searchType){
    case 'yes':
      searchResults = searchByName(people);
      break;
    case 'no':

    let searchCriteria = prompt("Please enter the number of your selection to search by: \n1. Gender \n2. Eye Color \n3. Occupation \n4. Weight \n5. Height");
      do{
        switch(searchCriteria){
          case '1':
            let searchGender = searchByGender(people);
            displayPeople(searchGender);
            break;
          case '2':
            let searchEyeColor = searchByEyeColor(people);
            displayPeople(searchEyeColor);
           break;
          case '3':
            let searchOccupation = searchByOccupation(people);
            displayPeople(searchOccupation);
            break;
          case '4':
            let searchWeight = searchByWeight(people);
            displayPeople(searchWeight);
            break;
          case '5':
            let searchHeight = searchByHeight(people);
            displayPeople(searchHeight);
            break;
      }
    }
    while(searchCriteria != "1" || searchCriteria != "2" || searchCriteria != "3" || searchCriteria != "4" || searchCriteria != "5")

      break;
      default:
    app(people); // restart app
      break;
  } 
  
  // Call the mainMenu function ONLY after you find the SINGLE person you are looking for
  mainMenu(searchResults, people);
}

// Menu function to call once you find who you are looking for
function mainMenu(person, people){

  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */

  if(!person){
    alert("Could not find that individual.");
    return app(people); // restart
  }else{
  let displayOption = prompt("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");

  switch(displayOption){
    case "info":
    displayPerson(person);
    //window.confirm("Gender: " + person.gender + "\nDate of Birth: " + person.dob + "\nHeight: " + person.height + "\nWeight: " + person.weight + "\nEye Color: " + person.eyeColor + "\nOccupation: " + person.occupation);
    break;
    case "family":
    // TODO: get person's family
    break;
    case "descendants":
    // TODO: get person's descendants
    break;
    case "restart":
    app(people); // restart
    break;
    case "quit":
    return; // stop execution
    default:
    return mainMenu(person, people); // ask again
  }
}
}

function searchByName(people){
  let firstName = promptFor("What is the person's first name?", chars);
  let lastName = promptFor("What is the person's last name?", chars);

  let foundPerson = people.filter(function(person){
    if(person.firstName === firstName && person.lastName === lastName){
      return true;
    }
    else{
      return false;
    }
  })
  return foundPerson.shift();
}

function searchByGender(people){
  let gender = promptFor("What is the person's gender?", chars).toLowerCase();

  let foundGender = people.filter(function(person){
    if(person.gender === gender){
      return true;
    }
    else{
      return false;
    }
  })
  return foundGender;
}

function searchByOccupation(people){
  let occupation = promptFor("What is the person's occupation?", chars).toLowerCase();

  let foundOccupation = people.filter(function(person){
    if(person.occupation === occupation){
      return true;
    }
    else{
      return false;
    }
  })
  return foundOccupation;
}

function searchByHeight(people){
  let height = promptFor("What is the person's Height?", chars).toLowerCase();

  let foundHeight = people.filter(function(person){
    if(person.height === height){
      return true;
    }
    else{
      return false;
    }
  })
  return foundHeight;
}

function searchByWeight(people){
  let weight = promptFor("What is the person's Weight?", chars).toLowerCase();

  let foundWeight = people.filter(function(person){
    if(person.weight === weight){
      return true;
    }
    else{
      return false;
    }
  })
  return foundWeight;
}

function searchByEyeColor(people){
  let eyeColor = promptFor("What is the person's eye color?", chars).toLowerCase();

  let foundEyeColor = people.filter(function(person){
    if(person.eyeColor === eyeColor){
      return true;
    }
    else{
      return false;
    }
  })
  return foundEyeColor;
}

// alerts a list of people
function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}

function displayPerson(person){
  // print all of the information about a person:
  // height, weight, age, name, occupation, eye color.
  let personInfo = "First Name: " + person.firstName + "\n";
  personInfo += "Last Name: " + person.lastName + "\n";
  personInfo += "DOB: " + person.dob + "\n";
  personInfo += "Height: " + person.height + "\n";
  personInfo += "Weight: " + person.weight + "\n";
  personInfo += "Eye Color: " + person.eyeColor + "\n";
  personInfo += "Occupation: " + person.occupation + "\n";
  personInfo += "Parents: " + person.parents + "\n";
  personInfo += "Current Spouse: " + person.currentSpouse + "\n";

  alert(personInfo);
}

// function that prompts and validates user input
function promptFor(question, valid){
  do{
    var response = prompt(question).trim();
  } while(!response || !valid(response));
  return response;
}

// helper function to pass into promptFor to validate yes/no answers
function yesNo(input){
  return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
}

// helper function to pass in as default promptFor validation
function chars(input){
  return true; // default validation only
}
