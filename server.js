const Planet = require('./planet.js');

const mercuty =  new Planet("Mercury", "", 0, "No");
const venus = new Planet("Venus", "", 0, "No");
const earth = new Planet("Earth", "Nitrogen, Oxygen" ,1 ,"No");
const jupitor = new Planet("Jupitor" , "Hydrogen, Helium", 79 ,"Yes");
const saturn = new Planet("Saturn", "Hydrogen, Helium", 62 ,"Yes");
const uranus = new Planet("Uranus", "Hydrogen, Helium", 27 ,"Yes");

const planetList = [mercuty, venus, earth, jupitor, saturn, uranus];

const planet = new Planet()
planet.moonCountHandler(planetList);
console.log("\n")
planet.surfaceGassesHandler(planetList);
