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
		
		var labs = [["0",12,60,"black","10"],["50",102,60,"black","10"],["100",192,60,"black","10"],["150",282,60,"black","10"],["200",372,60,"black","10"],["232",415,60,"black","10"],["Constituencies",200,80,"black","13"]];

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
		
		var rect1 = drawrect(15,10,234*2,35,"lightgray");
		var rect3 = drawrect(15,15,134*2,25,"green");
		var rect4 = drawrect(285,15,98*2,25,"red");
		
		var text1 = disptext("78",-5,31,"white",13);
		var text2 = disptext("55",-5,31,"white",13);
		var text3 = disptext("38",-5,31,"white",13);
		var text4 = disptext("23",-5,31,"white",13);
		var text5 = disptext("134",253,31,"white",13);
		var text6 = disptext("98",407,31,"white",13);
				
		d3.select("#b2").on("click", function() {
    	
		rect3.transition().duration(1000).attr("width",78*2); 			
		rect4.transition().duration(1000).attr("x",172).attr("width",55*2);
		
		text1.transition().duration(1000).attr("x",75*2);
		text2.transition().duration(1000).attr("x",131*2);
		text3.transition().duration(1000).attr("x",-5);
		text4.transition().duration(1000).attr("x",-5);
		text5.transition().duration(1000).attr("x",-5);
		text6.transition().duration(1000).attr("x",-5);
		
		});
		
		d3.select("#b3").on("click", function() {
    	
		rect3.transition().duration(1000).attr("width",38*2);
		rect4.transition().duration(1000).attr("x",92).attr("width",23*2);	
		
		text3.transition().duration(1000).attr("x",35*2);
		text4.transition().duration(1000).attr("x",59*2);
		text1.transition().duration(1000).attr("x",-5);
		text2.transition().duration(1000).attr("x",-5);
		text5.transition().duration(1000).attr("x",-5);
		text6.transition().duration(1000).attr("x",-5);
		
		});
		
		d3.select("#b1").on("click", function() {
		
    		rect3.transition().duration(1000).attr("x",15).attr("width",134*2); 		
		rect4.transition().duration(1000).attr("x",285).attr("width",98*2);
		
		text5.transition().duration(1000).attr("x",128*2);
		text6.transition().duration(1000).attr("x",203*2);
		text1.transition().duration(1000).attr("x",-5);
		text2.transition().duration(1000).attr("x",-5);
		text3.transition().duration(1000).attr("x",-5);
		text4.transition().duration(1000).attr("x",-5);
			
		});
		
