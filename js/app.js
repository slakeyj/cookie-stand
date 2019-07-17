'use strict';

// variable to store the main element
var tableEl = document.getElementById('table');

// array for hours of day
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

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
}


function renderHours() {
  var thElEmpty = document.createElement('th');
  var trEl = document.createElement('tr');
  thElEmpty.textContent = '';
  trEl.appendChild(thElEmpty);
  for (var i = 0; i < hours.length; i++) {
    var thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  }
  tableEl.appendChild(trEl);
  var thElDailyLocationTotal = document.createElement('th');
  thElDailyLocationTotal.textContent = 'Daily Location Total';
  trEl.appendChild(thElDailyLocationTotal);
}

function renderFooter() {
  var elFooterRow = document.createElement('tr');
  var footerTitleTd = document.createElement('td');
  footerTitleTd.textContent = 'Totals';
  elFooterRow.appendChild(footerTitleTd);
  for (var i = 0; i <= hours.length; i++) {
    var footerTotalTd = document.createElement('td');
    footerTotalTd.textContent = 'NA';
    elFooterRow.appendChild(footerTotalTd);
  }
  tableEl.appendChild(elFooterRow);
}

CreateStore.prototype.render = function () {
  this.calculateHourlySales();
  var tdElName = document.createElement('td');
  var trElStore = document.createElement('tr');
  tdElName.textContent = this.name;
  trElStore.appendChild(tdElName);
  for (var i = 0; i < this.hourlySalesList.length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = this.hourlySalesList[i];
    trElStore.appendChild(tdEl);
  }
  var tdElCookieTotal = document.createElement('td');
  tdElCookieTotal.textContent = this.cookieTotal;
  trElStore.appendChild(tdElCookieTotal);
  tableEl.appendChild(trElStore);
};


//got this function from MDN - math.random() docs
CreateStore.prototype.getRandomCustomerCount = function () {
  return Math.round(Math.random() * (this.maximumCustomer - this.minimumCustomer + 1) + this.minimumCustomer);
};

CreateStore.prototype.calculateHourlySales = function () {
  this.hourlySalesList = [];
  for (var i = 0; i < hours.length; i++) {
    var hourlyCookieSales = this.getRandomCustomerCount() * this.averageCookieSale;
    hourlyCookieSales = Math.round(hourlyCookieSales);
    this.cookieTotal += hourlyCookieSales;
    console.log(`Average total is ${this.cookieTotal}`);
    console.log(hourlyCookieSales);
    this.hourlySalesList.push(hourlyCookieSales);
  }
};

storesCreated.push(new CreateStore('1st and Pike', 23, 65, 6.3));
storesCreated.push(new CreateStore('SeaTac Airport', 3, 24, 1.2));
storesCreated.push(new CreateStore('Seattle Center', 11, 38, 3.7));
storesCreated.push(new CreateStore('Capitol Hill', 20, 38, 2.3));
storesCreated.push(new CreateStore('Alki', 2, 16, 4.6));

renderHours();
for (var i = 0; i < storesCreated.length; i++) {
  storesCreated[i].render();
}

renderFooter();
