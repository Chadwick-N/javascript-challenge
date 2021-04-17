// from data.js
var tableData = data;
var tableColumns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"];
var tableBody = d3.select("tbody");
var searchDate = d3.select("#datetime");
var button = d3.select("#filter-btn");

