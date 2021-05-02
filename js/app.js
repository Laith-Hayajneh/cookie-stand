'use strict'
let workingHour = ['6', '7', '8', '9', ' 10', '11', '12', '13', '14', '15', '16', '17', '18'];
// console.log(workingHour.length);
let seattle = {
  storeName: 'seattle',
  minCusPerHour: 23,
  maxCusPerHour: 65,
  avgCookiesCusPerHour: 6.3,
  // numOfCusPerHour: 0,
  numOfCusPerHour: [],


//random Number
  getRan: function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    this.numOfCusPerHour = Math.floor(Math.random() * (max - min + 1) + min);
  },
  //the multiply 
  cookiesPerHour:function(){
    return(this.avgCookiesCusPerHour * this.addingCoutPerHour())},

  addingCoutPerHour: function () {
    for (i = 0; i < workingHour.length; i++) {
      this.numOfCusPerHour.push(this.getRan(this.minCusPerHour, this.maxCusPerHour));
      console.log(this.numOfCusPerHour)
    }
  },



}

seattle.getRan(1,9);







// seattle.render();

//   //product 
  // simulated: numOfCusPerHour * avgCookiesCusPerHour,
  // render: function () {
  //   let divEl = document.getElementById('storNAme');

  //   let articleEl = document.createElement('article');
  //   divEl.appendChild(articleEl);

  //   let h2El = document.createElement('h2');
  //   h2El.textContent = this.storeName;
  //   articleEl.appendChild(h2El),
