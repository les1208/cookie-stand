'use strict';

var dailyHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
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
  var rowEl = document.createElement('tr');
  rowEl.textContent = this.location;
  parentEl.appendChild(rowEl);
  for (var i = 0; i < dailyHours.length; i++) {
    var liEl = document.createElement('td');
    liEl.textContent = this.dailyCookieSales[i] + ' cookies ';
    rowEl.appendChild(liEl);
  }
  var dailyTotals = document.createElement('td');
  dailyTotals.textContent = 'Total: ' + this.total;
  rowEl.appendChild(dailyTotals);
};


var header = function () {
  var head = document.getElementById('sales');
  var times = document.createElement('thead');
  var emptyCell = document.createElement('th');
  times.appendChild(emptyCell);
  head.appendChild(times);

  for (var i = 0; i < dailyHours.length; i++) {
    var hourCell = document.createElement('th');
    hourCell.textContent = dailyHours[i];
    times.appendChild(hourCell);
  }
  var totalsCell = document.createElement('th');
  totalsCell.textContent = 'Daily location totals';
  times.appendChild(totalsCell);

};
header();

var footer = function () {
  var footer = document.getElementById('sales');
  var totals = document.createElement('tr');
  footer.appendChild(totals);
  var tdTotals = document.createElement('td');
  tdTotals.textContent = 'Total';
  totals.appendChild(tdTotals);

  for (var i = 0; i < dailyHours.length; i++) {
    var totalPerHr = 0;
    for (var j = 0; j < cookieStores.length; j++) {
      totalPerHr += cookieStores[j].dailyCookieSales[i];
    }
    console.log('totalPerHr');
  }
};



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

footer();
