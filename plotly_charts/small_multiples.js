data = [
    {
      "mode": "lines",
      "type": "scatter"
    }
  ]


  layout = {
    "font": {
      "color": "darkgrey"
    },
    "paper_bgcolor": "rgba(0,0,0,0)",
    "plot_bgcolor": "rgba(0,0,0,0)",
    "margin": {
      "t": 10,
      "b": 40,
      "l": 10,
      "r": 10
    },
    "xaxis": {
      "type": "date"
    },
    "showlegend": false
  }


  config = {
    "displayModeBar": false
  }

  // script 

  console.log(data);
console.log(variables);
var numfields = data.series[0].fields.length;

var xaxis_defaults = {
  type: "date",
  tickvals: []
};
var yaxis_defaults = {
  type: "linear",
  tickvals: []
};

var layout1 = {};
layout1['xaxis'] = xaxis_defaults;
layout1['yaxis'] = yaxis_defaults;

var annotations1 = [];

var trace_defaults = {
      color: "dodgerblue",
      width: 1.5};

var traces = []
for (s=1; s<numfields; s++){
  var trace_time = {
    x: data.series[0].fields[0].values.buffer,
    y: data.series[0].fields[s].values.buffer, 
    name: data.series[0].fields[s].labels.name,
    xaxis: 'x'+s.toString(),
    yaxis: 'y'+s.toString(), 
    line: trace_defaults, 
    text: variables
  };
  traces.push(trace_time);
  layout1['xaxis'+s.toString()] = xaxis_defaults;
  layout1['yaxis'+s.toString()] = yaxis_defaults;
  //console.log(Math.max(...trace_time['y']));
  var anno1 = {xref: "x"+s.toString(), yref: "y"+s.toString(), 
  x: trace_time['x'][0], y: Math.max(...trace_time['y']), 
  xanchor: "left", yanchor: "bottom",
  showarrow: false, 
  font: {size: 8, color: "darkgray"},
  text: data.series[0].fields[s].labels.name};

  annotations1.push(anno1);
};
layout1['annotations'] = annotations1;

const numcols = 8;
//console.log(Math.ceil(numfields/numcols));
layout1['grid'] = {
    "columns": numcols,
    "pattern": "independent",
    "rows": Math.ceil(numfields/numcols)
  }; 

return {data:traces,layout:layout1};