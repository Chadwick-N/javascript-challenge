// from data.js
var data = data;
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"];
var body = d3.select("tbody");
var searchDate = d3.select("#datetime");
var button = d3.select("#filter-btn");

var loadTable = (ufoData) => {
    body.html("");
    ufoData.forEach(sightings => {
        var tableRow = body.append("tr");
        columns.forEach(column => tableRow.append("td").text(sightings[column]))
    });
}

loadTable(data);

button.on("click", () => {
    d3.event.preventDefault();
    userDate = searchDate.property("value");
    var filterDate = data.filter(data => data.datetime === userDate);
    body.html("");
    if(filterDate.length !== 0) {
        loadTable(filterDate);
    }
        else {
            body.append("tr").append("td").text("Unavailable Date");
        }
});