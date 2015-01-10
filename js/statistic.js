// <script type="text/javascript">
  var vote = Parse.Object.extend("vote");
	var voteNum = new vote();
  var query = new Parse.Query(vote);
  var array = [];
  query.equalTo("Ojipockle","oji1");
  query.count( {
    success: function(count1) {
      //alert("Ojipockle1 gets " + count1 + " votes.");
      array.push(count1);
      query.equalTo("Ojipockle","oji2");
      query.count({
        success: function(count2){
          //alert("Ojipockle2 gets " + count2 + " votes.");
          array.push(count2);
          query.equalTo("Ojipockle","oji3");
          query.count({
            success: function(count3){
              //alert("Ojipockle3 gets " + count3 + " votes.");
              array.push(count3);
              query.equalTo("Ojipockle","oji4");
              query.count({
                success: function(count4){
                  //alert("Ojipockle4 gets " + count4 + " votes.");
                  array.push(count4);
                  query.equalTo("Ojipockle","oji4");
                  query.count({
                    success: function(count5){
                      //alert("Ojipockle5 gets "+ count5 + " votes.");
                      array.push(count5);
                      query.equalTo("Ojipockle","oji6");
                      query.count({
                        success: function(count6){
                          //alert("Ojipockle6 gets " + count6 + " votes.");
                          array.push(count6);
                          query.equalTo("Ojipockle","oji7");
                          query.count({
                            success: function(count7){
                              //alert("Ojipockle7 gets " + count7 + " votes.");
                              array.push(count7);
                              query.equalTo("Ojipockle","oji8");
                              query.count({
                                success: function(count8){
                                  //alert("Ojipockle8 gets " + count8 + " votes.");
                                  array.push(count8);
                                  //alert(array);
                                  //alert(array2);
                                  //draw picture
                                  var data=array;
                                  var x = d3.scale.linear()
                                  .domain([0, d3.max(data)])
                                  .range([0, 810]);

                                  d3.select(".chart")
                                    .selectAll("div")
                                    .data(data)
                                    .enter().append("div")
                                    .style("width", function(d) { return x(d) + "px"; })
                                    .text(function(d) { return d; });
                                }
                              });
                            }
                          });
                        }
                      });
                    }
                  });
                }
              });
            }
          });
        }
      });
    }
  });
  // </script>