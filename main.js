//let’s convert Kelvin to Celsius, then to Fahrenheit.

// created a variable name called kelvin and the value of kelvin will constant. so, we are using const to declare a variable..

const kelvin = 293;  // try with 0 also
 
//subtracting 273 from the kelvin variable. and the result is stored in celsius variable

const celsius = kelvin - 273;

//used equation to create fahrenheit and variable named as farenheit

let Fahrenheit = celsius * (9/5) + 32

//used the .floor() object to convert decimal to normal number  

Fahrenheit = Math.floor(Fahrenheit);


console.log(`The temperature is ${Fahrenheit} degrees Fahrenheit.`);



/*  lets convert celsius to Newton  

const celsius = 30;

let Newton = Celsius * (33/100)

Newton = Math.floor(Newton);

console.log( `temperature in newton is ${Newton}`);
*/



