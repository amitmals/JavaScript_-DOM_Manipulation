// from data.js
var tableData = data;
// console.log(data);

// YOUR CODE HERE!
// Inspect and fild the input date and the button
// Button: <button id="filter-btn" type="button" class="btn btn-default">Filter Table</button>
// Input Date: <input class="form-control" id="datetime" type="text" placeholder="1/11/2011">

var button = d3.select("#filter-btn");

button.on("click", function() {
    //prevent from refreshing?
    d3.event.preventDefault();
    // Select the input element and get the raw HTML node and property
    var dateInput = d3.select("#datetime").property("value");
    var cityInput = d3.select("#city").property("value");
    var stateInput = d3.select("#state").property("value");
    var countryInput = d3.select("#country").property("value");
    var shapeInput = d3.select("#shape").property("value");
    console.log(`Date: ${dateInput}, City: ${cityInput}, State: ${stateInput}, Country: ${countryInput}, Shape: ${shapeInput}`);
    
    filteredData = tableData;
    
    if (dateInput !=""){
        filteredData = filteredData.filter(sighting => sighting.datetime === dateInput);
        console.log(filteredData);
    }

    if (cityInput !=""){
        filteredData = filteredData.filter(sighting => sighting.city === cityInput);
        console.log(filteredData);
    }

    if (stateInput !=""){
        filteredData = filteredData.filter(sighting => sighting.state === stateInput);
        console.log(filteredData);
    }

    if (countryInput !=""){
        filteredData = filteredData.filter(sighting => sighting.country === countryInput);
        console.log(filteredData);
    }

    if (shapeInput !=""){
        filteredData = filteredData.filter(sighting => sighting.shape === shapeInput);
        console.log(filteredData);
    }

    var tbody = d3.select("tbody");
    tbody.html("");

    if (filteredData.length >0){
        filteredData.forEach(entry => {
            var row = tbody.append("tr");
            row.append("td").text(entry.datetime);
            row.append("td").text(entry.city);
            row.append("td").text(entry.state);
            row.append("td").text(entry.country);
            row.append("td").text(entry.shape);
            row.append("td").text(entry.durationMinutes);
            row.append("td").text(entry.comments);
       });
    }
    else{
        var row = tbody.append("h1").text("No data found");
    }

    filteredData = tableData;
  });