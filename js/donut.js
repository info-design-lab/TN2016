var svg = d3.select("#donut")
    .append("svg")
    .attr("width", 800)
    .attr("height", 300)
    .append("g")
    .attr("transform", "translate(300,150)");

var t = d3.select("#donut").append("div")	
					.attr("class", "tooltip34")				
					.style("opacity", 0);
		
var arc = d3.svg.arc()
		.innerRadius(50).outerRadius(75).startAngle(0).endAngle(20.1*Math.PI/18);
		svg.append("path").attr("class", "arc").attr("d", arc).attr("fill","#29a329")
		.on("mouseover", function(d) {	
					t.transition().duration(200).style("opacity", 1);
					t.html("<font size=3>" + "131/232 seats obtained by AIADMK" + "</font>").style("left", 100).style("top", 100);
					d3.select(".arc1").attr("fill","rgb(204,204,204)"); 
					d3.select(".arc3").attr("fill","rgb(204,204,204)"); 
					d3.select(".arc4").attr("fill","rgb(204,204,204)"); 
					d3.select(".arc6").attr("fill","rgb(204,204,204)"); 
					d3.select(".arc7").attr("fill","rgb(204,204,204)"); 
		})
		.on("mouseout", function(d) {				
					t.transition().duration(500).style("opacity", 0);
					d3.select(".arc1").attr("fill","#ff0000"); 
					d3.select(".arc3").attr("fill","#33cc33"); 
					d3.select(".arc4").attr("fill","#ff4d4d"); 
					d3.select(".arc6").attr("fill","#70db70"); 
					d3.select(".arc7").attr("fill","#ff8080"); 
		});

var arc1 = d3.svg.arc()
		.innerRadius(50).outerRadius(75).startAngle(20.1*Math.PI/18).endAngle(34.3*Math.PI/18);
		svg.append("path").attr("class", "arc1").attr("d", arc1).attr("fill","#ff0000")
		.on("mouseover", function(d) {	
					t.transition().duration(200).style("opacity", 1);
					
					t.html("<font size=3>" + "89/232 seats obtained by DMK" + "</font>").style("left", 100).style("top", 100);
					d3.select(".arc").attr("fill","rgb(204,204,204)"); 
					d3.select(".arc3").attr("fill","rgb(204,204,204)"); 
					d3.select(".arc4").attr("fill","rgb(204,204,204)"); 
					d3.select(".arc6").attr("fill","rgb(204,204,204)"); 
					d3.select(".arc7").attr("fill","rgb(204,204,204)"); 
		})
		.on("mouseout", function(d) {				
					t.transition().duration(500).style("opacity", 0);
					d3.select(".arc").attr("fill","#29a329"); 
					d3.select(".arc3").attr("fill","#33cc33");
					d3.select(".arc4").attr("fill","#ff4d4d");
					d3.select(".arc6").attr("fill","#70db70"); 
					d3.select(".arc7").attr("fill","#ff8080");
		});

var arc2 = d3.svg.arc()
		.innerRadius(50).outerRadius(75).startAngle(34.3*Math.PI/18).endAngle(36*Math.PI/18);
		svg.append("path").attr("class", "arc2").attr("d", arc2).attr("fill","rgb(247,247,247)")
		.on("mouseover", function(d) {	
					t.transition().duration(200).style("opacity", 1);
					t.html("<font size=3>" + " " + "</font>").style("left", 100).style("top", 100);
		})
		.on("mouseout", function(d) {				
					t.transition().duration(500).style("opacity", 0);
		});

var arc3 = d3.svg.arc()
		.innerRadius(75).outerRadius(100).startAngle(0).endAngle(32.7*Math.PI/36);
		svg.append("path").attr("class", "arc3").attr("d", arc3).attr("fill","#33cc33")
		.on("mouseover", function(d) {	
					t.transition().duration(200).style("opacity", 1);
					t.html("<font size=3>" + "40.8% of the contested vote share for AIADMK" + "</font>").style("left", 100).style("top", 100);
					d3.select(".arc1").attr("fill","rgb(204,204,204)"); 
					d3.select(".arc4").attr("fill","rgb(204,204,204)"); 
					d3.select(".arc6").attr("fill","rgb(204,204,204)");
					d3.select(".arc7").attr("fill","rgb(204,204,204)"); 
		})
		.on("mouseout", function(d) {				
					t.transition().duration(500).style("opacity", 0);
					d3.select(".arc1").attr("fill","#ff0000"); 
					d3.select(".arc4").attr("fill","#ff4d4d"); 
					d3.select(".arc7").attr("fill","#ff8080");
					d3.select(".arc6").attr("fill","#70db70");
		});

var arc4 = d3.svg.arc()
		.innerRadius(75).outerRadius(100).startAngle(32.7*Math.PI/36).endAngle(63.1*Math.PI/36);
		svg.append("path").attr("class", "arc4").attr("d", arc4).attr("fill","#ff4d4d")
		.on("mouseover", function(d) {	
					t.transition().duration(200).style("opacity", 1);
					t.html("<font size=3>" + "41.1% of the contested vote share for DMK" + "</font>").style("left", 100).style("top", 100);
					d3.select(".arc").attr("fill","rgb(204,204,204)"); 
					d3.select(".arc3").attr("fill","rgb(204,204,204)"); 
					d3.select(".arc6").attr("fill","rgb(204,204,204)");
					d3.select(".arc7").attr("fill","rgb(204,204,204)");
					
		})
		.on("mouseout", function(d) {				
					t.transition().duration(500).style("opacity", 0);
					d3.select(".arc").attr("fill","#29a329"); 
					d3.select(".arc3").attr("fill","#33cc33"); 
					d3.select(".arc6").attr("fill","#70db70");
					d3.select(".arc7").attr("fill","#ff8080");
		});

var arc5 = d3.svg.arc()
		.innerRadius(75).outerRadius(100).startAngle(63.1*Math.PI/36).endAngle(72*Math.PI/36);
		svg.append("path").attr("class", "arc5").attr("d", arc5).attr("fill","rgb(247,247,247)")
		.on("mouseover", function(d) {	
					t.transition().duration(200).style("opacity", 1);
					t.html("<font size=3>" + " " + "</font>").style("left", 100).style("top", 100);
		})
		.on("mouseout", function(d) {				
					t.transition().duration(500).style("opacity", 0);
		});
		
var arc6 = d3.svg.arc()
		.innerRadius(100).outerRadius(125).startAngle(0).endAngle(32.7*Math.PI/36);
		svg.append("path").attr("class", "arc6").attr("d", arc6).attr("fill","#70db70")
		.on("mouseover", function(d) {	
					t.transition().duration(200).style("opacity", 1);
					t.html("<font size=3>" + "40.8% of the total vote share for AIADMK" + "</font>").style("left", 100).style("top", 100);
					d3.select(".arc1").attr("fill","rgb(204,204,204)"); 
					d3.select(".arc4").attr("fill","rgb(204,204,204)"); 
					d3.select(".arc7").attr("fill","rgb(204,204,204)");
		})
		.on("mouseout", function(d) {				
					t.transition().duration(500).style("opacity", 0);
					d3.select(".arc1").attr("fill","#ff0000"); 
					d3.select(".arc4").attr("fill","#ff4d4d"); 
					d3.select(".arc7").attr("fill","#ff8080");
		});

var arc7 = d3.svg.arc()
		.innerRadius(100).outerRadius(125).startAngle(32.7*Math.PI/36).endAngle(62.1*Math.PI/36);
		svg.append("path").attr("class", "arc7").attr("d", arc7).attr("fill","#ff8080")
		.on("mouseover", function(d) {	
					t.transition().duration(200).style("opacity", 1);
					
					t.html("<font size=3>" + "39.7% of the total vote share for DMK" + "</font>").style("left", 100).style("top", 100);
					d3.select(".arc").attr("fill","rgb(204,204,204)"); 
					d3.select(".arc3").attr("fill","rgb(204,204,204)"); 
					d3.select(".arc6").attr("fill","rgb(204,204,204)");
		})
		.on("mouseout", function(d) {				
					t.transition().duration(500).style("opacity", 0);
					d3.select(".arc").attr("fill","#29a329"); 
					d3.select(".arc3").attr("fill","#33cc33"); 
					d3.select(".arc6").attr("fill","#70db70");
		});

var arc8 = d3.svg.arc()
		.innerRadius(100).outerRadius(125).startAngle(62.1*Math.PI/36).endAngle(72*Math.PI/36);
		svg.append("path").attr("class", "arc8").attr("d", arc8).attr("fill","rgb(247,247,247)")
		.on("mouseover", function(d) {	
					t.transition().duration(200).style("opacity", 1);
					
					t.html("<font size=3>" + " " + "</font>").style("left", 100).style("top", 100);
		})
		.on("mouseout", function(d) {				
					t.transition().duration(500).style("opacity", 0);
		});

var labs = [{val:"131",xpos:-15,ypos:70,col:"white",size:"15",ang:"rotate(-40)"},{val:"40.8 %",xpos:-15,ypos:92,col:"white",size:"15",ang:"rotate(-40)"},{val:"40.8 %",xpos:-15,ypos:115,col:"white",size:"15",ang:"rotate(-40)"},{val:"89",xpos:-15,ypos:70,col:"white",size:"15",ang:"rotate(40)"},{val:"41.1 %",xpos:-15,ypos:92,col:"white",size:"15",ang:"rotate(40)"},{val:"39.7 %",xpos:-15,ypos:117,col:"white",size:"15",ang:"rotate(40)"} ];

svg.selectAll("text")
		   .data(labs).enter().append("text")
		   .text(function(d){ return d.val; })
		   .attr("y", function(d){ return d.ypos; })
		   .attr("x", function(d){ return d.xpos; })
		   .attr("font-size",function(d){ return d.size; })
		   .attr("fill",function(d){ return d.col; })
		   .attr("transform", function(d){ return d.ang; })
		   .attr("font-family","Roboto Condensed");
		   
		$( "#tooltip" ).position({
  my: "center",
  at: "center",
  of: "#donut"
});
