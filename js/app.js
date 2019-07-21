'use strict';

// variable to store the table element
var tableEl = document.getElementById('table');
var formElement = document.getElementById('storeform');

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
  storesCreated.push(this);
}

//got this function from MDN - math.random() docs
CreateStore.prototype.getRandomCustomerCount = function () {
  return Math.round(Math.random() * (this.maximumCustomer - this.minimumCustomer + 1) + this.minimumCustomer);
};

// calculates the hourly sales of a store over a day
CreateStore.prototype.calculateHourlySales = function () {
  this.hourlySalesList = [];
  this.cookieTotal = 0;
  for (var i = 0; i < hours.length; i++) {
    var hourlyCookieSales = Math.ceil(this.getRandomCustomerCount() * this.averageCookieSale);
    hourlyCookieSales = Math.round(hourlyCookieSales);
    this.cookieTotal += hourlyCookieSales;
    // console.log(`Average total is ${this.cookieTotal}`);
    // console.log(hourlyCookieSales);
    this.hourlySalesList.push(hourlyCookieSales);
  }
};

// renders the hourly numbers for a store
CreateStore.prototype.render = function () {
  this.calculateHourlySales();
  var trElStore = document.createElement('tr');
  var tdElName = document.createElement('td');
  tdElName.textContent = this.name;
  tdElName.classList.add('table-heading');
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

// finds the totals of each store at a particular hour
function findHourlyStoreTotals() {
  var totalsOfAll = 0;
  var allStoreHourTotals = [];
  for (var i = 0; i < hours.length; i++) {
    var runningTotal = 0;
    for (var j = 0; j < storesCreated.length; j++) {
      runningTotal += storesCreated[j].hourlySalesList[i];
      totalsOfAll += storesCreated[j].hourlySalesList[i];
    }
    allStoreHourTotals.push(runningTotal);
  }
  console.log('totals of all is ', totalsOfAll);
  console.log('running total is ', runningTotal);
  return [allStoreHourTotals, totalsOfAll];
}

// renders the footer
function renderFooter() {
  var elFooterRow = document.createElement('tr');
  var footerTitleTd = document.createElement('td');
  footerTitleTd.textContent = 'Totals';
  footerTitleTd.classList.add('table-heading');
  elFooterRow.appendChild(footerTitleTd);
  for (var i = 0; i < hours.length; i++) {
    var footerTotalTd = document.createElement('td');
    footerTotalTd.textContent = findHourlyStoreTotals()[0][i];
    elFooterRow.appendChild(footerTotalTd);
  }
  var tdTotalOfAll = document.createElement('td');
  tdTotalOfAll.textContent = findHourlyStoreTotals()[1];
  elFooterRow.appendChild(tdTotalOfAll);
  tableEl.appendChild(elFooterRow);
}

// renders the hours list to the table header
function renderHours() {
  var trEl = document.createElement('tr');
  var thElEmpty = document.createElement('th');
  thElEmpty.textContent = '';
  trEl.appendChild(thElEmpty);
  for (var i = 0; i < hours.length; i++) {
    var thEl = document.createElement('th');
    thEl.classList.add('table-heading');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  }
  tableEl.appendChild(trEl);
  var thElDailyLocationTotal = document.createElement('th');
  thElDailyLocationTotal.textContent = 'Daily Location Total';
  thElDailyLocationTotal.classList.add('table-heading');
  trEl.appendChild(thElDailyLocationTotal);
}

// event handler for hitting submit
function handleSubmit(event) {
  event.preventDefault();
  console.log('the event.target.storename.value is ', event.target.storename.value);
  var storeNameInput = event.target.storename.value;
  var minCustomerInput = event.target.mincustomer.value;
  var maxCustomerInput = event.target.maxcustomer.value;
  var averageCookieSaleInput = event.target.averagecookies.value;
  console.log('The store name input is ' + storeNameInput);
  console.log('The minimum customer input is ' + minCustomerInput);
  console.log('The maximum customer input is ' + maxCustomerInput);
  console.log('The average cookies sales input is ' + averageCookieSaleInput);
  new CreateStore(storeNameInput, minCustomerInput, maxCustomerInput, averageCookieSaleInput);
  tableEl.innerHTML = '';
  renderHours();
  for (var i = 0; i < storesCreated.length; i++) {
    storesCreated[i].render();
    console.log('we are in the render loop');
  }
  console.log(storesCreated);
  renderFooter();
}

new CreateStore('1st and Pike', 23, 65, 6.3);
new CreateStore('SeaTac Airport', 3, 24, 1.2);
new CreateStore('Seattle Center', 11, 38, 3.7);
new CreateStore('Capitol Hill', 20, 38, 2.3);
new CreateStore('Alki', 2, 16, 4.6);

formElement.addEventListener('submit', handleSubmit);

renderHours();
for (var i = 0; i < storesCreated.length; i++) {
  storesCreated[i].render();
}
renderFooter();


