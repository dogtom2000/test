drawOrbit = function(apoapsis, periapsis, Planet){

if (isNaN(apoapsis) || isNaN(periapsis)){

	var radiusy = 0;
	var radiusx = 0;
	var radiusp = 316;
	var ellipseCenter = 792;
	
	
} else {
	
	
	var semiMajorAxis = Math.pow((apoapsis * periapsis), 0.5);
	var dpp = Math.max(2.4 * (semiMajorAxis * 2) / 632, 2.4 * (apoapsis + periapsis) / 1584);
	var radiusy = Math.floor(semiMajorAxis / dpp);
	var radiusx = Math.floor((apoapsis + periapsis) / dpp) / 2;
	var radiusp = Math.floor(Planet.radius / dpp);
	var ellipseCenter = 792  - ((apoapsis - (apoapsis + periapsis) / 2)) / dpp;
	}


d3.select("#flightDisplay").selectAll("svg").remove();

var margin = {top: 0, right: 0, bottom: 0, left: 0}
, width = 1584 - margin.left - margin.right
, height = 632 - margin.top - margin.bottom;

var chart = d3.select("#flightDisplay")
	.append('svg:svg')
	.attr('width', width + margin.right + margin.left)
	.attr('height', height + margin.top + margin.bottom)
	.attr('class', 'chart')

var main = chart.append('g')
	.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
	.attr('width', width)
	.attr('height', height)
	.attr('class', 'main')

main.append('rect')
	.attr("width", width)
	.attr("height", height)
	.attr("fill", "black");

main.append('circle')
	.attr("cx", 792)
	.attr("cy", 316)
	.attr("r", radiusp)
	.attr("fill", "blue")

main.append('ellipse')
	.attr("cx", ellipseCenter)
	.attr("cy", 316)
	.attr("rx", radiusx)
	.attr("ry", radiusy)
	.attr("fill", "none")
	.attr("stroke-width", "1")
	.attr("stroke", "red");	
}
