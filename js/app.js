'use strict';
let hours = [
    "6am",
    "7am",
    "8am",
    "9am",
    "10am",
    "11am",
    "12pm",
    "1pm",
    "2pm",
    "3pm",
    "4pm",
    "5pm",
    "6pm",
    "7pm"];

let StoreArray = [];
function Store(storename, minCustPerHour, maxCustPerHour, avgCustCookies) {
    this.storeName = storename;
    this.minCustPerHour = minCustPerHour;
    this.maxCustPerHour = maxCustPerHour;
    this.avgCustCookies = avgCustCookies;
    this.randomCustPerHour = [];
    this.salesPerHour = [];
    this.totalPerHour = [];
    this.totalAmount = 0;
    this.totalCookiesSold = 0;

    StoreArray.push(this);

}
console.log(StoreArray);

Store.prototype.randomCustNumber = function () {
    for (let hour = 0; hour < hours.length; hour++) {
        this.randomCustPerHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour));

    }
}

Store.prototype.salesCookies = function () {
    for (let i = 0; i < hours.length; i++) {
        this.salesPerHour.push(Math.ceil(this.randomCustPerHour[i] * this.avgCustCookies));
        this.totalPerHour += this.salesPerHour[i];
        // totalOfTotal+= totalOfTotal + this.totalPerHour;
        // console.log(totalOfTotal);

    }
};
let container = document.getElementById('table');
let table = document.createElement('table');

container.appendChild(table);



function header() {
    let t1 = document.createElement('tr');
    table.appendChild(t1);
    let h1 = document.createElement('th');
    t1.appendChild(h1);
    h1.textContent = " "
    for (let i = 0; i < hours.length; i++) {
        let td = document.createElement('th');
        t1.appendChild(td);
        td.textContent = hours[i]
    }
    let daily = document.createElement('td')
    t1.appendChild(daily);
    daily.textContent = ('Daily Location Total')




}

function footer() {
    let tFooter =document.createElement('tfoot');
    table.appendChild(tFooter);

    let f1 = document.createElement('tr');
    tFooter.appendChild(f1);

    let td1 = document.createElement('td');
    f1.appendChild(td1);
    td1.textContent = 'totals';



    let totalOfTotal ;

    for (let i = 0; i < hours.length; i++) {
        let sumTotal = 0;
        let footerTotal = 0;
        totalOfTotal =0;


        for (let s = 0; s < StoreArray.length; s++) {

            sumTotal += StoreArray[s].salesPerHour[i];
            totalOfTotal += StoreArray[s].totalAmount
            console.log(StoreArray);

        }
        let t2 = document.createElement('td')
        f1.appendChild(t2);
        t2.textContent = sumTotal;


        // totalOfTotal += sumTotal;
    }
    // this is final of final

    let td10 = document.createElement('td');
    f1.appendChild(td10);
    console.log();
    td10.textContent = totalOfTotal;

}

Store.prototype.render = function () {




    let tableHeader = document.createElement('tr');
    table.appendChild(tableHeader);

    let thE1 = document.createElement('th');
    tableHeader.appendChild(thE1);
    thE1.textContent = this.storeName

    for (let i = 0; i < hours.length; i++) {
        let thE = document.createElement('th');
        tableHeader.appendChild(thE);
        thE.textContent = this.salesPerHour[i];
        this.totalAmount += this.salesPerHour[i]
        this.totalCookiesSold += this.salesPerHour;

    }

    let t3 = document.createElement('th');
    tableHeader.appendChild(t3);
    t3.textContent = this.totalAmount;


    let tableContent = document.createElement('tr');
    table.appendChild(tableContent);
    // totalOfTotal += this.totalAmount;










}
header();


let seatle = new Store('seatle', 23, 65, 6.3);

seatle.randomCustNumber();
seatle.salesCookies();
seatle.render();




let Tokyo = new Store('Tokyo', 3, 24, 1.2);

Tokyo.randomCustNumber();
Tokyo.salesCookies();
Tokyo.render();

let Dubai = new Store('Dubai', 11, 38, 3.7);

Dubai.randomCustNumber();
Dubai.salesCookies();
Dubai.render();

let Paris = new Store('Paris', 20, 38, 2.3);

Paris.randomCustNumber();
Paris.salesCookies();
Paris.render();

let Lima = new Store('Lima', 2, 16, 4.6);


Lima.randomCustNumber();
Lima.salesCookies();
Lima.render();


footer();


let StoreForm = document.getElementById('storeForm');
StoreForm.addEventListener('submit', addAStore);

function addAStore(event) {
    event.preventDefault();
    let storename = event.target.storeName.value;
    let minCustPerHour = parseInt(event.target.minCustPerHour.value);
    let maxCustPerHour = parseInt(event.target.maxCustPerHour.value);
    let avgCustCookies = parseFloat(event.target.avgCustCookies.value);
    console.log(storename, minCustPerHour, maxCustPerHour, avgCustCookies);
    let newStore = new Store(storename, minCustPerHour, maxCustPerHour, avgCustCookies)
    table.deleteTFoot();

    newStore.randomCustNumber();

    newStore.salesCookies();
    newStore.render();
    console.log(newStore);
    // table.innerHTML=""
    // table.removeChild(5)


    footer();
    // f1.innerHTML="";



}



















































    // let trel = document.createElement('tr');
    // let thel =document.createElement('th');
    // thel .textContent=this.storeName;
    // trel.appendChild(thel);




    // let container = document.getElementById('sales');
    // let h2El = document.createElement('h2');
    // container.appendChild(h2El);
    // h2El.textContent = this.storeName;
    // let ulEl = document.createElement('ul');
    // container.appendChild(ulEl);
    // for (let hour = 0; hour < hours.length; hour++) {
    //     let liEl = document.createElement('li');
    //     ulEl.appendChild(liEl);
    //     liEl.textContent = `${hours[hour]}:${this.salesPerHour[hour]} cookies`
    // }
    // let totalLi = document.createElement('li');
    // ulEl.appendChild(totalLi);
    // totalLi.textContent = `Total: ${this.totalPerHour} cookies`;

    // let tableEl = document.createElement('table');
    // h2El.appendChild(tableEl);

    // let tableHeader = document.createElement('tr');
    // tableEl.appendChild(tableHeader);
    // tableHeader.textContent=hours;


    // for (let i = 0; i < 14; i++) {
    //     let tdE1 = document.createElement('td');
    //     tableHeader.appendChild(tdE1);
    //     // td1.textContent =
    // }



    // for (let hour = 0; hour < hours.length; hour++) {
    //     let thE1 = document.createElement('th');
    //     tableHeader.appendChild(thE1);
    //     // liEl.textContent = `${hours[hour]}:${this.salesPerHour[hour]} cookies`
    // }
    // }
    // let thEl1 = document.createElement('th');
    // thEl1.textContent = '6am';
    // tableHeader.appendChild(thEl1);

    // let thEl2 = document.createElement('th');
    // thEl2.textContent = '7am';
    // tableHeader.appendChild(thEl2);


    // let thEl3 = document.createElement('th');
    // thEl3.textContent = '8am';
    // tableHeader.appendChild(thEl3);

    // let thEl4 = document.createElement('th');
    // thEl4.textContent = '9am';
    // tableHeader.appendChild(thEl4);

    // let thEl5 = document.createElement('th');
    // thEl5.textContent = '10am';
    // tableHeader.appendChild(thEl5);

    // let thEl6 = document.createElement('th');
    // thEl6.textContent = '11am';
    // tableHeader.appendChild(thEl6);

    // let thEl7 = document.createElement('th');
    // thEl7.textContent = '12pm';
    // tableHeader.appendChild(thEl7);

    // let thEl8 = document.createElement('th');
    // thEl8.textContent = '1pm';
    // tableHeader.appendChild(thEl8);

    // let thEl9 = document.createElement('th');
    // thEl9.textContent = '2pm';
    // tableHeader.appendChild(thEl9);

    // let thEl10 = document.createElement('th');
    // thEl10.textContent = '3pm';
    // tableHeader.appendChild(thEl10);

    // let thEl11 = document.createElement('th');
    // thEl11.textContent = '4pm';
    // tableHeader.appendChild(thEl11);

    // let thEl12 = document.createElement('th');
    // thEl12.textContent = '5pm';
    // tableHeader.appendChild(thEl12);

    // let thEl13 = document.createElement('th');
    // thEl13.textContent = '6pm';
    // tableHeader.appendChild(thEl13);

    // let thEl14 = document.createElement('th');
    // thEl14.textContent = '7pm';
    // tableHeader.appendChild(thEl14);

    // let tableBody = document.createElement('tr');
    // tableEl.appendChild(tableBody);



// let seattle = {
//     storeName: 'Seattle',
//     minCustPerHour: 23,
//     maxCustPerHour: 65,
//     avgCustCookies: 6.3,
//     randomCustPerHour: [],
//     //[35,45,100,30....]
//     salesPerHour: [],
//     totalPerHour: 0,
//     //[35*6.3,45*6.3,100*6.3,....]
//     // randomCustNumber: function () {
//     //     for (let hour = 0; hour < hours.length; hour++) {
//     //         this.randomCustPerHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour));
//     //     }
//     },
//     // salesCookies: function () {
//     //     for (let i = 0; i < hours.length; i++) {
//     //         this.salesPerHour.push(Math.ceil(this.randomCustPerHour[i] * this.avgCustCookies));
//     //         this.totalPerHour += this.salesPerHour[i];
    //     }
    // },}
    // render: function () {
    //     let container = document.getElementById('sales');
    //     let h2El = document.createElement('h2');
    //     container.appendChild(h2El);
    //     h2El.textContent = this.storeName;
    //     let ulEl = document.createElement('ul');
    //     container.appendChild(ulEl);
    //     for (let hour = 0; hour < hours.length; hour++) {
    //         let liEl = document.createElement('li');
    //         ulEl.appendChild(liEl);
    //         liEl.textContent = `${hours[hour]}:${this.salesPerHour[hour]} cookies`
    //     }
    //     let totalLi = document.createElement('li');
    //     ulEl.appendChild(totalLi);
    //     totalLi.textContent = `Total: ${this.totalPerHour} cookies`



// }
// seattle.randomCustNumber();
// seattle.salesCookies();
// seattle.render();

// let tokyo = {
//     storeName: 'Tokyo',
//     minCustPerHour: 3,
//     maxCustPerHour: 24,
//     avgCustCookies: 1.2,
//     randomCustPerHour: [],
//     //[35,45,100,30....]
//     salesPerHour: [],
//     totalPerHour: 0,
//     //[35*6.3,45*6.3,100*6.3,....]
//     randomCustNumber: function () {
//         for (let hour = 0; hour < hours.length; hour++) {
//             this.randomCustPerHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour));
//         }
//     },
//     salesCookies: function () {
//         for (let i = 0; i < hours.length; i++) {
//             this.salesPerHour.push(Math.ceil(this.randomCustPerHour[i] * this.avgCustCookies));
//             this.totalPerHour += this.salesPerHour[i];
//         }
//     },
//     render: function () {
//         let container = document.getElementById('sales');
//         let h2El = document.createElement('h2');
//         container.appendChild(h2El);
//         h2El.textContent = this.storeName;
//         let ulEl = document.createElement('ul');
//         container.appendChild(ulEl);
//         for (let hour = 0; hour < hours.length; hour++) {
//             let liEl = document.createElement('li');
//             ulEl.appendChild(liEl);
//             liEl.textContent = `${hours[hour]}:${this.salesPerHour[hour]} cookies`
//         }
//         let totalLi = document.createElement('li');
//         ulEl.appendChild(totalLi);
//         totalLi.textContent = `Total: ${this.totalPerHour} cookies`

//     }

// }
// tokyo.randomCustNumber();
// tokyo.salesCookies();
// tokyo.render();

// let Dubai = {
//     storeName: 'Dubai',
//     minCustPerHour: 11,
//     maxCustPerHour: 38,
//     avgCustCookies: 3.7,
//     randomCustPerHour: [],
//     //[35,45,100,30....]
//     salesPerHour: [],
//     totalPerHour: 0,
//     //[35*6.3,45*6.3,100*6.3,....]
//     randomCustNumber: function () {
//         for (let hour = 0; hour < hours.length; hour++) {
//             this.randomCustPerHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour));
//         }
//     },
//     salesCookies: function () {
//         for (let i = 0; i < hours.length; i++) {
//             this.salesPerHour.push(Math.ceil(this.randomCustPerHour[i] * this.avgCustCookies));
//             this.totalPerHour += this.salesPerHour[i];
//         }
//     },
//     render: function () {
//         let container = document.getElementById('sales');
//         let h2El = document.createElement('h2');
//         container.appendChild(h2El);
//         h2El.textContent = this.storeName;
//         let ulEl = document.createElement('ul');
//         container.appendChild(ulEl);
//         for (let hour = 0; hour < hours.length; hour++) {
//             let liEl = document.createElement('li');
//             ulEl.appendChild(liEl);
//             liEl.textContent = `${hours[hour]}:${this.salesPerHour[hour]} cookies`
//         }
//         let totalLi = document.createElement('li');
//         ulEl.appendChild(totalLi);
//         totalLi.textContent = `Total: ${this.totalPerHour} cookies`

//     }

// }
// Dubai.randomCustNumber();
// Dubai.salesCookies();
// Dubai.render();

// let Paris = {
//     storeName: 'Paris',
//     minCustPerHour: 20,
//     maxCustPerHour: 38,
//     avgCustCookies: 2.3,
//     randomCustPerHour: [],
//     //[35,45,100,30....]
//     salesPerHour: [],
//     totalPerHour: 0,
//     //[35*6.3,45*6.3,100*6.3,....]
//     randomCustNumber: function () {
//         for (let hour = 0; hour < hours.length; hour++) {
//             this.randomCustPerHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour));
//         }
//     },
//     salesCookies: function () {
//         for (let i = 0; i < hours.length; i++) {
//             this.salesPerHour.push(Math.ceil(this.randomCustPerHour[i] * this.avgCustCookies));
//             this.totalPerHour += this.salesPerHour[i];
//         }
//     },
//     render: function () {
//         let container = document.getElementById('sales');
//         let h2El = document.createElement('h2');
//         container.appendChild(h2El);
//         h2El.textContent = this.storeName;
//         let ulEl = document.createElement('ul');
//         container.appendChild(ulEl);
//         for (let hour = 0; hour < hours.length; hour++) {
//             let liEl = document.createElement('li');
//             ulEl.appendChild(liEl);
//             liEl.textContent = `${hours[hour]}:${this.salesPerHour[hour]} cookies`
//         }
//         let totalLi = document.createElement('li');
//         ulEl.appendChild(totalLi);
//         totalLi.textContent = `Total: ${this.totalPerHour} cookies`

//     }

// }
// Paris.randomCustNumber();
// Paris.salesCookies();
// Paris.render();

// let Lima = {
//     storeName: 'Lima',
//     minCustPerHour: 2,
//     maxCustPerHour: 16,
//     avgCustCookies: 4.6,
//     randomCustPerHour: [],
//     //[35,45,100,30....]
//     salesPerHour: [],
//     totalPerHour: 0,
//     //[35*6.3,45*6.3,100*6.3,....]
//     randomCustNumber: function () {
//         for (let hour = 0; hour < hours.length; hour++) {
//             this.randomCustPerHour.push(Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1) + this.minCustPerHour));
//         }
//     },
//     salesCookies: function () {
//         for (let i = 0; i < hours.length; i++) {
//             this.salesPerHour.push(Math.ceil(this.randomCustPerHour[i] * this.avgCustCookies));
//             this.totalPerHour += this.salesPerHour[i];
//         }
//     },
//     render: function () {
//         let container = document.getElementById('sales');
//         let h2El = document.createElement('h2');
//         container.appendChild(h2El);
//         h2El.textContent = this.storeName;   
//         let ulEl = document.createElement('ul');
//         container.appendChild(ulEl);
//         for (let hour = 0; hour < hours.length; hour++) {
//             let liEl = document.createElement('li');
//             ulEl.appendChild(liEl);
//             liEl.textContent = `${hours[hour]}:${this.salesPerHour[hour]} cookies`
//         }
//         let totalLi = document.createElement('li');
//         ulEl.appendChild(totalLi);
//         totalLi.textContent = `Total: ${this.totalPerHour} cookies`

//     }

// }
// Lima.randomCustNumber();
// Lima.salesCookies();
// Lima.render();