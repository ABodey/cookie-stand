//global variables
var storeDataTableHeader =("<tr><th>Location</th>  <th>Minimum / Customers</th>  <th>Maximum / Customers</th>  <th>Average Cookie / Sales</th></tr>");



// object constructor

var CookieStore = function(shopName, minCookies, maxCookies, avgCookies){
  this.shopName = shopName;
  this.minCookies = minCookies;
  this.maxCookies = maxCookies;
  this.avgCookies = avgCookies;
  this.hourlySales = function () {
    var totalCookies = 0;
    var cookieArray =[this.shopName];
    for ( var index = 0; index < 8; index++ ) {
      var cookiePrint = (Math.floor((Math.floor(Math.random() * (this.maxCookies - this.minCookies)) + this.minCookies)*this.avgCookies))
      //    console.log(cookiePrint);
      cookieArray.push(cookiePrint);
      totalCookies += cookiePrint;
    };
    cookieArray.push(totalCookies);
    //    console.log(totalCookies);
    return cookieArray;
  },
  this.tableOfHours = function() {
    var body = document.getElementsByClassName("bakeOrder")[0];
    var resultscookies = this.hourlySales();
    var row = document.createElement("tr");
    for (var index = 0; index < 10; index++) {
      var cell = document.createElement("td");
        var cellText = document.createTextNode(resultscookies[index]);
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


// Function to run all in-object functions
function cookieSale(){
  pioneer.tableOfHours();
  portland.tableOfHours();
  washington.tableOfHours();
  sellwood.tableOfHours();
  pearl.tableOfHours();
};

cookieSale();

// function storeDataTable() {
//   pioneer.tableOfHours();
//   portland.tableOfHours();
//   washington.tableOfHours();
//   sellwood.tableOfHours();
//   pearl.tableOfHours();
// };









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
