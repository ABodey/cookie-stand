//global variables


// object literals
var pioneer = {
  minC : 17,
  maxC : 88,
  avgC : 5.2,
  hourlySales : function () {
    var totalcook = 0;
    for ( var i = 0; i < 8; i++ ) {
      var ckprnt = (Math.floor((Math.floor(Math.random() * (this.maxC - this.minC)) + this.minC)*this.avgC))
      console.log(ckprnt);
      totalcook += ckprnt
    };
    console.log(totalcook);
    return totalcook;
    //cookiePrint.innerHTML=  ;
  }
};
var portland = {
  minC : 6,
  maxC : 24,
  avgC : 1.2,
  hourlySales : function () {
    var totalcook = 0;
    for ( var i = 0; i < 8; i++ ) {
      var ckprnt = (Math.floor((Math.floor(Math.random() * (this.maxC - this.minC)) + this.minC)*this.avgC))
      console.log(ckprnt);
      totalcook += ckprnt
    };
    console.log(totalcook);
    //cookiePrint.innerHTML=  ;
  }
};
var washington = {
  minC : 11,
  maxC : 38,
  avgC : 1.9,
  hourlySales : function () {
    var totalcook = 0;
    for ( var i = 0; i < 8; i++ ) {
      var ckprnt = (Math.floor((Math.floor(Math.random() * (this.maxC - this.minC)) + this.minC)*this.avgC))
      console.log(ckprnt);
      totalcook += ckprnt
    };
    console.log(totalcook);
    //cookiePrint.innerHTML=  ;
  }
};
var sellwood = {
  minC : 20,
  maxC : 48,
  avgC : 3.3,
  hourlySales : function () {
    var totalcook = 0;
    for ( var i = 0; i < 8; i++ ) {
      var ckprnt = (Math.floor((Math.floor(Math.random() * (this.maxC - this.minC)) + this.minC)*this.avgC))
      console.log(ckprnt);
      totalcook += ckprnt
    };
    console.log(totalcook);
    //cookiePrint.innerHTML=  ;
  }
};
var pearl = {
  minC : 3,
  maxC : 24,
  avgC : 2.6,
  hourlySales : function () {
    var totalcook = 0;
    var ckieArray =[];
    for ( var i = 0; i < 8; i++ ) {
      var ckprnt = (Math.floor((Math.floor(Math.random() * (this.maxC - this.minC)) + this.minC)*this.avgC))
      console.log(ckprnt);
      ckieArray.push(ckprnt);
      totalcook += ckprnt;
    };
    console.log(totalcook);
    return ckieArray;
    //cookiePrint.innerHTML=  ;
  }
};


//function for the hourly cookie
function hourlySales(minC, maxC, avgC ) {
  for ( var i = 0; i < 8; i++ ) {
    var ckprnt = (Math.floor((Math.floor(Math.random() * (maxC - minC)) + minC)*avgC))
    console.log(ckprnt);
    totalcook += ckprnt
  };
  console.log(totalcook);
  //cookiePrint.innerHTML=  ;
};


function tableOfHours() {

  var body = document.getElementsByTagName("body")[0];
  var tbl     = document.createElement("table");
  var tblBody = document.createElement("tbody");


  for (var j = 0; j < 1; j++) {
    var row = document.createElement("tr");

    for (var k = 0; k < 10; k++) {
      var cell = document.createElement("td");
      var resultscookies = pearl.hourlySales();
      console.log(resultscookies);
     var cellText = document.createTextNode(resultscookies[k]);

      cell.appendChild(cellText);
      row.appendChild(cell);
    }

    //row added to end of table body
    tblBody.appendChild(row);
  }

  // append the <tbody> inside the <table>
  tbl.appendChild(tblBody);
  // put <table> in the <body>
  body.appendChild(tbl);
  // tbl border attribute to
//  tbl.setAttribute("border", "2");
}

















// var cookiePrint = document.getElementsByClassName(shopC);
// return  cookiePrint.innerHTML= message;

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
