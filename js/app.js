/* eslint-disable no-undef */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-unused-vars */
'use stict';
console.log('hola mundo');

// eslint-disable-next-line no-unused-vars
var array = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'];

// create seperate JS object literals for each shop location that outputs the following to the sales.html site.
// store min/max hourly customers, and the average cookies per customer, in object properties.


var seattle = {
  location: 'Seattle',
  mincustomers: 23,
  maxcustomers: 65,
  avgcookiesale: 6.3,
  results: [],
  function: function getRandom(mincustomers, maxcustomers) {
	 //return Math.random() * (this.mincustomers, this.maxcustomers) + this.mincustomers;
	 return this.mincustomers + this.maxcustomers
  }
};

console.log(Math.random());
console.log(seattle.function());

var Tokyo = {
  location: 'Tokyo',
  mincustomers: 3,
  maxcustomers: 24,
  avgcookiesale: 1.2,
  results: [],
  function: function getRandom(mincustomers, maxcustomers) {
    //return Math.random() * (this.mincustomers, this.maxcustomers) + this.mincustomers;
    return this.mincustomers + this.maxcustomers
	 }
};

console.log(Math.random());
console.log(Tokyo.function());

var Dubai = {
  location: 'Dubai',
  mincustomers: 11,
  maxcustomers: 38,
  avgcookiesale: 3.7,
  results: [],
  function: function getRandom(mincustomers, maxcustomers) {
    //return Math.random() * (this.mincustomers, this.maxcustomers) + this.mincustomers;
    return this.mincustomers + this.maxcustomers
	 }
};
console.log(Math.random());
console.log(Dubai.function());

var Paris = {
  location: 'Paris',
  mincustomers: 20,
  maxcustomers: 38,
  avgcookiesale: 2.3,
  results: [],
  function: function getRandom(mincustomers, maxcustomers) {
    //return Math.random() * (this.mincustomers, this.maxcustomers) + this.mincustomers;
    return this.mincustomers + this.maxcustomers
	 }
};
console.log(Math.random());
console.log(Paris.function());

var Lima = {
  location: 'Lima',
  mincustomers: 2,
  maxcustomers: 16,
  avgcookiesale: 4.6,
  results: [],
  function: function getRandom(mincustomers, maxcustomers) {
    //return Math.random() * (this.mincustomers, this.maxcustomers) + this.mincustomers;
    return this.mincustomers + this.maxcustomers
	 }
};
console.log(Math.random());
console.log(Lima.function());


for (var i = 0; i < hours.length; i++) {
  var answer = Math.floor(Math.random() * ((this.maxcustomers + 1) - this.mincustomers)) + this.mincustomers;
  var cookieSale = Math.floor(answer * this.avgcookiesale);
  //console.log(this.location + ": " + cookiesPerHr + " cookies per hour");
  //console.log(this.location + ": " + answer + " is answer");
  this.sum.push(cookiesPerHr);
  this.total = cookiesPerHr + this.total;
}




// use a method object to generate random number of customers per hour



