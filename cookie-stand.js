// object literals
var pioneer = {
  minC : 17,
  maxC : 88,
  avgC : 5.2
};
var portland = {
  minC : 6,
  maxC : 24,
  avgC : 1.2
};
var washington = {
  minC : 11,
  maxC : 38,
  avgC : 1.9
};
var sellwood = {
  minC : 20,
  maxC : 48,
  avgC : 3.3
};
var pearl = {
  minC : 3,
  maxC : 24,
  avgC : 2.6
};

//function for the hourly cookie
function hourlySales(minC, maxC, avgC, shopC) {
  var cookiePrint = document.getElementByClass(shopC);
  for ( var i = 0; i < 8; i++ ) {
  (   Math.floor((Math.floor(Math.random() * (maxC - minC)) + minC)*avgC));

}
};


// function buildTable() {
//   var studentTable = document.getElementById("studentList");
//   studentTable.innerHTML = tableHeaderRow;
//   var message = "Students in the class:";
//   for (var index = 0; index < students.length; index++) {
//     message += "\n  " + students[index];
//     var studentRow = "<tr><td>"+students[index].name+"</td>";
//     studentRow += "<td>"+students[index].phone+"</td>";
//     studentRow += "<td>"+students[index].email+"</td></tr>";
//     studentTable.innerHTML += studentRow;
//   }
//   studentTable.innerHTML += "<tr><td colspan='2'>Total Students:</td><td>" + students.length + "</td></tr>";
//   console.log(message);
// }



























// var pioneer = new store(17, 88, 5.2);
// var portland = new store(6, 24, 1.2);
// var washington = new store(11, 38, 1.9);
// var sellwood = new store(20, 48, 3.3);
// var pearl = new store(3, 24, 2.6);


//set up custructor function
// function store(minC, maxC, avgC) {
//   this.minCust = minC;
//   this.maxCust = maxC;
//   this.avgCookie = avgC;
//   this.hourlySales = function getRandomArbitrary(minC, maxC) {
//     return Math.random() * (maxC - minC) + minC;
//   }
// };


// feed in new stores
// var pioneer = new store(17, 88, 5.2);
// var portland = new store(6, 24, 1.2);
// var washington = new store(11, 38, 1.9);
// var sellwood = new store(20, 48, 3.3);
// var pearl = new store(3, 24, 2.6);
