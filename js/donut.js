var svg = d3.select("body")
    .append("svg")
    .attr("width", 800)
    .attr("height", 300)
    .append("g")
    .attr("transform", "translate(300,150)");

var t = d3.select("#donut").append("div")	
					.attr("class", "tooltip34")				
					.style("opacity", 0);
/*var div = d3.select("body").append("div")	
					.attr("class", "tooltip")				
					.style("opacity", 0);*/
		
var arc = d3.svg.arc()
		.innerRadius(50).outerRadius(65).startAngle(0).endAngle(20.1*Math.PI/18);
		svg.append("path").attr("class", "arc").attr("d", arc).attr("fill","#29a329")
		.on("mouseover", function(d) {	
					div.transition().duration(200).style("opacity", 1);
					div.html("<font size=1>" + "131/233 seats obtained by AIADMK" + "</font>").style("left", 74 + "px").style("top", 74 + "px");
					d3.select(".arc1").attr("fill","rgb(204,204,204)"); 
					d3.select(".arc3").attr("fill","rgb(204,204,204)"); 
					d3.select(".arc4").attr("fill","rgb(204,204,204)"); 
					d3.select(".arc6").attr("fill","rgb(204,204,204)"); 
					d3.select(".arc7").attr("fill","rgb(204,204,204)"); 
		})
		.on("mouseout", function(d) {				
					div.transition().duration(500).style("opacity", 0);
					d3.select(".arc3").attr("fill","#33cc33"); 
					d3.select(".arc1").attr("fill","#ff0000"); 
					d3.select(".arc4").attr("fill","#ff4d4d"); 
					d3.select(".arc6").attr("fill","#70db70"); 
					d3.select(".arc7").attr("fill","#ff8080"); 
		});

var arc1 = d3.svg.arc()
		.innerRadius(50).outerRadius(65).startAngle(20.1*Math.PI/18).endAngle(34.3*Math.PI/18);
		svg.append("path").attr("class", "arc1").attr("d", arc1).attr("fill","#ff0000")
		.on("mouseover", function(d) {	
					div.transition().duration(200).style("opacity", 1);
					div.html("<font size=1>" + "89/233 seats obtained by DMK" + "</font>").style("left", 74 + "px").style("top", 74 + "px");
					d3.select(".arc").attr("fill","rgb(204,204,204)"); 
					d3.select(".arc3").attr("fill","rgb(204,204,204)"); 
					d3.select(".arc4").attr("fill","rgb(204,204,204)"); 
					d3.select(".arc6").attr("fill","rgb(204,204,204)"); 
					d3.select(".arc7").attr("fill","rgb(204,204,204)"); 
		})
		.on("mouseout", function(d) {				
					div.transition().duration(500).style("opacity", 0);
					d3.select(".arc").attr("fill","#29a329"); 
					d3.select(".arc3").attr("fill","#33cc33"); 
					d3.select(".arc6").attr("fill","#70db70"); 
					d3.select(".arc7").attr("fill","#ff8080");
					d3.select(".arc4").attr("fill","#ff4d4d");
		});

var arc2 = d3.svg.arc()
		.innerRadius(50).outerRadius(65).startAngle(34.3*Math.PI/18).endAngle(36*Math.PI/18);
		svg.append("path").attr("class", "arc2").attr("d", arc2).attr("fill","rgb(247,247,247)")
		.on("mouseover", function(d) {	
					div.transition().duration(200).style("opacity", 1);
					div.html("<font size=1>" + " " + "</font>").style("left", 74 + "px").style("top", 74 + "px");
		})
		.on("mouseout", function(d) {				
					div.transition().duration(500).style("opacity", 0);
		});

var arc3 = d3.svg.arc()
		.innerRadius(65).outerRadius(80).startAngle(0).endAngle(32.7*Math.PI/36);
		svg.append("path").attr("class", "arc3").attr("d", arc3).attr("fill","#33cc33")
		.on("mouseover", function(d) {	
					div.transition().duration(200).style("opacity", 1);
					div.html("<font size=1>" + "40.8% of the contested vote share for AIADMK" + "</font>").style("left", 74 + "px").style("top", 74 + "px");
					d3.select(".arc1").attr("fill","rgb(204,204,204)"); 
					d3.select(".arc4").attr("fill","rgb(204,204,204)"); 
					d3.select(".arc7").attr("fill","rgb(204,204,204)"); 
					d3.select(".arc6").attr("fill","rgb(204,204,204)"); 
		})
		.on("mouseout", function(d) {				
					div.transition().duration(500).style("opacity", 0);
					d3.select(".arc1").attr("fill","#ff0000"); 
					d3.select(".arc4").attr("fill","#ff4d4d"); 
					d3.select(".arc7").attr("fill","#ff8080");
					d3.select(".arc6").attr("fill","#70db70");
		});

var arc4 = d3.svg.arc()
		.innerRadius(65).outerRadius(80).startAngle(32.7*Math.PI/36).endAngle(63.1*Math.PI/36);
		svg.append("path").attr("class", "arc4").attr("d", arc4).attr("fill","#ff4d4d")
		.on("mouseover", function(d) {	
					div.transition().duration(200).style("opacity", 1);
					div.html("<font size=1>" + "41.1% of the contested vote share for DMK" + "</font>").style("left", 74 + "px").style("top", 74 + "px");
					d3.select(".arc").attr("fill","rgb(204,204,204)"); 
					d3.select(".arc3").attr("fill","rgb(204,204,204)"); 
					d3.select(".arc6").attr("fill","rgb(204,204,204)");
					d3.select(".arc7").attr("fill","rgb(204,204,204)");
		})
		.on("mouseout", function(d) {				
					div.transition().duration(500).style("opacity", 0);
					d3.select(".arc").attr("fill","#29a329"); 
					d3.select(".arc3").attr("fill","#33cc33"); 
					d3.select(".arc6").attr("fill","#70db70");
					d3.select(".arc7").attr("fill","#ff8080");
		});

var arc5 = d3.svg.arc()
		.innerRadius(65).outerRadius(80).startAngle(63.1*Math.PI/36).endAngle(72*Math.PI/36);
		svg.append("path").attr("class", "arc5").attr("d", arc5).attr("fill","rgb(247,247,247)")
		.on("mouseover", function(d) {	
					div.transition().duration(200).style("opacity", 1);
					div.html("<font size=1>" + " " + "</font>").style("left", 74 + "px").style("top", 74 + "px");
		})
		.on("mouseout", function(d) {				
					div.transition().duration(500).style("opacity", 0);
		});
		
var arc6 = d3.svg.arc()
		.innerRadius(80).outerRadius(95).startAngle(0).endAngle(32.7*Math.PI/36);
		svg.append("path").attr("class", "arc6").attr("d", arc6).attr("fill","#70db70")
		.on("mouseover", function(d) {	
					div.transition().duration(200).style("opacity", 1);
					div.html("<font size=1>" + "40.8% of the total vote share for AIADMK" + "</font>").style("left", 74 + "px").style("top", 74 + "px");
					d3.select(".arc1").attr("fill","rgb(204,204,204)"); 
					d3.select(".arc4").attr("fill","rgb(204,204,204)"); 
					d3.select(".arc7").attr("fill","rgb(204,204,204)");
		})
		.on("mouseout", function(d) {				
					div.transition().duration(500).style("opacity", 0);
					d3.select(".arc1").attr("fill","#ff0000"); 
					d3.select(".arc4").attr("fill","#ff4d4d"); 
					d3.select(".arc7").attr("fill","#ff8080");
		});

var arc7 = d3.svg.arc()
		.innerRadius(80).outerRadius(95).startAngle(32.7*Math.PI/36).endAngle(62.1*Math.PI/36);
		svg.append("path").attr("class", "arc7").attr("d", arc7).attr("fill","#ff8080")
		.on("mouseover", function(d) {	
					div.transition().duration(200).style("opacity", 1);
					div.html("<font size=1>" + "39.7% of the total vote share for DMK" + "</font>").style("left", 74 + "px").style("top", 74 + "px");
					d3.select(".arc").attr("fill","rgb(204,204,204)"); 
					d3.select(".arc3").attr("fill","rgb(204,204,204)"); 
					d3.select(".arc6").attr("fill","rgb(204,204,204)");
		})
		.on("mouseout", function(d) {				
					div.transition().duration(500).style("opacity", 0);
					d3.select(".arc").attr("fill","#29a329"); 
					d3.select(".arc3").attr("fill","#33cc33"); 
					d3.select(".arc6").attr("fill","#70db70");
		});

var arc8 = d3.svg.arc()
		.innerRadius(80).outerRadius(95).startAngle(62.1*Math.PI/36).endAngle(72*Math.PI/36);
		svg.append("path").attr("class", "arc8").attr("d", arc8).attr("fill","rgb(247,247,247)")
		.on("mouseover", function(d) {	
					div.transition().duration(200).style("opacity", 1);
					div.html("<font size=1>" + " " + "</font>").style("left", 74 + "px").style("top", 74 + "px");
		})
		.on("mouseout", function(d) {				
					div.transition().duration(500).style("opacity", 0);
		});

var labs = [{val:"131",xpos:-15,ypos:60,col:"white",size:"10",ang:"rotate(-40)"},{val:"40.8 %",xpos:-15,ypos:76,col:"white",size:"10",ang:"rotate(-40)"},{val:"40.8 %",xpos:-15,ypos:90,col:"white",size:"10",ang:"rotate(-40)"},{val:"89",xpos:-15,ypos:60,col:"white",size:"10",ang:"rotate(40)"},{val:"41.1 %",xpos:-15,ypos:76,col:"white",size:"10",ang:"rotate(40)"},{val:"39.7 %",xpos:-15,ypos:91,col:"white",size:"10",ang:"rotate(40)"} ];
// {val:"3.8 %",xpos:50,ypos:-4,col:"white",size:"10"},{val:"18.2 %",xpos:63,ypos:-20,col:"white",size:"10"},{val:"19.5 %",xpos:63,ypos:-35,col:"white",size:"10"}];

svg.selectAll("text")
		   .data(labs).enter().append("text")
		   .text(function(d){ return d.val; })
		   .attr("y", function(d){ return d.ypos; })
		   .attr("x", function(d){ return d.xpos; })
		   .attr("font-size",function(d){ return d.size; })
		   .attr("fill",function(d){ return d.col; })
		   .attr("transform", function(d){ return d.ang; })
		   .attr("font-family","Roboto Condensed");
