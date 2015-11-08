var mydiv = document.getElementById("chart");
var width = mydiv.offsetWidth,
    height = mydiv.offsetHeight,
    radius = Math.min(width, height) / 2;

var x = d3.scale.linear()
    .range([0, 2 * Math.PI]);

var y = d3.scale.linear()
    .range([0, radius]);

var color = d3.scale.category20();

var svg = d3.select("#chart").append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", "translate(" + width / 2 + "," + (height / 2 /*+ 10*/) + ")");

var partition = d3.layout.partition()
    .value(function(d) { return d.size; });

var arc = d3.svg.arc()
    .startAngle(function(d) { return Math.max(0, Math.min(2 * Math.PI, x(d.x))); })
    .endAngle(function(d) { return Math.max(0, Math.min(2 * Math.PI, x(d.x + d.dx))); })
    .innerRadius(function(d) { return Math.max(0, y(d.y)); })
    .outerRadius(function(d) { return Math.max(0, y(d.y + d.dy)); });

d3.json("json/visualslideshow.json", function(error, root) {
  console.log("Root: " + root);
  var g = svg.selectAll("g").data(partition.nodes(root)).enter().append("g");

  var path = g.append("path").attr("d", arc).style("fill", function(d) { return color((d.children ? d : d.parent).name); })
    .on("click", click)
    .on("mouseover", function (d) {
        d3.select(this.parentNode).select("path")
          .style("fill", "blue");
      })
    .on("mouseout", function (d) {
        d3.select(this.parentNode).select("path")
          .style("fill", function(d) { return color((d.children ? d : d.parent).name); })
          ;})

  var text = g.append("text")
    .attr("transform", function(d) { return "rotate(" + computeTextRotation(d) + ")"; })
    .attr("x", function(d) { return y(d.y); })
    .attr("dx", "6") // margin
    .attr("dy", ".35em") // vertical-align
    .text(function(d) { return d.name;});

  description(root);

  function click(d) {
    description(d);
    console.log("Children:" + d.children);
    // fade out all text elements
    text.transition().attr("opacity", 0);

    path.transition()
      .duration(500)
      .attrTween("d", arcTween(d))
      .each("end", function(e, i) {
          // check if the animated element's data e lies within the visible angle span given in d
          if (e.x >= d.x && e.x < (d.x + d.dx)) {
            // get a selection of the associated text element
            var arcText = d3.select(this.parentNode).select("text");
            // fade in the text element and recalculate positions
            arcText.transition().duration(500)
              .attr("opacity", 1)
              .attr("transform", function() { return "rotate(" + computeTextRotation(e) + ")" })
              .attr("x", function(d) { return y(d.y); });
          }
      });
      console.log("D.radius: " + d.innerRadius);
  }
});

d3.select(self.frameElement).style("height", height + "px");

// Interpolate the scales!
function arcTween(d) {
  var xd = d3.interpolate(x.domain(), [d.x, d.x + d.dx]),
      yd = d3.interpolate(y.domain(), [d.y, 1]),
      yr = d3.interpolate(y.range(), [d.y ? 20 : 0, radius]);
  return function(d, i) {
    return i
        ? function(t) { return arc(d); }
        : function(t) { x.domain(xd(t)); y.domain(yd(t)).range(yr(t)); return arc(d); };
  };
}

function computeTextRotation(d) {
  var rotation = (x(d.x + d.dx / 2) - Math.PI / 2) / Math.PI * 180;
  console.log("Name: " + d.name + " Rotation: " + rotation);
  console.log("y(d.y): " + y(d.y));
  return rotation;
}

function description(d){
  document.getElementById("contentdisplay").innerHTML="";
	 if(!d.hasOwnProperty("description")){
		    console.log("No description");
		    return;
		  }
	  console.log(d.description);
	  var title = document.createElement('h1');
	  var t = document.createTextNode(d.name);
	  title.appendChild(t);
	  var list = document.createElement('ul');

	  for(var i = 0; i < d.description.length; i++) {
	      var item = document.createElement('li');
	      item.appendChild(document.createTextNode(d.description[i]));
	      list.appendChild(item);
	  }
	  console.log(list);
	  document.getElementById("contentdisplay").appendChild(title);
	  document.getElementById("contentdisplay").appendChild(list);
}
