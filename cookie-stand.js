//global variables
var storeDataTableHeader =("<tr><th>Location</th>  <th>Minimum / Customers</th>  <th>Maximum / Customers</th>  <th>Average Cookie / Sales</th></tr>");
var cookieSaleTableHeader = ("<tr><th><!--<button <onclick='cookieSale()'>Run</button>--></th> <th>10am</th><th>11am</th><th>12pm</th><th>1pm</th><th>2pm</th><th>3pm</th><th>4pm</th><th>5pm</th><th>Total</th></tr>")
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
};

// Store objects array
var stores = [];



// Store objects being constructed
var pioneer = stores.push(new CookieStore("Pioneer Square", 17, 88, 5.2));
var portland = stores.push(new CookieStore("Portland Airport", 6, 24, 1.2));
var washington = stores.push(new CookieStore("Washington Square", 11, 38, 1.9));
var sellwood = stores.push(new CookieStore("Sellwood", 20, 48, 3.3));
var pearl = stores.push(new CookieStore("Pearl District", 3, 24, 2.6));




// Function to run all in-object functions
function cookieSale(){
  tableClear("bakeOrder",cookieSaleTableHeader )
      for (var index = 0; index < stores.length; index++) {
        var resultsArray = stores[index].hourlySales();
    stores[index].tableBuilder("bakeOrder", resultsArray);
  }
};

cookieSale();

function cookieStoreTable(){
  tableClear("storeInfo", storeDataTableHeader)
      for (var index = 0; index < stores.length; index++) {
        var resultsArray = stores[index].dataArray;
    stores[index].tableBuilder("storeInfo", resultsArray);
  }
  console.log("cookieStoreTable");
};

cookieStoreTable();

//function to delete table and place in header for .tableBuilder to finish out
function tableClear(tableLocation, tableHeaderRow){
  document.getElementsByClassName(tableLocation)[0].innerHTML= (tableHeaderRow)
}

function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

function addStore(){
  console.log("addstore");
  var storeLocation = document.getElementById("storeLocationInput").value;
  var storeMinCust = document.getElementById("storeMinCustInput").value;
  var storeMaxCust = document.getElementById("storeMaxCustInput").value;
  var avgCookieSale = document.getElementById("avgCookieSaleInput").value;
var openStore = stores.push(new CookieStore(storeLocation, storeMinCust, storeMaxCust, avgCookieSale));
 console.log(openStore);
cookieSale();
cookieStoreTable();
}



function boarderColor(){
  console.log("blur");
  var storeLocation = document.getElementById("storeLocationInput");
  var storeMinCust = document.getElementById("storeMinCustInput");
  var storeMaxCust = document.getElementById("storeMaxCustInput");
  var avgCookieSale = document.getElementById("avgCookieSaleInput");
  if ((~~q5)<32){
    console.log("upblur");
    src.innerHTML = "<img class='icon' id='arrow' src='up-arrow-circle-hi.png'>";
  }else if((~~q5)>32){
    console.log("downblur");
    src.innerHTML = "<img class='icon' id='arrow' src='down-arrow-circle-hi.png'>";
  }else if((~~q5) ===32){
    console.log("blurwait");
    src.innerHTML = "  ";
  }

};
