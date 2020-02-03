'use strict';

var dailyHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'];
var cookieStores = [];

function Stores(location, minCustomers, maxCustomers, avgCookieSale) {
  this.location = location;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookieSale = avgCookieSale;
  this.total = 0;
  this.dailyCookieSales = [];
  cookieStores.push(this);
}
Stores.prototype.calculateCustomers = function () {
  return (Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers);
};

Stores.prototype.cookiesEachHour = function () {
  for (var i = 0; i < dailyHours.length; i++) {
    var salesPer = Math.round(this.avgCookieSale * this.calculateCustomers());
    this.dailyCookieSales.push(salesPer);
    this.total += salesPer;
  }
},

Stores.prototype.render = function () {
  var parentEl = document.getElementById('sales');
  var liEl = document.createElement('td');
  liEl.textContent = this.location; 
  parentEl.appendChild(liEl);
  for (var i = 0; i < dailyHours.length; i++) {
    liEl = document.createElement('td');
    liEl.textContent = dailyHours[i] + ': ' + this.dailyCookieSales[i] + ' cookies ';
    parentEl.appendChild(liEl);
  }
  liEl = document.createElement('li');
  liEl.textContent = 'Total: ' + this.total;
  parentEl.appendChild(liEl);
};


// var tabEl = document.createElement('table');
// createTable();

// function createTable() {
//   var trHeaderEl = document.createElement('tr');
//   var thBlankEl = document.createElement('th');
//   thBlankEl.textContent = '';
//   trHeaderEl.appendChild(thBlankEl);
//   for (var i = 0; i < dailyHours, length; i++) {
//     var thEl = document.createElement('th');
//     thEl.textContent = dailyHours[i];
//     trHeaderEl.appendChild(thEl);
//   }
//   tabEl.appendChild(parentEl);
//   document.getElementById('main-content').appendChild(tabEl);
// }

new Stores('Seattle', 23, 65, 6.3);
cookieStores[0].calculateCustomers();
cookieStores[0].cookiesEachHour();
cookieStores[0].render();

new Stores('Tokyo', 3, 24, 1.2);
cookieStores[1].calculateCustomers();
cookieStores[1].cookiesEachHour();
cookieStores[1].render();

new Stores('Dubai', 11, 38, 3.7);
cookieStores[2].calculateCustomers();
cookieStores[2].cookiesEachHour();
cookieStores[2].render();

new Stores('Paris', 20, 38, 2.3);
cookieStores[3].calculateCustomers();
cookieStores[3].cookiesEachHour();
cookieStores[3].render();

new Stores('Lima', 2, 16, 4.6);
cookieStores[4].calculateCustomers();
cookieStores[4].cookiesEachHour();
cookieStores[4].render();






