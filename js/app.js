'use strict';

// variable to store the main element
var tableEl = document.getElementById('table');
var trEl = document.createElement('tr');
var thEl = document.createElement('th');
var tdEl = document.createElement('td');

// array for hours of day
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

// array to store all stores created
var storesCreated = [];
function CreateStore(name, minimumCustomer, maximumCustomer, averageCookieSale) {
  this.name = name;
  this.minimumCustomer = minimumCustomer;
  this.maximumCustomer = maximumCustomer;
  this.averageCookieSale = averageCookieSale;
  this.cookieTotal = 0;
  this.hourlySalesList = [];
  this.dailyTotal = [];
  storesCreated.push(this);
}


function renderHours() {
  thEl.textContent = '';
  trEl.appendChild(thEl);
  for (var i = 0; i < hours.length; i++) {
    thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  }
  tableEl.appendChild(trEl);
}

CreateStore.prototype.renderHourTotals = function () {
  this.getHourlySales();
  trEl = document.createElement('tr');
  tdEl = document.createElement('td');
  tdEl.textContent = this.name;
  trEl.appendChild(tdEl);
  for (var i = 0; i < this.hourlySalesList.length; i++) {
    tdEl = document.createElement('td');
    tdEl.textContent = this.hourlySalesList[i];
    trEl.appendChild(tdEl);
  }
  tdEl = document.createElement('td');

  tdEl.textContent = this.cookieTotal;
  trEl.appendChild(tdEl);
  tableEl.appendChild(trEl);
};


//got this function from MDN - math.random() docs
CreateStore.prototype.getRandomCustomerCount = function () {
  return Math.round(Math.random() * (this.maximumCustomer - this.minimumCustomer + 1) + this.minimumCustomer);
};

CreateStore.prototype.getHourlySales = function () {
  this.hourlySalesList = [];
  for (var i = 0; i < hours.length; i++) {
    var hourlyCookieSales = this.getRandomCustomerCount() * this.averageCookieSale;
    hourlyCookieSales = Math.round(hourlyCookieSales);
    this.cookieTotal += hourlyCookieSales;
    console.log(`Average total is ${this.cookieTotal}`);
    console.log(hourlyCookieSales);
    this.hourlySalesList.push(`${hourlyCookieSales}`);
  }
};

// Outputs the total of all hourly sales
CreateStore.prototype.getTotal = function () {
  this.dailyTotal.push(this.cookieTotal);
  console.log(`Total: ${this.cookieTotal}`);
};


new CreateStore('1st and Pike', 23, 65, 6.3);
new CreateStore('SeaTac Airport', 3, 24, 1.2);
new CreateStore('Seattle Center', 11, 38, 3.7);
new CreateStore('Capitol Hill', 20, 38, 2.3);
new CreateStore('Alki', 2, 16, 4.6);

renderHours();
for (var i = 0; i < storesCreated.length; i++) {
  storesCreated[i].renderHourTotals();
  storesCreated[i].getHourlySales();
  storesCreated[i].getTotal();
}
