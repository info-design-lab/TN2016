
function loadall(){
        var tooltip = d3.select('.toolt1');

        var width =500,
            height = 550;
        

        var win;
        var cberror;
        d3.tsv("csv/finalwinners.tsv",function(error,data){
            cberror=error;
            win=data;
        });



        var svg = d3.select(".map").append("svg")
            .attr("width", width)
            .attr("height", height)
            .attr("class", "map");
        
        var scale2=d3.scale.linear()
                    .domain([0,69000])
                    .range(["#c3a7c7","#a57aaa","#874e8e"]);

        var scale3=d3.scale.linear()
                    .domain([0,69000])
                    .range([2,1]);
        //debugger;
        var margin_data;
        var cberror;
        d3.tsv("csv/margin2016.tsv",function(error,data){
                          cberror=error;
                          margin_data=data;
        //debugger;

        d3.json("csv/tngeo2.json", function(error,topology) {
        
                  var data=topology;
                  //debugger;
                  var center=d3.geo.centroid(topology)
                  var offset = [250,230];
                  var projection = d3.geo.mercator()
                            .center(center)
                            .scale(5000).translate(offset);    
                  var path = d3.geo.path()
                            .projection(projection);
                 // debugger;
                  svg.selectAll("path")
                           .data(topology.features)
                           .enter()
                           .append("path")
                           .attr("d", path)
                           //debugger;
        
                           .style("fill", function(d){return scale2((margin_data[+(d.properties.AC_NO)-1]).Margin);})
                           .style("opacity",function(d){ 
                            if(+margin_data[+(d.properties.AC_NO)-1].Margin<500)
                            {
                              return 1/scale3(+margin_data[+(d.properties.AC_NO)-1].Margin);
                            }
                            else
                              return 0.01;
                         })
                           .style("stroke","grey")
                           .on("mouseover",function(d){
                            //var op=this.style("opacity")
                           d3.select(this).style("stroke","orange");
                           //debugger;
						   var mouse=d3.mouse(d3.select(this).node());
                           tooltip.classed('hidden', false)
                                .attr('style', 'left:' + (mouse[0] + 150) +
                                        'px; top:' + (mouse[1] +40) + 'px')

                                .html("<b>"+d.properties.AC_NAME+"</b>"+"\nMargin: "+margin_data[+(d.properties.AC_NO)-1].Margin+"\nWinner: "+win[+(d.properties.AC_NO)][2016]);
                           })
                           .on("mouseout", function(d) {

                            tooltip.classed('hidden', true);
                            d3.select(this).style("fill", function(d){return scale2(margin_data[+(d.properties.AC_NO)-1].Margin);})
                            .style("stroke","grey");
                            });
                          // .attr("transform", "translate(-400,200)");
            });
          
          });
      d3.json("csv/TNS2.json",function(error,topo){
          
                  //debugger;
                  var center=d3.geo.centroid(topo)
                  var offset = [250,230];
                  var projection = d3.geo.mercator()
                            .center(center)
                            .scale(5000).translate(offset);    
                  var path = d3.geo.path()
                            .projection(projection);
                  //debugger;
                  

                  svg.data(topo.features)
                                            
                                            .append("path")
                                            .attr("d",path)
                                            .style("stroke","black")
                                            .style("fill","none");
        });


      //debugger;
    
        //orientation:'horizontal',
         
     
      //debugger;
      



function opaque(){
            //debugger;

            paths=d3.select(".map").selectAll("path");
            
            var vals=this.get();

           
            paths.each(function(d,i){
             
              d3.select(this).style("opacity",function(d,i){
              //debugger;

              var index=d.properties.AC_NO
              // debugger;               
              //console.log(i);               
                if(margin_data[index-1].Margin<=+vals)
                  return 1/scale3(+margin_data[+(d.properties.AC_NO)-1].Margin);
                else
                  return 0.01;
                    });
          });
}

      var snapSlider = document.getElementById('range');

      noUiSlider.create(snapSlider, {
        start: [ 500],
        range: {
          'min': [  0 ],
          'max': [ 69000 ],

        },
		/*format:wNumb({'<span class="noUi-tooltip__label">'+'Victory Margins :'+'</span>'}),*/
		 tooltips:wNumb({decimals:0,
		 	prefix:'Margin:',
		 	
		 }),
		 
        //direction:'rtl',
        step:500,
        pips:{
          mode:"range",
          density:3,
		},

        
        });
        //debugger;
        var range = document.getElementById('range');
          //debugger;
        range.noUiSlider.on('slide',opaque);
        var rangeSliderValueElement = document.getElementById('value');

        snapSlider.noUiSlider.on('update', function( values, handle ) {
       // rangeSliderValueElement.innerHTML = "Victory Margin: "+Math.ceil(values[handle]);
		});   
        

}
