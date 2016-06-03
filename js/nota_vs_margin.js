var dataset_nota = [];
		d3.csv("csv/nota_vs_margin.csv", function(data) {

  		data.forEach(function(d) {
		dataset_nota.push([+d['CONUM'], +d['LOG(MAR)']*100,d["WINPARTY"],d["TYPE1"],+d["MARGIN"],+d["NOTA"],d["CONAME"],+d["RECTPOS"], +d['LOG(NOTA)']*100, +d["INDEX"]])
    		dataset_nota.push([+d['CONUM'], +d['LOG(NOTA)']*100,d["WINPARTY"],d["TYPE2"],+d["MARGIN"],+d["NOTA"],d["CONAME"],+d["RECTPOS"], +d['LOG(MAR)']*100, +d["INDEX"]+1])
		});

		var w = 1302;
		var h = 605;

		var svg = d3.select("#area1")
				.append("svg")
				.attr("width", w)
				.attr("height", h);
				//$("svg").css({top: -200, left: -270, position:'relative'});
				
		var div = d3.select("#area1").append("div")	
					.attr("class", "tooltip1")				
					.style("opacity", 0);
			 
		var rect = svg.selectAll("rect")
                      .data(dataset_nota)
                      .enter()
					  .append("rect") 
 					  .attr("x", function(d) {
							return d[7];		  
					  }) 
					  .attr("y", 105)
					  .attr("width", 5)
					  .attr("height", 400)
					  .attr("fill","white")
 
					  .on("mouseover", function(d) {	
											d3.select(this).attr("width", 7).style("fill", "rgb(235,235,235)");
											div.transition().duration(200).style("opacity", 1);	
											var mouse=d3.mouse(d3.select(this).node());
											div.html("<font size=3>" + "<b>" + d[6] + "</b>" + "</font>" + "<br/>" + d[2] + "<br/>" + "<br/>" + "Winning Margin " + "&nbsp;" + d[4] + "<br/>" + "NOTA " + "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; " + d[5]).style("left", (mouse[0]+ 25) + "px").style("top", (mouse[1] - 28) + "px");	
											if(d[1]<d[8]) {
											drawLineRollover([{"x": d[0], "y": d[1]+1, "p": d[2]}, {"x": d[0], "y": d[8]-3, "p": d[2]}],2);
											}
											else {
											drawLineRollover([{"x": d[0], "y": d[1], "p": d[2]}, {"x": d[0], "y": d[8]+3, "p": d[2]}],1);
											};
											/*if(d[9]%2==0) {
												drawPoint(d[0],d[8],3)
											}*/
											
					  })					
					 .on("mouseout", function(d) {	
											d3.select(this).attr("width", 15).style("fill", "white")
											if(d[1]<d[8]) {
												drawLineRollover([{"x": d[0], "y": d[1], "p": d[2]}, {"x": d[0], "y": d[8]-3, "p": d[2]}],4);
												drawLineRollover([{"x": d[0], "y": d[1], "p": d[2]}, {"x": d[0], "y": d[8]-3, "p": d[2]}],3);
											}
											else {
												drawLineRollover([{"x": d[0], "y": d[1], "p": d[2]}, {"x": d[0], "y": d[8]+3, "p": d[2]}],6);
												drawLineRollover([{"x": d[0], "y": d[1], "p": d[2]}, {"x": d[0], "y": d[8]+3, "p": d[2]}],5);
											};
											div.transition().duration(500).style("opacity", 0);	
					});
			
		function drawLine(A) {
			
			var v1 = A[0].x;
			var v2 = A[0].y;
			var v3 = A[1].x;
			var v4 = A[1].y;
			var v5 = A[0].p;
			var v6 = A[0].t;
			var v7 = A[0].v;
			var v8 = A[1].t;
			var v9 = A[1].v;
			var v10 = A[0].c;
			
			var lineData = [{"x": v1, "y": v2}, {"x": v3, "y": v4}];

			var lineFunction = d3.svg.line()
						.x(function (d) {
								return d.x*5 + 50;
						})
						.y(function (d) {
								return h - d.y;
						})
						.interpolate("linear");

			svg.append("path")
						.attr("d", lineFunction(lineData))
						.style("stroke-width", 0.7)
						.style("stroke", function() {            
											if (v5 == "AIADMK") {return "green"}  
											else { return "red" }          
						;}) 
						.on("mouseover", function (d) {
											div.transition().duration(200).style("opacity", .5);		
											d3.select(this).style("stroke-width", 2);
						})
						.on("mouseout", function () {
											d3.select(this).style("stroke", function() {            
																				if (v5 == "AIADMK") {return "green"}  
																				else { return "red" }
																			;}).style("stroke-width", 0.7);
											div.transition().duration(500).style("opacity", 0);	
						;})
			
		}
			
		function drawLine2(A,k) {
			
			var v1 = A[0].x;
			var v2 = A[0].y;
			var v3 = A[1].x;
			var v4 = A[1].y;

			var lineData = [{"x": v1, "y": v2}, {"x": v3, "y": v4}];

			var lineFunction = d3.svg.line()
						.x(function (d) {
								return d.x*5 + 50;
						})
						.y(function (d) {
								return h - d.y;
						})
						.interpolate("linear");

			if(k==0) {
				svg.append("path")
				   .attr("d", lineFunction(lineData))
			       .style("stroke-width", 0.5)
				   .style("stroke", "rgb(169,169,169)");   
			}
			
			if(k==1) {
				svg.append("path")
				   .attr("d", lineFunction(lineData))
			       .style("stroke-width", 0.5)
				   .style("stroke", "blue");   
			}
		
		}

		function drawLineRollover(A,k) {
			
			var v1 = A[0].x;
			var v2 = A[0].y;
			var v3 = A[1].x;
			var v4 = A[1].y;
			var v5 = A[0].p;
			
			var lineData = [{"x": v1, "y": v2}, {"x": v3, "y": v4}];
			
			var lineFunction = d3.svg.line()
						.x(function (d) {
								return d.x*5 + 50;
						})
						.y(function (d) {
								return h - d.y - 1;
						})
						.interpolate("linear");
			
			var lineFunction1 = d3.svg.line()
						.x(function (d) {
								return d.x*5 + 50;
						})
						.y(function (d) {
								return h - d.y + 1;
						})
						.interpolate("linear");
			
			if(k==1) {
				svg.append("path")
				   .attr("d", lineFunction1(lineData))
			   	   .style("stroke-width", 2)
				   .style("stroke", function () {
										if(v5 == "AIADMK") { return "green"; }
										else { return "red";}
									}); 
			}
			
			if(k==2) {
				svg.append("path")
				   .attr("d", lineFunction(lineData))
			   	   .style("stroke-width", 2)
				   .style("stroke", function () {
										if(v5 == "AIADMK") { return "green"; }
										else { return "red";}
									}); 
			}
			
			if(k==3) {
				svg.append("path")
				   .attr("d", lineFunction(lineData))
				   .style("stroke-width", 0.8)
				   .style("stroke", function () {
										if(v5 == "AIADMK") { return "green"; }
										else { return "red";}
									});
			}
			
			if(k==4) {
				svg.append("path")
				   .attr("d", lineFunction(lineData))
				   .style("stroke-width", 3)
				   .style("stroke", "white");   
			}
			
			if(k==5) {
				svg.append("path")
				   .attr("d", lineFunction1(lineData))
				   .style("stroke-width", 0.8)
				   .style("stroke", function () {
										if(v5 == "AIADMK") { return "green"; }
										else { return "red";}
									});
			}
			
			if(k==6) {
				svg.append("path")
				   .attr("d", lineFunction1(lineData))
				   .style("stroke-width", 3)
				   .style("stroke", "white");   
			}
			
		}
			

		var axisavg_nota = [ [1,100], [235,100], [1,200], [235,200], [1,300], [235,300], [1,400], [235,400], [1,500], [235,500], [1, 100], [1, 500], [1,338], [235, 338] ];
		 
		var aia = [{val:"AIADMK+",xpos:1200,ypos:27,col:"black",size:"15"},{val:"DMK+",xpos:1200,ypos:48,col:"black",size:"15"},{val:"10",xpos:25,ypos:510, col:"black",size:"15"},{val:"100",xpos:18,ypos:410,col:"black",size:"15"},{val:"1000",xpos:13,ypos:310,col:"black",size:"15"},{val:"10000",xpos:7,ypos:210,col:"black",size:"15"},{val:"100000",xpos:1,ypos:110,col:"black",size:"15"},{val:"10",xpos:1220,ypos:510,col:"black",size:"15"},{val:"100",xpos:1220,ypos:410,col:"black",size:"15"},{val:"1000",xpos:1220,ypos:310,col:"black",size:"15"},{val:"10000",xpos:1220,ypos:210,col:"black",size:"15"},{val:"100000",xpos:1220,ypos:110,col:"black",size:"15"},{val:"Avg. NOTA",xpos:1220,ypos:270,col:"blue",size:"13"}, {val:"VOTES",xpos:8,ypos:260,col:"gray",size:"15"}, {val:"CONSTITUENCIES",xpos:620,ypos:524,col:"gray",size:"15"},{val:"CONSTITUENCY-WISE EFFECT OF THE NOTA", xpos:54,ypos:27,col:"black",size:"18"}, {val:"The chart shows the number of votes that the NOTA votes polled in each constituency in descending order of magnitude. The points above the curve indicate the constituencies where the victory", xpos:54,ypos:50,col:"gray",size:"14"}, {val:"margins are more than the NOTA votes polled, while the points below the curve, vice-versa. The length of the lines indicate the quantum of the difference. Votes along the Y-axis are shown on a", xpos:54,ypos:66,col:"gray",size:"14"},{val:"logarithmic scale to allow for comparison.", xpos:54,ypos:83,col:"gray",size:"14"}, {val:"Hover mouse cursor over the chart to explore constituency details.", xpos:290,ypos:83,col:"#d92b2b",size:"14"}];
		
		var rect = svg.append("rect") 
			.attr("x", 1175) 
			.attr("y", 15)
			.attr("width", 15)
			.attr("height", 15)
			.attr("fill", "green");

		var rect = svg.append("rect") 
			.attr("x", 1175) 
			.attr("y", 35)
			.attr("width", 15)
			.attr("height", 15)
			.attr("fill", "red");	

		svg.selectAll("text")
		   .data(aia)
	   	   .enter()
		   .append("text")
		   .text(function(d){
				return d.val;
			})
		   .attr("y", function(d){
				return d.ypos;
			})
		   .attr("x", function(d){
				return d.xpos;
			})
		   .attr("font-size",function(d){
				return d.size;
			})
			.attr("fill",function(d){
				return d.col;
			})
		   .attr("font-family","Roboto Condensed");
		   
			
		for (var i=1; i<dataset_nota.length; i=i+1) {
		
			var v1 = dataset_nota[i][0];
			var v2 = dataset_nota[i][1];
			
			drawPoint(v1,v2,1.5)
		};
				
				
		function drawPoint(v1,v2,r) {
		
		var circle = svg.append("circle")
					    .attr("cx",v1*5 + 50)		  
						.attr("cy", h - v2)		  
						.attr("r", r);
		}
										
		for (var i=0; i<dataset_nota.length; i=i+2) {
		
			var v1 = dataset_nota[i][0];
			var v2 = dataset_nota[i][1];
			var v3 = dataset_nota[i+1][0];
			var v4 = dataset_nota[i+1][1];
			var v5 = dataset_nota[i][2];
			var v6 = dataset_nota[i][3];
			var v7 = dataset_nota[i][4];
			var v8 = dataset_nota[i+1][3];
			var v9 = dataset_nota[i+1][5];
			var v10 = dataset_nota[i][6];
			
			drawLine([{"x": v1, "y": v2, "p": v5, "t": v6, "v": v7, "c": v10}, {"x": v3, "y": v4, "p": v5, "t": v8, "v": v9, "c": v10}])
		};
		
		for (var i=0; i<axisavg_nota.length; i=i+2) {
		
			var v1 = axisavg_nota[i][0];
			var v2 = axisavg_nota[i][1];
			var v3 = axisavg_nota[i+1][0];
			var v4 = axisavg_nota[i+1][1];
			
			if(v2%10==0) {
			drawLine2([{"x": v1, "y": v2}, {"x": v3, "y": v4}],0);	}
			else {
			drawLine2([{"x": v1, "y": v2}, {"x": v3, "y": v4}],1);  }
		}
		
	});	
	
