var div = d3.select("#area4").append("div")	
    			.attr("class", "tooltip")				
    			.style("opacity", 0);
				
	var div1 = d3.select("#area4").append("div")	
    		     .attr("class", "tooltip1")				
    			.style("opacity", 0);
				
	var w = 3700;
	var h = 605;

	var dataset_combined = [];
	d3.csv("nota_pmk_tf_margin2.csv", function(data) {

  		data.forEach(function(d) {
		    dataset_combined.push([+d['CONUM'], +d['LOG(MAR)']*100, d["WINPARTY"], d["TYPE1"], d["CONAME"], +d["MARGIN"], +d["NOTA"], +d["PMK"], +d["3F"], +d["RECTPOS"]])
    		dataset_combined.push([+d['CONUM'], +d['LOG(NOTA)']*100, d["WINPARTY"], d["TYPE1"], d["CONAME"], +d["MARGIN"], +d["NOTA"], +d["PMK"], +d["3F"], +d["RECTPOS"]])
			dataset_combined.push([+d['CONUM']+1, +d['LOG(MAR)']*100, d["WINPARTY"], d["TYPE2"], d["CONAME"], +d["MARGIN"], +d["NOTA"], +d["PMK"], +d["3F"], +d["RECTPOS"]])
    		dataset_combined.push([+d['CONUM']+1, +d['LOG(PMK)']*100, d["WINPARTY"], d["TYPE2"], d["CONAME"], +d["MARGIN"], +d["NOTA"], +d["PMK"], +d["3F"], +d["RECTPOS"]])
			dataset_combined.push([+d['CONUM']+2, +d['LOG(MAR)']*100, d["WINPARTY"], d["TYPE3"], d["CONAME"], +d["MARGIN"], +d["NOTA"], +d["PMK"], +d["3F"], +d["RECTPOS"]])
    		dataset_combined.push([+d['CONUM']+2, +d['LOG(3F)']*100, d["WINPARTY"], d["TYPE3"], d["CONAME"], +d["MARGIN"], +d["NOTA"], +d["PMK"], +d["3F"], +d["RECTPOS"]])
  	});
 
	var ds2_combined = [ [1,100], [695,100], [1,200], [695,200], [1,300], [695,300], [1,400], [695,400], [1,500], [695,500], [1,100], [1,500], [1, 338], [695, 338], [1, 358], [695, 358], [1, 397], [695, 397], [1, 396], [695, 396], [222,570], [232,570], [222,551], [232,551], [222,533], [232,533], [502,570], [512,570], [502,551], [512,551], [502,533], [512,533] ];
	
	function drawGridLine(A) {
		
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

					svg.append("path")
                	.attr("d", lineFunction(lineData))
                	.style("stroke-width", 0.7)
                	.style("stroke", function() {
					if (v2 == 338 || v2 == 570) { return "red"; }	
					else if (v2 == 358 || v2 == 551) { return "green"; }
					else if (v2 == 397 || v2 == 533) { return "blue"; }
					else if (v2 == 396) { return "black"; }
					else {return "rgb(169,169,169)";}
				;})
	}
		
	function drawLine(A,k) {
		
		var v1 = A[0].x;
		var v2 = A[0].y;
		var v3 = A[1].x;
		var v4 = A[1].y;
		var v5 = A[2].x;

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
				if (v5 == "NOTA") {return "red";}  
            			else if (v5 == "PMK") { return "green";} 
				else if ( v5 == "ThirdFront") { return "blue";}         
        		;})   

                	.on("mouseover", function () {
                    		d3.select(this)
                            	.style("stroke", "blue");
                	})
                	.on("mouseout", function () {
                    		d3.select(this)
                            	.style("stroke", function() {            
            			if (v5 == "NOTA") {return "red";}  
            			else if (v5 == "PMK") { return "green";} 
				else if ( v5 == "ThirdFront") { return "blue";}      
        		;}) 
                	;})

		}
	 
	var svg = d3.select("#area4")
            .append("svg")
            .attr("width", w)
            .attr("height", h);
			$("svg").css({top: -200, left: -270, position:'relative'});
			
	var rect = svg.selectAll("rect")
                 .data(dataset_combined)
                 .enter()
		 .append("rect") 
		 .attr("x", function(d) {
    			return d[9];		  
		 }) 
	    	 .attr("y", 105)
	       	 .attr("width", 15)
	    	 .attr("height", 400)
	    	 .attr("fill", function (d) { 
				if (d[9]%2 == 0) {return "white";}
				else { return "rgb(245,245,239)";}
				})
			 
			.on("mouseover", function(d) {	
					d3.select(this).attr("width", 18).style("fill", "rgb(160,160,160)");
            		div.transition()		
                		.duration(200)		
                		.style("opacity", .5);							
					div.html("Constituency: " + d[4] + "<br/>" + "Winning Party: " + d[2] + "<br/>" + "Winning Margin: " + d[5] + "<br/>" + "NOTA: " + d[6] + "<br/>" + "PMK: " + d[7] + "<br/>" + "Third Front: " + d[8])	
                		.style("left", (d3.event.pageX) + "px")		
                		.style("top", (d3.event.pageY - 28) + "px");	
            		})					
        		.on("mouseout", function(d) {	
						d3.select(this).attr("width", 15).style("fill", function (d) { 
							if (d[9]%2 == 0) {return "white";}
							else { return "rgb(245,245,239)";}
						})
            			div.transition()		
                		.duration(500)		
                		.style("opacity", 0);	
						
        	});


	var circ = svg.append("circle") 
		.attr("cx", 1045)
	    .attr("cy", 40) 
	    .attr("r", 5)
	    .attr("fill", "white")
		.attr("stroke", "black")
		.attr("stroke-width", 3);

	var circ = svg.append("circle") 
		.attr("cx", 1045)
	    .attr("cy", 63) 
	    .attr("r", 6)
	    .attr("fill", "black");
	
	var circ = svg.append("circle") 
		.attr("cx", 2450)
	    .attr("cy", 40) 
	    .attr("r", 5)
	    .attr("fill", "white")
		.attr("stroke", "black")
		.attr("stroke-width", 3);

	var circ = svg.append("circle") 
		.attr("cx", 2450)
	    .attr("cy", 63) 
	    .attr("r", 6)
	    .attr("fill", "black");
	
	
	var labs = [{val:"AIADMK+",xpos:1065,ypos:45},{val:"DMK+",xpos:1065,ypos:68},{val:"AIADMK+",xpos:2470,ypos:45},{val:"DMK+",xpos:2470,ypos:68},{val:"10",xpos:25,ypos:510},{val:"100",xpos:18,ypos:410},{val:"1000",xpos:13,ypos:310},{val:"10000",xpos:7,ypos:210},{val:"100000",xpos:1,ypos:110},{val:"10",xpos:3530,ypos:510},{val:"100",xpos:3530,ypos:410},{val:"1000",xpos:3530,ypos:310},{val:"10000",xpos:3530,ypos:210},{val:"100000",xpos:3530,ypos:110},{val:"Votes",xpos:12,ypos:60}, {val:"Comparison of NOTA, PMK's performance and Third Front effect with respect to Winning Margins for different constituencies",xpos:150,ypos:60},{val:"Comparison of NOTA, PMK's performance and Third Front effect with respect to Winning Margins for different constituencies",xpos:1480,ypos:60},{val:"Comparison of NOTA, PMK's performance and Third Front effect with respect to Winning Margins for different constituencies",xpos:2800,ypos:60},{val:"Constituencies",xpos:620,ypos:500}, {val:"Constituencies",xpos:2020,ypos:500}, {val:"Constituencies",xpos:2820,ypos:500},{val:"Avg. NOTA",xpos:3530,ypos:270},{val:"Avg. PMK",xpos:3530,ypos:250},{val:"Avg. TF",xpos:1,ypos:222},{val:"/Margin",xpos:1,ypos:237},{val:"NOTA",xpos:1,ypos:270},{val:"PMK",xpos:1,ypos:253},{val:"Avg. TF/Margin",xpos:3530,ypos:222},{val:"NOTA",xpos:1220,ypos:40},{val:"PMK",xpos:1220,ypos:58},{val:"Third Front",xpos:1220,ypos:75},{val:"NOTA",xpos:2625,ypos:40},{val:"PMK",xpos:2625,ypos:58},{val:"Third Front",xpos:2625,ypos:75}];
	
	svg.selectAll("text")
    		.data(labs)
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
    	.attr("font-size",15);

	var circle = svg.selectAll("circle")
                 .data(dataset_combined)
                 .enter()
		 .append("circle")
 
	 	 .attr("cx", function(d) {
    			return d[0]*5 + 50;		  
		})
	    	 .attr("cy", function(d) {
    			return h - d[1];		  
		})
	    	.attr("r", function(d) {
    			if ( d[2] == "DMK" || d[2] == "INC" || d[2] == "IUML") { return 2.7}
			else { return 2}		  
		})
		.attr("fill", function(d) {
    			if ( d[2] == "DMK" || d[2] == "INC" || d[2] == "IUML") { return "black";}
			else { return "white";}		  
		})   
	       .attr("stroke", function(d) {
    			if ( d[2] == "DMK" || d[2] == "INC" || d[2] == "IUML" ) { return "white";}
			else { return "black";}		  
		})  
		
	       .attr("stroke-width", 1)

		/*.on("mouseover", function(d) {		
            		div.transition()		
                		.duration(200)		
                		.style("opacity", .5);		
			div.html("Constituency: " + d[4] + "<br/>" + "Winning Party: " + d[2] + "<br/>" + "Winning Margin: " + d[5] + "<br/>" + d[3] + ": " + d[6])	
                		.style("left", (d3.event.pageX) + "px")		
                		.style("top", (d3.event.pageY - 28) + "px");	
            		})					
        		.on("mouseout", function(d) {		
            			div.transition()		
                		.duration(500)		
                		.style("opacity", 0);	
        	});*/
		
		/*svg.selectAll("text")
   		   .data(dataset_combined)
                   .enter()
                   .append("text")
		   .text(function(d) {
        		return d[0]+ "," + d[1]/100;
   		   })
		   .attr("x", function(d) {
        		return d[0]*5 + 54;
   		   })
   		   .attr("y", function(d) {
        	        return h - d[1] + 4;
   		   })	
		   .attr("font-family", "sans-serif")
   		   .attr("font-size", "6px")
   		   .attr("fill", "yellow"); */

	/*for (var i=0; i<dataset_combined.length; i=i+2)
    	{
		var v1 = dataset_combined[i][0];
		var v2 = dataset_combined[i][1];
		var v3 = dataset_combined[i+1][0];
		var v4 = dataset_combined[i+1][1];
		var v5 = dataset_combined[i][6];

		drawLine([{"x": v1, "y": v2}, {"x": v3, "y": v4}, {"x": v5, "y": v5}])
	}

	for (var i=0; i<ds2_combined.length; i=i+2)
    	{
		var v1 = ds2_combined[i][0];
		var v2 = ds2_combined[i][1];
		var v3 = ds2_combined[i+1][0];
		var v4 = ds2_combined[i+1][1];

		drawGridLine([{"x": v1, "y": v2}, {"x": v3, "y": v4}])
	}*/
	
	for (var i=0; i<dataset_combined.length; i=i+2)
    	{
		var v1 = dataset_combined[i][0];
		var v2 = dataset_combined[i][1];
		var v3 = dataset_combined[i+1][0];
		var v4 = dataset_combined[i+1][1];
		var v5 = dataset_combined[i][3];

		drawLine([{"x": v1, "y": v2}, {"x": v3, "y": v4}, {"x": v5, "y": v5}], 1)
		}
		
	for (var i=0; i<dataset_combined.length; i=i+6)
    {	
		svg.append("text")
		   .text(dataset_combined[i][4])
		   .attr("x",-605)
   		   .attr("y", dataset_combined[i][0]*5 + 55)	
		   .attr("font-family", "sans-serif")
   		   .attr("font-size", "10px")
   		   .attr("fill", "black")
		   .attr("transform", "rotate(-90)");
	}

	for (var i=0; i<ds2_combined.length; i=i+2)
    	{
		var v1 = ds2_combined[i][0];
		var v2 = ds2_combined[i][1];
		var v3 = ds2_combined[i+1][0];
		var v4 = ds2_combined[i+1][1];

		drawGridLine([{"x": v1, "y": v2}, {"x": v3, "y": v4}])
	}
	
	/*for (var i=0; i<legends.length; i++)
    	{
		var v1 = legends[i][0];
		var v2 = legends[i][1];
		var v3 = legends[i+1][0];
		var v4 = legends[i+1][1];

		drawLegend([{"x": v1, "y": v2}, {"x": v3, "y": v4}])
	}*/
	

});
