drawRocket = function(){


d3.select("#rocketDisplay").selectAll("svg").remove();

var margin = {top: 0, right: 0, bottom: 0, left: 0}
, width = 117 - margin.left - margin.right
, height = 1000 - margin.top - margin.bottom;

var chart = d3.select("#rocketDisplay")
	.append('svg:svg')
	.attr('width', width + margin.right + margin.left)
	.attr('height', height + margin.top + margin.bottom)
	.attr('class', 'chart')

chart.append("svg:image")
  .attr("xlink:href", "4.0 Meter.png")
  .attr("width", 117)
  .attr("height", 280);

chart.append("svg:image")
  .attr("xlink:href", "10.0 Meter Last.png")
  .attr("width", 117)
  .attr("height", 280)
  .attr("transform", 'translate(0,320)');

  chart.append("svg:image")
  .attr("xlink:href", "7.0 Meter.png")
  .attr("width", 117)
  .attr("height", 280)
  .attr("transform", 'translate(0,408)');



}
