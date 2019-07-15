'use strict';
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var firstAndPike = {
  name: '1st and Pike',
  minCustomer: 23,
  maxCustomer: 65,
  averageCookie: 6.3,
  randomCustomer: function () {
    return Math.round(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
  },
  dailySales: [],
  hourlySalesAverage: function () {
    for (var i = 0; i < hours.length; i++) {
      var averageSales = this.randomCustomer() * Math.round(this.averageCookie);
      this.dailySales.push(averageSales);
      console.log(this.dailySales);
    }
  }
};
console.log(firstAndPike.hourlySalesAverage());

// function hourlySalesAverage(minCust, maxCust, averageCust) {
//   var dailySales = [];
//   for (var i = 0; i < hours.length; i++) {
//     var averageSales = randomCustomer(minCust, maxCust) * Math.round(averageCust);
//     dailySales.push(averageSales);
//     console.log(dailySales);
//   }
//   return dailySales;
// }

// console.log(hourlySalesAverage(23, 65, 6));




// var seatacAirport = {
//   name: 'SeaTac Airport',
//   minCustomer: 3,
//   maxCustomer: 24,
//   averageCookie: 1.2,
//   randomCustomer: function (min, max) {
//     return Math.round(Math.random() * (max - min + 1) + min);
//   },
//   dailySales: []
// };

// var seattleCenter = {
//   name: 'Seattle Center',
//   minCustomer: 11,
//   maxCustomer: 38,
//   averageCookie: 3.7,
//   randomCustomer: function (min, max) {
//     return Math.round(Math.random() * (max - min + 1) + min);
//   },
//   dailySales: []
// };

// var capitolHill = {
//   name: 'Capitol Hill',
//   minCustomer: 20,
//   maxCustomer: 38,
//   averageCookie: 2.3,
//   randomCustomer: function (min, max) {
//     return Math.round(Math.random() * (max - min + 1) + min);
//   },
//   dailySales: []
// };

// var alki = {
//   name: 'Alki',
//   minCustomer: 2,
//   maxCustomer: 16,
//   averageCookie: 4.6,
//   randomCustomer: function (min, max) {
//     return Math.round(Math.random() * (max - min + 1) + min);
//   },
//   dailySales: []
// };


function randomCustomer(min, max) {
  return Math.round(Math.random() * (max - min + 1) + min);
}




