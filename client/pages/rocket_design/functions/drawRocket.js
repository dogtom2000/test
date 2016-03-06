drawRocket = function(parts, stageCount){

  parts = parts.slice(0,stageCount);
  var system = true;
  var diameter = [];
  var height = [];
  var img = [];

  if(system){
    img.push("pod.png");
    diameter.push(0);
    height.push(21);
  } else {
        img.push(0);
    diameter.push(0);
    height.push(0);
  }

  for (var i = 0; i < parts.length - 1; i++){
    
    switch (parts[i]){
  
      case 4:
        img.push("4m_cropped.png");
        diameter.push(4);
        height.push(31);
        break;
  
      case 7:
        img.push("7m_cropped.png");
        diameter.push(7);
        height.push(78);
        break;
      
      case 10:
        img.push("10m_cropped.png");
        diameter.push(10);
        height.push(127);
        break;
    }
  }

  switch (parts[parts.length - 1]){
  
    case 4:
      img.push("4m_full.png");
      diameter.push(4);
      height.push(53);
      break;
  
    case 7:
      img.push("7m_full.png");
      diameter.push(7);
      height.push(117);
      break;
    
    case 10:
      img.push("10l_full.png");
      diameter.push(10);
      height.push(280);
      break;
  }
  
  
  for (i = 1; i < parts.length; i++){
    
    switch(true){
      
    case (diameter[i] == 4 && diameter[i+1] == 4):
      img.splice(i * 2, 0, "4_4.png");
      height.splice(i * 2, 0, 25);
      break;
      
      
    case (diameter[i] == 4 && diameter[i+1] == 7):
      img.splice(i * 2, 0, "4_7.png");
      height.splice(i * 2, 0, 60);
      break;
      
    case (diameter[i] == 7 && diameter[i+1] == 4):
      img.splice(i * 2, 0, "7_4.png");
      height.splice(i * 2, 0, 60);
      break;
     case (diameter[i] == 7 && diameter[i+1] == 7):
      img.splice(i * 2, 0, "7_7.png");
      height.splice(i * 2, 0, 44);
      break;
      
    case (diameter[i] == 7 && diameter[i+1] == 10):
      img.splice(i * 2, 0, "7_10.png");
      height.splice(i * 2, 0, 40);
      break;
   
      
    case (diameter[i] == 10 && diameter[i+1] == 7):
      img.splice(i * 2, 0, "10_7.png");
      height.splice(i * 2, 0, 40);
      break;
      
      
    case (diameter[i] == 10 && diameter[i+1] == 10):
      img.splice(i * 2, 0, "10_10.png");
      height.splice(i * 2, 0, 40);
      break;
      
      case (diameter[i] == 10 && diameter[i+1] == 4):
      img.splice(i * 2, 0, "10_4.png");
      height.splice(i * 2, 0, 96);
      break;
      
      
      case (diameter[i] == 4 && diameter[i+1] == 10):
      img.splice(i * 2, 0, "4_10.png");
      height.splice(i * 2, 0, 96);
      break;
      
  }  

  }
  
  var offset = [];
    
  for (i = 0; i < height.length ; i++){
    offset[i] = 0;
    for (var j = 0; j < i; j++){
      offset[i] += height[j];
    }
  }

var totalHeight = height[height.length - 1] + offset[height.length - 1] + 40;

d3.select("#displayRocket").selectAll("svg").remove();

var chart = d3.select("#displayRocket")
	.append('svg:svg')
	.attr('width', 117)
	.attr('height', totalHeight)
if(system){
  chart.append("svg:image")
  .attr("xlink:href", img[0])
  .attr("width", 117)
  .attr("height", height[0]);
}


for (i = 1; i < img.length; i++){
  chart.append("svg:image")
  .attr("xlink:href", img[i])
  .attr("width", 117)
  .attr("height", height[i])
  .attr("transform", 'translate(0,'+ offset[i] +')');
  
}




}
