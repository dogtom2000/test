drawRocket = function(parts, stageCount, systemMass){
  
  
  var imageHeight = {
    "4_4": 25,
    "4_7": 60,
    "4_a": 96,
    "4_c": 31,
    "4_f": 53,
    "4_l": 53,
    "4_s": 21,
    
    "7_4": 60,
    "7_7": 44,
    "7_a": 40,
    "7_c": 78,
    "7_f": 117,
    "7_l": 117,
    "7_s": 81,
    
    "a_4": 96,
    "a_7": 40,
    "a_a": 40,
    "a_c": 127,
    "a_f": 166,
    "a_l": 280,
    "a_s": 121,
    
    "0.25_0.25": 4,
    "0.25_0.5": 1,
    "0.25_1": 4,
    "0.25_c": 52,
    "0.25_f": 53,
    "0.25_l": 53,
    "0.25_s": 7,
    
    "0.5_0.25": 1,
    "0.5_0.5": 4,
    "0.5_1": 4,
    "0.5_c": 71,
    "0.5_f": 71,
    "0.5_l": 71,
    "0.5_s": 14,
    
    "1_0.25": 4,
    "1_0.5": 4,
    "1_1": 6,
    "1_c": 111,
    "1_f": 112,
    "1_l": 112,
    "1_s": 30
  };
  
  for (var i = 0; i < parts.length; i++){
    if(parts[i] == 10){
      parts[i] = "a";
    }
  }

  var imgArray = [];
  var totalHeight = [];
  
  imgArray[0] = parts[0] + "_s";
  totalHeight[0] = imageHeight[imgArray[0]];
  
  var j = 1;
  for (var i = 0; i < stageCount - 1; i++){
    imgArray[j] = parts[i] + "_c";
    totalHeight[j] = imageHeight[imgArray[j]] + totalHeight[j - 1];
    j++;
    imgArray[j] = parts[i] + "_" + parts[i + 1];
    totalHeight[j] = imageHeight[imgArray[j]] + totalHeight[j - 1];
    j++;
  }
  
  imgArray[j] = parts[stageCount - 1] + "_l";
  totalHeight[j] = imageHeight[imgArray[j]] + totalHeight[j - 1];
  
  d3.select("#displayRocket").selectAll("svg").remove();
  
  var chart = d3.select("#displayRocket")
  	.append('svg:svg')
  	.attr('width', 117)
  	.attr('height', totalHeight[j] + 40);
  	
  if(systemMass > 0){
    var partImage = "images/" + imgArray[0] + ".png";
    chart.append("svg:image")
    .attr("xlink:href", partImage)
    .attr("width", 117)
    .attr("height", imageHeight[imgArray[0]]);
  }

  for (i = 1; i < imgArray.length; i++){
    partImage = "images/" + imgArray[i] + ".png";
    chart.append("svg:image")
    .attr("xlink:href", partImage)
    .attr("width", 117)
    .attr("height", imageHeight[imgArray[i]])
    .attr("transform", 'translate(0,'+ totalHeight[i - 1] +')');
    
  }

};
