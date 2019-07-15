'use strict';

var firstAndPike = {
  name: '1st and Pike',
  minCustomer: 23,
  maxCustomer: 65,
  averageCookie: 6.3,
  randomCustomer: function (min, max) {
    return Math.round(Math.random() * (max - min + 1) + min);
  },
  dailySales: []
};

var seatacAirport = {
  name: 'SeaTac Airport',
  minCustomer: 3,
  maxCustomer: 24,
  averageCookie: 1.2,
  randomCustomer: function (min, max) {
    return Math.round(Math.random() * (max - min + 1) + min);
  },
  dailySales: []
};

var seattleCenter = {
  name: 'Seattle Center',
  minCustomer: 11,
  maxCustomer: 38,
  averageCookie: 3.7,
  randomCustomer: function (min, max) {
    return Math.round(Math.random() * (max - min + 1) + min);
  },
  dailySales: []
};

var capitolHill = {
  name: 'Capitol Hill',
  minCustomer: 20,
  maxCustomer: 38,
  averageCookie: 2.3,
  randomCustomer: function (min, max) {
    return Math.round(Math.random() * (max - min + 1) + min);
  },
  dailySales: []
};

var alki = {
  name: 'Alki',
  minCustomer: 2,
  maxCustomer: 16,
  averageCookie: 4.6,
  randomCustomer: function (min, max) {
    return Math.round(Math.random() * (max - min + 1) + min);
  },
  dailySales: [];
};
