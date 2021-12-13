# 21DayChallengeJS
21 day coding challenge provided by Lighthouse Labs
### Day 1 Instructions
Our latest testing indicates a malfunctioning component in our communications apparatus. For some reason, messages from mission control are not being correctly displayed on board the shuttle. While the message is being displayed on the shuttle’s terminal, the sender’s name is not displayed beside it.
Your first task is to write a function that will take two string parameters and return a string containing the sender name and the message in the form specified in the instructions.
### Day 2 Instructions
Registering new astronauts was handled manually in previous missions but it's taking too much time. Knowing that the astronaut information is already listed in a data set, you propose to optimize that job with programming.
Your task is to automate that process by creating a function that will take in an astronaut object as a parameter and return a string using the properties of the astronaut.
### Day 3 Instructions
Making sure that a value is within a specific range is a common task in programming. In this case, the structure given is a gauge object with a current value, a minimum and a maximum. If the current value is between the minimum and maximum, then everything is peachy, if not, we return a message saying that there is trouble.
Your task is to create a function that will take the gauge object as a parameter, and will return true if the current value is between the minimum and maximum, and return false if the value is outside those.
### Day 4 Instructions
Opposites hm? In our daily lives, an opposite can mean multiple things, but in programming, it's different. Opposites can only be used when dealing with logical expressions or booleans. Knowing that the property inside our toggle is called isOn, we can infer that the value attached to it is either true, or false.
Create a function that takes in a toggle object and will change the value of the property isOn between true and false and return the updated object. Using the function twice should revert the toggle back to its original value.
### Day 5 Instructions
Now that a crew has been selected, you need to write a new function that will assign a job to each astronaut. Since you’ve had some experience with updating object properties in some of the previous challenges, this should be fairly straightforward. Just keep in mind that you need to return the astronaut after updating the job property.
### Day 6 Instructions
Create a function that takes in a roster array and an astronaut object. The function will add the astronaut to the roster and return the updated roster.
### Day 7 Instructions
Your task is to write a function that takes in the temperature, weather condition, wind speed, and direction as parameters and store them inside a structure that holds each value as properties.
There's a small and important detail for this one, you must convert the temperature from Fahrenheit to Celsius and convert the wind speed from miles/hour to meters/second, and round both of them before storing them.
### Day 8 Instructions
Your task is to create a function that takes in a roster array, and will calculate the amount of astronauts in the given roster list and return said amount.
Sometimes things are just simple, code doesn't need to be complicated!
### Day 9 Instructions
Your task is to create a function that will take in an array representing the roster of astronauts, and return an array containing the jobs of each astronaut as a string.
In other terms, for each astronaut of the roster, you want to take the job and add it to a list, then return said list.
### Day 10 Instructions
Your task is to create a function that will take in an array of weather objects and will return a rounded average of the wind speed.
Since we work with an unknown amount of entries, you will need to calculate the average wind speed using loops.
### Day 11 Instructions
Your task is to write a function that will take in a list of platforms and a date as a string. That function will update the date property on the first platform with an empty date and then return the platform list.
In other terms, for each platform of the platform list array, update the date of the first free one and then return the updated platform list.
### Day 12 Instructions
Your task is to write a function that will take in an array of objects containing a sender and a message as a parameter. The function will then parse a message from each object, add it to an array then return the built array.
Each message is built exactly like the first challenge, so you can either use the function you already made, or rebuild it from scratch.
### Day 13 Instructions
Your task is to write a function that will take in an array of objects containing a gauge reading (min, max, current). The function will then check if the gauge current value is within spec (between min and max) and check the next gauge. If one of the values is outside the spec, return false, if they are all ok, return true.
The method the evaluate the gauge is the same as the third challenge. You may take your function, get inspired by it, or start from scratch in this challenge.
### Day 14 Instructions
Your task is to write a function that will take in an array of objects containing switches. The function will change the value of the isOn property to true for every switch in the list, and then return the updated array.
You can use the previous switchToggle function from the fourth challenge, however be careful, since we want all of them on, not toggled!
### Day 15 Instructions
Your task is to write a function that will take in a launch date and a mission name as strings. Calculate the difference between two dates in days and return an object containing the name of the mission and a rounded day difference.
A part of the code has been written for you, and it is important that it stays the same for the tests to work out.
### Day 16 Instructions
Your task is to write a function that will take in two position objects. Calculate the average speed from the two positions and return the average speed rounded to the first decimal point.
Each object contains the altitude in meters, and a time stamp in seconds.
### Day 17 Instructions
Your task is to write a function that will take in an array of toggle objects and a specific toggle name. The goal is to switch only the specific toggle, without affecting the other toggles and then return the updated array.
Don't forget that you can use your previous function from the fourth challenge to help you complete it faster!
### Day 18 Instructions
Your task is to write a function that will take in an array of lunch choices (strings) and return the choice as a string with the most votes.
There is always two lunch choices, and always an odd number of astronauts!
### Day 19 Instructions
Your task is to write a function that will take in a list of data entries in the shape of an array of objects. The function will then organize and return the entries by type and store each bit of data (string) in each list, in the shape of an object containing arrays.
### Day 20 Instructions
Your task is to write a function that will take in speed (number), missionData (object) and checks (object) as parameters. The goal is to make sure that the speed is within the limits and that the amount of entries per type matches with the checks. If one of the values is a mismatch, return false, if everything is fine, return true.
Speed will be compared against maxSpeed and minSpeed inclusively and the length of each array inside missionData will be compared to the values inside the dataEntries object values.
