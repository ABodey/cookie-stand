//global variables
var storeDataTableHeader =("<tr><th>Location</th>  <th>Minimum / Customers</th>  <th>Maximum / Customers</th>  <th>Average Cookie / Sales</th></tr>");
var timeOfDay = ["10am","11am","12pm","1pm","2pm","3pm","4pm","5pm"]


// object constructor

var CookieStore = function(shopName, minCookies, maxCookies, avgCookies){
  this.shopName = shopName;
  this.minCookies = minCookies;
  this.maxCookies = maxCookies;
  this.avgCookies = avgCookies;
  this.dataArray = [this.shopName, this.minCookies, this.maxCookies, this.avgCookies]
  this.hourlySales = function () {
    var totalCookies = 0;
    var cookieArray =[this.shopName];
    for ( var index = 0; index < timeOfDay.length; index++ ) {
      var cookiePrint = (Math.floor((Math.floor(Math.random() * (this.maxCookies - this.minCookies)) + this.minCookies)*this.avgCookies))
      //    console.log(cookiePrint);
      cookieArray.push(cookiePrint);
      totalCookies += cookiePrint;
    };
    cookieArray.push(totalCookies);
    console.log(cookieArray);
    return cookieArray;
  },
  //build both a table for cookie store data or cookie sales data
  this.tableBuilder = function(tableLocation, arrayDataBuilder) {
    var body = document.getElementsByClassName(tableLocation)[0];
    var resultArray = arrayDataBuilder;
    var row = document.createElement("tr");
    for (var index = 0; index < resultArray.length; index++) {
      var cell = document.createElement("td");
      var cellText = document.createTextNode(resultArray[index]);
      cell.appendChild(cellText);
      row.appendChild(cell);
    };
    //row added to end of table body
    body.appendChild(row);
  }
  //  this.
};


// Store objects being constructed
var pioneer = new CookieStore("Pioneer Square", 17, 88, 5.2);
var portland = new CookieStore("Portland Airport", 6, 24, 1.2);
var washington = new CookieStore("Washington Square", 11, 38, 1.9);
var sellwood = new CookieStore("Sellwood", 20, 48, 3.3);
var pearl = new CookieStore("Pearl District", 3, 24, 2.6);

// Store methods array
var stores = [pioneer, portland, washington, sellwood, pearl ];



// Function to run all in-object functions
function cookieSale(){
      for (var index = 0; index < stores.length; index++) {
        var resultsArray = stores[index].hourlySales();
    stores[index].tableBuilder("bakeOrder", resultsArray);
  }
};

cookieSale();

function cookieSale(){
      for (var index = 0; index < stores.length; index++) {
        var resultsArray = stores[index].hourlySales();
    stores[index].tableBuilder("bakeOrder", resultsArray);
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
