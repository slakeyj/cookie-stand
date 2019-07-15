'use strict';

// array for hours of day
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

// variable to get element by its id
// var ulEl = document.getElementById('first-and-pike');
// function render() {
//   var liEl = document.createElement('li');
//   liEl.textContent = this.hourlySalesAverage();
//   ulEl.appendChild(liEl);
// }

var firstAndPike = {
  name: '1st and Pike',
  minCustomer: 23,
  maxCustomer: 65,
  averageCookie: 6.3,
  randomCustomer: function () {
    return Math.round(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
  },
  dailySales: [],
  newDailySales: [],
  hourlySalesAverage: function () {
    for (var i = 0; i < hours.length; i++) {
      var averageSales = this.randomCustomer() * this.averageCookie;
      averageSales = Math.round(averageSales);
      this.dailySales.push(Math.round(averageSales));
      console.log(averageSales);

      this.newDailySales.push(`${hours[i]}: ${this.dailySales[i]} cookies`);

      console.log(`${hours[i]}: ${this.dailySales[i]} cookies`);
    }
    console.log(`New Daily Sales final result is ${this.newDailySales}`);
    console.log(this.newDailySales.length);
  },
  render: function () {
    this.hourlySalesAverage();
    var ulEl = document.getElementById('first-and-pike');
    for (var j = 0; j < this.newDailySales.length; j++) {
      var liEl = document.createElement('li');
      liEl.textContent = this.newDailySales[j];
      ulEl.appendChild(liEl);
    }
  }
  //after for loop append to dom
};

firstAndPike.render();



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
// };q




