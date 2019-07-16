'use strict';

// variable to store the main element
var tableEl = document.getElementById('table');

// array for hours of day
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

// array to store all stores created
var storesCreated = [];
function CreateStore(name, minimumCustomer, maximumCustomer, averageCookieSale) {
  this.name = name;
  this.minimumCustomer = minimumCustomer;
  this.maximumCustomer = maximumCustomer;
  this.averageCookieSale = averageCookieSale;
  storesCreated.push(this);
}

CreateStore.prototype.renderTitleRow = function () {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('td');
  thEl.textContent = this.name;
  trEl.appendChild(thEl);
  tableEl.appendChild(trEl);
};

CreateStore.prototype.getRandomCustomerCount = function () {
  return Math.round(Math.random() * (this.maximumCustomer - this.minimumCustomer + 1) + this.minimumCustomer);
};

CreateStore.prototype.getHourlySalesAndTotal = function () {
  var cookieTotal = 0;
  var averageArray = [];
  for (var i = 0; i < hours.length; i++) {
    var averageSales = this.getRandomCustomerCount() * this.averageCookieSale;
    averageSales = Math.round(averageSales);
    cookieTotal += averageSales;
    console.log(`Average total is ${cookieTotal}`);
    console.log(averageSales);
    averageArray.push(`${hours[i]}: ${averageSales} cookies`);
  }
  averageArray.push(`Total: ${cookieTotal}`);
  console.log(`New Daily Sales final result is ${this.averageArray}`);
  return averageArray;
};

new CreateStore('1st and Pike', 23, 65, 6.3);
new CreateStore('SeaTac Airport', 3, 24, 1.2);
new CreateStore('Seattle Center', 11, 38, 3.7);
new CreateStore('Capitol Hill', 20, 38, 2.3);
new CreateStore('Alki', 2, 16, 4.6);

for (var i = 0; i < storesCreated.length; i++) {
  storesCreated[i].renderTitleRow();
}








// Renders list of averages for first and pike store
// var firstAndPike = {
//   name: '1st and Pike',
//   minCustomer: 23,
//   maxCustomer: 65,
//   averageCookie: 6.3,
//   //got this function from MDN - math.random() docs
//   getRandomCustomerCount: function () {
//     return Math.round(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
//   },
//   hourlySalesAverage: function () {
//     var cookieTotal = 0;
//     var totalCookiesList = [];
//     for (var i = 0; i < hours.length; i++) {
//       var hourlyCustomerSale = this.getRandomCustomerCount() * this.averageCookie;
//       hourlyCustomerSale = Math.ceil(hourlyCustomerSale);
//       cookieTotal += hourlyCustomerSale;
//       console.log(`Average total is ${cookieTotal}`);
//       console.log(hourlyCustomerSale);
//       totalCookiesList.push(`${hours[i]}: ${hourlyCustomerSale} cookies`);
//     }
//     totalCookiesList.push(`Total: ${cookieTotal}`);
//     console.log(`New Daily Sales final result is ${this.averageArray}`);
//     return totalCookiesList;
//   },
//   render: function () {
//     const totalCookieList = this.hourlySalesAverage();
//     var titleElement = document.createElement('h2');
//     titleElement.textContent = this.name;
//     mainEl.appendChild(titleElement);
//     var ulEl = document.createElement('ul');
//     mainEl.appendChild(ulEl);
//     for (var j = 0; j < totalCookieList.length; j++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = totalCookieList[j];
//       ulEl.appendChild(liEl);
//     }
//   }
// };

// // Renders list of averages for SeaTac Airport store
// var seatacAirport = {
//   name: 'SeaTac Airport',
//   minCustomer: 3,
//   maxCustomer: 24,
//   averageCookie: 1.2,
//   getRandomCustomerCount: function () {
//     return Math.round(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
//   },
//   hourlySalesAverage: function () {
//     var cookieTotal = 0;
//     var averageArray = [];
//     for (var i = 0; i < hours.length; i++) {
//       var averageSales = this.getRandomCustomerCount() * this.averageCookie;
//       averageSales = Math.round(averageSales);
//       cookieTotal += averageSales;
//       console.log(`Average total is ${cookieTotal}`);
//       console.log(averageSales);
//       averageArray.push(`${hours[i]}: ${averageSales} cookies`);
//     }
//     averageArray.push(`Total: ${cookieTotal}`);
//     console.log(`New Daily Sales final result is ${this.averageArray}`);
//     return averageArray;
//   },
//   render: function () {
//     const averageArray = this.hourlySalesAverage();
//     var titleElement = document.createElement('h2');
//     titleElement.textContent = this.name;
//     mainEl.appendChild(titleElement);
//     var ulEl = document.createElement('ul');
//     mainEl.appendChild(ulEl);
//     for (var j = 0; j < averageArray.length; j++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = averageArray[j];
//       ulEl.appendChild(liEl);
//     }
//   }
// };

// // renders list of averages for Seattle Center store
// var seattleCenter = {
//   name: 'Seattle Center',
//   minCustomer: 11,
//   maxCustomer: 38,
//   averageCookie: 3.7,
//   getRandomCustomerCount: function () {
//     return Math.round(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
//   },
//   hourlySalesAverage: function () {
//     var cookieTotal = 0;
//     var averageArray = [];
//     for (var i = 0; i < hours.length; i++) {
//       var averageSales = this.getRandomCustomerCount() * this.averageCookie;
//       averageSales = Math.round(averageSales);
//       cookieTotal += averageSales;
//       console.log(`Average total is ${cookieTotal}`);
//       console.log(averageSales);
//       averageArray.push(`${hours[i]}: ${averageSales} cookies`);
//     }
//     averageArray.push(`Total: ${cookieTotal}`);
//     console.log(`New Daily Sales final result is ${this.averageArray}`);
//     return averageArray;
//   },
//   render: function () {
//     const averageArray = this.hourlySalesAverage();
//     var titleElement = document.createElement('h2');
//     titleElement.textContent = this.name;
//     mainEl.appendChild(titleElement);
//     var ulEl = document.createElement('ul');
//     mainEl.appendChild(ulEl);
//     for (var j = 0; j < averageArray.length; j++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = averageArray[j];
//       ulEl.appendChild(liEl);
//     }
//   }
// };

// // renders list of averages for Capitol Hill Store
// var capitolHill = {
//   name: 'Capitol Hill',
//   minCustomer: 20,
//   maxCustomer: 38,
//   averageCookie: 2.3,
//   getRandomCustomerCount: function () {
//     return Math.round(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
//   },
//   hourlySalesAverage: function () {
//     var cookieTotal = 0;
//     var averageArray = [];
//     for (var i = 0; i < hours.length; i++) {
//       var averageSales = this.getRandomCustomerCount() * this.averageCookie;
//       averageSales = Math.round(averageSales);
//       cookieTotal += averageSales;
//       console.log(`Average total is ${cookieTotal}`);
//       console.log(averageSales);
//       averageArray.push(`${hours[i]}: ${averageSales} cookies`);
//     }
//     averageArray.push(`Total: ${cookieTotal}`);
//     console.log(`New Daily Sales final result is ${this.averageArray}`);
//     return averageArray;
//   },
//   render: function () {
//     const averageArray = this.hourlySalesAverage();
//     var titleElement = document.createElement('h2');
//     titleElement.textContent = this.name;
//     mainEl.appendChild(titleElement);
//     var ulEl = document.createElement('ul');
//     mainEl.appendChild(ulEl);
//     for (var j = 0; j < averageArray.length; j++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = averageArray[j];
//       ulEl.appendChild(liEl);
//     }
//   }
// };

// // renders list of averages for alki store
// var alki = {
//   name: 'Alki',
//   minCustomer: 2,
//   maxCustomer: 16,
//   averageCookie: 4.6,
//   getRandomCustomerCount: function () {
//     return Math.round(Math.random() * (this.maxCustomer - this.minCustomer + 1) + this.minCustomer);
//   },
//   hourlySalesAverage: function () {
//     var cookieTotal = 0;
//     var averageArray = [];
//     for (var i = 0; i < hours.length; i++) {
//       var averageSales = this.getRandomCustomerCount() * this.averageCookie;
//       averageSales = Math.round(averageSales);
//       cookieTotal += averageSales;
//       console.log(`Average total is ${cookieTotal}`);
//       console.log(averageSales);
//       averageArray.push(`${hours[i]}: ${averageSales} cookies`);
//     }
//     averageArray.push(`Total: ${cookieTotal}`);
//     console.log(`New Daily Sales final result is ${this.averageArray}`);
//     return averageArray;
//   },
//   render: function () {
//     const averageArray = this.hourlySalesAverage();
//     var titleElement = document.createElement('h2');
//     titleElement.textContent = this.name;
//     mainEl.appendChild(titleElement);
//     var ulEl = document.createElement('ul');
//     mainEl.appendChild(ulEl);
//     for (var j = 0; j < averageArray.length; j++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = averageArray[j];
//       ulEl.appendChild(liEl);
//     }
//   }
// };


// firstAndPike.render();
// seatacAirport.render();
// seattleCenter.render();
// capitolHill.render();
// alki.render();

