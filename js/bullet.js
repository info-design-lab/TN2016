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
		
		//var data = [[15,50,]] 
		
		function drawLine(A) {
		
			var v1 = A[0];
			var v2 = A[1];
			var v3 = A[2];

			var lineData = [{"x": v1, "y": v2}, {"x": v1, "y": v3}];

			var lineFunction = d3.svg.line()
						.x(function (d) {
								return d.x;
								// *5 + 50
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
		
		var labs = [{val:"0",xpos:12,ypos:60,col:"black",size:"10"},{val:"50",xpos:102,ypos:60,col:"black",size:"10"},{val:"100",xpos:192,ypos:60,col:"black",size:"10"},{val:"150",xpos:282,ypos:60,col:"black",size:"10"},{val:"200",xpos:372,ypos:60,col:"black",size:"10"},{val:"232",xpos:415,ypos:60,col:"black",size:"10"},{val:"Constituencies",xpos:100*2,ypos:80,col:"black",size:"13"}];

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
		   .attr("font-size",function(d){
				return d.size;
			})
			.attr("fill",function(d){
				return d.col;
			})
		   .attr("font-family","Roboto Condensed");
		
		var rect1 = drawrect(15,10,234*2,35,"lightgray");
		var rect3 = drawrect(15,15,134*2,25,"green");
		var rect4 = drawrect(285,15,98*2,25,"red");
		
		
		d3.select("#b2").on("click", function() {
    	
		rect3.transition().duration(1500).attr("width",78*2); 			
		rect4.transition().duration(1500).attr("x",172).attr("width",55*2);
		
		});

		d3.select("#b3").on("click", function() {
    	
		rect3.transition().duration(1500).attr("width",38*2);
		rect4.transition().duration(1500).attr("x",92).attr("width",23*2);	
		
		});
		
		d3.select("#b1").on("click", function() {
		
    	rect3.transition().duration(1500).attr("x",15).attr("width",134*2); 		
		rect4.transition().duration(1500).attr("x",285).attr("width",98*2);
				
		});