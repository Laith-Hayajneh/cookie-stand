'use strict'
let workingHour = ['6', '7', '8', '9', ' 10', '11', '12', '13', '14', '15', '16', '17', '18'];
// console.log(workingHour.length);
let seattle = {
  storeName: 'seattle',
  minCusPerHour: 23,
  maxCusPerHour: 65,
  avgCookiesCusPerHour: 6.3,
  ramdomCustNumber: [],
  salesPerHour: [],
  totalPerHour:0,


  //random Number


  randomCustNumber: function () {
    for (let hour = 0; hour < workingHour.length; hour++) {

      this.ramdomCustNumber.push(Math.floor(Math.random() * (this.maxCusPerHour - this.minCusPerHour + 1) + min));
    }

  },
  salesCookies: function () {
    for (let i = 0; i < this.workingHour.length; index++) {
      this.salesPerHour.push(Math.ceil( this.randomCustNumber[i] * this.avgCookiesCusPerHour));
      this.totalPerHour+=this.salesPerHour;

    }

  },
  render:function(){
    let container =document.getElementById('sales;');
    let h2E1 =document,createElement('h2');
    container.appendChild(h2E1);
    h2E1.textContent= this.storeName;
    let ulE1 =document.createElement('ul');
    container.appendChild(ulE1);
    for (let hour = 0; hour < array.length; hour++) {
      let liE1 =document.createElement('li');
      ulE1.appendChild(liE1),



      

    },

  },
}


