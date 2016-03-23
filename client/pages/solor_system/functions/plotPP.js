plotPP = function(pp){

  d3.select("#systemDisplay").selectAll("svg").remove();   


  
  var margin = {top: 0, right: 0, bottom: 0, left: 0}
    , width = 632 - margin.left - margin.right
    , height = 632 - margin.top - margin.bottom;
    
    var hh = 40;
    
	  var x = d3.scale.linear().domain([-hh, hh]).range([0, width])
    var y = d3.scale.linear().domain([-hh, hh]).range([height, 0])
 
    var chart = d3.select('#systemDisplay')
  	.append('svg:svg')
  	.attr('width', width + margin.right + margin.left)
  	.attr('height', height + margin.top + margin.bottom)
  	.attr('class', 'chart');

    var main = chart.append('g')
  	.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
  	.attr('width', width)
  	.attr('height', height)
  	.attr('class', 'main');  
        

    var g = main.append("svg:g");
   
   for (var i = 0; i < 8; i++){ 
  var data = pp[i];
  
    var line = d3.svg.line()
    .x(function(d, i) {
        return x(d[0]);
    })
    .y(function(d, i) {
        return y(d[1]);
    });

    main.append("svg:path").attr("d", line(data));
    main.append('circle')
	.attr("cx", 316 * data[0][0] / hh + 316)
	.attr("cy", -316 * data[0][1]  / hh + 316)
	.attr("r", 5)
	.attr("fill", "yellow");
}


main.append('circle')
	.attr("cx", 316)
	.attr("cy", 316)
	.attr("r", 4)
	.attr("fill", "yellow");
  var d = new Date();
  

};