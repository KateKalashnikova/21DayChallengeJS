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
  