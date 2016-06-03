var w = 430;
		var h = 200;

		var svg = d3.select("#bullet1").append("svg").attr("width", w).attr("height", h);
		
		function drawrect(x,y,w,h,col) {
			var re=svg.append("rect") 
			.attr("x", x) 
			.attr("y", y)
			.attr("width", w)
			.attr("height", h)
			.attr("fill", col);
			return re;
		}
			
		function drawLine(A) {
		
			var v1 = A[0];
			var v2 = A[1];
			var v3 = A[2];

			var lineData = [{"x": v1, "y": v2}, {"x": v1, "y": v3}];

			var lineFunction = d3.svg.line()
						.x(function (d) {
								return d.x;
						})
						.y(function (d) {
								return d.y;
						})
						.interpolate("linear");

				svg.append("path")
				   .attr("d", lineFunction(lineData))
			       .style("stroke-width", 0.5)
				   .style("stroke", "gray");   
		}

		drawLine([15,30,40])
		drawLine([65,30,40])
		drawLine([115,30,40])
		drawLine([165,30,40])
		drawLine([215,30,40])
		drawLine([249,30,40])
		
		var labs = [["0",12,52,"black","10"],["50",60,52,"black","10"],["100",107,52,"black","10"],["150",157,52,"black","10"],["200",207,52,"black","10"],["232",241,52,"black","10"],["Constituencies",100,70,"black","13"]];

		function disptext(tex,x,y,col,size) {
		
		var text1 = svg.append("text")
		   .text(tex)
		   .attr("y", y)
		   .attr("x", x)
		   .attr("font-size", size)
		   .attr("fill",col)
		   .attr("font-family","Roboto Condensed"); 
		   
		   return text1;
		 }
		
		for (var i=0; i<labs.length; i=i+1)
    	{
		var v1 = labs[i][0];
		var v2 = labs[i][1];
		var v3 = labs[i][2];
		var v4 = labs[i][3];
		var v5 = labs[i][4];
		disptext(v1,v2,v3,v4,v5)
		}
		
		var rect1 = drawrect(15,10,234,25,"lightgray");
		var rect3 = drawrect(15,15,134,15,"green");
		var rect4 = drawrect(151,15,98,15,"red");
		var text1 = disptext("78",1,27,"white",10);
		var text2 = disptext("55",1,27,"white",10);
		var text3 = disptext("38",1,27,"white",10);
		var text4 = disptext("23",1,27,"white",10);
		var text5 = disptext("134",1,27,"white",10);
		var text6 = disptext("98",1,27,"white",10);
				
		d3.select("#b2").on("click", function() {
    	
		rect3.transition().duration(1000).attr("width",78); 			
		rect4.transition().duration(1000).attr("x",94).attr("width",55);
		text1.transition().duration(1000).attr("x",75);
		text2.transition().duration(1000).attr("x",131);
		text3.transition().duration(1000).attr("x",1);
		text4.transition().duration(1000).attr("x",1);
		text5.transition().duration(1000).attr("x",1);
		text6.transition().duration(1000).attr("x",1);
		
		});
		
		d3.select("#b3").on("click", function() {
    	
		rect3.transition().duration(1000).attr("width",38);
		rect4.transition().duration(1000).attr("x",54).attr("width",23);	
		text3.transition().duration(1000).attr("x",35);
		text4.transition().duration(1000).attr("x",59);
		text1.transition().duration(1000).attr("x",1);
		text2.transition().duration(1000).attr("x",1);
		text5.transition().duration(1000).attr("x",1);
		text6.transition().duration(1000).attr("x",1);
		
		});
		
		d3.select("#b1").on("click", function() {
		
    	rect3.transition().duration(1000).attr("x",15).attr("width",134); 		
		rect4.transition().duration(1000).attr("x",151).attr("width",98);
		text5.transition().duration(1000).attr("x",131);
		text6.transition().duration(1000).attr("x",231);
		text1.transition().duration(1000).attr("x",1);
		text2.transition().duration(1000).attr("x",1);
		text3.transition().duration(1000).attr("x",1);
		text4.transition().duration(1000).attr("x",1);
			
		});
