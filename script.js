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
//given example
const exampleAstronaut = {
    firstName: "Yuri",
    lastName: "Gagarin",
    nickname: "First!",
    prefix: "Cosmonaut"
  }

const generateAstronautTag = (astronaut) => {
  
const astronautOutput = (`${astronaut.prefix}: ${astronaut.firstName} "${astronaut.nickname}" ${astronaut.lastName}`)

    return astronautOutput 
}

  