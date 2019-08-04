// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

var destructivelyAppendDriver = () => {
  drivers.push("Ralph")

}

var destructivelyPrependDriver = (driver) => {
  drivers.unshift(driver);
}
var destructivelyRemoveLastDriver = () => {
  drivers.pop();
}
var destructivelyRemoveFirstDriver = () => {
  drivers.shift();
}
var appendDriver = () => {
  var newDrivers = drivers.slice();
  newDrivers.push("Broom")
  return newDrivers;
}
var prependDriver = () => {
  var newDrivers = drivers.slice();
  newDrivers.unshift("Arnold")
  return newDrivers;
}
var removeLastDriver = () => {
  var newDrivers = drivers.slice();
  newDrivers.pop()
  return newDrivers;
}
var removeFirstDriver = () => {
  var newDrivers = drivers.slice();
  newDrivers.shift()
  return newDrivers;
}
