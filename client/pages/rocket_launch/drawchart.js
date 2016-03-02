drawchart = function(time_input, data_input, vel_input, acc_input){

d3.select("#launchDisplay").selectAll("svg").remove();

var time = time_input;

var data = [];
var velocity = [];
var acceleration = [];

for (var i = 0; i < data_input.length; i++){
	data.push([(data_input[i][1] * 6371000 - 463.31219 * time[i])/1000 , data_input[i][0] /1000- 6371 ])
	velocity.push(Math.pow(vel_input[i][0] * vel_input[i][0] + (vel_input[i][1] - 463.31219) * (vel_input[i][1] - 463.31219) + vel_input[i][2] * vel_input[i][2], 0.5));
	if (i < acc_input.length){
	acceleration.push(Math.pow(acc_input[i][0] * acc_input[i][0] + acc_input[i][1] * acc_input[i][1] + acc_input[i][2] * acc_input[i][2], 0.5));
	}
}

var hzmax = d3.max(data, function(d) { return d[0]; });
var vtmax = d3.max(data, function(d) { return d[1]; });


var dpp = Math.max((hzmax + 40) / 1584, (vtmax + 20) / 632);

var dppAtm = Math.ceil(140 / dpp);
var dppGrnd = Math.ceil(1 / dpp) + 1;
var dppSpace = 632 - dppAtm - dppGrnd;


var hzoffset = (1584 * dpp - hzmax) / 2;
var vtoffset = 632 * dpp;

if (dppSpace < 0){
  dppRect = 0;
} else {
  dppRect = dppSpace;
}

var margin = {top: 0, right: 0, bottom: dppGrnd, left: 0}
, width = 1584 - margin.left - margin.right
, height = 632 - margin.top - margin.bottom;

var x = d3.scale.linear().domain([-hzoffset, hzmax + hzoffset]).range([0, width])
var y = d3.scale.linear().domain([0, vtoffset]).range([height, 0])

var chart2 = d3.select("#chart2")
var chart3 = d3.select("#chart3")
var chart4 = d3.select("#chart4")

var chart = d3.select("#launchDisplay")
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
    .attr("height", dppRect)
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
    .attr("width", width)
    .attr("height", dppAtm)
    .attr("transform", 'translate(0,' + dppSpace  +')')
    .style("fill", "url(#gradient)");
var grndoffset = dppSpace + dppAtm;
    main.append('rect')
    .attr("width", width)
    .attr("height", dppGrnd)
    .attr("transform", 'translate(0,' + grndoffset +')')
    .attr("fill", "#487906"); 

var g = main.append("svg:g"); 

var line = d3.svg.line()
.x(function(d, i) {
  return x(d[0])
})
.y(function(d, i) {
  return y(d[1])
});

var timeduration = 50 * Math.max.apply(null, time);

if (timeduration > 30000){
  timeduration = 30000;
}


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
	            var output_vel_new =  (velocity[i] - velocity[i-1]) * t_int + velocity[i-1];
            	var output_acc_new = (acceleration[i] - acceleration[i-1]) * t_int + acceleration[i-1];
              var yvel = (vel_input[i][0] - vel_input[i-1][0]) * t_int + vel_input[i-1][0]
              var xvel = (vel_input[i][1] - vel_input[i-1][1]) * t_int + vel_input[i-1][1]
	            outputarray.push([xvalue, yvalue]);  
            }           


            if (isNaN(output_vel_new) == false){
            	var output_vel = output_vel_new;
            	 chart3.selectAll("*").remove();
            chart3.append("text")
              .html("V (m/s):" + Math.floor(output_vel) + " " + Math.floor(xvel * 100 - 46331.219) / 100+ " " + Math.floor(yvel * 100)/ 100 +
                "<br/>" + " A (km):" + Math.floor(yvalue) +
                "<br/>" + " R (km):" + Math.floor(xvalue));
              
            }

            if (isNaN(output_acc_new) == false){
            	var output_acc = output_acc_new;
            	chart4.selectAll("*").remove();
            chart4.append("text")
              .text("Acceleration (g):" +Math.floor(output_acc * 100 / 9.80665) /100);
            }


            chart2.selectAll("*").remove();
            chart2.append("text")
              .text("Time (min):" + Math.floor(t / 60 * 100) / 100);
             
              
            return line(outputarray);
        }
    }
 }

}
