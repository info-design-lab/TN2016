 var tooltip = d3.select('.tooltip');

        var width =500,
            height = 500;
        
        var bell=[87,91,99,160]

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
                  //debugger;

                  svg.selectAll("path")
                           .data(topology.features)
                           .enter()
                           .append("path")
                           .attr("d", path)
                           //debugger;
        
                           .style("fill", function(d){
                            if (bell.indexOf(+(d.properties.AC_NO))!=-1)
                            {
                              return "red";
                            }
                            else 
                              return "none";
                          })

                           .style("stroke",function(d){
                            if (bell.indexOf(+(d.properties.AC_NO))!=-1)
                            {
                              return "black";
                            }
                            else 
                              return "orange";
                          })
                           .on("mouseover",function(d){
                           
                           if (bell.indexOf(+(d.properties.AC_NO))!=-1){
                            d3.select(this).style("fill","orange");
                           tooltip.classed('hidden', false)
                                .attr('style', 'left:' + (d3.event.pageX + 15) +
                                        'px; top:' + (d3.event.pageY - 60) + 'px')

                                .html(d.properties.AC_NAME+"\nMargin: "+margin_data[+(d.properties.AC_NO)-1].Margin+"\nWinner: "+win[+(d.properties.AC_NO)][2016]);
                              }
                           })
                           .on("mouseout", function(d) {
                            
                            if (bell.indexOf(+(d.properties.AC_NO))!=-1){
                              tooltip.classed('hidden', true);
                            d3.select(this).style("fill", "red")
                                            .style("stroke","black");
                                          }
                            });

                           
                          // .attr("transform", "translate(-400,200)");
            });
          
          });