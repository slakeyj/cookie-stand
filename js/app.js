'use strict';

// array for hours of day
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
// array containing all ul ids
var idArray = ['first-and-pike', 'seatac', 'seattle-center', 'capitol-hill', 'alki'];
// variable to store the main element
var mainEl = document.getElementById('main');
// for loop to create an unordered list item for each item in idArray
for (var i = 0; i < idArray.length; i++) {
  var ulEl = document.createElement('ul');
  ulEl.setAttribute('id', idArray[i]);
  mainEl.appendChild(ulEl);
}


// Renders list of averages for first and pike store
var firstAndPike = {
  name: '1st and Pike',
  minCustomer: 23,
  maxCustomer: 65,
  averageCookie: 6.3,
  randomCustomer: function () {
    return Math.round(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
  },
  averageArray: [],
  hourlySalesAverage: function () {
    var averageTotal = 0;
    for (var i = 0; i < hours.length; i++) {
      var averageSales = this.randomCustomer() * this.averageCookie;
      averageSales = Math.round(averageSales);
      averageTotal += averageSales;
      console.log(`Average total is ${averageTotal}`);
      console.log(averageSales);
      this.averageArray.push(`${hours[i]}: ${averageSales} cookies`);
    }
    this.averageArray.push(`Total: ${averageTotal}`);
    this.averageArray.unshift(`${this.name}`);
    console.log(`New Daily Sales final result is ${this.averageArray}`);
  },
  render: function () {
    this.hourlySalesAverage();
    var ulEl = document.getElementById('first-and-pike');
    for (var j = 0; j < this.averageArray.length; j++) {
      var liEl = document.createElement('li');
      liEl.textContent = this.averageArray[j];
      ulEl.appendChild(liEl);
    }
  }
};

// Renders list of averages for SeaTac Airport store
var seatacAirport = {
  name: 'SeaTac Airport',
  minCustomer: 3,
  maxCustomer: 24,
  averageCookie: 1.2,
  randomCustomer: function () {
    return Math.round(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
  },
  averageArray: [],
  hourlySalesAverage: function () {
    var averageTotal = 0;
    for (var i = 0; i < hours.length; i++) {
      var averageSales = this.randomCustomer() * this.averageCookie;
      averageSales = Math.round(averageSales);
      averageTotal += averageSales;
      console.log(`Average total is ${averageTotal}`);
      console.log(averageSales);
      this.averageArray.push(`${hours[i]}: ${averageSales} cookies`);
    }
    this.averageArray.push(`Total: ${averageTotal}`);
    this.averageArray.unshift(`${this.name}`);
    console.log(`New Daily Sales final result is ${this.averageArray}`);
  },
  render: function () {
    this.hourlySalesAverage();
    var ulEl = document.getElementById('seatac');
    for (var j = 0; j < this.averageArray.length; j++) {
      var liEl = document.createElement('li');
      liEl.textContent = this.averageArray[j];
      ulEl.appendChild(liEl);
    }
  }
};

// renders list of averages for Seattle Center store
var seattleCenter = {
  name: 'Seattle Center',
  minCustomer: 11,
  maxCustomer: 38,
  averageCookie: 3.7,
  randomCustomer: function () {
    return Math.round(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
  },
  averageArray: [],
  hourlySalesAverage: function () {
    var averageTotal = 0;
    for (var i = 0; i < hours.length; i++) {
      var averageSales = this.randomCustomer() * this.averageCookie;
      averageSales = Math.round(averageSales);
      averageTotal += averageSales;
      console.log(`Average total is ${averageTotal}`);
      console.log(averageSales);
      this.averageArray.push(`${hours[i]}: ${averageSales} cookies`);
    }
    this.averageArray.push(`Total: ${averageTotal}`);
    this.averageArray.unshift(`${this.name}`);
    console.log(`New Daily Sales final result is ${this.averageArray}`);
  },
  render: function () {
    this.hourlySalesAverage();
    var ulEl = document.getElementById('seattle-center');
    for (var j = 0; j < this.averageArray.length; j++) {
      var liEl = document.createElement('li');
      liEl.textContent = this.averageArray[j];
      ulEl.appendChild(liEl);
    }
  }
};

// renders list of averages for Capitol Hill Store
var capitolHill = {
  name: 'Capitol Hill',
  minCustomer: 20,
  maxCustomer: 38,
  averageCookie: 2.3,
  randomCustomer: function () {
    return Math.round(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
  },
  averageArray: [],
  hourlySalesAverage: function () {
    var averageTotal = 0;
    for (var i = 0; i < hours.length; i++) {
      var averageSales = this.randomCustomer() * this.averageCookie;
      averageSales = Math.round(averageSales);
      averageTotal += averageSales;
      console.log(`Average total is ${averageTotal}`);
      console.log(averageSales);
      this.averageArray.push(`${hours[i]}: ${averageSales} cookies`);
    }
    this.averageArray.push(`Total: ${averageTotal}`);
    this.averageArray.unshift(`${this.name}`);
    console.log(`New Daily Sales final result is ${this.averageArray}`);
  },
  render: function () {
    this.hourlySalesAverage();
    var ulEl = document.getElementById('capitol-hill');
    for (var j = 0; j < this.averageArray.length; j++) {
      var liEl = document.createElement('li');
      liEl.textContent = this.averageArray[j];
      ulEl.appendChild(liEl);
    }
  }
};

// renders list of averages for alki store
var alki = {
  name: 'Alki',
  minCustomer: 2,
  maxCustomer: 16,
  averageCookie: 4.6,
  randomCustomer: function () {
    return Math.round(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
  },
  averageArray: [],
  hourlySalesAverage: function () {
    var averageTotal = 0;
    for (var i = 0; i < hours.length; i++) {
      var averageSales = this.randomCustomer() * this.averageCookie;
      averageSales = Math.round(averageSales);
      averageTotal += averageSales;
      console.log(`Average total is ${averageTotal}`);
      console.log(averageSales);
      this.averageArray.push(`${hours[i]}: ${averageSales} cookies`);
    }
    this.averageArray.push(`Total: ${averageTotal}`);
    this.averageArray.unshift(`${this.name}`);
    console.log(`New Daily Sales final result is ${this.averageArray}`);
  },
  render: function () {
    this.hourlySalesAverage();
    var ulEl = document.getElementById('alki');
    for (var j = 0; j < this.averageArray.length; j++) {
      var liEl = document.createElement('li');
      liEl.textContent = this.averageArray[j];
      ulEl.appendChild(liEl);
    }
  }
};

firstAndPike.render();
seatacAirport.render();
seattleCenter.render();
capitolHill.render();
alki.render();

