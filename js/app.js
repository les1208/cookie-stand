/* eslint-disable no-mixed-spaces-and-tabs */
'use stict';
console.log('hola mundo');

var array = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'];
// delare parent elements (seattle, dubai etc...)

// create seperate JS object literals for each shop location that outputs the following to the sales.html site.
// store min/max hourly customers, and the average cookies per customer, in object properties.


var seattle = {
  location: 'Seattle',
  mincustomers: 23,
  maxcustomers: 65,
  avgcookiesale: 6.3,
  totalcookies: 0,
  results: [],
  function: function getRandom() {
    for(var i = 0; i < array.length; i++){
      // math function 
      // this.totalcookies += random number generated above
      // push result to this.results[i]
      // apped to the dom array[i] and results array [i] 
      // create li
      // give li context
      // append to parent


    }
	 //return Math.random() * (this.mincustomers, this.maxcustomers) + this.mincustomers;
	 return this.mincustomers + this.maxcustomers;
  }
};
seattle.function();

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
    return this.mincustomers + this.maxcustomers;
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
    return this.mincustomers + this.maxcustomers;
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
    return this.mincustomers + this.maxcustomers;
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
    return this.mincustomers + this.maxcustomers;
	 }
};
console.log(Math.random());
console.log(Lima.function());

//cookies sold per hour

//function cookiesSoldPerHr(mincus, maxcus, avgcookies) {
//   {
//     this.location = location,
//     this.mincus = mincustomers,
//     this.maxcus = maxcustomers,
//     this.avgcookies = avgcookiesale,
//     this.cookiesperhour = [];
//     this.total = 0;
//   }
// }

//this.cookiesSoldPerHr();



for (var i = 0; i < hours.length; i++) {
  //var listElement = document.createElement('li');
  HTMLDataListElement.textContent = 'List items';
  HTMLDataListElement.textContent= arr[i];
}






// use a method object to generate random number of customers per hour



