function driversWithRevenueOver(drivers,revenue){
  return drivers.filter(function(driver){return driver.revenue > revenue})
}
function driverNamesWithRevenueOver(drivers,revenue) {
  return driversWithRevenueOver(drivers,revenue).map(function(driver){return driver.name})
}
function exactMatch(drivers,ob){
  key = Object.keys(ob)[0]
  value = Object.values(ob)[0]
  return drivers.map(function (driver) {return driver[key] === value})
}
