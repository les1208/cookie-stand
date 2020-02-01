'use strict';

var dailyHoursOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'];


var seattle = {
  location: 'Seattle',
  minCustomers: 23,
  maxCustomers: 65,
  avgCookieSale: 6.3,
  totalCookies: 0,
  dailyCookiesSales: [],
  calculateCustomer: function () {
    return (Math.floor(Math.random() * (this.maxCustomers - this.minCustomers +1)) + this.minCustomers);
  },
  cookiesEachHour: function(){
    for(var i = 0; i < dailyHoursOfOperation.length; i++){
      var salesPer = Math.round(this.avgCookieSale * this.calculateCustomer());
      this.dailyCookiesSales.push(salesPer);
      this.totalCookies += salesPer;
    }
  },

  render: function(){
    var parentEl = document.getElementById('sales');
    var liEl = document.createElement('li');
    liEl.textContent = this.location;
    parentEl.appendChild(liEl);
    for (var i = 0; i < dailyHoursOfOperation.length; i++) {
      liEl = document.createElement('li');
      liEl.textContent = dailyHoursOfOperation[i] + ': ' + this.dailyCookiesSales[i] + ' cookies ';
      parentEl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalCookies;
    parentEl.appendChild(liEl);
  }
};


var tokyo = {
  location: 'Tokyo',
  minCustomers: 3,
  maxCustomers: 65,
  avgCookieSale: 6.3,
  totalCookies: 0,
  dailyCookiesSales: [],
  calculateCustomer: function () {
    return (Math.floor(Math.random() * (this.maxCustomers - this.minCustomers +1)) + this.minCustomers);
  },
  cookiesEachHour: function(){
    for(var i = 0; i < dailyHoursOfOperation.length; i++) {
      var salesPer = Math.round(this.avgCookieSale * this.calculateCustomer());
      console.log(this.avgCookieSale);
      this.dailyCookiesSales.push(salesPer);
      this.totalCookies += salesPer;
      // console.log(seattle.dailyCookiesSales);
    }
  },

  render: function(){
    var parentEl = document.getElementById('sales');
    var liEl = document.createElement('li');
    liEl.textContent = this.location;
    parentEl.appendChild(liEl);
    for (var i = 0; i < dailyHoursOfOperation.length; i++) {
      liEl = document.createElement('li');
      liEl.textContent = dailyHoursOfOperation[i] + ': ' + this.dailyCookiesSales[i] + ' cookies ';
      parentEl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalCookies;
    parentEl.appendChild(liEl);
  }
};
// console.log(tokyo.calculateCustomer());


var dubai = {
  location: 'Dubai',
  minCustomers: 11,
  maxCustomers: 38,
  avgCookieSale: 3.7,
  totalCookies: 0,
  dailyCookiesSales: [],
  calculateCustomer: function () {
    return (Math.floor(Math.random() * (this.maxCustomers - this.minCustomers +1)) + this.minCustomers);
  },
  cookiesEachHour: function(){
    for(var i = 0; i < dailyHoursOfOperation.length; i++) {
      var salesPer = Math.round(this.avgCookieSale * this.calculateCustomer());
      this.dailyCookiesSales.push(salesPer);
      this.totalCookies += salesPer;
    }
  },

  render: function(){
    var parentEl = document.getElementById('sales');
    var liEl = document.createElement('li');
    liEl.textContent = this.location;
    parentEl.appendChild(liEl);
    for (var i = 0; i < dailyHoursOfOperation.length; i++) {
      liEl = document.createElement('li');
      liEl.textContent = dailyHoursOfOperation[i] + ': ' + this.dailyCookiesSales[i] + ' cookies ';
      parentEl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalCookies;
    parentEl.appendChild(liEl);
  }
};


var paris = {
  location: 'Paris',
  minCustomers: 20,
  maxCustomers: 38,
  avgCookieSale: 2.3,
  totalCookies: 0,
  dailyCookiesSales: [],
  calculateCustomer: function () {
    return (Math.floor(Math.random() * (this.maxCustomers - this.minCustomers +1)) + this.minCustomers);
  },
  cookiesEachHour: function(){
    for(var i = 0; i < dailyHoursOfOperation.length; i++) {
      var salesPer = Math.round(this.avgCookieSale * this.calculateCustomer());
      this.dailyCookiesSales.push(salesPer);
      this.totalCookies += salesPer;
    }
  },

  render: function(){
    var parentEl = document.getElementById('sales');
    var liEl = document.createElement('li');
    liEl.textContent = this.location;
    parentEl.appendChild(liEl);
    for (var i = 0; i < dailyHoursOfOperation.length; i++) {
      liEl = document.createElement('li');
      liEl.textContent = dailyHoursOfOperation[i] + ': ' + this.dailyCookiesSales[i] + ' cookies ';
      parentEl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalCookies;
    parentEl.appendChild(liEl);
  }
};


var lima = {
  location: 'Lima',
  minCustomers: 2,
  maxCustomers: 16,
  avgCookieSale: 4.6,
  totalCookies: 0,
  dailyCookiesSales: [],
  calculateCustomer: function () {
    return (Math.floor(Math.random() * (this.maxCustomers - this.minCustomers +1)) + this.minCustomers);
  },
  cookiesEachHour: function(){
    for(var i = 0; i < dailyHoursOfOperation.length; i++) {
      var salesPer = Math.round(this.avgCookieSale * this.calculateCustomer());
      this.dailyCookiesSales.push(salesPer);
      this.totalCookies += salesPer;
    }
  },

  render: function(){
    var parentEl = document.getElementById('sales');
    var liEl = document.createElement('li');
    liEl.textContent = this.location;
    parentEl.appendChild(liEl);
    for (var i = 0; i < dailyHoursOfOperation.length; i++) {
      liEl = document.createElement('li');
      liEl.textContent = dailyHoursOfOperation[i] + ': ' + this.dailyCookiesSales[i] + ' cookies ';
      parentEl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalCookies;
    parentEl.appendChild(liEl);
  }
};

// console.log(lima.calculateCustomer());



seattle.cookiesEachHour();
seattle.render();

tokyo.cookiesEachHour();
tokyo.render();

dubai.cookiesEachHour();
dubai.render();

paris.cookiesEachHour();
paris.render();

lima.cookiesEachHour();
lima.render();







