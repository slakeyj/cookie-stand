'use strict';

// array for hours of day
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

// variable to store the main element
var mainEl = document.getElementById('main');


// Renders list of averages for first and pike store
var firstAndPike = {
  name: '1st and Pike',
  minCustomer: 23,
  maxCustomer: 65,
  averageCookie: 6.3,
  getRandomCustomerCount: function () {
    return Math.round(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
  },
  hourlySalesAverage: function () {
    var cookieTotal = 0;
    var averageArray = [];
    for (var i = 0; i < hours.length; i++) {
      var averageSales = this.getRandomCustomerCount() * this.averageCookie;
      averageSales = Math.round(averageSales);
      cookieTotal += averageSales;
      console.log(`Average total is ${cookieTotal}`);
      console.log(averageSales);
      averageArray.push(`${hours[i]}: ${averageSales} cookies`);
    }
    averageArray.push(`Total: ${cookieTotal}`);
    console.log(`New Daily Sales final result is ${this.averageArray}`);
    return averageArray;
  },
  render: function () {
    const averageArray = this.hourlySalesAverage();
    var titleElement = document.createElement('h2');
    titleElement.textContent = this.name;
    mainEl.appendChild(titleElement);
    var ulEl = document.createElement('ul');
    mainEl.appendChild(ulEl);
    for (var j = 0; j < averageArray.length; j++) {
      var liEl = document.createElement('li');
      liEl.textContent = averageArray[j];
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
  getRandomCustomerCount: function () {
    return Math.round(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
  },
  hourlySalesAverage: function () {
    var cookieTotal = 0;
    var averageArray = [];
    for (var i = 0; i < hours.length; i++) {
      var averageSales = this.getRandomCustomerCount() * this.averageCookie;
      averageSales = Math.round(averageSales);
      cookieTotal += averageSales;
      console.log(`Average total is ${cookieTotal}`);
      console.log(averageSales);
      averageArray.push(`${hours[i]}: ${averageSales} cookies`);
    }
    averageArray.push(`Total: ${cookieTotal}`);
    console.log(`New Daily Sales final result is ${this.averageArray}`);
    return averageArray;
  },
  render: function () {
    const averageArray = this.hourlySalesAverage();
    var titleElement = document.createElement('h2');
    titleElement.textContent = this.name;
    mainEl.appendChild(titleElement);
    var ulEl = document.createElement('ul');
    mainEl.appendChild(ulEl);
    for (var j = 0; j < averageArray.length; j++) {
      var liEl = document.createElement('li');
      liEl.textContent = averageArray[j];
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
  getRandomCustomerCount: function () {
    return Math.round(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
  },
  hourlySalesAverage: function () {
    var cookieTotal = 0;
    var averageArray = [];
    for (var i = 0; i < hours.length; i++) {
      var averageSales = this.getRandomCustomerCount() * this.averageCookie;
      averageSales = Math.round(averageSales);
      cookieTotal += averageSales;
      console.log(`Average total is ${cookieTotal}`);
      console.log(averageSales);
      averageArray.push(`${hours[i]}: ${averageSales} cookies`);
    }
    averageArray.push(`Total: ${cookieTotal}`);
    console.log(`New Daily Sales final result is ${this.averageArray}`);
    return averageArray;
  },
  render: function () {
    const averageArray = this.hourlySalesAverage();
    var titleElement = document.createElement('h2');
    titleElement.textContent = this.name;
    mainEl.appendChild(titleElement);
    var ulEl = document.createElement('ul');
    mainEl.appendChild(ulEl);
    for (var j = 0; j < averageArray.length; j++) {
      var liEl = document.createElement('li');
      liEl.textContent = averageArray[j];
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
  getRandomCustomerCount: function () {
    return Math.round(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
  },
  hourlySalesAverage: function () {
    var cookieTotal = 0;
    var averageArray = [];
    for (var i = 0; i < hours.length; i++) {
      var averageSales = this.getRandomCustomerCount() * this.averageCookie;
      averageSales = Math.round(averageSales);
      cookieTotal += averageSales;
      console.log(`Average total is ${cookieTotal}`);
      console.log(averageSales);
      averageArray.push(`${hours[i]}: ${averageSales} cookies`);
    }
    averageArray.push(`Total: ${cookieTotal}`);
    console.log(`New Daily Sales final result is ${this.averageArray}`);
    return averageArray;
  },
  render: function () {
    const averageArray = this.hourlySalesAverage();
    var titleElement = document.createElement('h2');
    titleElement.textContent = this.name;
    mainEl.appendChild(titleElement);
    var ulEl = document.createElement('ul');
    mainEl.appendChild(ulEl);
    for (var j = 0; j < averageArray.length; j++) {
      var liEl = document.createElement('li');
      liEl.textContent = averageArray[j];
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
  getRandomCustomerCount: function () {
    return Math.round(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
  },
  hourlySalesAverage: function () {
    var cookieTotal = 0;
    var averageArray = [];
    for (var i = 0; i < hours.length; i++) {
      var averageSales = this.getRandomCustomerCount() * this.averageCookie;
      averageSales = Math.round(averageSales);
      cookieTotal += averageSales;
      console.log(`Average total is ${cookieTotal}`);
      console.log(averageSales);
      averageArray.push(`${hours[i]}: ${averageSales} cookies`);
    }
    averageArray.push(`Total: ${cookieTotal}`);
    console.log(`New Daily Sales final result is ${this.averageArray}`);
    return averageArray;
  },
  render: function () {
    const averageArray = this.hourlySalesAverage();
    var titleElement = document.createElement('h2');
    titleElement.textContent = this.name;
    mainEl.appendChild(titleElement);
    var ulEl = document.createElement('ul');
    mainEl.appendChild(ulEl);
    for (var j = 0; j < averageArray.length; j++) {
      var liEl = document.createElement('li');
      liEl.textContent = averageArray[j];
      ulEl.appendChild(liEl);
    }
  }
};


firstAndPike.render();
seatacAirport.render();
seattleCenter.render();
capitolHill.render();
alki.render();

