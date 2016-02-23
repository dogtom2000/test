drawchart = function(input){

	var data = [1,9,4,2,6,2,5,0,5,9,7,2].map(function(d,i) {
	        return [input[i][1] * 6371, input[i][0] / 1000 - 6371];
	    });
console.log(data)
	var w = 300,
	    h = 100;

	var x = d3.scale.linear()
	    .domain([0, data.length-1])
	    .range([0, w]);

	var y = d3.scale.linear()
	    .domain([0, 10])
	    .range([h, 0]);

	var line = d3.svg.line()
	    .x(function(d) { return x(d[0]); })
	    .y(function(d) { return y(d[1]); });

	var svg = d3.select('#chart').append('svg')
	    .attr('w', w)
	    .attr('h', h);

    // add element and transition in
    var path = svg.append('path')
        .attr('class', 'line')
        .attr('d', line(data[0]))
      .transition()
        .duration(1000)
        .attrTween('d', pathTween);
    
    function pathTween() {
        var interpolate = d3.scale.quantile()
                .domain([0,1])
                .range(d3.range(1, data.length + 1));
        return function(t) {
            return line(data.slice(0, interpolate(t)));
        };
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