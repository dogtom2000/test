drawchart = function(time_input, data_input){

d3.select("#chart").selectAll("svg").remove();

var time = time_input;

var data = [];

for (var i = 0; i < data_input.length; i++){
	data.push([(data_input[i][1] * 6371000 - 463.31219 * time[i])/1000 , data_input[i][0] /1000- 6371 ])
}

var margin = {top: 0, right: 0, bottom: 20, left: 0}
, width = 712 - margin.left - margin.right
, height = 632 - margin.top - margin.bottom;

var x = d3.scale.linear().domain([-d3.max(data, function(d) { return d[0]; }) / 10, 1.1 * d3.max(data, function(d) { return d[0]; })]).range([0, width])
var y = d3.scale.linear().domain([0, 200]).range([height, 0])

var chart = d3.select("#chart")
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
	.attr("width", 712)
    .attr("height", 184)
    .attr("fill", "black");

var gradient = main.append("defs")
  .append("linearGradient")
    .attr("id", "gradient")
    .attr("x1", "0%")
    .attr("y1", "0%")
    .attr("x2", "0%")
    .attr("y2", "100%");

gradient.append("stop")
    .attr("offset", "0%")
    .attr("stop-color", "black")
    .attr("stop-opacity", 1);

gradient.append("stop")
    .attr("offset", "100%")
    .attr("stop-color", "blue")
    .attr("stop-opacity", 1);

main.append("rect")
    .attr("width", 712)
    .attr("height", 428)
    .attr("transform", "translate(0,184)")
    .style("fill", "url(#gradient)");

    main.append('rect')
    .attr("width", 712)
    .attr("height", 20)
    .attr("transform", "translate(0,612)")
    .attr("fill", "#487906"); 



/*
// draw the x axis
var xAxis = d3.svg.axis()
.scale(x)
.orient('bottom');

main.append('g')
  .attr('transform', 'translate(0,' + height + ')')
  .attr('class', 'axis')
  .call(xAxis);

// draw the y axis
var yAxis = d3.svg.axis()
  .scale(y)
  .orient('left');

main.append('g')
  .attr('transform', 'translate(0,0)')
  .attr('class', 'axis')
  .call(yAxis);
*/
var g = main.append("svg:g"); 

var line = d3.svg.line()
.x(function(d, i) {
  return x(d[0])
})
.y(function(d, i) {
  return y(d[1])
});

var timeduration = 50 * Math.max.apply(null, time);


main.append("svg:path")
  .attr('class', 'line')
  .attr("d", line(data[0]))
  .transition()
  .duration(timeduration)
  .attrTween('d', pathTween(data))
  .each("end", function() {main.append("svg:path").attr("d", line(data))});

function pathTween(data) {
	return function (){
         
        var c = new Date();
        var i = 0;
        var dt = time[time.length - 1] / timeduration;     
        var outputarray = [];
               
          return function() {

            var d = new Date();

            var t =(d.getTime() - c.getTime()) * dt ;

            while (t >= time[i]){
              i++
            } 
            if (t >= time[time.length - 1]) {
              t_int = 1;
            } else {
              var t_int = (t - time[i-1]) / (time[i] - time[i-1]);
            }
            if (i < data.length){
	            var xvalue = (data[i][0] - data[i-1][0]) * t_int + data[i-1][0];
	            var yvalue = (data[i][1] - data[i-1][1]) * t_int + data[i-1][1];
	            outputarray.push([xvalue, yvalue]);  
            }           
            return line(outputarray);
        }
    }
 }

}






/*drawchart = function(input){
	d3.select("#chart").selectAll("svg").remove();
	var x_data = [];
	var y_data = [];

	for (var i = 0; i < input.length; i++){
		x_data[i] = input[i][1] * 6371;
		y_data[i] = input[i][0] / 1000 - 6371;
	}
   
    var margin = {top: 20, right: 15, bottom: 60, left: 60}
      , width = 616 - margin.left - margin.right
      , height = 346 - margin.top - margin.bottom;
    
	var x = d3.scale.linear().domain([0, d3.max(x_data)]).range([0, width])
    var y = d3.scale.linear().domain([0, d3.max(y_data)]).range([height, 0])
 
    var chart = d3.select("#chart")
	.append('svg:svg')
	.attr('width', width + margin.right + margin.left)
	.attr('height', height + margin.top + margin.bottom)
	.attr('class', 'chart')

    var main = chart.append('g')
	.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
	.attr('width', width)
	.attr('height', height)
	.attr('class', 'main')   
        
    // draw the x axis
    var xAxis = d3.svg.axis()
	.scale(x)
	.orient('bottom');

    main.append('g')
	.attr('transform', 'translate(0,' + height + ')')
	.attr('class', 'axis')
	.call(xAxis);

    // draw the y axis
    var yAxis = d3.svg.axis()
	.scale(y)
	.orient('left');

    main.append('g')
	.attr('transform', 'translate(0,0)')
	.attr('class', 'axis')
	.call(yAxis);

    var g = main.append("svg:g"); 

    var line = d3.svg.line()
    .x(function(d, i) {
        return x(x_data[i])
    })
    .y(function(d, i) {
        return y(y_data[i])
    });


	main.append("text")      // text label for the x axis
	        .attr("x", width / 2)
	        .attr("y", height + margin.top + margin.bottom / 2)
	        .style("font-family", "helvetica, monospace")
	        .style("text-anchor", "middle")
	        .text("horizontal position (km)");

	main.append("text")      // text label for the x axis
        .attr("x", -(height / 2) )
        .attr("y", -margin.left / 1.5 )
        .attr("transform", "rotate(-90)")
        .style("font-family", "helvetica, monospace")
        .style("text-anchor", "middle")
        .text("vertical position (km)");


    main.append("svg:path").attr("d", line(x_data))
    	.style("fill", "none")
        .style("stroke", "#000")

    main.selectAll('.axis text')
    .style({"font-size": "16px", "font-family" : "sans-serif"})

    main.selectAll('.axis line, .axis path')
    .style({"shape-rendering": "crispEdges", "fill": "none", "stroke" : "#000", "stroke-width" : "2px"})
    

}*/