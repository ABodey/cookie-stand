

//set up custructor function
function store(minC, maxC, avgC) {
  this.minCust = minC;
  this.maxCust = maxC;
  this.avgCookie = avgC;
  this.hourlySales = function getRandomArbitrary(minC, maxC) {
    return Math.random() * (maxC - minC) + minC;
  }
};


// feed in new stores
var pioneer = new store(17, 88, 5.2);
var portland = new store(6, 24, 1.2);
var washington = new store(11, 38, 1.9);
var sellwood = new store(20, 48, 3.3);
var pearl = new store(3, 24, 2.6);
