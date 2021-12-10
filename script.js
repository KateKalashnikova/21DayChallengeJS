// 21-Day Coding Challenge
//Day 1
const parseMessage = (origin, message) => {
    var result
    result = origin + ':' + ' ' + message;
    return result;
}
const message = "Hello";
const origin = "MC";

//Day 2
const exampleAstronaut = { //given example
    firstName: "Yuri",
    lastName: "Gagarin",
    nickname: "First!",
    prefix: "Cosmonaut"
  }

const generateAstronautTag = (astronaut) => {
  
const astronautOutput = (`${astronaut.prefix}: ${astronaut.firstName} "${astronaut.nickname}" ${astronaut.lastName}`)

    return astronautOutput 
}

//Day 3
const exampleGauge = { //given example
    current:0.4,
    min:0.1,
    max:0.9
  }
  
const checkGaugeStatus = (gauge) => {

if(gauge.current >= gauge.min && gauge.current <= gauge.max) {
        return true
    } else {
        return false
    }
}

//Day 4
const switchToggle = (toggle) => {
  
    toggle.isOn = !toggle.isOn
    
    return toggle;
    
  }

  //Day 5
  const addJobToAstronaut = (astronaut, job) => {
    astronaut.job = `${job}`
    return astronaut
    
    }

  //Day 6
  const addAstronautToRoster = (roster, astronaut) => {
    roster.push(astronaut)
    return(roster)
  }

  //Day 7
  const storeWeatherConditions = (temperature, condition, windSpeed, windDirection) => {
    const object = {
      temperature:Math.round((`${temperature}` - 32) * 5/9),
      condition:`${condition}`,
      windSpeed:Math.round(`${windSpeed}` / 2.237),
      windDirection:`${windDirection}`
    };
    return object;
  }
  
  //Day 8
  const countActiveAstronauts = (roster) => {
    return roster.length
  }

  //Day 9
  const listAstronautJobs = (roster) => {
    jobs = [];
    for (let i=0; i < roster.length; i++) {
    jobs.push(roster[i].job);
    return jobs;
    }
  }
//Day 10
const averageWindSpeed = (weatherEntries) => {
  arr = [];
  for (let i=0; i < weatherEntries.length; i++) {
  arr.push(weatherEntries[i].windSpeed);
  }
  const avg = arr.reduce((a, b) => a + b, 0)/ arr.length;
  return Math.round(avg)
 }
 
//Day 11

const bookFreePlatform = (platformList, missionDate) => {
 
  for (i=0; i < platformList.length; i++) {
     if(platformList[i].bookDate === undefined) {
      platformList[i].bookDate = `${missionDate}`;
      break;
    }
  }
    return platformList;
  }
 //Day 12 
 // Add your parseMessage function here if you want!
const parseMessage = (origin, message) => {
  return `${origin}: ${message}`
}

const parseTranscripts = (messages) => {
arr = [];
for (i=0; i < messages.length; i++){
arr.push(`${messages[i].origin}: ${messages[i].message}`);
}
return arr
}

//Day 13
const checkAllGauges = (gaugeList) => {
  for(let i=0; i < gaugeList.length; i++) {
    
  if(gaugeList[i].current <= gaugeList[i].min || gaugeList[i].current >= gaugeList[i].max) {
        return false
      } 
   } return true
}

//Day 14
const switchAllTogglesOn = (toggleList) => {
  for ( let i=0; i < toggleList.length; i++) {
     if(!toggleList[i].isOn) {
     toggleList[i].isOn = true
   }
  } 
  return toggleList
 }

 //Day 15
 const timeRemaining = (launchDate, missionName, fakeToday) => {
  const today = fakeToday || new Date() // Do not alter this line!
  const launch = new Date (launchDate);
 
  let dayDiff = Math.round(launch - today);
  let daysRemaining = dayDiff/ (1000 * 3600 * 24);

  let objRemaining = {
   missionName: `${missionName}`,
   daysRemaining: `${daysRemaining}`
};
   return objRemaining;
}

//Day 16
const getAverageSpeed = (firstPosition, secondPosition) => {
  let diffTime = secondPosition.time - firstPosition.time
  let diffAlt = secondPosition.altitude - firstPosition.altitude
  
  let average = diffAlt / diffTime
  let roundedAverage = Math.round(average * 10) / 10

  return roundedAverage
}

//Day 17

const switchSpecificToggle = (toggleList, specificToggle) => {
  arr = [];
   for ( let i=0; i < toggleList.length; i++) {
     if(toggleList[i].name === `${specificToggle}`) {
     toggleList[i].isOn = !toggleList[i].isOn 
     arr.push(toggleList.isOn)
    }
  } 
  return toggleList
}

//Day 18
const chooseLunchWinner = (listOfChoices) => {
  const counts = {};
  let maxCount = 0;
  let maxChoice;
  
  for ( let i=0; i < listOfChoices.length; i++) {  
     const choice = listOfChoices[i];
     const count = (counts[choice] = (counts[choice] || 0) + 1);
    if (count > maxCount) {
      maxCount = count;
      maxChoice = choice;
    }
  }
  return maxChoice
}