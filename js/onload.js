	

	function press(but){
		//debugger;
		var lay=d3.select(but).attr("class");
		var layout="lay"+lay.substr(0,lay.indexOf(" "));
		//debugger;
		d3.selectAll(".btn1").classed("active",false);
		d3.select(but).classed("active",true);
		olay(layout);
	}

	function olay(layout){
		for(i=1;i<=4;i++){
			if(i==3) continue;
			var select_lay=d3.select(".lay"+i);
			var select_col=d3.select(".lay"+i).selectAll(".a");
			//debugger;
			select_col.selectAll("*").remove();
			//debugger;
			select_lay.classed("hidden",true);
		}
		var select_lay=d3.select("."+layout);
		select_lay.classed("hidden",false);
		//debugger;
		var select_col=select_lay.select(".row").selectAll(".a");
		//debugger;
		var num_of_layout=+layout.substr(layout.length-1);
		//debugger;
		select_col.each(function(d,i){
			display_options(this,num_of_layout);
		});
	}

	function display_options(column,num){
		//debugger;
		var tooltip=d3.select(column).append("div").attr("class","toolt").style("opacity",0);
		var menu=d3.select(column).append("div").append("select");
		//var colu=column;
		menu.attr("onchange","display(this);");
		menu.append("option").attr("value","").text("Choose year of election");
		menu.append("option").attr("value","2016").text("2016");
		menu.append("option").attr("value","2011").text("2011");
		menu.append("option").attr("value","2006").text("2006");
		menu.append("option").attr("value","2001").text("2001");
		menu.append("option").attr("value","1996").text("1996");
		menu.append("option").attr("value","1989").text("1989");
		menu.append("option").attr("value","1984").text("1984");
		menu.append("option").attr("value","1980").text("1980");
		if(num==1){
			num=num/.8;
		}
		var svg=d3.select(column).append("svg")
								.attr("width",1000/num)
								.attr("height",1000/num);
								//.style("margin","auto");
		//debugger;
								
								
		var borderPath = svg.append("rect")
				.attr("id","border")
       			.attr("x", 0)
       			.attr("y", 0)
       			.attr("height", 1000/num)
       			.attr("width", 1000/num)
       			.style("stroke", "grey")
       			.style("fill", "none")
       			.style("stroke-width", "1");
        //debugger;
		var set_year=+d3.select(column).attr("class")[3];
		set_year=2016-5*set_year;
		//debugger;
		//d3.select(column).select("select")
		d3.select(column).select("select").node().value=set_year;
		display(d3.select(column).select("select").node());
		//debugger;
		
}

	//var current_status=0;
	
	var win;
	var cberror;
	d3.tsv("csv/winners_all.tsv",function(error,data){
	    cberror=error;
	    win=data;
	});
    var margin_data;
    var cberror;
        d3.tsv("csv/margin2016.tsv",function(error,data){
                      cberror=error;
                      margin_data=data;
                  });
	var col={
			"DMK":"#e41a1c",
			"AIADMK":"#4daf4a",
			"MDMK":"#de77ae",
			"PMK" :"#984ea3",
			"DMDK":"#a6cee3",
			"BJP": "#ff7f00",
			"JNP": "#a6761d",
			"CPM": "black",
			"ADK(JL)":"#a6d854",
			"ADK(JR)":"#fdbf6f",
			"INC": "#8dd3c7",
			"JNP": "yellow",
			"DMDK":"#66c2a5",
			"INC (DMK)":"#e41a1c",
			"TMC (DMK)":  "#e41a1c",
			"CPM (DMK)":  "#e41a1c",   
			"BJP (DMK)":  "#e41a1c",
			"PMK (DMK)":  "#e41a1c",
			"CPI (DMK)":  "#e41a1c",
			"JNP (DMK)":  "#e41a1c",
			"MADMK (DMK)":"#e41a1c",
			"MDMK (DMK)":"#e41a1c",
			"FBL (DMK)":  "#e41a1c",
			"IUML (DMK)": "#e41a1c",
			"INC (AIADMK)":"#e41a1c",
			"TMC (AIADMK)":  "#4daf4a",
			"CPM (AIADMK)":  "#4daf4a", 
			"AIFB (AIADMK)":"#4daf4a",  
			"BJP (AIADMK)":  "#4daf4a",
			"PMK (AIADMK)":  "#4daf4a",
			"CPI (AIADMK)":  "#4daf4a",
			"JNP (AIADMK)":  "#4daf4a",
			"MADMK (AIADMK)":"#4daf4a",
			"MDMK (AIADMK)":"#4daf4a",
			"FBL (AIADMK)":  "#4daf4a",
			"IUML (AIADMK)": "#4daf4a",
			"DMDK (AIADMK)": "#4daf4a",
			"GKC (AIADMK)":  "#4daf4a",
			"MAMAK (AIADMK)":"#4daf4a",
			"PT (AIADMK)":   "#4daf4a",
			"VCK (AIADMK)":  "#4daf4a",
			"ICS (AIADMK)":  "#4daf4a",
			"CPI (ADK(JL))":  "#a6d854",
			"JD (MDMK)":"#de77ae",
			"CPM (MDMK)":"#de77ae",
			"AIFB":"#fdbb84",
			"IND":"white",
			"":"grey"
	}

	function display(year){
		//debugger;
		var name_of_button=d3.select(".active").attr("class");
		name_of_button=name_of_button.substr(0,1);
		var factor=+name_of_button;
		if(factor==1){
			factor=factor/.8
		}
		//debugger;
		var curr=year.value.toString();
		//debugger;
		var colu=d3.select(year.parentNode.parentNode);
		//debugger;
		var svg=colu.select("svg");
		pathselect=svg.selectAll("path");
		//svg.selectAll("path").remove();
		//debugger;
		if(pathselect.empty())
		{
		d3.json("csv/tngeo2.json", function(error,topology) {
			var height=920/factor;
			var width=1000/factor;
			var data=topology;
			var center=d3.geo.centroid(topology)
            var offset = [width/2, height/2];
            //debugger;
            var projection = d3.geo.mercator()
                      .center(center)
                      .scale(10000/factor).translate(offset);    
            var path = d3.geo.path()
                      .projection(projection);
            svg.selectAll("path")
            	.data(topology.features)
            	.enter()
            	.append("path")
            	.attr("d",path)
            	.attr("class",function(d){return "a"+d.properties.AC_NO+" "+(d.properties.AC_NAME)+" "+curr;})
            	.style("fill",function(d){return col[win[+(d.properties.AC_NO)][curr]];})
                .style("stroke","black")
                .style("stroke-width","1")
                //.on("click", function(d){
                //	current_status=1;
                //	toolin(this);
            	//	})
                .on("mouseover", function(d){
               			toolin(this,factor);
            		})
                .on("mouseout", function(d){
                		toolout(this);
                });
            });
        
    }
        else
        {
        	pathselect.each(function(){
        			d3.select(this).attr("class",function(d){return "a"+d.properties.AC_NO+" "+(d.properties.AC_NAME)+" "+curr;});
            		d3.select(this).transition().style("fill",function(d){return col[win[+(d.properties.AC_NO)][curr]];});
            		d3.select(this)
            			//.on("click", function(d){
            			//current_status=1;
               			//toolin(this);
               			////debugger;
               			//
            			//})
                		//.on("dblclick", function(d){
                		//toolout(this);
                		//current_status=0;
                		//})
                		.on("mouseover", function(d){
               			toolin(this,factor);
            			})
                		.on("mouseout", function(d){
                		toolout(this);
                	});
            	});
             
    }
}

	function toolin(path,factor){
		//debugger;
		var consti=d3.select(path).attr("class");
		var consti_number=consti.substr(0,consti.indexOf(" "));
		//debugger;
		d3.selectAll("."+consti_number).each(function(d){d3.select(this).style("stroke","orange").style("stroke-width","4")});
		//debugger;
		var mouse=d3.mouse(d3.select(path.parentNode).node());
		//debugger;
		d3.selectAll("."+consti_number).each(function(d){
			var year1=d3.select(this).attr("class");
			year1=year1.substr(year1.length-4);
			//debugger;
			var s=(this.parentNode).parentNode;
			var tool=d3.select(s).select(".toolt");
			if(factor!=1/0.8){
			if(year1!="2016"){

				//tool.attr("style","opacity:"+1);
					 tool.attr("style","opacity:"+1+";left:" + (mouse[0] +5+5*factor) +
					       'px; top:' + (mouse[1] - 40) + 'px');
				tool.append("span").style("font-size","18px").style("font-weight","bold").style("text-align","left").text(d.properties.AC_NAME+"\n");
				tool.append("span").style("font-size","16px").style("text-align","left").text(win[+(d.properties.AC_NO)][+year1])+"\n";
					                   
					                	}
				
			else{
				//debugger;
				//tool.attr("style","opacity:"+1);
					tool.attr("style","opacity:"+1+";left:" + (mouse[0] +5+5*factor) +
					       'px; top:' + (mouse[1] - 40) + 'px');
					tool.append("span").style("font-size","18px").style("font-weight","bold").style("text-align","left").text(d.properties.AC_NAME+"\n");
					tool.append("span").style("font-size","16px").style("text-align","left").text(win[+(d.properties.AC_NO)][+year1]+"\n");
					tool.append("span").style("font-size","14px").style("text-align","left").text("Margin: "+margin_data[+(d.properties.AC_NO)-1].Margin+"\n");
					                   
					                	}
			}
			else{
				if(year1!="2016"){

				//tool.attr("style","opacity:"+1);
					 tool.attr("style","opacity:"+1+";left:" + (mouse[0] + 330) +
					       'px; top:' + (mouse[1] - 80) + 'px');
				tool.append("span").style("font-size","18px").style("font-weight","bold").style("text-align","left").text(d.properties.AC_NAME+"\n");
				tool.append("span").style("font-size","16px").style("text-align","left").text(win[+(d.properties.AC_NO)][+year1])+"\n";
					                   
					                	}
				
			else{
				//debugger;
				//tool.attr("style","opacity:"+1);
					tool.attr("style","opacity:"+1+";left:" + (mouse[0] + 330) +
					       'px; top:' + (mouse[1] - 80) + 'px');
					tool.append("span").style("font-size","18px").style("font-weight","bold").style("text-align","left").text(d.properties.AC_NAME+"\n");
					tool.append("span").style("font-size","16px").style("text-align","left").text(win[+(d.properties.AC_NO)][+year1]+"\n");
					tool.append("span").style("font-size","14px").style("text-align","left").text("Margin: "+margin_data[+(d.properties.AC_NO)-1].Margin+"\n");
					                   
					                	}
				
			}
					                });
	//debugger;
				}
			
		


	

	function toolout(path){
		//this is to prevent text selection due to double click
		if(document.selection && document.selection.empty) {
        document.selection.empty();
    		}
    	 else if(window.getSelection) {
        var sel = window.getSelection();
        sel.removeAllRanges();
    	}
		var consti=d3.select(path).attr("class");
		//debugger;
		var consti_number=consti.substr(0,consti.indexOf(" "));
		//var consti_year=consti.substr(consti.length -4 );
		//debugger;
		d3.selectAll("."+consti_number).each(function(d){
				//debugger;
		//if(current_status!=1)
		//{
		//d3.select(this).style("fill",function(d){
								//debugger;
					//var consti_number2=consti_number.substr(1);
					//var consti_year=d3.select(this).attr("class");
					//consti_year=consti_year.substr(consti_year.length-4);
					//debugger;
					//return col[win[+(consti_number2)][+consti_year]];
				
				//})
			//}
		d3.select(this).style("stroke","black").style("stroke-width","1");
		});
		d3.selectAll(".toolt").each(function(d){
			//debugger;
			d3.select(this).attr("style","opacity:"+0);
			d3.select(this).selectAll("*").remove();
			//debugger;
			
			
	});
	}


